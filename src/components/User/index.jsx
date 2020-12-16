import { useState } from 'react';
import * as S from './style';
import Navigation from '../Navigation';
import Logo from '../Logo';
import { MenuAlt1 } from '@styled-icons/heroicons-outline/MenuAlt1';
import { User as UserIcon} from '@styled-icons/fa-regular/User';
import { User as UserSolid } from '@styled-icons/boxicons-solid/User';
import { SignInAlt } from '@styled-icons/fa-solid/SignInAlt';
import { BookmarkStarFill } from '@styled-icons/bootstrap/BookmarkStarFill';
import { DownArrow } from '@styled-icons/boxicons-solid/DownArrow';
import MenuSearchBar from '../MenuSearchBar';

const User = () => {
  const [dropDownVisible, setDropDownVisible] = useState(false)
  return (
    <S.User>
      <S.Name
        visible={dropDownVisible}
      >
      <UserIcon width="20" />
        João 
      <S.WrapDrop>
        <DownArrow
          width="15"
          className="arrow-down"
          onClick={() => setDropDownVisible(!dropDownVisible)}
        />
        <S.DropDown visible={dropDownVisible}>
          <UserSolid className="user-solid"/>
          <SignInAlt className="sign-out "/>
        </S.DropDown>
      </S.WrapDrop>
      </S.Name>
      <BookmarkStarFill width="25" />
    </S.User>
  )
}

export default User;
