import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
    render() {
        return(
            <nav>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/todos">To do List</Link>
              </li>
            </ul>
          </nav>
        )
    }
}