import React, { Component, createRef } from "react";

import BrowerWindow from "../../../../components/browserWindow/index.js";

import "./gallery.css"
export default class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            currentOffset: 0,
        }
        this.scrollStep = 0;
        this.scrollWidth = 0;
        this.scrollRef = createRef();
        this.compareRef = createRef();
        this.showWindowRef = createRef();
    }
    scrollImageList(direction) {
        const newOffset = this.state.currentOffset + this.scrollStep * direction;
        if (Math.floor(Math.abs(newOffset)) <= this.scrollWidth / 2) {
            this.setState({
                currentOffset: newOffset
            });
        };
    }
    constrolShowWindow() {
        this.scrollWidth = this.scrollRef.current.clientWidth - window.innerWidth;
        this.scrollStep = this.scrollWidth / this.props.details.length;
        this.setState({
            currentOffset: this.scrollWidth / 2
        });
        this.showWindowRef.current.style.visibility = "visible";
    }
    closeShowWindow() {
        this.showWindowRef.current.style.visibility = "hidden";
    }
    render() {
        return (
            <div className="gallery-container" ref={this.compareRef}>
                <BrowerWindow 
                    title={this.props.workTitle} 
                    picUrl={this.props.imgUrl} 
                    videoUrl={this.props.videoUrl} 
                    usePhone={this.props.usePhone} 
                    needPreload={true}
                    compareRef={this.compareRef}
                />
                {this.props.description && <p className="text-intro">{this.props.description}</p>}
                {this.props.tagList &&
                    <ul className="tags">
                        {this.props.tagList.map((tag, index) => (
                            <li key={`dot-${index}`} className="tag-item">{tag}</li>
                        ))}
                    </ul>}
                {this.props.showViewMoreBtn && <button className="show-detail-bt" onClick={this.constrolShowWindow.bind(this)}>VIEW MORE</button>}
                <div style={{ width: '100%', height: '80px' }}></div>
                {this.props.details && <div className="show-window-container" ref={this.showWindowRef}>
                    <div ref={this.scrollRef} className="detail-content-container" style={{ transform: `translate3d(${this.state.currentOffset}px, 0px, 0px)` }}>
                        {this.props.details.map((imgUrl, index) => (
                            <img className="detail-image" key={`img-${index}`} src={require(`../../../../resources/${imgUrl}`).default} alt=" " />
                        ))}
                        {this.props.introduction &&
                            <div className="introduction">
                                <p>{this.props.introduction.title}</p>
                                <p>{this.props.introduction.year}</p>
                                <p>{this.props.introduction.text}</p>
                            </div>
                        }
                    </div>
                    <div className="control-area left" onClick={this.scrollImageList.bind(this, 1)}></div>
                    <div className="control-area right" onClick={this.scrollImageList.bind(this, -1)}></div>
                    <div className="close-btn" onClick={this.closeShowWindow.bind(this)}></div>
                </div>}
            </div>
        )
    }
}