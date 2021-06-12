import React,{useState,useContext,useEffect,useRef} from 'react'

import { firebaseContext } from '../Firebase'
import Arrow from './arrow1.jpg'
import trahi from './trahi.mp3'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import AudioPlayer from 'react-h5-audio-player';
import Mandalorian from './TheMandalorian.mp4'
import MandalorianJpg from './TheMandalorian.jpg'
import 'react-h5-audio-player/lib/styles.css';
import ModalMusic from '../ModalMusic'



function Profil(props) {
     //Connexion a firebas
     const firebase = useContext(firebaseContext)

     //Gestion de la Session
     const [userSession, setuserSession] = useState(null)
     const [userData, setuserData] = useState({})
     const [btnModifierPseudodisabled, setbtnPseudodisabled] = useState(true)
     const [btnModifierEmaildisabled, setbtnModifierEmaildisabled] = useState(true)
     const {email,pseudo,photoprofil}=userData///Destructuration de la variable userData
     const [pseudot, setpseudo] = useState('')
     const [emailt, setemail] = useState('')
     const [audiolist, setaudiolist] = useState(null)
     const [openmodal, setopenmodal] = useState(false)
    const test=useRef(null)
    const audioList1 = [
        {
          name: 'Trahi cette Ville',
          singer: 'Oliver Queen',
          cover:Arrow,
          musicSrc:trahi,
        },
        {
          name: 'The Mandalorian OST - Main Theme',
          singer: 'The Mandalarian',
          cover:MandalorianJpg,
          musicSrc:Mandalorian
            
        },
      ]
 
    useEffect(() => {
       let listener= firebase.auth().onAuthStateChanged(user=>{
            user?(setuserSession(user)):(props.history.push('/'))
        })//methode qui gère l'authentification de l'utiisateur
        if(userSession!==null){
         firebase.user(userSession.uid)
         .get()
         .then((doc)=>{
  if(doc && doc.exists)//Verifie si le document existe
  {
      const donnes=doc.data()
      setuserData(donnes)
  }
         })
         .catch((error)=>{
  console.log(error)
         })
        }
        setpseudo(pseudo) //on insere le pseudo dans la variable pseudo
        setemail(email)//on insere l'email dans la variable email
        setaudiolist(audioList1);

        if(audiolist!==audioList1)
        {
            setaudiolist(audioList1)
        }
           
    
        return () => {

            listener()//pour arreter la methode
        }
    }, [userSession,pseudo,email])


const handleSubmit=(e)=>
{
    e.preventDefault()
   //Pas fini
     if(pseudo!==pseudot)
    {
        return firebase.db().collection("users").doc(userSession.uid).update({
            pseudo:pseudot
        })
        .then(function(){
            console.log('Pseudo Mis à jour')
        })
        .catch(function(error){
            console.log(error)
        })
    }
    else if(email!==emailt)
    {
        return firebase.db().collection("users").doc(userSession.uid).update({
            email:pseudot
        })
        .then(function(){
            console.log('Email Mis à jour')
        })
        .catch(function(error){
            console.log(error)
        })
    }

}
const hideModal=()=>
{
    setopenmodal(false)
}
const showModal=(e)=>
{
    e.preventDefault()
    setopenmodal(true)
}



 ///Pour Mettre dans la liste audio


     
 
    return (
      <div className='container'>
       
        
    
{
    audioList1.push({
        name:'Flash',
        singer:'Flash',
        cover:'',
        musicSrc:'Mandalorian'
    })
}
          <h1>Mon Profil</h1>
          <hr></hr>
          <form>
          <div className='row'>
              <div className='col-6'>
         <img className='rounded'src={Arrow}style={{width:'50%'}}></img>
         </div>
         <div className='col-6'>
         <div>
         <label for='pseudo'>Pseudo :</label>
             <input type='text' className='form-control marge'value={pseudot} name='pseudo'onChange={(e)=>setpseudo(e.target.value)} disabled={btnModifierPseudodisabled} ></input>
             
         </div>

         <button type='button' className='btn btn-warning marge'onClick={()=>setbtnPseudodisabled(false)}>Modifier</button>
         <br></br>
         <div>
             <label for='email'>Email : </label>
             <input type='text'className='form-control marge' value={emailt}name='email' onChange={(e)=>setemail(e.target.value)} disabled={btnModifierEmaildisabled}></input>
             
             </div>
             <button type='button' className='btn btn-warning' onClick={()=>setbtnModifierEmaildisabled(false)}>Modifier</button>
             <div>
                 <br></br>
             <label for='music'>Ajouter Musique dans PlayList</label>
             <button className='btn btn-success form-control marge'name='music' onClick={showModal}>Ajouter</button>
         </div>
        
         </div>
        <ModalMusic showModal={openmodal} hideModal={hideModal} audioList={audioList1}setaudiolist={setaudiolist}></ModalMusic>
          </div>
          <button type='submit' className='btn btn-danger'onClick={(e)=>handleSubmit(e)}>Valider</button>
          </form>
          <br></br>
        {audiolist!==null&&<ReactJkMusicPlayer audioLists={audiolist}></ReactJkMusicPlayer>} 
     {console.log(firebase.db().collection("users").get().query)}
       

          
      

    
          </div>
       
          
   
     
  


        
        
       
 
    

    )
}

export default Profil
