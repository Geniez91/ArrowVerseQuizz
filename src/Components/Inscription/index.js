import React,{useState,useContext} from 'react'
import Flash from './inscriptionflash.png'
import {firebaseContext} from '../Firebase'
import { Link } from 'react-router-dom'
import Profil from '../Profil'

function Inscription(props) {

  const firebase = useContext(firebaseContext)
  

  
//Création d'un objet pour stocker nos données transmis par l'utilisateur
    const data={
        pseudo:'',
        email:'',
        mdp:'',
        confirmdp:'',
        photoprofil:''
    }
    
    const [loginData, setloginData] = useState(data)
    const [MotInput, setMotInput] = useState('Choisir un Fichier')
    const [error, seterror] = useState('')
   const handleChange=(e)=>
   {
    setloginData({...loginData,[e.target.id]:e.target.value})
   
   }

   const handleSubmit=(e)=>
   {
    e.preventDefault()
    console.log(e)
    const {email,mdp,pseudo,photoprofil}=loginData
    firebase.signupuser(email,mdp)
    .then((authUser)=>{
        //fonction qui permet de retourner l'utilisateur avec son identifiant dans la bdd
return firebase.user(authUser.user.uid).set({//remplit les différents champs de la bdd
    pseudo:pseudo,
    email:email,
    photoprofil:photoprofil
    })
})
.then(user=>{
setloginData({...data})//pour remettre à zero la variable data
props.history.push('/Bienvenue')//Redirection vers la page welcome
    })
    .catch(error=>
        {
            seterror(error)
            setloginData({...data})
        })
   }
  const handletest=(e)=>
   {
    console.log(e.target)
   }

 

   //Destruturing des données transmis
   const {pseudo,email,mdp,confirmdp,photoprofil}=loginData

   const btn=pseudo===''||email===''||mdp===''||mdp!==confirmdp||photoprofil==='' ? <button disabled className='btn btn-danger'>Inscription</button>: <button className='btn btn-danger'>Inscription</button>
console.log()
///gestion erreur
const errormsg=error!==''&& <div className="alert alert-danger" role="alert">
{error.message}
</div>
    return (
        <div className='container'>
            <div className='d-flex'>
                <div className="p-2 flex-fill"><img src={Flash} className='img-fluid' style={{width:'500px'}}></img>
                </div>

                 <div className="p-2 flex-fill">
                    <div className='form-content'>
                        <form onSubmit={handleSubmit}>
                            {errormsg}
                            <h2>Inscription</h2>
                            <hr></hr>
                            <div className='form-group'>
                                 <label htmlFor='pseudo'>Pseudo</label>
                                 <input type='text' id='pseudo'className='form-control' value={pseudo}onChange={handleChange} required placeholder='Entrez votre pseudo' autoComplete='off'></input>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='email'>Email</label>
                                 <input type='email' className='form-control' value={email} id='email' required placeholder='Entrez votre email' onChange={handleChange}></input>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='mdp'>Mot de Passe</label>
                                 <input type='password'className='form-control' id='mdp'value={mdp} required placeholder='Entrez votre mot de passe' onChange={handleChange}></input>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='confirmdp'>Confirmer mot de passe</label>
                                 <input type='password'className='form-control' id='confirmdp' value={confirmdp}required placeholder='Entrez votre mot de passe' onChange={handleChange}></input>
                            </div>
                            <div className='form-group'>
                               <div className='marge'>Votre Photo de Profil</div>
                                <div className='custom-file'>

                                <input type='file'className='custom-file-input'id='photoprofil'onChange={handleChange} onClick={handletest} required />
    <label htmlFor='photoprofil'className='custom-file-label'onClick={(e)=>setMotInput(e.target.value)}>{MotInput}</label>
                                <div class="invalid-feedback">Example invalid custom file feedback</div>
                                </div>
                            </div>
                            {btn}
                        </form>
                        <hr></hr>
                        <div>
                            <Link to="/Login">Deja Inscrit? Connectez-vous</Link>
                        </div>
                   </div>
                 </div>

            </div>
          

        </div>
            
           
           
            
      
    )
}

export default Inscription
