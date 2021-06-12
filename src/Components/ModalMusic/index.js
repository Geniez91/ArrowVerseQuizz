import React, { useState } from 'react'
import ReactModal from 'react-modal'
import flash from './the-flash-cw-soundtrack-the-flash-theme.mp3'

function ModalMusic({showModal,hideModal,audioList,setaudiolist}) {
    const [name,setName]=useState('')
    const [nameChanteur,setNameChanteur]=useState('')
    const [couverture,setNamecouverture]=useState('Choisir un fichier')
    const [Musique,setMusique]=useState('')

    console.log(audioList)
    const NameMusic=(e)=>
    {
        setName(e.target.value)
    }
    const Chanteur=(e)=>
    {
        setNameChanteur(e.target.value)
    }
    const Couverture=(e)=>
    {
        setNamecouverture(e.target.files[0].name)
    }
    const AddMusique=(e)=>
    {
        setMusique(e.target.files[0].name)
    }
    const InsererMusique=()=>
    {
        if(name!==null&&nameChanteur!==null&&couverture!==null&&Musique!==null)
        {
            audioList.push({
                name:name,
                singer:nameChanteur,
                cover:`./${couverture}`,
                musicSrc:`./${Musique}`
            })
            setaudiolist(audioList)
          console.log(audioList[3].musicSrc)
          
       
        }
    }



    return (
       showModal&&<div>
           <ReactModal isOpen={showModal}
           contentLabel="Minimal Modal Example">
               <div>
                    <label htmlFor='namemusic'>Nom Musique</label>
                    <input type='text' className='form-control marge' value={name} name='namemusic' onChange={NameMusic}></input>
               </div>
               <div>
                    <label htmlFor='namechanteur'>Chanteur</label>
                    <input type='text' className='form-control marge' value={nameChanteur} name='namechanteur' onChange={Chanteur}></input>
               </div>
               <div>
                    <label htmlFor='couverture'>Couverture</label>
                    <input type='file' className='form-control marge'  name='namechanteur' onChange={Couverture}></input>
               </div>
               <div>
                    <label htmlFor='musique'>Musique</label>
                    <input type='file' className='form-control marge'  name='musique' onChange={AddMusique}></input>
               </div>
               <br></br>
              <div className='row'>
               <div className='col'>
                   <button type='button' className='btn btn-success' onClick={InsererMusique} style={{marginRight:'5px'}}>Ajouter</button>
                   <button type='button' className='btn btn-info' onClick={hideModal}>Fermer</button>
               </div>
           

      
           
            </div>
              
           </ReactModal>


       </div>
    )
}

export default ModalMusic
