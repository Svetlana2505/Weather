import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  h2 {
    color: #4793ff;
    font-size: 25px;
    font-weight: var(--fw-bold);
    text-transform: uppercase;
  }

  img {
    margin-right: 20px;
  }
`;
