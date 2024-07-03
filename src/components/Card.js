import React from 'react';
import './Card.css';

function Card() {
  return (
    <div className='body'>
      <div className='second-row'>
        <div className="card-1 card">
          <h2>AED 53,535.73</h2>
          <p>TOTAL SALES</p>
          <hr />
        </div>
        <div className="card-2 card">
          <h2>AED 126.26</h2>
          <p>AVERAGE SALES</p>
          <hr />
        </div>
        <div className="card-3 card">
          <h2>AED 1632</h2>
          <p>TOTAL QUANTITY SOLD</p>
          <hr />
        </div>
        <div className="card-4 card">
          <h2>AED 4944.92</h2>
          <p>TOTAL DISCOUNT</p>
          <hr />
        </div>
      </div>
      <div className='third-row'>
        <div className="card card-5 square-card">
          <h2>TOP SELLING CATEGORY</h2>
            <img className='img-1' src="img-1.jpeg" alt="1" />
            <img className='img-2' src="img-2.png" alt="2" />
          
        </div>
        <div className="card card-6 square-card">
          <h2>TOP SELLING CATEGORY REPORT</h2>
          <img className='img-8' src="tscr.jpeg" alt="3" />
        </div>
      </div>
      <div className='fourth-row'>
        <div className="card card-7 square-card">
          <h2>DAILY SALES</h2>
          <img className='img-3' src="img-3.jpeg" alt="2" />
        </div>
        <div className="card card-8 square-card">
          <h2>DAILY SOLD QUANTITY</h2>
          <img className='img-4' src="img-4.jpeg" alt="3" />
        </div>
      </div>
      <div className='fifth-row'>
        <div className="card card-9 square-card">
          <h2>TOP ESTABLISHMENT SALES</h2>
          <img className='ed1' src="ed1.jpeg" alt="3" />
          <img className='ed2' src="ed2.jpeg" alt="3" />
        </div>
        <div className='six-right'>
          <div className="card card-10 square-card">
            <h2>ESTABLISHMENT SALES REPORT</h2>
            <img className='mse1' src="mse1.jpeg" alt="3" />
            <hr />
          </div>
          <div className="card card-11 square-card">
            <h2>ESTABLISHMENT SALES REPORT</h2>
            <img className='mse2' src="mse2.jpeg" alt="3" />
            <hr />
          </div>
        </div>
      </div>
      <div className='sixth-row'>
        <div className="card card-12 square-card">
          <h2>TOP ESTABLISHMENT SALES</h2>
          <img className='img-8' src="img-8.jpeg" alt="3" />
        </div>
        <div className="card card-13 square-card">
          <h2>ESTABLISHMENT SALES REPORT</h2>
          <img className='img-8' src="esr.jpeg" alt="3" />
        </div>
      </div>
    </div>
  );
}

export default Card;
