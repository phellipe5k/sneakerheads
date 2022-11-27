import { useContext, useEffect, useState } from 'react';
import Context from '../../Provider/Context';
import * as S from './style';
import Sneaker from '../Sneaker';
import { stagger, hoverScale, tapScale } from '../../Animations';


const getFieldNumber = (field) => {
  return parseInt(field.split('_')[field.split('_').length - 1]);
}

const SneakerList = ({sneaker}) => {
  const { filter: filterC } = useContext(Context);
  let filtersFormat = (filter) => {
    if (!filter || !filter.price) return;
    let getFields = Object.keys(filter.price).map((cur, acc) => {
      if(filter.price[cur]) return { [cur.includes('less') ? 'less' : 'greater']: getFieldNumber(cur) };
    }).filter(e => !!e);
    return getFields;
  }
  let filter = filtersFormat(filterC)

  useEffect(() => {
  }, [sneakersList])

  const [sneakersList, setSneakersList] = useState(sneaker.filter(sneaker => {
    let values = Object.values(sneaker.lowestResellPrice);
    console.log(filter, 'uahsduahsads')
    return values.some(e => {
      if (filter && filter[0] && Object.keys(filter[0])[0] === 'less') e <= Object.values(filter[0])[0];
      return false;
    } )
    // let filterValues = 
    console.log(sneaker, 'item')
    return true;
  }))
  


  return (
    <S.Wrapper variants={ stagger }>
      {sneaker.map((sneaker, index) => (
        <S.SneakerWrapper key={index} hoverScale={ hoverScale } whileTap={ tapScale } >
        <Sneaker item={sneaker} />
      </S.SneakerWrapper>
      ))}
    </S.Wrapper>
  )
}

export default SneakerList;
