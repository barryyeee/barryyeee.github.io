import React, { Component } from "react"
import { DrawingData } from "../workData";

import "../common.css";

import PreAndNext from "../components/preAndNext";
import Gallery from "../components/gallery/index";

export default class Drawing extends Component {
    render() {
        return (
            <>
                <div className="work-item-container">
                    <div className="category-title" style={{ backgroundColor: DrawingData.themeColor }}>
                        <span className="subtitle">{`${DrawingData.subTitle}\n`}</span>
                        <span className="title">{DrawingData.title}</span>
                    </div>
                    {DrawingData.works.map((work, index) => (
                        <Gallery {...work} key={`gallery-${index}`} imgUrl={require(`../../../resources/${work.imgUrl}`).default} />
                    ))}
                </div>
                <PreAndNext 
                    prePath='/design'
                    preTitle='Graphic Visual Design' 
                    preColor='#96A48B' 
                    nextTitle='This is the last but not the end' 
                    nextColor='black' 
                    hideNextArrow={true} 
                />
            </>
        )
    }
}