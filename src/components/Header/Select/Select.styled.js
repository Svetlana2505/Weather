import Select from 'react-select';
import styled from 'styled-components';

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: baseStyles => ({
      ...baseStyles,
      width: '194px',
      height: '37px',
      borderRadius: '10px',
      color: 'var(--background-theme)',
      background: 'var(--bg-select)',
      border: 'none',
    }),
    option: provided => ({
      ...provided,
      cursor: 'pointer',
      color: 'var(--color-text)',
      backgroundColor: 'var(--background)',
    }),
  },
})`
  & * {
    color: var(--color-subText) !important;
  }

  & > div[id] {
    background-color: var(--background);
  }
`;
