import { Link } from 'react-router-dom'

function DSA({ dataStructure, link }: any) {

  return (
    <>
      <Link to={link} className=" gap-[1em] grid cursor-pointer visited:text-white text-center p-[3em] hover:duration-300 hover:bg-white/5 border-white/30 border">
        {dataStructure}
      </Link>
    </>
  )

}

export default DSA