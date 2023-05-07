import React from "react";


const Header = () => {
    return (
        <React.Fragment>
            <header className="header-wrap">
                <div className="news-row-wrap">
                    <div className="news-item item-bolder"><a href="#">Сейчас в СМИ</a></div>
                    <div className="news-item"><a href="#">в Германии</a></div>
                    <div className="news-item"><a href="#">Рекомендуем</a></div>
                    <div className="new-item news-item-date">31 июля, среда 02 32</div>
                </div>
                <div className="header-main-row-wrap">
                    <div className="news-row-full-wrap">
                        <div className="news-item-full"><span className="news-item-icon"></span>Новость 1 фывафввввввввввввввввввввввввввввввввввввв</div>
                        <div className="news-item-full"><span className="news-item-icon"></span>Новость 1 фывафввввввввввввввввввввввввввввввввввввв</div>
                        <div className="news-item-full"><span className="news-item-icon"></span>Новость 1 фывафввввввввввввввввввввввввввввввввввввв</div>
                        <div className="news-item-full"><span className="news-item-icon"></span>Новость 1 фывафввввввввввввввввввввввввввввввввввввв</div>
                        <div className="news-item-full"><span className="news-item-icon"></span>Новость 1 фывафввввввввввввввввввввввввввввввввввввв</div>
                        <div className="exchange-rate-wrap">
                            <div className="usd-moex">usd moex 63,52 <span className="moex-persent">+ 0,09</span></div>
                            <div className="eur-moex">eur moex 70,86 <span className="moex-persent">+ 0,07</span></div>
                            <div className="oil-moex">нефть 64,90 <span className="exchange-rate-percent">+ 1.63%</span></div>
                        </div>
                    </div>
                    <div className="banner-block-wrap">
                        <div className="banner-img-wrap">
                            <img src="https://via.placeholder.com/75x75" alt="#" />
                        </div>
                        <div className="banner-content-wrap">
                            <h3><a href="#">Работа над ошибками</a></h3>
                            <p>Смотрите на Яндексе и запоминайте</p>
                        </div>
                    </div>
                </div>
                

            </header>
        </React.Fragment>
    );
}

export default Header;