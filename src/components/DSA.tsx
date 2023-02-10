import { Link } from 'react-router-dom';
import CheckedButton from '../assets/checked-button';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../app/store';
import { completed } from '../features/completedDataStructure/completedDataStructureSlice';

function DSA({ dataStructure, link }: any) {
  const completedState = useSelector((state: RootState) => state.completedDataStructureSlice.value);
  const dispatch = useDispatch();

  const handleCompletedButton = (completedState: boolean) => {
    dispatch(completed())
  };

  return (
    <>
      <Link
        to={link}
        className="grid cursor-pointer visited:text-white text-center p-[3em] hover:duration-300 hover:bg-white/5 border-white/30 border z--10"
      >
        <button
          className="w-8 flex justify-self-end relative left-10 bottom-10 z-10 hover:scale-125"
          onClick={() => handleCompletedButton(completedState)}>
          <CheckedButton />
        </button>
        {dataStructure}
      </Link>
    </>
  );
}

export default DSA;
