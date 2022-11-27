import { useContext } from 'react';
import Context from '../../Provider/Context';
import * as S from './style';
import Checkbox from '../Checkbox';
const Filter = ({ children }) => {
  const { filter, setFilter } = useContext(Context);
  const handleCheckBox = (target) => {
    setFilter(v => ({ ...v, price: { ...v.price, [target.id]: target.checked } }));
  };

  return (
    <S.Wrapper>
      <S.ChecksSection>
        <S.Title>Price</S.Title>
        <Checkbox
          id="less_75"
          onChange={ handleCheckBox }
        >
          Less than $ 75,00
        </Checkbox>
        <Checkbox
          id="less_150"
          onChange={ handleCheckBox }
        >
          Less than$150,00
        </Checkbox>
        <Checkbox
          id="less_250"
          onChange={ handleCheckBox }
        >
          Less than $250,00
        </Checkbox>
        <Checkbox
          id="less_350"
          onChange={ handleCheckBox }
        >
          Less than $350,00
        </Checkbox>
        <Checkbox
          id="greater_400"
          onChange={ handleCheckBox }
        >
          Greater than $400,00
        </Checkbox>
        <Checkbox
          id="greater_1000"
          onChange={ handleCheckBox }
        >
          Greater than $1000,00
        </Checkbox>
      </S.ChecksSection>
      <S.Division/>
      <S.ChecksSection>
        <S.Title>Store</S.Title>
        <Checkbox
          id="flightclub"
          onChange={ handleCheckBox }
        >
          <S.Image src="images/flightclub.svg"/>
        </Checkbox>
        <Checkbox
          id="stockx"
          onChange={ handleCheckBox }
        >
          <S.Image src="images/stockx.svg"/>
        </Checkbox>
        <Checkbox
          id="goat"
          onChange={ handleCheckBox }
        >
          <S.Image src="images/goat.svg" />
        </Checkbox>
        <Checkbox
          id="0to200"
          onChange={ handleCheckBox }
        >
          <S.Image src="images/stadiumgoods.svg" />
        </Checkbox>
      </S.ChecksSection>
      <S.Division/>
      <S.ChecksSection>
        <S.Title>Brands</S.Title>
        <Checkbox
          id="nike"
          onChange={ handleCheckBox }
        >
          <S.Image src="images/nike.svg" />
        </Checkbox>
        <Checkbox
          id="jordan"
          onChange={ handleCheckBox }
        >
          <S.Image src="images/jordan.svg" />
        </Checkbox>
        <Checkbox
          id="adidas"
          onChange={ handleCheckBox }
        >
          <S.Image src="images/adidas.svg" />
        </Checkbox>
        <Checkbox
          id="vans"
          onChange={ handleCheckBox }
        >
          <S.Image src="images/vans.svg" />
        </Checkbox>
        <Checkbox
          id="puma"
          onChange={ handleCheckBox }
        >
          <S.Image src="images/puma.svg" />
        </Checkbox>
        <Checkbox
          id="fila"
          onChange={ handleCheckBox }
        >
          <S.Image src="images/fila.svg" />
        </Checkbox>
        <Checkbox
          id="new-balance"
          onChange={ handleCheckBox }
        >
          <S.Image src="images/new_balance.svg" />
        </Checkbox>
        <Checkbox
          id="converse"
          onChange={ handleCheckBox }
        >
          <S.Image src="images/converse.svg" />
        </Checkbox>
      </S.ChecksSection>
    </S.Wrapper>
  )
}

export default Filter;
