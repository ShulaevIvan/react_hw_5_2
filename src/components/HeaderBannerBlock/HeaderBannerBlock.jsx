import React from "react";

// Header left Banner block

const HeaderBannerBlock = (props) => {
    return (
        <React.Fragment>
            <div className="banner-block-wrap">
                <div className="banner-img-wrap">
                    <img src={props.img} alt={props.img} />
                </div>
                <div className="banner-content-wrap">
                    <h3><a href={props.titleLink}>{props.title}</a></h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HeaderBannerBlock;