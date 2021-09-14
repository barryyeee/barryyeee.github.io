import React, {Component} from "react";
import "./mobile.css";
export default class Mobile extends Component {
    render() {
        return(
            <div className="mobile-container">
                <div className="middle-text">
                    <p>Hello,barry:)</p>
                    <p style={{textDecoration: 'underline'}}>shenqiye@usc.edu</p>
                </div>
                <div className="bottom-tips">
                    Not available on mobile. Best on desktop with google chrome.
                </div>
            </div>
        )
    }
}