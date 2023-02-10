import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';

const CheckedButton = () => {

  const completedState = useSelector((state: RootState) => state.completedDataStructureSlice.value);

  return (
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={completedState ? 'white' : 'black'}>

      <circle cx="32" cy="32" r="24" />
      <polyline points="44 24 28 40 20 32" />
    </svg>
  );
};

export default CheckedButton;
