import React from "react";

// Main input

const SearcInput = (props) => {
    return (
        <React.Fragment>
            <div className="search-container">
                <div className="logo-wrap">
                    <img src={props.logo.img} alt={props.logo.alt} />
                </div>
                <div className="search-wrap">
                    <div className="search-input-container">
                        <div className="search-input-wrap"><input type="text"/> <span className="search-keyboard-icon"></span></div>
                        <div className="search-btn-wrap">
                            <button className="search-start-btn" type="button">{props.btnValue}</button>
                        </div>
                    </div>
                    <div className="search-input-description">{props.description}</div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SearcInput;