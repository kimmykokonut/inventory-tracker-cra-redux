import React from 'react';
import logo from './../assets/logo.png';
import gelato from './../assets/ice-cream-banner.jpeg';

function Header() {
  const styleHead = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
  const styleImg = {
    height: 'auto',
    width: 'auto',
    overflow: 'hidden',
    marginTop: '3%',
    textAlign: 'center'
  }
  return (
    <>
    <div style={styleImg}>
      <img src={logo} alt="Praline's logo" />
      <div>
        <img src={gelato} alt="Ice Cream in tubs"></img>
      </div>
      </div>
      <hr />
      <div style={styleHead}>
        <button id="navBtn">☰</button>
        <form id="keySearch" name="keySearch">
          <input type="text" name="keySearch" placeholder="What do you seek?"></input>
          <button id="searchBtn">🔍</button>
        </form>
        <button id="cart">🛒</button>
      </div>
    </>
  );
}
export default Header;