import React from 'react'
import Stepper from 'react-stepper-horizontal'
import { useEffect,useState } from 'react'


function Niveaux(props) {
    const {quizzLevel,levelsName}=props
    const [Niveau, setNiveau] = useState([])

    useEffect(() => {
      const etapequizz= levelsName.map(level=>({title: level.toUpperCase()} ))//ici je parcour les différents niveau pour les mettre dans une variable
      setNiveau(etapequizz)//pour je les enregistre dans le state
        
    },[levelsName]);
    console.log(Niveau)

    return (
        <div>
      <Stepper 
      steps={Niveau} 
      activeStep={quizzLevel }
      defaultColor	='#FF3333' 
      activeColor='#F7A310'
      completeColor='#10F74B'/>
  
   

      
        
            
           

        </div>
    )
}

export default React.memo(Niveaux)
