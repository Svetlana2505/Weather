import styled from 'styled-components';

export const Cards = styled.ul`
  display: flex;

  h2 {
    color: var(--color-subText);
    font-size: 18px;
    font-weight: var(--fw-normal);
    margin-bottom: 7px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 149px;
  height: 200px;
  border-radius: var(--radii);
  background: var(--background-card);
  padding: 11px;

  :not(:last-child) {
    margin-right: 20px;
  }
`;

export const DayInfo = styled.p`
  color: var(--color-text);
  font-size: var(--fs-sm);
  margin-bottom: 7px;
`;

export const TempDay = styled.p`
  color: var(--color-subText);
  font-size: 18px;
  font-weight: var(--fw-normal);
  margin-top: 7px;
`;

export const TempHight = styled.p`
  color: var(--color-text);
  font-size: 13px;
  font-weight: var(--fw-normal);
`;
