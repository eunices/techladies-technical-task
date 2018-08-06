import React from "react";

export class About extends React.Component {
    state = {
        imgSrc: '',
    }
    async componentDidMount() {
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

        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>Hello my name is Eunice! I studied life science/biology and have graduated for about 3 yrs.</p>

                <p>I used to take quite a lot of photographs! See my <a href="https://www.flickr.com/photos/crazyme">flickr account</a>. I also maintained a <a href='https://neverwildenough.blogspot.sg'>nature blog</a> and made amateur videos on <a href='https://vimeo.com/eunicesjy'>vimeo</a>.</p>

                <p><img src={require('../img/scenery.jpg')} alt='Scenery' />
                <video src={require('../img/documentary.mp4')} controls type='video/mp4' />
                <img src={this.state.imageSrc} alt='' /></p>

                <p>I hope to be able to make websites and contribute (through pull request) for web development projects such as iNaturalist.org someday. I gain satisfaction in seeing a finished product at the end of the day.</p>
            </div>
                )
            }
        }
        
export default About;