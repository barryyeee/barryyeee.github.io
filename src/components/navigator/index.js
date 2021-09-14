import React, { Component } from "react";
import "./navigator.css";
import { matchPath } from "react-router";
import history from "../../utils/history";

const workPath = ['/game', '/design', '/application', '/drawing', '/work'];
export default class Navigator extends Component {
    constructor() {
        super();
        this.state = {
            nav: [
                { title: "A B O U T", path: "/" },
                { title: "W O R K", path: "/work" }
            ],
            activeId: this.getCurrentPageIndex()
        }
    }
    getCurrentPageIndex() {
        const currentPath = history.location.pathname;
        const isAboutPage = !matchPath(currentPath, {
            path: workPath,
            exact: true,
            strict: false
        });
        return isAboutPage ? 0 : 1;
    }
    handleClick(index, navItem) {
        if (index === 0 && index === this.state.activeId) return;
        this.setState({
            activeId: index
        });
        this.setHistory = setTimeout(() => {
            history.push(navItem.path);
        }, 1000)
    }
    render() {
        return (
            <div className="nav-container">
                <ul className="item-wrap">
                    {this.state.nav.map((item, index) => (
                        <label className={this.state.activeId === index ? 'actived-style' : ''} key={`nav-${index}`} onClick={this.handleClick.bind(this, index, item)}>{item.title}</label>
                    ))}
                </ul>
            </div>
        )
    }
}