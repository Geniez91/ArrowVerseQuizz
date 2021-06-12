import React,{useRef} from 'react'
import { Link } from 'react-router-dom'
import cardflash from "./cardFlash.png"
import cardarrow from "./cardArrow.png"
import cardsupergirl from "./cardSupergirl.png"
import cardSara from "./cardSara.png"
import cardBlackL from "./cardBlackLightning.png"
import cardBatwoman from "./cardBatwoman.png"
import icone from "./icone.jpg"
import iconeflash from "./iconeflash.png"
import iconearrow from "./iconearrow.png"
import iconesupergirl from "./iconesupergirl.png"
import iconewhiteCanary from "./iconewhitecanary.png"
import iconeblackLightning from "./iconeblacklighning.png"
import iconeBatwoman from "./iconeBatwoman.png"
const Landing = () => {
  
    const btnco = useRef(null)
    const btninscri= useRef(null)
    const image = useRef(null)
    const legendeFlash=useRef(null)
    const legendeArrow=useRef(null)
    const legendeSupergirl=useRef(null)
    const legendeWhitecanary=useRef(null)
    const legendeBlacklightning=useRef(null)
    const legendeBatwoman=useRef(null)
    const divparent=useRef(null)
    const MettreEnRouge=()=>
    {
btnco.current.classList.remove('btn-dark')
btnco.current.classList.add('btn-success')
    }
    const MettreEnNoire=()=>
    {
        btnco.current.classList.remove('btn-success')
        btnco.current.classList.add('btn-dark')
    }
    const MettreEnRougeinscri=()=>
    {
        btninscri.current.classList.remove('btn-dark')
        btninscri.current.classList.add('btn-success')
    }
    const MettreEnNoireinscri=()=>
    {
        btninscri.current.classList.remove('btn-success')
        btninscri.current.classList.add('btn-dark')
    }

///Fonctions pour afficher texte héros
const AfficheTexteFlash=()=>
{
 legendeFlash.current.hidden=false
 divparent.current.classList.remove('bg-warning')
 divparent.current.classList.add('bg-danger')
}
const AfficheTexteArrow=()=>
{
 legendeArrow.current.hidden=false
 divparent.current.classList.remove('bg-warning')
 divparent.current.classList.add('bg-success')
}
const AfficherTexteSupergirl=()=>
{
    legendeSupergirl.current.hidden=false
    divparent.current.classList.remove('bg-warning')
    divparent.current.classList.add('bg-primary')
}
const AfficherTexteWhiteCanary=()=>
{
    legendeWhitecanary.current.hidden=false
    divparent.current.classList.remove('bg-warning')
    divparent.current.classList.add('bg-secondary')
}
const AfficherTexteBlackLightning=()=>
{
    legendeBlacklightning.current.hidden=false
}
const AfficherTexteBatwoman=()=>
{
    legendeBatwoman.current.hidden=false
    divparent.current.classList.remove('bg-warning')
    divparent.current.classList.add('bg-dark')
}

const SupprimerTexteFlash=()=>
{
    legendeFlash.current.hidden=true
    divparent.current.classList.add('bg-warning')
    divparent.current.classList.remove('bg-danger')
}
const SupprimerTextArrow=()=>
{
legendeArrow.current.hidden=true
divparent.current.classList.add('bg-warning')
divparent.current.classList.remove('bg-success')
}
const SupprimerTextSupergirl=()=>
{
    legendeSupergirl.current.hidden=true
    divparent.current.classList.add('bg-warning')
    divparent.current.classList.remove('bg-primary')
}
const SupprimerTextWhiteCanary=()=>
{
    legendeWhitecanary.current.hidden=true
    divparent.current.classList.add('bg-warning')
    divparent.current.classList.remove('bg-secondary')
}
const SupprimerTextBlackL=()=>
{
    legendeBlacklightning.current.hidden=true
}
const SupprimerTextBatWoman=()=>
{
    legendeBatwoman.current.hidden=true
    divparent.current.classList.add('bg-warning')
    divparent.current.classList.remove('bg-dark')
}








    return (
        
        <div  ref={divparent}className='container-fluid bg-warning'>
           
            <div className='text-center'>
                <h3>ArrowVerse Quizz</h3>   
            </div>
            <hr></hr>
            <div className="d-flex bd-highlight">
                <div className="p-2 flex-fill bd-highlight" onMouseOver={AfficheTexteFlash} onMouseOut={SupprimerTexteFlash}>
                    <img src={cardflash} className='superheros'></img> 
                 
                    <br></br>
                    <br></br>
                    <div className='card'hidden ref={legendeFlash} style={{width:'18rem',marginLeft:'200px'}}>
                        <div className='card-body'>
                            <h5 className='card-title'><img src={iconeflash}style={{width:'100px'}}></img>Flash</h5>
                            <h6 className="card-subtitle mb-2 text-muted">L'homme le plus rapide du monde</h6>
                            <p className="card-text">Mon Nom est Barry Allen et je suis l'homme le plus rapide du monde</p>
                        </div>
                        
                        </div>
                   
  
                     </div>
                     
  <div className="p-2 flex-fill bd-highlight"style={{margin:'30px'}}onMouseOver={AfficheTexteArrow}onMouseOut={SupprimerTextArrow}>
  <img src={cardarrow} className='superheros'style={{marginLeft:'50px'}}></img>
  <br></br>
   <br></br>
   <div className='card' hidden ref={legendeArrow} style={{width:'18rem',marginLeft:'200px'}}>
                        <div className='card-body'>
                            <h5 className='card-title'><img src={iconearrow} style={{width:'100px'}}></img>Green Arrow</h5>
                            <h6 className="card-subtitle mb-2 text-muted">L'archer</h6>
                            <p className="card-text">Je m'appelle Oliver Queen je suis restée 5 ans sur ile ou j'ai échoué avec un seul but survivre</p>
                        </div>
                        
                        </div>
  </div>
  <div className="p-2 flex-fill bd-highlight" onMouseOver={AfficherTexteSupergirl} onMouseOut={SupprimerTextSupergirl}>
      <img src={cardsupergirl}className='superheros' style={{margin:'50px'}}></img>
      <br></br>
      <br></br>
      <div className='card'hidden ref={legendeSupergirl} style={{width:'18rem',marginLeft:'200px'}}>
                        <div className='card-body'>
                            <h5 className='card-title'><img src={iconesupergirl} style={{width:'90px'}}></img>Supergirl</h5>
                            <h6 className="card-subtitle mb-2 text-muted">L'homme le plus rapide du monde</h6>
                            <p className="card-text">Mon Nom est Barry Allen et je suis l'homme le plus rapide du monde</p>
                        </div>
                        
                        </div>
  </div>
</div>
<div className="d-flex bd-highlight" >
  <div className="p-2 flex-fill bd-highlight"onMouseOver={AfficherTexteWhiteCanary} onMouseOut={SupprimerTextWhiteCanary}>
      <img src={cardSara} className='superheros'></img>
      <br></br>
      <br></br>
      <div className='card'hidden ref={legendeWhitecanary} style={{width:'18rem',marginLeft:'200px'}}>
                        <div className='card-body'>
                            <h5 className='card-title'><img src={iconewhiteCanary} style={{width:'100px'}}></img>White Canary</h5>
                            <h6 className="card-subtitle mb-2 text-muted">L'homme le plus rapide du monde</h6>
                            <p className="card-text">Mon Nom est Barry Allen et je suis l'homme le plus rapide du monde</p>
                        </div>
                        
                        </div>
  
  </div>
  <div className="p-2 flex-fill bd-highlight" onMouseOver={AfficherTexteBlackLightning} onMouseOut={SupprimerTextBlackL}><img src={cardBlackL} className='superheros'></img>
  <br></br>
      <br></br>
      <div className='card' ref={legendeBlacklightning} hidden style={{width:'18rem',marginLeft:'200px'}}>
                        <div className='card-body'>
                            <h5 className='card-title'><img src={iconeblackLightning} style={{width:'100px'}}></img>Black Lightning</h5>
                            <h6 className="card-subtitle mb-2 text-muted">L'homme le plus rapide du monde</h6>
                            <p className="card-text">Mon Nom est Barry Allen et je suis l'homme le plus rapide du monde</p>
                        </div>
                        
                        </div>
  </div>
  <div className="p-2 flex-fill bd-highlight" onMouseOver={AfficherTexteBatwoman} onMouseOut={SupprimerTextBatWoman}><img src={cardBatwoman} className='superheros'></img>
  <br></br>
      <br></br>
      <div className='card'hidden ref={legendeBatwoman} style={{width:'18rem',marginLeft:'200px'}}>
                        <div className='card-body'>
                            <h5 className='card-title'><img src={iconeBatwoman} style={{width:'90px'}}></img>Batwoman</h5>
                            <h6 className="card-subtitle mb-2 text-muted">L'homme le plus rapide du monde</h6>
                            <p className="card-text">Mon Nom est Barry Allen et je suis l'homme le plus rapide du monde</p>
                        </div>
                        
                        </div>
  </div>
</div>

<hr></hr>
            <div className='d-flex justify-content-center p-1'>
            <Link to='/Login'className='btn btn-dark mx-1' ref={btnco} onMouseOver={MettreEnRouge} onMouseOut={MettreEnNoire}>Connexion</Link>
            
               <Link to='/Inscription'className='btn btn-dark' ref={btninscri}onMouseOver={MettreEnRougeinscri}onMouseOut={MettreEnNoireinscri}>Inscription</Link>
            </div>
           
            <br></br>

            </div>
      
    )
}

export default Landing
