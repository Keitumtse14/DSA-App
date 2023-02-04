import { Link } from 'react-router-dom'
import checkedButton from '../assets/checked-button.svg'

function DSA({ dataStructure, link }: any) {

  return (
    <>
      <Link to={link} className=" grid cursor-pointer visited:text-white text-center p-[3em] hover:duration-300 hover:bg-white/5 border-white/30 border">
        <button
          className="w-8 inline-block justify-self-end relative left-10 bottom-9">
          <img
            className=" mw-30"
            src={checkedButton}
            alt="Checked button"
            width="30" />
        </button>
        {dataStructure}
      </Link>
    </>
  )

}

export default DSA