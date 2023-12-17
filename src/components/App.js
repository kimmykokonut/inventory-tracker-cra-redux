import React from "react";
import Header from "./Header";
import IceCreamControl from "./IceCreamControl";
import backgroundImg from "./../assets/wafflebg.jpeg";

function App() {
  const styleBody = {
    backgroundImage: `url(${backgroundImg}`,
    backgroundSize: 'contain',
  }
  return (
    <React.Fragment>
      <div style={styleBody}>
        <Header />
        <hr />
        <IceCreamControl />
      </div>
    </React.Fragment>
  )
}
export default App;