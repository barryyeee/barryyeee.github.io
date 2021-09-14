import React, { Component } from "react";
import "./selfIntro.css";

import selfIntroPic from "../../../../resources/self_intro.jpg";

import ContactArea from "../contactArea";
import BrowerWindow from "../../../../components/browserWindow";

export default class SelfIntro extends Component {
    render() {
        return (
            <div className="self-intro-container">
                <div className="self-intro">
                    <h1>Hello, Barry :)</h1>
                    <p style={{ fontSize: '22px' }}>A girl consists of vivid personalities. Creative ideas and logical thinking are wisely melted together to make work that stands out.</p>
                    <BrowerWindow title="IN BEIJING, NOVEMBER, 2020" picUrl={selfIntroPic} />
                    <p>Hey, I'm Shenqi Ye. You can call me Barry! Compared to professional stuff, I wanna introduce myself start with things I love which can define me better. Know first that I’m obsessed with art and books. I love swimming, drawing, and drama, and thrilling roller coasters and coffee make me happy. </p>
                    <p>Ok, now some education stuff. At present, I'm a graduate student at the University of Southern California(USC) and my major is Computer Science in Game Development. I really enjoy visual things so I have great interests in games, animation, interactive applications, graphics, digital media and these kinds of things. I finished my bachelor's degree in Digital Media Technology at Hangzhou Dianzi University, China.</p>
                    <p>Because of the Covid-19, I took one year's online courses in China last year. At the same time, I had a full-time job as a front-end developer in Meituan, Beijing. I was mainly responsible for the development of the WeChat mini program for a community group-buy department. It was a brand new experience for me and taught me plenty of skills that cannot be learned from school.</p>
                    <p>I'd like to become not only a programmer but a designer in the future, a designer in media and entertainment. A line of code, more interesting the world. That is the coolest thing I want to do!</p>
                    <ContactArea/>
                </div>
            </div>

        );
    }
}