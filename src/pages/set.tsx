import BackButton from '../assets/back-button.svg';
import { Link } from 'react-router-dom';


function Set() {
  return (
    <div className="dsa-card px-4">

      <div className="dsa-card">
        <h1 className="my-[1em]">Set</h1>
        <p>A set is an abstract data type that can store unique values, without any particular order. It is a computer implementation of the mathematical concept of a finite set. Unlike most other collection types, rather than retrieving a specific element from a set, one typically tests a value for membership in a set.</p>
        <Link to="/"> <img className='mt-6 hover:scale-[1.3] hover:duration-150' src={BackButton} alt="My SVG" width={40} />
        </Link>
      </div>
    </div>
  )
}
export default Set