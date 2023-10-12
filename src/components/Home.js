import React from 'react'
import './Home.css';
// import Typed from 'react-typed';
import { TypeAnimation } from 'react-type-animation';

function Home({HomeRef}) {
  return (
    <div ref={HomeRef}>
        <section className='home-container'>
            <h1 className="home-title">Welcome</h1>
            <div className = "animated-typing">
              {/* <Typed 
                strings = 
                {["I'm an aspiring frontend developer",
                "I'm a saxophonist",
                "I'm Vernon Roque"
                 ]}
                 typeSpeed={100}
                 backSpeed={50}
                 loop
              /> */}
               <TypeAnimation
                  sequence={[
                    "I'm an aspiring frontend developer",
                    2000,
                    "I'm a Jazz Musician",
                    2000,
                    "I'm Vernon Roque",
                    2000,
                  ]}
                  speed={20}
                  repeat={Infinity}
                  // style={{ fontSize: '2em' }}
               />
            </div>
        </section>
    
    </div>
  )
}

export default Home