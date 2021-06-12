import { FaChevronRight } from 'react-icons/fa';
import Niveaux from '../Niveaux'
import ProgressBar from '../ProgressBar'
import {QuizzArrowVerse} from '../QuizzArrowVerse'
import QuizzOver from '../QuizzOver';
import React,{Component,createRef,useRef} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import {toast}from 'react-toastify'
import ReactAudioPlayer from 'react-audio-player';


toast.configure();//pour configurer le toast
const initialstate={
  quizzLevel:0,
  maxQuestion:10,
  QuestionEnregistree:[],//pour stocker toutes les question
  question:null,
  options:[],
  idQuestion:0,
  btndisabled:true,
  Reponseutilisateur:null,
  score:0,
  showMessageBienvenue:false,
  quizzEnd:false,
  percent:null
      }
      const levelsName=["Debutant","Intermediaire","Expert"]
class  Quizz extends Component  {

 constructor(props) {
   super(props)
   this.DonnesStockees= React.createRef()

   this.state = initialstate
      
   
 }
 
      

      

loadlevelquestion=(param)=>
{
this.setState({...this.initialstate,quizzLevel:param})//on recupure le state le state initial
this.ChargerQuestion(levelsName[param])//on charge les question dont le niveau du quizz a changé
}


    ChargerQuestion=(level)=>
    {
      const fetchedArray=  QuizzArrowVerse[0].quizz[level]
      if(fetchedArray.length>=this.state.maxQuestion)//Verifie s'il ya assez de question pour le quizz
      {
          this.DonnesStockees.current=fetchedArray//stockage de toute les donnees(question,reponse)
          
       const newArray= fetchedArray.map(({reponse,...keeprest})=>keeprest )///...permette d'enlever la réponse
       
       this.setState({QuestionEnregistree:newArray})
       
      }
     
    }
  componentDidMount() {
    this.ChargerQuestion(levelsName[this.state.quizzLevel])
  }
  componentDidUpdate(prevProps, prevState) {
    const{
      maxQuestion,
      QuestionEnregistree,//pour stocker toutes les question
      idQuestion,
      score,
      quizzEnd,
    }=this.state

      if((QuestionEnregistree!==prevState.QuestionEnregistree)&&QuestionEnregistree.length){
         this.setState({
             question:QuestionEnregistree[idQuestion].question,//met à jour la question
             options:QuestionEnregistree[idQuestion].options //met à jour les reponse possibles
         })
      }
      if((idQuestion!==prevState.idQuestion)&&QuestionEnregistree.length)
      {
          this.setState(prevState=>({
            question:prevState.QuestionEnregistree[idQuestion].question,
            options:QuestionEnregistree[idQuestion].options,
            Reponseutilisateur:null,
            btndisabled:true

          }))
      }
      if(this.props.userData.pseudo!==prevProps.userData.pseudo)///Verifie si l'utilisateur n'est pas deja connecté sinon affiche message bienvenue
      {
          this.MessageBienvenue(this.props.userData.pseudo)
      }
      if(quizzEnd!==prevState.quizzEnd)
      {
        const pourcent= this.Pourcentage(score,maxQuestion)//calcul du pourcentage de reussite
        this.gameOver(pourcent)
      }
  }
  MessageBienvenue=(pseudo)=>
  {
      if(this.state.showMessageBienvenue===false)//si le message est en false alors il s'affiche sinon il ne s'affiche pas
      {
          this.setState({showMessageBienvenue:true})

        toast.info(`Bienvenue ${pseudo}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      }
   
  }
  ValiderReponse(optionselect){
      this.setState({
        Reponseutilisateur:optionselect,
        btndisabled:false
      })
  }
  PasserQuestionSuivante=()=>
  {
      if(this.state.idQuestion===this.state.maxQuestion-1)//si le nombre question inférieur a celle ou on est
      {
        this.setState({quizzEnd:true})
      }
      else
      {
          this.setState(prevState=>({idQuestion:prevState.idQuestion+1}))

      }
          const bonnereponse=this.DonnesStockees.current[this.state.idQuestion].reponse
          if(bonnereponse===this.state.Reponseutilisateur)
          {
            
              this.setState(prevState=>({score:prevState.score+1}))
              toast.success('Bravo +1', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
          }
          else
          {
            toast.error('Raté', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
          }
        
      }
  
      gameOver=(pourcent)=>
      {
       
       if(pourcent>50)//si j'ai la moyenne
       {
        this.setState({
          quizzLevel:this.state.quizzLevel+1,
          percent:pourcent

        })
      }
      else
      {
        this.setState({
          percent:pourcent,
        })
      }
    }
    Pourcentage(score,maxquestion)
    {
     return score/maxquestion*100
    }
     
    
  
    render()
    {
      const{
  quizzLevel,
  maxQuestion,
  //pour stocker toutes les question
  question,
  options,
  idQuestion,
  btndisabled,
  Reponseutilisateur,
  score,
  quizzEnd,
  percent}=this.state
        const AfficherReponse=options.map((options,index)=>{
        return (<p key={index}
        className={`options ${Reponseutilisateur===options?"selected":null}`}
        onClick={()=>this.ValiderReponse(options)} >
          <FaChevronRight/>
            {options}</p>)
        })
       
        const {pseudo}=this.props.userData
        
        return quizzEnd?(
        <QuizzOver
         ref={this.DonnesStockees}
         levelsName={levelsName}
         score={score}
         maxquestion={maxQuestion}
         quizzLevel={quizzLevel}
         percent={percent}
         loadlevelquestion={this.loadlevelquestion}
         ></QuizzOver>):(   <div className='col-7 text-center' style={{marginLeft:'300px'}}>
        <div className='card'>
         <Niveaux quizzLevel={quizzLevel} levelsName={levelsName}></Niveaux>
         <br></br>
         <ProgressBar idQuestion={idQuestion}maxQuestion={maxQuestion}></ProgressBar>
         <br></br>
         <br></br>
         <h2 className='card-header'>{question}</h2>
         <br></br>
            {AfficherReponse}
         <button 
         disabled={btndisabled} 
         className='btn btn-success'
         onClick={this.PasserQuestionSuivante}
         >{idQuestion<maxQuestion-1?("Suivant"):("Terminer")}</button>
         
         </div>
     </div>)
     
    }
  
}
    


export default Quizz
