import React from "react";

// Footer Banner

const FooterBanner = (props) =>{
    return (
        <React.Fragment>
            <div className="banner-wrap">
                <img src={props.banner.img}  alt={props.banner.alt}/>
            </div>
        </React.Fragment>
    );
}

export default FooterBanner;