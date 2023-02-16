import { Link } from 'react-router-dom';

interface Props {
  dataStructure: string;
  link: string;
}

const DSA: React.FC<Props> = ({ dataStructure, link }) => {

  return (
    <Link to={link} className="grid cursor-pointer visited:text-white text-center p-[3em] hover:duration-300 hover:bg-white/5 border-white/30 border">
      {dataStructure}
    </Link>
  );
};

export default DSA;