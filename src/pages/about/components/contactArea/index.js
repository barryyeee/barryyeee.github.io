import React, { Component } from "react";
import CV from "../../../../resources/CV.pdf";
import "./contactArea.css";

export default class ContactArea extends Component {
    constructor() {
        super();
        this.state = {
            iconList: [
                { picName: 'email_icon.png', isHover: false },
                { picName: 'blog_icon.png', isHover: false },
                { picName: 'github_icon.png', isHover: false },
                { picName: 'resume_icon.png', isHover: false }
            ]
        }
    }
    onMouseEnter(index) {
        const newIconList = this.state.iconList;
        newIconList[index][`isHover`] = true;
        this.setState({
            iconList: newIconList
        });
    }
    onMouseLeave(index) {
        const newIconList = this.state.iconList;
        newIconList[index][`isHover`] = false;
        this.setState({
            iconList: newIconList
        });
    }
    onMouseClick(index) {
        switch (index) {
            case 0:
                this.sendEmail();
                break;
            case 1:
                window.open('https://www.cnblogs.com/barryyeee/');
                break;
            case 2:
                window.open('https://github.com/barryyeee');
                break;
            case 3:
                this.downloadCV();
                break;
            default: break;
        }
    }
    sendEmail() {
        const link = document.createElement('a');
        link.href = 'mailto:shenqiye@usc.edu';
        link.click();
    }
    downloadCV() {
        const link = document.createElement('a');
        link.href = CV;
        link.target = "_blank";
        link.click();
    }
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };
    render() {
        return (
            <div className="contact-area">
                {this.state.iconList.map((icon, index) => (
                    <div key={`contact-${index}`} className="icon-container" onClick={this.onMouseClick.bind(this, index)} onMouseEnter={this.onMouseEnter.bind(this, index)} onMouseLeave={this.onMouseLeave.bind(this, index)}>
                        <img className="dynamic-icon" src={require(`../../../../resources/UI/${icon.picName}`).default} alt=" " />
                        <div className={`dynamic-icon-wrap ${icon.isHover ? 'dynamic-icon-effect' : ''}`}></div>
                    </div>
                ))}
            </div>
        )
    }
}