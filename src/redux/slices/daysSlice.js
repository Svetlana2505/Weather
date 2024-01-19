import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '01d27c7b7b397ac9c2f6cbca600c60e8';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async city => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
      );
      console.log(data);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const fetchWeatherDays = createAsyncThunk(
  'weather/fetchWeatherDays',
  async city => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
      );

      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const daysSlice = createSlice({
  name: 'days',
  initialState: {
    city: 'Kharkiv',
    daysWeather: null,
    weather: null,
  },
  reducers: {
    setCity: (state, { payload }) => {
      state.city = payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(fetchWeather.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.weather = payload;
      })
      .addCase(fetchWeatherDays.fulfilled, (state, { payload }) => {
        state.daysWeather = payload;
      }),
});

export const { setCity, setDaysWeather } = daysSlice.actions;
export const daysReducer = daysSlice.reducer;
