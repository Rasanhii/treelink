import React from 'react';
import "./homepage.css";

const Homepage = () => {
    return (
    <div className="page">
      <h1 className="title">Venha nos conhecer</h1>
      <div className="container">
        <div className="photo-card">
          <img src="./pessoas/Amanda.jpeg" alt="Amanda" className="profile-photo" />
          <p>Amanda Cursino</p>
          <div className="button-group">
            <div>Botão</div>
          </div>
        </div>
        <div className="photo-card">
          <img src="./pessoas/Jonatas.jpg" alt="Jonatas" className="profile-photo" />
          <p>Jonatas Pereira</p>
          <div className="button-group">
          <div>Botão</div>
          </div>
        </div>
        <div className="photo-card">
          <img src=".\pessoas\Paulo.png" alt="Paulo" className="profile-photo" />
          <p>Paulo Roberto</p>
          <div>Botão</div>
          <div className="button-group">
            
          </div>
        </div>
        <div className="photo-card">
          <img src="./pessoas/Rafael.jpeg" alt="Rafael" className="profile-photo" />
          <p>Rafael Moura</p>
          <div>Botão</div>
          <div className="button-group">
            
          </div>
        </div>
      </div>
    </div>
    )
}

export default Homepage;