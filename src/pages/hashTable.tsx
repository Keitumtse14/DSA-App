import BackButton from '../assets/back-button.svg';
import { Link } from 'react-router-dom';
import CheckedButton from '../assets/checked-button';


function HashTable() {
  return (
    <div className="dsa-card px-4">

      <div className="dsa-card">
        <h1 className="my-[1em]">Hash Table</h1>
        <button className="w-8 flex justify-self-end relative right-3 bottom-[5.8rem] hover:scale-125">
          <CheckedButton />
        </button>
        <p> A hash table, also known as hash map, is a data structure that implements an associative array or dictionary. It is an abstract data type that maps keys to values. A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found. During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.</p>
        <Link
          to="/"
          className="w-10 inline-block">
          <img className='mt-6 hover:scale-[1.3] hover:duration-150' src={BackButton} alt="My SVG" width={40} />
        </Link>      </div>
    </div>
  )
}

export default HashTable
