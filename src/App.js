import './App.css';
// import logo from './logo.svg'

// function App() {

//   let name = "library";
//   let arr = [10, 20, 30, 40];
//   let obj = {
//     name: "Sagar",
//     cname: "Second",
//     desc: "Student",
//   }

//   let status = false;

//   return (
//     <div className="App">
//       <h2>{name}</h2>
//       {
//         arr.map((v) => {
//           return (
//             <h2>{v}</h2>
//           )
//         })
//       }
//       <div><img src={logo} className="App-logo" alt="logo" /></div>

//       <div>{obj.cname}</div>
//       {10 + 50}

//       {(status) ? <h1 style={{ color: 'blueviolet' }}>Welcome to home page</h1> : <h1 style={{ color: 'red' }}>Welcome to home page</h1>}

//     </div>
//   );
// }

// import Car from './carComponent';
// function App(){
//   return(
//     <div className="App" style={{textAlign: 'Center'}}>
//     <h1>States vs this.props</h1>
//     <Car name="Maruti" color="Red" defName="xyz"/>
//     </div>
//   );
// }


import React from 'react';
import Activity3 from './activity3';

function App() {
  return (
    <div className="App">
      <Activity3 /> 
    </div>
  );
}


export default App;