import { Container } from 'components/Container';
import { Days } from 'components/Days/Days';
import { Header } from 'components/Header/Header';
import { Temperature } from 'components/Temperature/Temperature';
import { ThisDay } from 'components/ThisDay.js/ThisDay';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from 'redux/slices/daysSlice';
import { Wrapper } from './Home.styled';

export const Home = () => {
  const dispatch = useDispatch();
  const { city } = useSelector(state => state.days);

  useEffect(() => {
    dispatch(fetchWeather(city));
  }, [dispatch, city]);

  return (
    <Container>
      <Header />
      <Wrapper>
        <ThisDay />
        <Temperature />
      </Wrapper>

      <Days />
    </Container>
  );
};
