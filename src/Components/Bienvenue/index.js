import React, { useState,Fragment,useContext,useEffect } from 'react'
import Deconnexion from '../Deconnexion'
import { firebaseContext } from '../Firebase'
import Quizz from '../Quizz'

function Bienvenue(props) {

    //Connexion a firebas
    const firebase = useContext(firebaseContext)

    //Gestion de la Session
    const [userSession, setuserSession] = useState(null)
    const [userData, setuserData] = useState({})

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
   
       return () => {
           listener()//pour arreter la methode
       }
   }, [userSession])

  return  userSession===null?(
        <Fragment>
   <div className="spinner-border m-5" role="status" style={{color:'blue'}}>
  <span className="sr-only">Loading...</span>
</div>
        </Fragment>
    ):(
        <div className='container'>
            <div className='d-flex'>
            <Quizz userData={userData}></Quizz>
        <Deconnexion></Deconnexion>
        
        </div>
     </div>
    )
  
}

export default Bienvenue
