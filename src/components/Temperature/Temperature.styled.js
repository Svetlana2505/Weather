import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 750px;
  height: 300px;
  border-radius: 20px;
  background: var(--background);
  box-shadow: var(--shadow);
  padding: 47px 0 41px 32px;
  position: relative;
`;

export const Images = styled.div`
  img {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
