import React from "react";
import Header from "./Header";
import IceCreamControl from "./IceCreamControl";

function App() {
  const styleBody = {
    margin: '5%',
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