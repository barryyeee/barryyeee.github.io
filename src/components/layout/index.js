import React from "react";
import "../../index.css";

import Navigator from "../navigator";
import BottomFooter from "../bottomFooter";

const Layout = (props) => {
    const {showNav = true, showFooter = true, history} = props;
    return (
        <div className="page">
            {showNav && <Navigator history={history}/>}
            {props.children}
            {showFooter && <BottomFooter />}
        </div>
    )
}

export default Layout;