import React from 'react'
import img from '../image/imag.jpeg'
import Common from './Common'

const Home = () => {
  const text = "View My Responsive Website with"
  const stron="Bootstrap"
  const link = "./service"
  return (
    <>
      <Common image={img} text={text} stronges={stron} onClic={link}/>

    </>
  )
}

export default Home



{/* <section className='d-flex align-item-center justify-content-center flex-column'>
      <div className='container-fluid nav-bg'>
        <div className='row'>
            <div className='col-10 mx-auto my-auto'>
            <div className='row my-auto '>

            <div className='col-6 text-center d-flex justify-content-center flex-column' >
                    <p className=''> Welcome to our first <span color='red'>Hridayesh</span> Responsive Website</p>
                    <a className="btn btn-outline-success" href='/service'>Get Started</a>
                </div>
                <div className='col-4 align-self-center' >
                    <img src={img} alt='logo'  className="rounded" height={200} width={200}/>
                    
                </div>
            </div>
                
            </div>
            
        </div>
    </div>
    </section> */}
