// import React from 'react'
// import JSON from "./userdata.json"

// import "./global.css"
// import Course from './Course';


// const App = () => {
//   return (
//     <div>
//      <Course payload={JSON}/>
//     </div>
//   )
// }

// export default App
// import React from "react";
// import Apple from "./logofile/Apple"
// import Flipkart from "./logofile/Flipkart"
// import Hotstar from "./logofile/Hotstar"
// import Netflix from "./logofile/Netflix"

// const App =() => {
//     return (
//         <div>
//       {/* <Apple/>
//       <Flipkart/>
//       <Hotstar/> */}
//       <Netflix/> 
//       </div>
//     )
// }
// export default App

// import React from 'react'
// import Nav from "./Nav.jsx"

// const app = () => {
//   return ( <>
//     <Nav username="arpit" password="abc123" />
//     </>
//   )
// }

// export default app



// import React from "react";
// import Nav from "./Nav.jsx"
// import { Component } from 'react'




//  class App extends Component {
//   render() {
//     return ( <>
//       <Nav data="hello" data2="hyy"/>

//       </>
//     )
//   }
// }
// export default App

// import React from "react";
// import Nav from "./Nav.jsx"
// import { Component } from 'react'




//  class App extends Component {
//   render() {
//     return ( <>
//       <Nav string ="hello" number = {143} boolean ={true} data={null}/>

//       </>
//     )
//   }
// }
// export default App

// import React from "react";
// import Nav from "./Nav.jsx"
// import photo from "./z.jpg"

// const App = () => {
//   return (

//     <>
//     {/* <Nav data ={photo}/> */}
//     <img src={photo} alt="" />
    
    
//     </>
//   )
// }
// export 

 
import React from "react"
import Course from "./Course"

const App = ()=> {
  return ( <>
    <Course  CourseDetails={{
      CourseName : "JAVA FULL STACK",
      CourseAvail : true,
      CourseDuration : "3 months"
    }}/>
    </>
  )
}
export default App