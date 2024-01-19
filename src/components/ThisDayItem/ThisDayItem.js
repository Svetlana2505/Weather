import { Wrapper, Images, Name, Value, Item } from './ThisDayItem.styled';
import temp from '../../assets/temp.svg';
import pressure from '../../assets/pressure.svg';
import pres from '../../assets/precipitation.png';
import wind from '../../assets/wind.svg';
import { useSelector } from 'react-redux';

export const ThisDayItem = () => {
  const { weather } = useSelector(state => state.days);

  return (
    <Wrapper>
      <Item>
        <Images>
          <img src={temp} alt="" />
        </Images>
        <Name>Ощущается как </Name>
        <Value>{Math.floor(weather?.main?.feels_like)}&deg;</Value>
      </Item>
      <Item>
        <Images>
          <img src={wind} alt="" />
        </Images>
        <Name>Скорость ветра: </Name>
        <Value>{Math.floor(weather?.wind?.speed)}км/ч</Value>
      </Item>
      <Item>
        <Images>
          <img src={pressure} alt="" />
        </Images>
        <Name>Атмосферное давление: </Name>
        <Value>{weather?.main?.pressure}mm.</Value>
      </Item>
      <Item>
        <Images>
          <img src={pres} alt="" />
        </Images>
        <Name>Влажность: </Name>
        <Value>{weather?.main?.humidity}% </Value>
      </Item>
    </Wrapper>
  );
};

// export const ThisDayItem = ({ item: { icon_id, name, value } }) => {
//   return (
//     <Wrapper>
//       <Images>
//         <img src={icon_id} alt="" width="25" />
//       </Images>

//       <Name> {name}</Name>
//       <Value>{value}</Value>
//     </Wrapper>
//   );
// };
