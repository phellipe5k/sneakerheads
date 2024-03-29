import { useState, useEffect } from 'react';
import * as S from './style';
import Base from '../Base';
import ImagesGallery from '../../components/ImagesGallery';
import { slide, dissolve } from '../../Animations';
import { Favorite, FavoriteBorder } from '@styled-icons/material';
import Select from '../../components/Select';
import Adidas from './icons/adidas';
import Nike from './icons/nike';
import Jordan from './icons/jordan';
import Fila from './icons/fila';
import Puma from './icons/puma';
import Converse from './icons/converse';
import Vans from './icons/vans';
import NewBalance from './icons/newBalance';
import { motion } from 'framer-motion';

const SneakerDetail = ({ sneaker, colors, luminosity }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [favorited, setFavorited] = useState(false);
  const {
    stockX: stockxLink,
    flightClub: flightClubLink,
    goat: goatLink,
    stadiumGoods: stadiumGoodsLink,
  } = sneaker.resellLinks;
const handleBrand = (brand) => {
    switch (brand) {
      case 'Nike':
        return <Nike />;
      case 'adidas':
        return <Adidas />;
      case 'Jordan':
        return <Jordan />;
      case 'Fila':
        return <Fila />;
      case 'Puma':
        return <Puma />;
      case 'Converse':
        return <Converse />;
      case 'Vans':
        return <Vans />;
      case 'New Balance':
        return <NewBalance />;
      default:
        return '';
    }
  }
  useEffect(() => {
    console.log(sneaker, 'uahsduhasda')
    const size = Object.keys(sneaker.lowestResellPrice.stockX)[0];
    setSelectedSize(size)
  }, [])
  const decide = () => {
    if(colors) {
      if (luminosity === 'light1' || luminosity === 'dark1') {
        return colors[1];
      } else {
        return colors[0];
      }
    }
    return 'white';
  }

  const validateNumber = (store) => {
    if(sneaker.lowestResellPrice[store] && sneaker.lowestResellPrice[store]) {
      return `$ ${sneaker.lowestResellPrice[store]}`;
    }
    return '- - - -'
  }
  return (
    <Base>
      <S.Container exit={{opacity: 0}} initial="initial" animate="animate" color={decide()}>
        <S.WrapImagesGallery>
        </S.WrapImagesGallery>
        <S.ShoesWrapper variants={ slide.up }>
          <S.Shoes urls={sneaker.thumbnail}></S.Shoes>
        </S.ShoesWrapper>
        <S.Void luminosity={luminosity ? luminosity : 'white'} variants={slide.right} >
          <S.Info>
            <S.Favorite luminosity={luminosity} onClick={() => setFavorited(!favorited)} favorited={favorited}>
              <FavoriteBorder id="stroke" />
              <Favorite id="filled" />
            </S.Favorite>
            <S.Title>{sneaker.shoeName}</S.Title>
            <S.Colorway luminosity={luminosity}>Colorway - {sneaker.colorway}</S.Colorway>
            <S.Release>Release Date: {sneaker.releaseDate}</S.Release>
            <S.Retail>Retail Price: <span>$ {sneaker.retailPrice}</span></S.Retail>
          </S.Info>
          <S.WrapSizes>
            <S.Sizes>
              <h3>Lowest prices</h3>
              <S.Stores>
                <S.Boxes href={ `${stockxLink}?size=${ selectedSize }` } target="_blank">
                  <S.Prices>{validateNumber('stockX')}</S.Prices>
                  <span>on</span>
                  <S.Logos src="https://svgshare.com/i/SWp.svg" />
                </S.Boxes>
                <S.Boxes href={ `${flightClubLink}` } target="_blank">
                <S.Prices>{validateNumber('flightClub')}</S.Prices>
                  <span>on</span>
                  <S.Logos src="https://svgshare.com/i/SWL.svg" />
                </S.Boxes>
                <S.Boxes href={ `${goatLink}` } target="_blank">
                <S.Prices>{validateNumber('goat')}</S.Prices>
                  <span>on</span>
                  <S.Logos src="https://svgshare.com/i/SWZ.svg" />
                </S.Boxes>
                <S.Boxes href={ `${stadiumGoodsLink}` } target="_blank">
                <S.Prices>{validateNumber('stadiumGoods')}</S.Prices>
                  <span>on</span>
                  <S.Logos src="https://svgshare.com/i/SY6.svg" />
                </S.Boxes>
              </S.Stores>
            </S.Sizes>
          </S.WrapSizes>
          <S.WrapDescription>
            <S.Description>
              { sneaker.description }
            </S.Description>
          </S.WrapDescription>
        </S.Void>

        <motion.svg variants={slide.right} id="background" width="1440" height="1033" viewBox="0 0 1440 1033" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M0 0996L1290.59 -76L1440 -60V1062L0 1046Z"/>
        <circle r="38.5" transform="matrix(1 0 0 -1 870 288)" fill="white" stroke="#3F3932" strokeWidth="5"/>
        {handleBrand(sneaker.brand)}
      </motion.svg>
      </S.Container>
    </Base>
  )
}

export default SneakerDetail;
