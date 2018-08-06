import React from "react"
import { Todos } from "./Todos";
import { Navbar } from "./Navbar";


class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Todos />
            </div>
        )
    }
}

export default App;
