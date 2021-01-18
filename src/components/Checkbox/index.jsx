import * as S from './style';

const Checkbox = ({ children, onChange, id }) => {
  return (
    <S.CheckWrapper>
      <S.Checkbox onChange={({target}) => onChange(target)} type="checkbox" id={id} name="0to50"/>
      <label htmlFor={id}>{children}</label>
    </S.CheckWrapper>
  )
}

export default Checkbox;
