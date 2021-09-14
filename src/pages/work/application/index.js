import React, { Component } from "react"
import { ApplicationData } from "../workData";
import "../common.css";

import PreAndNext from "../components/preAndNext";
import Gallery from "../components/gallery/index";

export default class Application extends Component {
    render() {
        return (
            <>
                <div className="work-item-container">
                    <div className="category-title" style={{ backgroundColor: ApplicationData.themeColor }}>
                        <span className="subtitle">{`${ApplicationData.subTitle}\n`}</span>
                        <span className="title">{ApplicationData.title}</span>
                    </div>
                    {ApplicationData.works.map((work, index) => (
                        <Gallery {...work} key={`gallery-${index}`} imgUrl={require(`../../../resources/${work.imgUrl}`).default} />
                    ))}
                </div>
                <PreAndNext 
                    nextPath='/design'
                    prePath='/game'
                    preTitle='Games I participated in development' 
                    preColor='#BC9575' 
                    nextTitle='Graphic Visual Design' 
                    nextColor='#96A48B' 
                />
            </>
        )
    }
}