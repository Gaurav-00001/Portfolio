import React from 'react'
import './App.css'
import logo from './assets/CHASMISH CODER.png'
import nivasImg from './assets/image1.png';
import ecomImg from './assets/image.png';
 const App = () => {
  return (
    <nav>
       <div className='container'>
      <h1> GAURAV'S PORTFOLIO</h1>
     <div className='about-me'> 
    <p>ABOUT ME:-
     B.Tech student with a technical foundation in Java, C++, and JavaScript. Experienced in developing responsive web applications using React, HTML, and CSS, with a focus on building real-world projects and contributing effectively to team-based software development environments."</p>
  </div>
    <div className='Skills'>
      
  <div className='skill-box' id='frontend-box'>
    <h2 id='Frontend'>Frontend-Skills</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JAVASCRIPT</li>
      <li>React</li>
    </ul>
  </div>

  
  <div className='skill-box' id='backend-box'>
    <h2 id='backend'>Backend-Skills</h2>
    <ul>
      <li>SQL</li>
      <li>Node.js</li>
      <li>Python</li>
    </ul>
  </div>

  
  <div className='skill-box' id='database-box'>
    <h2 id='Database'>Databases and collaborative-platforms</h2>
    <ul>
      <li>Supabase</li>
      <li>Vercel</li>
      <li>Github</li>
    </ul>
  </div>
  </div>
 <div className='Project-Container'>
  <div className='project-card'>
    <h2><a href="https://nivashub-theta.vercel.app/">• NivasHub</a></h2>
    <img src="nivasImg" alt="PG"  />
    <p>NivasHub | Student Housing Simplified. A streamlined PG discovery platform built with Supabase.</p>
    <a href="https://github.com/Gaurav-00001/PG-FINDER.git">REPO-Link</a>
  </div>

  <div className='project-card'>
    <h2><a href="https://gaurav-00001.github.io/e-commerce-website/">• Daily-Essentials</a></h2>
    <img src="ecomImg" alt="E-commerce" />
    <p>Daily Essentials Store is a responsive e-commerce storefront with a local storage cart.</p>
    <a href="https://github.com/Gaurav-00001/e-commerce-website.git">REPO-Link</a>
  </div>
</div>
</div>

      </nav>
      
  );
};
export default App;
