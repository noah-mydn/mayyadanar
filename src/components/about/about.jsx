import React from 'react'
import './about.css'
import {motion} from 'framer-motion'

export default function About() {

  return (
    <motion.div className='row'
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1}}>
      <div id='about' className='about_container'>
        <h3 className='text-center'>About Me</h3>
        <div className='about'>
            <div className='img-container'>
              <img src='../assets/images/yadanar.jpeg' id='my_about_img'/>
            </div>
            <div className='about_card'>
                <p className='about_info'>
                  <span className='hello'>Hello  </span><br/>
                  I'm a self-motivated junior front-end web developer. Mainly, I develop websites using one of the 
                  JavaScript libraries, React. Besides, I'm also studying a full-stack development course so that 
                  I could expand my knowledge fully in the web development field. Currently,
                  I'm working as a React developer intern at <a href="https://linuxjobber.com/"> LinuxJobber, Inc  </a>
                </p>
                <a href='../assets/resume/resume.pdf' download='May Yadanar Resume'>
                  <button className='download'type='submit'>Download CV</button>
                </a>
            </div>
        </div>
      </div>
    </motion.div>
  )
}