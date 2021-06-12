import React, { useState,useContext } from 'react'
import iconefirestorm from './iconefirestorm.png'
import {Link} from 'react-router-dom'
import {firebaseContext} from '../Firebase'

const MotPasseOublie = (props) => {

    const firebase = useContext(firebaseContext)
 
    const [email, setemail] = useState('')
    const [message, setmessage] = useState('')
    const [erreur, seterreur] = useState(null)

    const  disablemail=email ===''?(true):(false)//Verifie si le champ email est rempli pour activer le boutton

    const handlesubmit=(e)=>
    {
e.preventDefault()
firebase.RecuperMotPasse(email)
.then(()=>{
    seterreur(null)
setmessage('Un email de récuperation de mot de passe vient d etre envoyé')
setemail('')
setTimeout(()=>{
props.history.push('/Login')
},5000)
})
.catch((error)=>
{
seterreur(error)
setemail('')//pour reset le champ email
})
    }

    return (
       
             <div className='container'>
            <div className='row'>
                <div className='col-6'><img src={iconefirestorm}className='img-left img-fluid' style={{width:'500px'}}></img></div>
                <div className='col-6' style={{marginTop:'100px'}}>
                    <div className='form-content'>
                        <form onSubmit={handlesubmit}>
                          {message && <div class="alert alert-success" role="alert">
  {message}
                          
</div> }
{
    erreur && <div class="alert alert-danger" role="alert">
        {erreur}
    </div>
}
                            <h2>Mot de Passe Oublié ?</h2>
                            <hr></hr>
                            <div className='form-group'>
                                <label htmlFor='email'>Email</label>
                                 <input type='email' className='form-control' value={email} onChange={(e)=>setemail(e.target.value)} id='email' required placeholder='Entrez votre email'></input>
                            </div>
                            <button className='btn btn-danger'disabled={disablemail}>Récuperer </button>
                        </form>
                        <hr></hr>
                        <Link to='/Login'>Deja Inscrit? Connectez-vous</Link>
                      
                    </div>
                </div>

            </div>
        </div>
        
    )
}

export default MotPasseOublie
