import React from "react";


const SearhFrom = (props) => {
    return (
        <React.Fragment>
            <div className="search-main-container">
               {props.children}
            </div>
        </React.Fragment>
    );
}

export default SearhFrom;