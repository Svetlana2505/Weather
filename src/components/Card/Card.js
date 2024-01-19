import { Cards, DayInfo, TempDay, TempHight, Item } from './Card.styled';
import { useSelector } from 'react-redux';

export const Card = () => {
  const { daysWeather } = useSelector(state => state.days);

  return (
    <Cards>
      {daysWeather?.list
        ?.filter(obj => obj.dt_txt.includes('9:00:00'))
        // eslint-disable-next-line array-callback-return
        .map((day, index) => {
          if (index < 5) {
            let dt = new Date(day.dt * 1000).toLocaleString('ru', {
              weekday: 'long',
            });
            return (
              <Item key={day.dt}>
                <TempHight>{dt}</TempHight>
                <div>
                  <img
                    src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                    alt=""
                  />
                  <DayInfo>{day.weather[0].description}</DayInfo>
                </div>

                <TempHight>{day.dt_txt}</TempHight>
                <TempDay>{Math.floor(day?.main?.temp)}&deg;</TempDay>
              </Item>
            );
          }
        })}
    </Cards>
  );
};
