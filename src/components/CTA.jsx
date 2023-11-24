import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>
        Interested in Learning More ? <br className='sm:block hidden' /> 
        Please Get In Touch!
        </p>
    <Link to="/contact" className='btn'>Contact</Link>
    </section>
  )
}

export default CTA