import React from 'react'
import img2 from '../image/img2.jpg'
import Common from './Common'

const About = () => {

  const text = "Tell us what you think to"
  const stron = "Hridayesh"
  const link = "/contact"
  return (
    <>
    <Common image={img2} text={text} stronges={stron} onClic={link}/>
      
    </>
  )
}

export default About
