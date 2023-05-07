import React from "react";

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer-wrap">
            <div className="banner-wrap">
                <img src="https://via.placeholder.com/1000x90"  alt="banner"/>
            </div>
            <div className="footer-column-row">
                <div className="footer-cloumn-item">
                    <div className="weather-wrap">
                        <div className="footer-cloumn-item-title"><h4>Погода</h4></div>
                        <div className="footer-cloumn-item-values">
                            <div className="weather-values-row">
                                <div className="weater-temp">
                                    <span  className="weather-icon"></span>
                                    <span  className="weather-value"></span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="footer-cloumn-item">
                    <div className="footer-cloumn-item-title"><h4>Карта Германии</h4></div>
                    <div className="footer-cloumn-item-values">
                        <p>Расписание</p>
                    </div>
                </div>
                <div className="footer-cloumn-item">
                    <div className="footer-cloumn-item-title"><h4>Эфир</h4></div>
                    <div className="footer-cloumn-item-values">
                        <span className="paly-icon"></span> Управление как искувство <span className="category">Успех</span>
                        <span className="paly-icon"></span> Ночь мир в это время <span className="category">earch TV</span>
                        <span className="paly-icon"></span> Андрей Возн...<span className="category">Совершенно секретно</span>
                    </div>
                </div>
                <div className="footer-cloumn-item">
                    <div className="footer-cloumn-item-title"><h4>Посещаемое</h4></div>
                    <div className="footer-cloumn-item-values">
                        <p>Недвижимость - о сталинках</p>
                        <p>Макет - люстры и светильники</p>
                        <p>Авто.ру - привод 4x4 до 500 000</p>
                    </div>
                </div>
                <div className="footer-cloumn-item">
                    <div className="footer-cloumn-item-title"><h4>Телепрограма</h4></div>
                    <div className="footer-cloumn-item-values">
                        <p>02:00 ТНТ.Best<span className="tv-category">ТНТ International</span></p>
                        <p>02:15 Джинглики<span className="tv-category">Карусель INT</span></p>
                        <p>02:25 Наедине со всеми<span className="tv-category">Первый</span></p>
                    </div>
                </div>
            </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;