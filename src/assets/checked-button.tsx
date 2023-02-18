import { FC, useState } from 'react';

const CheckedButton: FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(prevChecked => !prevChecked);
  };

  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={isChecked ? 'white' : 'black'}
      onClick={handleClick}
      style={{ cursor: 'pointer' }
      }>
      <circle cx="32" cy="32" r="24" />
      <polyline points="44 24 28 40 20 32" />
    </svg >
  );
};

export default CheckedButton;
