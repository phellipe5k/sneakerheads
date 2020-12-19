import Link from 'next/link';
import { useState } from 'react';
import * as S from './style';
import Navigation from '../Navigation';
import Logo from '../Logo';
import Button from '../Button';
import { MenuAlt1 } from '@styled-icons/heroicons-outline/MenuAlt1';
import { User as UserIcon} from '@styled-icons/fa-regular/User';
import { User as UserSolid } from '@styled-icons/boxicons-solid/User';
import { SignInAlt } from '@styled-icons/fa-solid/SignInAlt';
import { BookmarkStarFill } from '@styled-icons/bootstrap/BookmarkStarFill';
import { DownArrow } from '@styled-icons/boxicons-solid/DownArrow';

const User = ({ logged }) => {
  const [dropDownVisible, setDropDownVisible] = useState(false);
  return logged
  ? (
    <S.User>
      <S.Name
        visible={dropDownVisible}
      >
      <UserIcon width="20" />
        João 
      <S.WrapDrop>
        <DownArrow
          width="15"
          id="arrow-down"
          onClick={() => setDropDownVisible(!dropDownVisible)}
        />
        <S.DropDown visible={dropDownVisible}>
          <UserSolid id="user-solid"/>
          <SignInAlt id="sign-out"/>
        </S.DropDown>
      </S.WrapDrop>
      </S.Name>
      <BookmarkStarFill width="30" />
    </S.User>
  )
  : (
   <Link href="/sign-in"><a><Button styles="secondary">L O G I N</Button></a></Link>
   )
}

export default User;
