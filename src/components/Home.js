import React from 'react'
import './Home.css';
import Typed from 'react-typed';

function Home({HomeRef}) {
  return (
    <div ref={HomeRef}>
        <section className='home-container'>
            <h1 className="home-title">Welcome</h1>
            <div className = "animated-typing">
              <Typed 
                strings = 
                {["I'm an aspiring frontend developer",
                "I'm a saxophonist",
                "I'm Vernon Roque"
                 ]}
                 typeSpeed={100}
                 backSpeed={50}
                 loop
              />
            </div>
        </section>
    
    </div>
  )
}

export default Home