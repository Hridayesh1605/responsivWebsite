import React from 'react'
import { NavLink } from 'react-router-dom'

const Common = (props) => {
  return (
    <>
      <section id='header' className=''>
        <div className='container-fluid nav-bg'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
                <div className='pt-5 col-md-6 pt-lg-0 order-1  d-flex justify-content-center flex-column'>
                  <h1>{props.text}
                    <strong className='brand-name' >{props.stronges}</strong></h1>
                  <h2 className='my-3'>
                    First time building with boostrap
                  </h2>
                  <div className='mt-3'>
                    <NavLink to={props.onClic} className="btn btn-outline-success" href='/service'>Get Started</NavLink>
                  </div>

                </div>
                <div className='col-4' order-2>
                <img src={props.image} alt='logo'  className="rounded" height={200} width={200}/>

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Common
