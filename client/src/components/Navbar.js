import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
    render() {
        return(
            <nav>
            <ul className='navbarul'>
              <li className='navbarli'>
                <Link to="/about">About</Link>
              </li>
              <li  className='navbarli'>
                <Link to="/todos">To-do list</Link>
              </li>
            </ul>
          </nav>
        )
    }
}