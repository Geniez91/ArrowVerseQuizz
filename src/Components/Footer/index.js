import React from 'react'

const Footer = () => {
    return (
      
          <footer className='page-footer bg-dark mt-1'>
            <div className='bg-info'>
                <div className='container'>
                    <div className='row py-4 align-items-center'>
                        <div className='col-md-12 text-center'>
                            <a href='#'><i className="fab fa-youtube text-white mr-4"></i></a>
                            <a href='#'><i className="fab fa-twitter text-white mr-4"></i></a>

                        </div>

                    </div>
                </div>
            </div>
            <div className='container text-center text-md-left mt-5'>
                <div className='row'>
                    <div className='col-md-3 mx-auto mb-4'>
                        <h6 className='text-uppercase text-white font-weight-bold'>Quizz</h6>
                        <hr className='bg-success mb-4 mt-0 d-inline-block mx-auto'style={{width:'125px',height:'2px'}}></hr>
                        <p className='mt-2'>test</p>
                    </div>
                    <div className='col-md-2 mx-auto mb-4'>
                        <h6 className='text-uppercase text-white font-weight-bold'>Héros</h6>
                        <hr className='bg-success mb-4 mt-0 d-inline-block mx-auto'style={{width:'115px',height:'2px'}}></hr>
                        <ul className='list-unstyled'>
                            <li className='my-2'><a href='#'>Arrow</a></li>
                            <li className='my-2'><a href='#'>Flash</a></li>
                            <li className='my-2'><a href='#'>Supergirl</a></li>
                            <li className='my-2'><a href='#'>Martian Manhunter</a></li>
                            <li className='my-2'><a href='#'>ReverseFlash</a></li>
                        </ul>
                    </div>
                    <div className='col-md-2 mx-auto mb-4'>
                        <h6 className='text-uppercase text-white font-weight-bold'>SuperVilan</h6>
                        <hr className='bg-success mb-4 mt-0 d-inline-block mx-auto'style={{width:'115px',height:'2px'}}></hr>
                        <ul className='list-unstyled'>
                            <li className='my-2'><a href='#'>Arrow</a></li>
                            <li className='my-2'><a href='#'>Flash</a></li>
                            <li className='my-2'><a href='#'>Supergirl</a></li>
                            <li className='my-2'><a href='#'>Martian Manhunter</a></li>
                            <li className='my-2'><a href='#'>ReverseFlash</a></li>
                        </ul>
                </div>
                <div className='col-md-2 mx-auto mb-4'>
                        <h6 className='text-uppercase font-weight-bold text-white'>Liens Utiles</h6>
                        <hr className='bg-success mb-4 mt-0 d-inline-block mx-auto'style={{width:'75px',height:'2px'}}></hr>
                        <ul className='list-unstyled'>
                        <li className='my-2'><a href='#'>Accueil</a></li>
                            <li className='my-2'><a href='#'>Quizz</a></li>
                            <li className='my-2'><a href='#'>Contact</a></li>
                        
                        </ul>
                </div>
            </div>
            </div>
            <div className='footer-copyright text-center py-3 text-white'>
                <p> <i className="fa fa-copyright" aria-hidden="true"> Copyright</i>
                <a href='#'className='text-white'> ArrowVerseQuizz.com</a></p>
                <p>Designed by Jeremy Weltmann</p>
            </div>

          </footer>
        
    )
}

export default Footer
