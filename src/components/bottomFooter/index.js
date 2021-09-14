import React, {Component} from "react";

import "./bottomFooter.css";

export default class BottomFooter extends Component {
    render() {
        const footerText = 'STAY CUTE AND THINK CAREFULLY\nCopyright © 2021 Barryyeee ｜ Built with React ｜ Hosted by GitHub'
        return(
            <footer className="seperate-area">{footerText}</footer>
        )
    }
}