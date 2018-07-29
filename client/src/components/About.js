import React from "react"
import { About } from "./AboutContent";
import { Navbar } from "./Navbar";

class AboutMe extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <About title='About me'/>
            </div>
        )
    }
}

export default AboutMe;