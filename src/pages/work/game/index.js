import React, { Component } from "react"
import { GameData } from "../workData";
import "../common.css";

import PreAndNext from "../components/preAndNext";
import Gallery from "../components/gallery/index";

export default class Game extends Component {
    render() {
        return (
            <>
                <div className="work-item-container">
                    <div className="category-title" style={{ backgroundColor: GameData.themeColor }}>
                        <span className="subtitle">{`${GameData.subTitle}\n`}</span>
                        <span className="title">{GameData.title}</span>
                    </div>
                    {GameData.works.map((work, index) => (
                        <Gallery {...work} key={`gallery-${index}`} imgUrl={require(`../../../resources/${work.imgUrl}`).default} />
                    ))}
                </div>
                <PreAndNext 
                    nextPath='/application'
                    preTitle='This is the beginning' 
                    preColor='black' 
                    hidePreArrow={true} 
                    nextTitle='Interactive Application' 
                    nextColor='#757575' 
                />
            </>
        )
    }
}