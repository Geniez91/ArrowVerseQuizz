import React from 'react'

function ProgressBar(props) {
    const {idQuestion,maxQuestion}=props
    const pourcentage=`${idQuestion/maxQuestion*100+10}%`
    return (
        <div>
            <div>Question {`${idQuestion +1}/${maxQuestion}`}</div>
    <div>Progression : {pourcentage}</div>
        
        
         <div className="progress">
    <div className="progress-bar" role="progressbar" style={{width: pourcentage}}>{pourcentage}</div>
      </div>
      </div>
    )
}

export default React.memo(ProgressBar)
