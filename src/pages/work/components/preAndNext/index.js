import React, {Component} from "react";
import "./preAndNext.css";
import history from "../../../../utils/history";

export default class PreAndNext extends Component {
    handleClick(type) {
        const {nextPath, prePath, hideNextArrow, hidePreArrow} = this.props;
        if((type === 'pre' && hidePreArrow)|| (type === 'next' && hideNextArrow)) return;
        const path = type === 'pre' ? prePath : nextPath;
        history.push(path);
    }
    render() {
        return (
            <div className="pre-and-next-container">
                <div className="half-container" onClick={this.handleClick.bind(this, 'pre')} style={{backgroundColor: this.props.preColor}}>{`${this.props.hidePreArrow ? '' : '← '} ${this.props.preTitle}`}</div>
                <div className="half-container" onClick={this.handleClick.bind(this, 'next')} style={{backgroundColor: this.props.nextColor, textAlign: 'end'}}>{`${this.props.nextTitle} ${this.props.hideNextArrow ? '' : ' →'} `}</div>
            </div>
        )
    }
}