import { Link } from 'react-router-dom'
import checkedButton from '../assets/checked-button.svg'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../app/store'
import { completed } from '../features/completedDataStructure/completedDataStructureSlice'

function DSA({ dataStructure, link }: any) {
  const completedState = useSelector((state: RootState) => state.completedDataStructureSlice.value)
  const dispatch = useDispatch()

  return (
    <>
      <Link to={link} className=" grid cursor-pointer visited:text-white text-center p-[3em] hover:duration-300 hover:bg-white/5 border-white/30 border">
        <button
          className="w-8 flex justify-self-end relative left-10 bottom-9 z-10"
          onClick={() => dispatch(completed())}>
          <img
            className=" mw-30"
            src={checkedButton}
            alt="Check mark button"
            width="30" />
        </button>
        {dataStructure}
      </Link>
    </>
  )

}

export default DSA