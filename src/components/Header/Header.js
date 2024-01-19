import svg from '../../assets/Header logo.svg';
import svgColor from '../../assets/colors.svg';

import { Wrapper, Heading } from './Header.styled';
import { useEffect, useState } from 'react';
import { Select } from './Select/Select';

export const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Wrapper>
      <Heading>
        <img src={svg} alt="" />
        <h2>React weather</h2>
      </Heading>
      <Heading>
        <img src={svgColor} alt="" onClick={toggleTheme} />
        <Select />
      </Heading>
    </Wrapper>
  );
};
