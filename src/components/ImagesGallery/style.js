import styled, { css } from 'styled-components';
import { mediaQuery } from '../../styles/theme';
import media from 'styled-media-query';


export const ImagesGallery = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  z-index: 10;
`;

export const ImageGallery = styled.img`
  width: 100%;
`;
