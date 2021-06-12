import React,{useState,useContext,useEffect} from 'react'
import arrow from './icone.jpg'
import { firebaseContext } from '../Firebase'



const Header = () => {
  const firebase = useContext(firebaseContext)
  const [userSession, setuserSession] = useState(null)
  const [userData, setuserData] = useState({})

useEffect(() => {
  let listener=firebase.auth().onAuthStateChanged(user=>{
    user?(setuserSession(user)):(setuserSession(null))
  })
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
            return () => {
              listener()//pour arreter la methode
          }
      }, [userSession])
  console.log(userSession)
   return  userSession===null?( <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<a className="navbar-brand" href="/"><img src={arrow}style={{width:'50px'}}></img>ArrowVerseQuizz</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse d-flex justify-content-start" id="navbarNav">
<ul className="navbar-nav">
<li className="nav-item active">
    <a className="nav-link" href="/">Accueil </a>
  </li>
  </ul>
</div>
<div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
<ul className="navbar-nav">
  <li className="nav-item active">
    <a className="nav-link" href="/Login">Connexion</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/Inscription">S'inscrire</a>
  </li>
 

</ul>

</div>

</nav>
    </div>):( <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/"><img src={arrow}style={{width:'50px'}}></img>ArrowVerseQuizz</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse d-flex justify-content-start" id="navbarNav">
  <ul className="navbar-nav">
  <li className="nav-item active">
        <a className="nav-link" href="/">Accueil </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Bienvenue">Quizz</a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href="/Profil">Profil</a>
      </li>
      </ul>
    </div>
  <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
    <ul className="navbar-nav">
    <li className='nav-item'>
      <a className='nav-link active'>{userData.pseudo}</a>
      </li>
     
    
    </ul>
    
  </div>
 
</nav>
        </div>)
   
}

export default Header
