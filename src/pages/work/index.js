import React, { Component } from "react";
import history from "../../utils/history";

import "./index.css";
export default class Work extends Component {
    constructor() {
        super();
        this.state = {
            workList: [
                { text: 'GAME', path: '/game' },
                { text: 'APPLICATION', path: '/application' },
                { text: 'DESIGN', path: '/design' },
                { text: 'DRAWING', path: '/drawing' }
            ]
        }
    }
    handleClick(path) {
        history.push(path);
    }
    render() {
        return (
            <div id="box">
                {this.state.workList.map((work, index) => (
                    <div className="flex_div" key={`work-${index}`}>
                        <button type="button" onClick={this.handleClick.bind(this, work.path)}>{work.text}</button>
                    </div>
                ))}
            </div>
        )
    }
}