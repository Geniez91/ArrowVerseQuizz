import React, { useContext } from 'react'
import supergirl from './supergirl.png'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import {firebaseContext} from '../Firebase'

function Login(props) {
    const firebase = useContext(firebaseContext)

    const [email, setemail] = useState('')
    const [mdp, setmdp] = useState('')
    const [btn, setbtn] = useState(false)
    const [error, seterror] = useState('')
    //useEffect = ComponentDidMount() donc au montage du site
 useEffect(()=>{
if(mdp.length>5 && email!=='')
{
    setbtn(true)
}else if(btn==true){
setbtn(false)
}
 },[mdp,email,btn])//la fonction s'enclenche une seule fois.Verifie à chauque fois que le mdp a changé

 const handleSubmit=(e)=>
 {
e.preventDefault()
firebase.loginuser(email, mdp)
.then(user=> {
    console.log(user)
    setemail('')
    setmdp('')
props.history.push('/Bienvenue')//Redirection vers la page d'accueil
})
.catch(error=>{
    seterror(error)
    setemail('')
    setmdp('')

})
 }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'><img src={supergirl}className='img-left img-fluid' style={{width:'500px'}}></img></div>
                <div className='col-6' style={{marginTop:'100px'}}>
                    <div className='form-content'>
                        <form onSubmit={handleSubmit}>
                            {
                                error!==('')&&(<div className="alert alert-danger" role="alert"> {error.message}
                                </div>)
                            }
                            <h2>Connexion</h2>
                            <hr></hr>
                            <div className='form-group'>
                                <label htmlFor='email'>Email</label>
                                 <input type='email' className='form-control' value={email} onChange={(e)=>setemail(e.target.value)} id='email' required placeholder='Entrez votre email'></input>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='mdp'>Mot de Passe</label>
                                 <input type='password'className='form-control' value={mdp}onChange={(e)=>setmdp(e.target.value)}id='mdp' required placeholder='Entrez votre mot de passe'></input>
                            </div>
                           
                           
                           {btn ?(<button className='btn btn-success'>Valider</button>):(<button disabled className='btn btn-success'>Valider</button>)}
                        </form>
                        <hr></hr>
                        <div>
                            <Link to="/Inscription">Pas encore Inscrit? Inscrivez-vous</Link>
                            <br></br>
                            <Link to='/MotPasseOublie'>Mot de Passe Oublié ? Rénitialisez le</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
