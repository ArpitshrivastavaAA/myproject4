// import React from 'react'


// const Nav = (props) => {
//   return ( <>
//    <h1>{props.username}</h1>
//    <h2>{props.password}</h2>
//    </>
//   )
// }

// export default Nav

import React from "react";
import {Component} from "react"

class Nav extends Component
{
    render()
    {
        return( <>
            <h1>{this.props.data}</h1>
            <h2>{this.props.data2}</h2>
            </>
        )
    }
}
export default Nav