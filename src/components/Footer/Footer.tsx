// import brandDecor from '../../assets/image/brand-decor.png';
import phone from '../../assets/image/phone.svg';
import email from '../../assets/image/email.svg';
import mir from '../../assets/image/mir.png';
import visa from '../../assets/image/visa.png';
import masterCard from '../../assets/image/masterCard.png';

import mod from './Footer.module.scss';
import Media from './Media/Media';

const Footer = () => {

  return (
    <div id='contacts' className={mod.footer}>
      <div className="container">
        <div className={mod.footer__wrapper}>
          <Media />
          <div className={mod.footer__info}>
            <div className={mod.footer__item1}>
              <h4 className={mod.footer__title}>Ресторан</h4>
              <ul className={mod.footer__menu}>
                <a href="#none">
                  <li>Программа лояльности</li>
                </a>
                <a href="#none">
                  <li>Условия доставки</li>
                </a>
                <a href="#none">
                  <li>Акции доставки</li>
                </a>
                <a href="#none">
                  <li>Франшиза</li>
                </a>
                <a href="#none">
                  <li>Акции ресторанов</li>
                </a>
              </ul>
            </div>
            <div className={mod.footer__gridcontainer}>
              <div className={mod.footer__item2}>
                <h4 className={mod.footer__title}>Где нас найти?</h4>
                <p>
                  4517 Washington Ave.
                  <br /> Manchester, Kentucky 39495
                </p>
              </div>
              <div className={mod.footer__item3}>
                <h4 className={mod.footer__title}>Контакты</h4>
                <div>
                  <img src={phone} alt="phone" />
                  <span>8 (800) 245 - 12 - 25</span>
                </div>
                <div>
                  <img src={email} alt="email" />
                  <span>nathan.roberts@example.com</span>
                </div>
              </div>
              <div className={mod.footer__item4}>
                <div className={mod.footer__pay}>
                  <div className={mod.footer__img}>
                    <img src={mir} alt="mir" />
                  </div>
                  <div className={mod.footer__img}>
                    <img src={visa} alt="visa" />
                  </div>
                  <div className={mod.footer__img}>
                    <img src={masterCard} alt="masterCard" />
                  </div>
                </div>
              </div>
            </div>
            <div className={mod.footer__bot}>
              <div className={mod.footer__line}></div>
              <div className={mod.footer__copyright}>
                <span>Все права защищены</span>
                <a href="#none">Пользовательское соглашение</a>
                <a href="#none">Политика обработки данных</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img
        className={mod.footer__decor}
        src={brandDecor}
        alt="decor"
      /> */}
    </div>
  );
};

export default Footer;
