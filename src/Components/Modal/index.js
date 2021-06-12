import React from 'react'
import ReactModal from 'react-modal'




const Modal1 = ({showModal,hideModal,data}) => {

    const VerifierSurnom=(data)=>
    {
        if(data.biography.aliases[0]==='-')
        {
            return false
        }
        else
        {
            return true
        }
    }
   
    return (
        showModal&&<div>
<ReactModal
           isOpen={showModal}
           contentLabel="Minimal Modal Example"
           >
               <div className='container-fluid'>
              <h5 className='text-center'>{data.name}</h5>
              <hr></hr>
              </div>
              <div className='row'>
                <div className='col justify-content-start'>
                 <img src={data.image.url}alt={data.name}></img>
                </div>
                <div className='col-2' style={{border:'1px solid'}}>
                    <h3 className='text-center'>Details</h3>
                    <h4 className='text-center'>Nom</h4>
                    <hr></hr>
                    <div className='text-center'>
                    {
                        data.biography.fullname
                    }
                    </div>
                    <br></br>
                     <h4 className='text-center'>Surnom  </h4>  
                     <hr></hr>
                     <div className='text-center'>
                     {
                         VerifierSurnom(data)===true?(data.biography.aliases.map((alias,index)=>{
                          
                        return <div key={index}> 
                        
                        {
                            
                            1+index===data.biography.aliases.length?(alias+"."):(alias+",")
                       
                        }
                       
                        </div>})
                       ):("Aucun Alias")
                     }
                     </div>
                     <br></br>
                    <h4 className='text-center'>Lieu de Naissance</h4>
                    <hr></hr>
                    <div className='text-center'>
                    {
                        data.biography.placeofbirth
                    }
                     </div>
                     </div>
                     <div className='col-2' style={{border:'1px solid'}}>
                        <h3 className='text-center'>Caractéristiques Physiques</h3>
                        <hr></hr>
                        <h4 className='text-center'>Sexe</h4>
                        <hr></hr>
                        <div className='text-center'>
                        {data.appearance.gender}
                        </div>
                        <br></br>
                        <h4 className='text-center'>Race</h4>
                        <hr></hr>
                        <div className='text-center'>
                      {data.appearance.race}
                      </div>
                      <br></br>
                      <h5 className='text-center'>Yeux</h5>
                      <hr></hr>
                      <div className='text-center'>
                      {
                          data.appearance.eyecolor
                      }
                      </div>
                      <br></br>
                      <h5 className='text-center'>Cheveux</h5>
                      <hr></hr>
                      <div className='text-center'>
                      {
                          data.appearance.haircolor
                      }
                      </div>
                         </div>
                         <div className='col-2' style={{border:'1px solid'}}>
                                <h3 className='text-center'>Equipes</h3>
                                <h4 className='text-center'>Famille  </h4>
                                <hr></hr>
                      <div className='text-center'>
                      { data.connections.relatives}
                      </div>
                      <br></br>
                      <h4 className='text-center'>Equipe</h4>
                      <hr></hr>
              {
                  data.connections.groupaffiliation
              }
                         </div>
                         <div className='col-2' style={{border:'1px solid'}}>
                             <h3 className='text-center'>Autres</h3>
                             <h4 className='text-center'>Premiere Apparition</h4>
                             <hr></hr>
                    {
                        data.biography.firstappearance
                    }
                    <br></br>
                     <h4 className='text-center'>Travail</h4>
                     <hr></hr>
                    {
                        data.work.occupation
                    }
                         </div>



                      
              </div>
              <br></br>
             <div className='row' >
                 <div className='col text-center'>
             <a className='btn btn-info' onClick={hideModal}>Fermer</a>
             </div>
             </div>
              
               
               
               
           </ReactModal>
           

        </div>
      
    )
}

export default Modal1
