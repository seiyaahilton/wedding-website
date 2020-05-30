import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="container">
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <a className="text-muted" href="#"></a>
          </div>
          <div className="col-4 text-center">
            <a className="blog-header-logo text-dark" href="#">Jennie and Sayer</a>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            {/* <a className="text-muted" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
            </a>
            <a className="btn btn-sm btn-outline-secondary" href="#"></a> */}
          </div>
        </div>
      </header>
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          <a className="p-2 text-muted" href="#">Home</a>
          <a className="p-2 text-muted" href="#">Details</a>
          <a className="p-2 text-muted" href="#">Accomodation</a>
          <a className="p-2 text-muted" href="#">RSVP</a>
          <a className="p-2 text-muted" href="#">Gifts</a>
        </nav>
      </div>
      <div className="text-center"><img className="hero-image" src="/images/SaveTheDate-shadow.jpg" /></div>

    </div>
  );
}

export default App;
