import React from "react";


const SearhFrom = () => {
    return (
        <React.Fragment>
            <div className="search-main-container">
                <div className="search-header-links-wrap">
                    <div className="search-header-link-item">
                        <a rel="noreferrer" target="_blank" href="https://via.placeholder.com/100x50">Видео</a>
                    </div>
                    <div className="search-header-link-item">
                        <a rel="noreferrer" target="_blank"  href="https://via.placeholder.com/100x50">Картинки</a>
                    </div>
                    <div className="search-header-link-item">
                        <a rel="noreferrer" target="_blank" href="https://via.placeholder.com/100x50">Новости</a>
                    </div>
                    <div className="search-header-link-item">
                        <a rel="noreferrer" target="_blank" href="https://via.placeholder.com/100x50">Карты</a>
                    </div>
                    <div className="search-header-link-item">
                        <a rel="noreferrer" target="_blank" href="https://via.placeholder.com/100x50">Маркет</a>
                    </div>
                    <div className="search-header-link-item">
                        <a rel="noreferrer" target="_blank" href="https://via.placeholder.com/100x50">Переводчик</a>
                    </div>
                    <div className="search-header-link-item">
                        <a rel="noreferrer" target="_blank" href="https://via.placeholder.com/100x50">Еще</a>
                    </div>
                </div>
                <div className="search-container">
                    <div className="logo-wrap">
                        <img src="https://via.placeholder.com/100x50" alt="search" />
                    </div>
                    <div className="search-wrap">
                        <div className="search-input-container">
                            <div className="search-input-wrap"><input type="text"/> <span className="search-keyboard-icon"></span></div>
                            <div className="search-btn-wrap">
                                <button className="search-start-btn" type="button">Найти</button>
                            </div>
                        </div>
                        <div className="search-input-description">Найдется все. Например, <span>фаза луны сегодня</span></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SearhFrom;