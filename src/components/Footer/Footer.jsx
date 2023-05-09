import React from "react";

const Footer = (props) => {
    return (
        <React.Fragment>
            <footer className="footer-wrap">
                {props.children}
            </footer>
        </React.Fragment>
    );
}

export default Footer;