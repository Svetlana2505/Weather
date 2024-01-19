import styled from 'styled-components';
// import Select from 'react-select';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  h2 {
    color: #4793ff;
    font-size: 25px;
    font-weight: var(--fw-bold);
    text-transform: uppercase;
  }

  img {
    margin-right: 20px;
  }
`;

// export const CustomSelect = styled(Select).attrs({
//   styles: {
//     control: baseStyles => ({
//       ...baseStyles,
//       width: '194px',
//       height: '37px',
//       borderRadius: '10px',
//       color: 'var(--background-theme)',
//       background: 'var(--bg-select)',
//       border: 'none',
//     }),
//     option: provided => ({
//       ...provided,
//       cursor: 'pointer',
//       color: 'var(--color-text)',
//       backgroundColor: 'var(--background)',
//     }),
//   },
// })`
//   & * {
//     color: var(--color-subText) !important;
//   }

//   & > div[id] {
//     background-color: var(--background);
//   }
// `;
