import React from "react";
// Footer Column ROW

const FooterBlocks = (props) => {
    return (
        <React.Fragment>
            <div className="footer-column-row">
               {props.children}
            </div>
        </React.Fragment>
    );
}

export default FooterBlocks;