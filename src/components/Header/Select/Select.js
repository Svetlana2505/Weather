import { CustomSelect } from './Select.styled';
import { useDispatch } from 'react-redux';
import { setCity } from 'redux/slices/daysSlice';

export const Select = () => {
  const dispatch = useDispatch();

  const options = [
    { value: 'Харьков', label: 'Харьков' },
    { value: 'Kiev', label: 'Kiev' },
    { value: 'Запорожье', label: 'Запорожье' },
    { value: 'Евпатория', label: 'Евпатория' },
    { value: 'Ивано-Франковск', label: 'Ивано-Франковск' },
    { value: 'Сумы', label: 'Сумы' },
  ];

  return (
    <CustomSelect
      options={options}
      onChange={option => dispatch(setCity(option.value))}
      placeholder="город"
    />
  );
};
