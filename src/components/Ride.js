import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import Joyride from "react-joyride";
class App extends Component {
    state = {
        steps: [
            {
                target: ".my-first-step",
                content: "This is super awesome feature "
            },
            {
                target: ".my-other-step",
                content: "Everyone's learning Joyride!"
            }
        ]
    };
    render() {
            const { steps } = this.state;
                return (
                <div className="App">
                    <Joyride steps={steps} />
                    <header className="App-header ">
                    <a href="https://reactjs.org" target="_blank">
                        <img  className="App-logo my-first-step" alt="logo" />
                    </a>
                    <a
                        className="App-link my-other-step"
                        href="https://github.com/gilbarbara/react-joyride"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Learn Joyride
                    </a>
                    </header>
                </div>
                );
            }
    }
export default App;