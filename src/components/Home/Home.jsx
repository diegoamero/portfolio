import {React, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import './Home.scss'

function Home() {
  //default animation
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['l', 'o', 'd', 'o', 'b', 'a', 'n']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
  

  useEffect(()=>{
    setTimeout(()=>{
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>
                <span className="letterClass">H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt='developer'/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}
                />
            </h1>
            <h2>Frontend Developer / Javascript Expert</h2>
            <Link className='flat-button' to='/contact'>CONTACT ME</Link>
        </div>
    </div>
  )
}

export default Home