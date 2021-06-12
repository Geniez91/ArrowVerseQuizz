import React from 'react'
import Arrowposter from '/React/arrowversequizz/src/Components/ErrorPage/arrowmeme.gif'
import trahi from '/React/arrowversequizz/src/Components/ErrorPage/trahi.mp3'

function ErrorPage() {
    return (
        <div className='container-fluid bg-success text-center'>
            <h2 className='mt-1'>Vous avez Trahi cette page !!!!</h2>
            <img className='mb-1'src={Arrowposter}></img>
            <br></br>
            <audio autoPlay controls src={trahi}>
            Your browser does not support the
            <code>audio</code> element.
    </audio>
        </div>
    )
}

export default ErrorPage
