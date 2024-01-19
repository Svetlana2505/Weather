import styled from 'styled-components';

export const Wrapper = styled.ul`
  flex-direction: column;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Images = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background);
  box-shadow: var(--shadow);
  border-radius: 50%;
  margin-right: 20px;
`;

export const Name = styled.p`
  color: var(--color-text);
  font-size: var(--fs-md);
  margin-right: 20px;
  z-index: 100;
`;

export const Value = styled.p`
  color: var(--color-subText);
  font-size: var(--fs-md);
  z-index: 100;
`;
