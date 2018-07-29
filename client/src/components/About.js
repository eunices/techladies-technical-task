import React from "react";

export class About extends React.Component {
    state = {
        imgSrc: '',
    }
    async componentDidMount(){
        // fetch API
        const response = await fetch('https://cataas.com/cat/gif')
        // asynchronous; does not wait for this call to finish but has await to stop for the next code block
        const imgBlob = await response.blob();
        const imageSrc = window.URL.createObjectURL(imgBlob);
        this.setState({
            imageSrc: imageSrc
        });
    }
    render() {
        if (!this.state.imageSrc) {
            return <p>Loading...</p>
        }

        return(
            <div>
            <h1>{this.props.title}</h1>
            <p>
            Hello my name is Eunice!
            </p>
            <img src={this.state.imageSrc} alt=''/>
            </div>
        )
    }
}

export default About;