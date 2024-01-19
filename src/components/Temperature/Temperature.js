import cloud from '../../assets/cloud.png';
import { Wrapper, Images } from './Temperature.styled';

import { ThisDayItem } from '../ThisDayItem/ThisDayItem';

export const Temperature = () => {
  return (
    <Wrapper>
      <Images>
        <img src={cloud} alt="" width="460" />
      </Images>

      <div>
        <ThisDayItem />
      </div>
    </Wrapper>
  );
};
