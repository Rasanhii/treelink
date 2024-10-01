import React from 'react';
import "./homepage.css";

const Homepage = () => {
    return (
    <div className="page">
      <h1 className="title">Venha nos conhecer</h1>
      <div className="container">


        {/* Amanda */}
        <div className="photo-card">
          <img src="./pessoas/Amanda.jpeg" alt="Amanda" className="profile-photo" />
          <p>Amanda Cursino</p>
          <a className='links' target='blank' href='https://www.linkedin.com/in/amanda-cursino-6b380a263/' >
            <i class="bi bi-linkedin"></i>
            <span>Linkedin</span>
          </a>
          <a className='links' target='blank' href='https://github.com/AmandaCursino' >
            <i class="bi bi-github"></i>
            <span>Github</span>
          </a>
          <a className='links' target='blank' href='https://wa.me/5512988358585' >
            <i class="bi bi-whatsapp"></i>
            <span>Whatsapp</span>
          </a>
          <a className='links' target='blank' href='' >
            <i class="bi bi-envelope"></i>
            <span>Email</span>
          </a>
        </div>


        {/* Jonatas */}
        <div className="photo-card">
          <img src="./pessoas/Jonatas.jpg" alt="Jonatas" className="profile-photo" />
          <p>Jonatas Pereira</p>
          <a className='links' target='blank' href='https://www.linkedin.com/in/rasanhii/' >
            <i class="bi bi-linkedin"></i>
            <span>Linkedin</span>
          </a>
          <a className='links' target='blank' href='https://github.com/Rasanhii' >
            <i class="bi bi-github"></i>
            <span>Github</span>
          </a>
          <a className='links' target='blank' href='https://wa.me/5512992515607' >
            <i class="bi bi-whatsapp"></i>
            <span>Whatsapp</span>
          </a>
          <a className='links' target='blank' href='' >
            <i class="bi bi-envelope"></i>
            <span>Email</span>
          </a>
        </div>


        {/* Paulo */}
        <div className="photo-card">
          <img src=".\pessoas\Paulo.png" alt="Paulo" className="profile-photo" />
          <p>Paulo Roberto</p>
          <a className='links' target='blank' href='https://www.linkedin.com/in/pcastroneto/' >
            <i class="bi bi-linkedin"></i>
            <span>Linkedin</span>
          </a>
          <a className='links' target='blank' href='https://github.com/pcastroneto' >
            <i class="bi bi-github"></i>
            <span>Github</span>
          </a>
          <a className='links' target='blank' href='https://wa.me/5512981047620' >
            <i class="bi bi-whatsapp"></i>
            <span>Whatsapp</span>
          </a>
          <a className='links' target='blank' href='' >
            <i class="bi bi-envelope"></i>
            <span>Email</span>
          </a>
        </div>


        {/* Rafael */}
        <div className="photo-card">
          <img src="./pessoas/Rafael.png" alt="Rafael" className="profile-photo" />
          <p>Rafael Moura</p>
          <a className='links' target='blank' href='https://www.linkedin.com/in/rafael-moura-64470023a/' >
            <i class="bi bi-linkedin"></i>
            <span>Linkedin</span>
          </a>
          <a className='links' target='blank' href='https://github.com/Faelfaria' >
            <i class="bi bi-github"></i>
            <span>Github</span>
          </a>
          <a className='links' target='blank' href='https://wa.me/5512992515607' >
            <i class="bi bi-whatsapp"></i>
            <span>Whatsapp</span>
          </a>
          <a className='links' target='blank' href='' >
            <i class="bi bi-envelope"></i>
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
    )
}

export default Homepage;