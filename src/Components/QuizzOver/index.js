import React, { Fragment,useEffect,useState} from 'react'
import {GiTrophyCup} from 'react-icons/gi'
import Loader from '../Loader'
import Modal1 from '../Modal'
import Axios from 'axios'

const QuizzOver=React.forwardRef(({levelsName,score,maxquestion,quizzLevel,percent,loadlevelquestion},ref)=> {
    const [QuestionPose, setQuestionPose] = useState([])
    const [openmodal, setopenmodal] = useState(false)
    const [characterinfo, setcharacterinfo] = useState([])

  //API MARVEL
    //const apikey='bd7ca77efd4c2effea4a7cb248a9c196'
   // const hach='6bcdae8a204ed031ff55f2a54cf85231'


   //Super Hero API
   ///const test='https:superheroapi.com/api/3399762476804409/69'
   //console.log(test)

 
    useEffect(() => {
        setQuestionPose(ref.current)
        if(localStorage.getItem('arrowverse date'))//verification de la date stocké dans localstorage
        {
            const date=localStorage.getItem('arrowverse date')
            checkedateAge(date)
        }
       
    }, [ref])
    const moyenne=maxquestion/2

    const checkedateAge=(date)=>
    {
const today=Date.now()
const timediference=today-date
const daydifference=timediference/(1000*3600*24)//calcul du nombre de jour dedifférence entre les deux
if(daydifference>15){
    localStorage.clear()
    const date=localStorage.getItem('arrowverse date')
}
    }

    const showModal=(idhero)=>
    {
setopenmodal(true)
if(localStorage.getItem(idhero))
{
    setcharacterinfo(JSON.parse(localStorage.getItem(idhero)))//convertit les donnes json en string + mise ajour du state avec les données stockées dans le local storage
}
else
{
Axios
.get(`https://www.superheroapi.com/api.php/3399762476804409/${idhero}`)
.then(reponse=>{
    console.log(reponse)
    setcharacterinfo(reponse.data)//je recupere les données de l'api selon l'id du hros
    localStorage.setItem(idhero,JSON.stringify(reponse.data))//convertit les donnes json en string + ajout des donnes dans le localstorage
    if(!localStorage.getItem('arrowverse date'))
    {
        localStorage.setItem('arrowverse date',Date.now())
    }

    

})
.catch(error=>{
    console.log(error)
})
   }
}

    const closeModal=()=>
    {
        setopenmodal(false)
    }

    if(score<moyenne)
    {
        setTimeout(()=>{
        loadlevelquestion(0)
        },3000)
    }

const descision = score>=moyenne?(
<Fragment>
{quizzLevel< levelsName.length?
(
    <Fragment>
    <div className='row' style={{margin:'40px'}}>
    <div className='col'>
        <p className='success'>Passez au niveau suivant</p>
    </div>
    <div className='col'>
<button className='btn btn-success' onClick={()=>loadlevelquestion(quizzLevel)}>Niveau Suivant</button>
</div>
</div>

</Fragment>
)
:
(
    <Fragment>
    <div className='row' style={{margin:'40px'}}>
    <div className='col'>
        <p className='success'><GiTrophyCup size='50px'></GiTrophyCup> Bravo vous avez reussi tous les niveaux proposée sur ce site</p>
    </div>
    <div className='col'>
<button className='btn btn-success'onClick={()=>loadlevelquestion(0)}>Accueil</button>
</div>
</div>

</Fragment>
)}
<div className='row'>
   <div className='col'>Réussite {percent} %</div>
   <div className='col'>Note {`${score}/${maxquestion}`}</div>
</div>
</Fragment>
):(
<Fragment>
<div className='row' style={{margin:'40px'}}>
    <div className='col'>
        <p className='danger'>Raté vous avez échoué</p>
    </div>
</div>
<div className='row'>
   <div className='col'>Réussite {percent} %</div>
   <div className='col'>Note {`${score}/${maxquestion}`}</div>
</div>
</Fragment>)

///si le score >moyenne on affiche les reponses sinon on affiche pas les reponses
const tableau= score >=moyenne?(QuestionPose.map(question=>{

    return <tr key={question.id}>
        <td>{question.question}</td>
        <td>{question.reponse}</td>
        <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={()=>showModal(question.idhero)}>Infos</button></td>
    </tr>
   
   
}))
:(
   <Loader></Loader>
 
)
 
    return (
        
        <div className='container'>
           {descision}
           <hr></hr>
           <p>Les Reponses aux questions posées :</p>
           <div>
                <table className='table table-bordered table-hover table-responsive-lg'>
                    <thead className='thead-dark'>
                        <tr>
                            <th scope="col">Question</th>
                            <th scope="col">Reponse</th>
                            <th scope="col">Infos</th>
                        </tr>
                    </thead>
                    <tbody>
                       {tableau}
                    </tbody>
                </table>

           </div>
           <Modal1 showModal={openmodal} hideModal={closeModal} data={characterinfo}>
          

   
         
           
           </Modal1>


        </div>
       
    )
})


export default React.memo(QuizzOver)
