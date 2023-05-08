import React from "react";

const HeaderNewsTopLinks = (props) => {
    return (
        <React.Fragment>
            <div className="news-row-wrap">
                {props.topLinks.map((link, i) => {
                    return (
                        <div key={i} className={i === 0 ? 'news-item item-bolder' : 'news-item'}>
                            <a href={link.href}>{link.text}</a>
                        </div>
                    );
                })}
                <div className="new-item news-item-date">{props.date}</div>
            </div>
        </React.Fragment>
    )
}

export default HeaderNewsTopLinks;