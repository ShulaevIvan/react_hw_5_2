import './App.css';
import Header from './components/Header/Header';
import SearhFrom from './components/SearchForm/SearchForm';
import Footer from './components/Footer/Footer';
import HeaderNewsTopLinks from './components/HeaderNewsTopLinks/HeaderNewsTopLinks';
import HeaderMainNews from './components/HeaderMainNews/HeaderMainNews';
import HeaderBannerBlock from './components/HeaderBannerBlock/HeaderBannerBlock';
import SearcInput from './components/SearchInput/SearchInput';
import SearchLinks from './components/SearchLinks/SearchLinks';
import FooterBanner from './components/FooterBanner/FooterBanner';
import FooterBlocks from './components/FooterBlocks/FooterBlocks';
import FooterBlockItem from './components/FooterBlockItem/FooterBlockItem';

function App() {
  const headerTopNews = {
    topLinks : [
        {text: 'Сейчас в СМИ', href: '#'}, 
        {text: 'в Германии', href: '#'},
        {text: 'Рекомендуем', href: '#'},
      ],
    date: '1 июля, среда 02 32',
  };

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
  };

  const headerBanner = {
    img: 'https://via.placeholder.com/75x75',
    title: 'Работа над ошибками',
    description: 'Смотрите на Яндексе и запоминайте',
    titleLink: '#',
  };

  const searchInputData = {
    logo: {img: 'https://via.placeholder.com/100x50', alt: 'test'},
    btnValue: 'Найти',
    description: 'Найдется все. Например, фаза луны сегодня'
  };

  const footerBannerData = {
    banner: {img: 'https://via.placeholder.com/1000x90', alt: 'banner'},
  };

  const weatherData = {
    type: 'weather',
    title: 'Погода',
    tempM: '+17',
    tempD: '+20',
  };

  const mapData = {
    type: 'map',
    title: 'Карта германии',
    content: [{text:'Расписание'}]
  };

  const etherData = {
    type: 'ether',
    title: 'Эфир',
    content: [
      {text: 'Управление как искувство', category: 'Успех'}, 
      {text: 'Ночь мир в это время', category: 'earch TV'},
      {text: 'Андрей Возн...', category: 'Совершенно секретно'},
    ]
  };
  
  const otherData = {
    type: 'other',
    title: 'Посещаемое',
    content: [
      {text: 'Недвижимость - о сталинках'},
      {text: 'Макет - люстры и светильники'},
      {text: 'Авто.ру - привод 4x4 до 500 000'},
    ]
  }

  const tvData = {
    type: 'tv',
    title: 'Телепрограма',
    content: [
      {time: '02:00', text: 'ТНТ.Best', category: 'ТНТ International'}, 
      {time: '02:15',  text: 'Джинглики', category: 'Карусель INT'},
      {time: '02:25', text: 'Наедине со всеми', category: 'Первый'},
    ]
  };



  return (
    <div className="App">
      <Header>
        <HeaderNewsTopLinks {...headerTopNews}></HeaderNewsTopLinks>
        <HeaderMainNews {...headerMainNews}>
          <HeaderBannerBlock {...headerBanner}></HeaderBannerBlock>
        </HeaderMainNews>
      </Header>
      <SearhFrom>
        <SearchLinks>
          <div className="search-header-link-item"><a rel="noreferrer" target="_blank" href="https://via.placeholder.com/100x50">Видео</a></div>
          <div className="search-header-link-item"><a rel="noreferrer" target="_blank"  href="https://via.placeholder.com/100x50">Картинки</a></div>
          <div className="search-header-link-item"><a rel="noreferrer" target="_blank" href="https://via.placeholder.com/100x50">Новости</a></div>
          <div className="search-header-link-item"><a rel="noreferrer" target="_blank" href="https://via.placeholder.com/100x50">Карты</a></div>
          <div className="search-header-link-item"><a rel="noreferrer" target="_blank" href="https://via.placeholder.com/100x50">Маркет</a></div>
          <div className="search-header-link-item"><a rel="noreferrer" target="_blank" href="https://via.placeholder.com/100x50">Переводчик</a></div>
          <div className="search-header-link-item"><a rel="noreferrer" target="_blank" href="https://via.placeholder.com/100x50">Еще</a></div>
        </SearchLinks>
        <SearcInput {...searchInputData}></SearcInput>
      </SearhFrom>
      <Footer>
        <FooterBanner {...footerBannerData}></FooterBanner>
        <FooterBlocks>
          <FooterBlockItem {...weatherData}></FooterBlockItem>
          <FooterBlockItem {...mapData}></FooterBlockItem>
          <FooterBlockItem {...etherData}></FooterBlockItem>
          <FooterBlockItem {...otherData}></FooterBlockItem>
          <FooterBlockItem {...tvData}></FooterBlockItem>
        </FooterBlocks>
      </Footer>
    </div>
  );
}

export default App;
