import React from "react";

// Header Wrap

const Header = (props) => {
    return (
        <React.Fragment>
            <header className="header-wrap">
                {props.children}
            </header>
        </React.Fragment>
    );
}

export default Header;