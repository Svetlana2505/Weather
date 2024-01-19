import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherDays } from 'redux/slices/daysSlice';

import { Card } from 'components/Card/Card';
import { Wrapper } from './Days.styled';

export const Days = () => {
  const { city } = useSelector(state => state.days);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherDays(city));
  }, [city, dispatch]);

  return (
    <>
      <Wrapper>
        <Card />
      </Wrapper>
    </>
  );
};
