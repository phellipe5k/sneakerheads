import * as S from './style';

const Select = ( {children, secondary, onChange } ) => {
  return (
    <S.Select secondary={secondary} onChange={onChange}>
      {children}
    </S.Select>
  )

}

export default Select;
