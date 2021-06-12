import React, { useState,useEffect,useContext,useRef } from 'react'
import {firebaseContext} from '../Firebase'
import ReactTooltip from 'react-tooltip';

const Deconnexion = () => {
    
   const [checked, setchecked] = useState(false)
   const firebase = useContext(firebaseContext)

    useEffect(()=>
    {
        if(checked===true)
        {
            firebase.Deconnexion()
        }

    },[checked,firebase]
    )
    const handleChange=(e)=>
    {
        setchecked(e.target.checked)//permet de modifier la valeur du checked
    }
  

    return (
        <div className='col' style={{textAlign:'right'}}>
             <div className="custom-control custom-switch"> 
  <input type="checkbox"checked={checked}className="custom-control-input" id="customSwitches" onClick={handleChange}/>
  <label className="custom-control-label" htmlFor="customSwitches"data-tip='Déconnexion' ></label>
  <ReactTooltip place="right"/>
            </div>
        </div>
    )
}

export default Deconnexion
