import { Link } from 'react-router-dom';
import BackButton from '../assets/back-button.svg';
import CheckedButton from '../assets/checked-button';

function Stack() {

  return (
    <div className="dsa-card px-4">
      <div className="dsa-card">
        <h1 className="my-[1em] ">Stack</h1>
        <button className="w-8 flex justify-self-end relative right-3 bottom-[5.8rem] hover:scale-125">
          <CheckedButton />
        </button>
        <div className="max-w-[47ch]">
          <ul>
            <li className="mb-[1em]">A stack is an abstract data type that serves as a collection of elements, with two main operations:</li>
            <li> Push, which adds an element to the collection, and </li>
            <li> Pop, which removes the most recently added element that was not yet removed.</li>
          </ul>
        </div>
        <Link to="/" className="w-10 inline-block">
          <img className="mt-6 hover:scale-[1.3] hover:duration-150" src={BackButton} alt="My SVG" width={40} />
        </Link>
      </div>
    </div>
  );
}

export default Stack;
