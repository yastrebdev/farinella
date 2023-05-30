import { Link } from 'react-router-dom';
import { items, sets } from '../../../data/products';
import HeaderBlock from '../../TitleBlock/TitleBlock';
import Categories from '../../Categories/Categories';
import ProductCard from '../../ProductCard/ProductCard';
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';
import mod from './Menu.module.scss';

const Menu = () => {
  const products = items.map(item => <ProductCard {...item}/>)
  const productsSets = sets.map(set => <ProductCard {...set}/>)
  return (
    <div className={mod.menu}>
      <div className="container">
        <HeaderBlock title={'Меню'} description={'Это вкусно'} />
        <Categories />
        <h3 className={mod.title}>Пицца</h3>
        <div className={`${mod.product_block} ${mod.product_block__margin}`}>
          {products}
        </div>
        <h3 className={`${mod.title} ${mod.title_sub}`}>Наборы для тех <br />кому лень выбирать</h3>
        <p className={mod.title_desc}>Выберите комбо на свой вкус, для себя,<br /> большой семьи или компании</p>
        <div className={`${mod.product_block} ${mod.product_block__margin}`}>
          {productsSets}
        </div>
        <div className={mod.menu__button}>
          <Link to='/catalog'>
            <ButtonPrimary buttonText={'Полное меню'}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;