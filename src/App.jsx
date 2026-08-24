import React from 'react'
import './App.css'
import logo from './assets/CHASMISH CODER.png'
import nivasImg from './assets/image1.png';
import ecomImg from './assets/image.png';
import Form from './components/Form.jsx';
import Genaiimg from './assets/image2.png';
 const App = () => {
  return (
   
       <div className='container'>
      <h1> GAURAV'S PORTFOLIO</h1>
     <div className='about-me'> 
    <p>ABOUT ME:-
    "B.Tech student specializing in AI Engineering and full-stack integration. Proficient in Python, JavaScript, and React, with hands-on experience integrating LLM APIs, prompt engineering, and building dynamic GenAI applications. Passionate about leveraging artificial intelligence to create intelligent, user-centric software solutions.</p>
  </div>
    <div className='Skills'>
      
  <div className='skill-box' id='frontend-box'>
    <h2 id='Frontend'>Frontend-Skills</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JAVASCRIPT</li>
      <li>React</li>
     <li>AI Dynamic UI / Chat Interfaces</li>
    </ul>
  </div>

  
  <div className='skill-box' id='backend-box'>
    <h2 id='backend'>Backend-Skills</h2>
    <ul>
      <li>SQL</li>
      <li>Node.js</li>
      <li>Python</li>
     <li>Prompt Engineering</li>
    </ul>
  </div>

  
  <div className='skill-box' id='database-box'>
    <h2 id='Database'>Databases and collaborative-platforms</h2>
    <ul>
      <li>Supabase</li>
      <li>Vercel (AI Web Deployment)</li>
      <li>GitHub & Version Control</li>
    </ul>
  </div>
  </div>
 <div className='Project-Container'>
  <div className='project-card'>
    <h2><a href="https://nivashub-theta.vercel.app/">• NivasHub</a></h2>
    <img src={nivasImg} alt="PG"  />
    <p>NivasHub | Student Housing Simplified. A streamlined PG discovery platform built with Supabase.</p>
    <a href="https://github.com/Gaurav-00001/PG-FINDER.git">REPO-Link</a>
  </div>

  <div className='project-card'>
    <h2><a href="https://gaurav-00001.github.io/e-commerce-website/">• Daily-Essentials</a></h2>
    <img src={ecomImg} alt="E-commerce" />
    <p>Daily Essentials Store is a responsive e-commerce storefront with a local storage cart.</p>
    <a href="https://github.com/Gaurav-00001/e-commerce-website.git">REPO-Link</a>
  
 
</div>

  <div className='project-card'>
    <h2><a href="https://gaurav-00001.github.io/GENAI/">• GEN-AI</a></h2>
    <img src={Genaiimg} alt="GEN-AI" />
    <p>A NxtWave-certified project demonstrating model integration and prompt engineering to create dynamic, contextually relevant conversational interfaces.</p>
    <a href="https://github.com/Gaurav-00001/GENAI.git">REPO-Link</a>
  
 
</div>
 </div>
  <div className='Social-accounts' id='social'>
    <a href="https://www.linkedin.com/in/gaurav-singh-ranswal-0a103a33b/" target="_blank" className="circle-link linkedin">
    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" height={25}/>
  </a>
    <a href="https://github.com/Gaurav-00001" target="_blank" className="circle-link github">
    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" height={25}/>
    </a>
    <a href="https://www.instagram.com/gauravvv_ranswal" target="_blank" className="circle-link instagram">
      <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" height={25}/>
      </a>
    
  </div>
 <div className='contact-section'>
  <Form />
  
  </div>
</div>



     
      
      
  );
};

export default App;
