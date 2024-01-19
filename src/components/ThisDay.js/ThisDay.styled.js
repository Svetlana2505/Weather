import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 400px;
  height: 300px;
  border-radius: var(--radii);
  background: var(--background);
  box-shadow: var(--shadow);
  padding: 20px;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 31px;

  div {
    :not(:last-child) {
      margin-right: 67px;
    }
  }
`;

export const Buttom = styled.div`
  p {
    color: var(--color-text);
    font-size: 25px;
    :not(:last-child) {
      margin-bottom: 14px;
    }
  }
`;

export const Temp = styled.p`
  color: #4793ff;
  font-size: 76px;
  font-weight: var(--fw-normal);
`;

export const Day = styled.p`
  color: var(--color-subText);
  font-size: 40px;
`;

export const Box = styled.div`
  p {
    color: var(--color-text);
    font-size: var(--fs-md);
    font-weight: var(--fw-normal);
    text-align: center;
  }
`;
