import { Wrapper, Top, Buttom, Temp, Day, Box } from './ThisDay.styled';
import { useSelector } from 'react-redux';

export const ThisDay = () => {
  const { daysWeather } = useSelector(state => state.days);

  return (
    <Wrapper>
      <Top>
        <div>
          <Temp>{Math.floor(daysWeather?.list[0]?.main?.temp)}&deg;</Temp>
          <Day>Сегодня</Day>
        </div>
        <div>
          {daysWeather?.list[0]?.weather?.map(({ id, description, icon }) => (
            <Box key={id}>
              <img
                src={`http://openweathermap.org/img/w/${icon}.png`}
                alt=""
                width="100px"
              />
              <p>{description}</p>
            </Box>
          ))}
        </div>
      </Top>
      <Buttom>
        <p>Город: {daysWeather?.city?.name}</p>
      </Buttom>
    </Wrapper>
  );
};
