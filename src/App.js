import './App.css';
import Header from './components/Header/Header';
import SearhFrom from './components/SearchForm/SearchForm';
import Footer from './components/Footer/Footer';
import HeaderNewsTopLinks from './components/HeaderNewsTopLinks/HeaderNewsTopLinks';
import HeaderMainNews from './components/HeaderMainNews/HeaderMainNews';
import HeaderBannerBlock from './components/HeaderBannerBlock/HeaderBannerBlock';

function App() {
  const headerTopNews = {
    topLinks : [
        {text: 'Сейчас в СМИ', href: '#'}, 
        {text: 'в Германии', href: '#'},
        {text: 'Рекомендуем', href: '#'},
      ],
    date: '1 июля, среда 02 32',
  }

  const headerMainNews = {
    news: [
      {
        text: 'tesssssssssssssssssttttttttttttestset',
        href: '#',
        icon: 'news-item-icon',
      },
      {
        text: 'tesssssssssssssssssttttttttttttestset',
        href: '#',
        icon: 'news-item-icon2',
      },
      {
        text: 'tesssssssssssssssssttttttttttttestset',
        href: '#',
        icon: 'news-item-icon',
      },
      {
        text: 'tesssssssssssssssssttttttttttttestset',
        href: '#',
        icon: 'news-item-icon2',
      },
      {
        text: 'tesssssssssssssssssttttttttttttestset',
        href: '#',
        icon: 'news-item-icon',
      },
    ],
    courses: {
      usd: 63.52,
      eur: 70.86,
      oil: 64.90,
      usdPersent: 0.09,
      eurPersent: 0.07,
      oilPersent: 1.63,
    }
  }

  const headerBanner = {
    img: 'https://via.placeholder.com/75x75',
    title: 'Работа над ошибками',
    description: 'Смотрите на Яндексе и запоминайте',
    titleLink: '#',
  }


  return (
    <div className="App">
      <Header>
        <HeaderNewsTopLinks {...headerTopNews}></HeaderNewsTopLinks>
        <HeaderMainNews {...headerMainNews}>
          <HeaderBannerBlock {...headerBanner}></HeaderBannerBlock>
        </HeaderMainNews>
      </Header>
      <SearhFrom></SearhFrom>
      <Footer></Footer>
    </div>
  );
}

export default App;
