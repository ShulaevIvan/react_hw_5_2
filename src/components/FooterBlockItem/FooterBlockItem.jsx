import React from "react";
// Footer Block Items (Weater  Map and other)

const FooterBlockItem = (props) => {
    if (props.type === 'weather') {
        return (
            <React.Fragment>
                <div className="footer-cloumn-item">
                    <div className="weather-wrap">
                        <div className="footer-cloumn-item-title"><h4>{props.title}</h4></div>
                            <div className="footer-cloumn-item-values">
                                <div className="weather-values-row">
                                    <div className="weather-main-icon-wrap">
                                        <span className="weather-main-icon"></span>
                                    </div>
                                    <div className="weater-temp">
                                        <span  className="weather-icon">Утром {props.tempM} °C</span> 
                                        <span  className="weather-value">Днем {props.tempD} °C</span>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
    return (
        <React.Fragment>
            <div className="footer-cloumn-item">
                <div className="footer-cloumn-item-title"><h4>{props.title}</h4></div>
                <div className="footer-cloumn-item-values">
                    {props.content ? props.content.map((item, i) => {
                        return (
                            <React.Fragment key={i}>
                                <p>{item.text}</p>
                            </React.Fragment>
                        );
                    }): null}
                </div>
            </div>
        </React.Fragment>
    );
}

export default FooterBlockItem;