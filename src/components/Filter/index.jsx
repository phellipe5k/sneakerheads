import * as S from './style';
import Checkbox from '../Checkbox';
const Filter = ({ children }) => {
  const handleCheckBox = (target) => {
    console.log(target.checked)
  };

  return (
    <S.Wrapper>
      <S.ChecksSection>
        <S.Title>Price</S.Title>
        <Checkbox
          id="less-75"
          onChange={ handleCheckBox }
        >
          Less than $ 75,00
        </Checkbox>
        <Checkbox
          id="less-150"
          onChange={ handleCheckBox }
        >
          Less than$150,00
        </Checkbox>
        <Checkbox
          id="less-250"
          onChange={ handleCheckBox }
        >
          Less than $250,00
        </Checkbox>
        <Checkbox
          id="less-350"
          onChange={ handleCheckBox }
        >
          Less than $350,00
        </Checkbox>
        <Checkbox
          id="greater-400"
          onChange={ handleCheckBox }
        >
          Greater than $400,00
        </Checkbox>
        <Checkbox
          id="greater-1000"
          onChange={ handleCheckBox }
        >
          Greater than $1000,00
        </Checkbox>
      </S.ChecksSection>
      <S.Division/>
      <S.ChecksSection>
        <S.Title>Store</S.Title>
        <Checkbox
          id="0to50"
          onChange={ handleCheckBox }
        >
          De R$0,00 a R$ 50,00
        </Checkbox>
        <Checkbox
          id="0to100"
          onChange={ handleCheckBox }
        >
          Abaixo de R$100,00
        </Checkbox>
        <Checkbox
          id="0to150"
          onChange={ handleCheckBox }
        >
          Abaixo de R$150,00
        </Checkbox>
        <Checkbox
          id="0to200"
          onChange={ handleCheckBox }
        >
          Abaixo de R$200,00
        </Checkbox>
      </S.ChecksSection>
      <S.Division/>
      <S.ChecksSection>
        <S.Title>Brands</S.Title>
        <Checkbox
          id="0to50"
          onChange={ handleCheckBox }
        >
          De R$0,00 a R$ 50,00
        </Checkbox>
        <Checkbox
          id="0to100"
          onChange={ handleCheckBox }
        >
          Abaixo de R$100,00
        </Checkbox>
        <Checkbox
          id="0to150"
          onChange={ handleCheckBox }
        >
          Abaixo de R$150,00
        </Checkbox>
        <Checkbox
          id="0to200"
          onChange={ handleCheckBox }
        >
          Abaixo de R$200,00
        </Checkbox>
        <Checkbox
          id="free"
          onChange={ handleCheckBox }
        >
          Gratuito
        </Checkbox>
        <Checkbox
          id="discount"
          onChange={ handleCheckBox }
        >
          Com desconto
        </Checkbox>
      </S.ChecksSection>
    </S.Wrapper>
  )
}

export default Filter;
