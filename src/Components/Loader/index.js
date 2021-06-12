import React from 'react'

function Loader() {
    return (
        <div>
             <tr> 

<td colSpan='3' className='danger' style={{textAlign:"center"}}>
<div className="spinner-border m-5" role="status" style={{color:'blue'}}>
<span className="sr-only">Chargement...</span>
</div>
    <p>Pas de Réponse</p></td>
</tr>
        </div>
    )
}

export default Loader
