import React, { Component, useRef } from "react";

import "./browserWindow.css";

function StaticPCWindow(props) {
    return <img style={{width: '100%', height: 'auto'}} src={props.picUrl} loading="lazy" alt=" " />;
}

function VideoPCWindow(props) {
    const videoRef = useRef(null), btnRef = useRef(null);

    function playAndPause() {
        if(videoRef.current.paused) {
            videoRef.current.play();
            btnRef.current.style.visibility="hidden";
        }
        else {
            videoRef.current.pause();
            btnRef.current.style.visibility="visible";
        }
    }
    return (
        <div onClick={playAndPause}>
        <span className="play-btn" ref={btnRef}></span>
        <video className="img-style" muted playsInline poster={props.picUrl} ref={videoRef}>
            <source type="video/mp4" src={props.videoUrl} />
        </video>
        </div>
    );
}

function PCBrowser(props) {
    return (
        <div className="brower-window-container">
            <h4 className="window-title">{props.title}</h4>
            <ul className="window-icons">
                <li style={{ background: '#ff5011' }}></li>
                <li style={{ background: '#ffc000' }}></li>
                <li style={{ background: '#4ee949' }}></li>
            </ul>
            {props.videoUrl ? <VideoPCWindow {...props} /> : <StaticPCWindow {...props} />}
        </div>
    )
}

function MobileBrowser(props) {
    return (
        <div className="mobile-frame-container">
            <img className="gif-style" src={props.picUrl} alt=" " />
        </div>
    )
}
export default class BrowerWindow extends Component {
    render() {
        return (
            <>{this.props.usePhone ? <MobileBrowser {...this.props}/> : <PCBrowser {...this.props} />}</>
        )
    }
}