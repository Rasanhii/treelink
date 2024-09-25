import React from 'react';
import './App.css';

function App() {
  return (
    <div className="page">
      <h1 className="title">Venha nos conhecer</h1>
      <div className="container">
        <div className="photo-card">
          <img src="https://via.placeholder.com/150" alt="Integrante 1" className="profile-photo" />
          <p>Integrante    g  1</p>
          <div className="button-group">
            <div>Butão</div>
          </div>
        </div>
        <div className="photo-card">
          <img src="https://via.placeholder.com/150" alt="Integrante 2" className="profile-photo" />
          <p>Integrante 2</p>
          <div className="button-group">
          <div>Butão</div>
          </div>
        </div>
        <div className="photo-card">
          <img src="https://via.placeholder.com/150" alt="Integrante 3" className="profile-photo" />
          <p>Integrante 3</p>
          <div>Butão</div>
          <div className="button-group">
            
          </div>
        </div>
        <div className="photo-card">
          <img src="https://via.placeholder.com/150" alt="Integrante 4" className="profile-photo" />
          <p>Integrante 4</p>
          <div>Butão</div>
          <div className="button-group">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
