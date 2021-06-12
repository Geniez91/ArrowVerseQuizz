import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

 // Your web app's Firebase configuration
 const Config = {
    apiKey: "AIzaSyCssuJjdI39TWSp93bAEMnPfs2JCNSNiM8",
    authDomain: "arrowversequizz.firebaseapp.com",
    databaseURL: "https://arrowversequizz.firebaseio.com",
    projectId: "arrowversequizz",
    storageBucket: "arrowversequizz.appspot.com",
    messagingSenderId: "374797506397",
    appId: "1:374797506397:web:51415bbbb968256ff37ab4"
  };

class Firebase{
    constructor()
    {
        app.initializeApp(Config)
        this.auth=app.auth
        this.db=app.firestore
    }
    //inscription

    signupuser=(email,mdp)=>
      this.auth().createUserWithEmailAndPassword(email, mdp)
    
    //connexion
    loginuser=(email,mdp)=>
    
      this.auth().signInWithEmailAndPassword(email, mdp)
    
    //Deconnexion
    Deconnexion=()=>
   
      this.auth().signOut()

    //Récupere Mot de Passe
    RecuperMotPasse=(email)=>
    this.auth().sendPasswordResetEmail(email)
    
  user=(iduser)=>
    this.db().doc(`users/${iduser}`)

    
    
     
    
}
export default Firebase