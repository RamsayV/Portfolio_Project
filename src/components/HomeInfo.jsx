import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'



const InfoBox = ({text,link,btnText}) => (
    <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
       {btnText} 
       <img src={arrow} className='w-4 h-4 object-contain' />
    </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
    Welcome, to <span className='font-semibold'>Ramsay's Portfolio</span>
    <br />
    Explore the Island and discover Projects
    <br />
    <a href="https://github.com/RamsayV" target="_blank" className="custom-link underline">My Github</a>
    <br />
    <a href="https://www.linkedin.com/in/ramsay-veitch-82863a1bb" target="_blank" className="custom-link underline">My LinkedIn</a>
</h1>
    ),
    2: (
       <InfoBox
       text="A fluent french and Spanish speaker who has a passion for combining technology and languages"
       link="/about"
       btnText="Learn More"
       />
    ),
    3: (
        <InfoBox
       text="A recent graduate from the General Assembly Software Engineering Immersive Bootcamp.
        My Projects are available below"
       link="/projects"
       btnText="Visit my portfolio"
       />
    ),
    4: (
        <InfoBox
        text="Interested in learning more? Please get in touch with any question! "
        link="/contact"
        btnText="Get In Touch"
        />
    ),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo