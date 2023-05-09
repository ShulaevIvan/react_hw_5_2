import React from "react";

// main input links

const SearchLinks = (props) => {
    return (
        <React.Fragment>
            <div className="search-header-links-wrap">
                {props.children}
            </div>
        </React.Fragment>
    );
}

export default SearchLinks;