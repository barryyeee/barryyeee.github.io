import React, { Component } from "react";

import SelfIntro from "./components/selfIntro/index";
import TopIntro from "./components/topIntro/index";
export default class About extends Component {
    render() {
        return (
            <>
                <TopIntro />
                <SelfIntro />
            </>
        )
    }
}