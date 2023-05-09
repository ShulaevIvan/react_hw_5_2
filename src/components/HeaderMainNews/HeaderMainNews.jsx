import React from "react";

// Header full links

const HeaderMainNews = (props) => {
    return (
        <React.Fragment>
            <div className="header-main-row-wrap">
                <div className="news-row-full-wrap">
                    {props.news.map((item, i) => {
                        return (
                            <div key={i} className="news-item-full"><span className={item.icon}></span><a href={item.href}>{item.text}</a></div>
                        );
                    })}
                </div>
                {props.children}
            </div>
        </React.Fragment>
    );
}

export default HeaderMainNews;