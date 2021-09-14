import React, { Component } from "react"
import { DesignData } from "../workData";
import "../common.css";

import PreAndNext from "../components/preAndNext";
import Gallery from "../components/gallery/index";
export default class Design extends Component {
    render() {
        return (
            <>
                <div className="work-item-container">
                    <div className="category-title" style={{ backgroundColor: DesignData.themeColor }}>
                        <span className="subtitle">{`${DesignData.subTitle}\n`}</span>
                        <span className="title">{DesignData.title}</span>
                    </div>
                    {DesignData.works.map((work, index) => (
                        <Gallery {...work} key={`gallery-${index}`} imgUrl={require(`../../../resources/${work.imgUrl}`).default} />
                    ))}
                </div>
                <PreAndNext 
                    nextPath='/drawing'
                    prePath='/application'
                    nextTitle='My favorite part: drawing!' 
                    nextColor='#A57A84' 
                    preTitle='Interactive Application' 
                    preColor='#757575' 
                />
            </>
        )
    }
}