import { FC, useState, useEffect } from 'react';

const CheckedButton: FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const savedIsChecked = JSON.parse(sessionStorage.getItem('isChecked') || 'false');
    setIsChecked(savedIsChecked);
  }, []);

  useEffect(() => {
    sessionStorage.setItem('isChecked', JSON.stringify(isChecked));
  }, [isChecked]);

  useEffect(() => {
    return () => {
      sessionStorage.removeItem('isChecked');
    };
  }, []);

  const handleClick = () => {
    setIsChecked(prevChecked => !prevChecked);
  };

  return (
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={isChecked ? 'white' : 'black'}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}>
      <circle cx="32" cy="32" r="24" />
      <polyline points="44 24 28 40 20 32" />
    </svg>
  );
};

export default CheckedButton;
