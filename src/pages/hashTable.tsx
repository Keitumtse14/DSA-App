import BackButton from '../assets/back-button.svg';
import { Link } from 'react-router-dom';


function HashTable() {
  return (
    <div className="dsa-card px-4">

      <div className="dsa-card">
        <h1 className="my-[1em]">Hash Table</h1>
        <p> A hash table, also known as hash map, is a data structure that implements an associative array or dictionary. It is an abstract data type that maps keys to values.[2] A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found. During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.</p>
        <Link to="/"> <img className='mt-6 hover:scale-[1.3] hover:duration-150' src={BackButton} alt="My SVG" width={40} />
        </Link>
      </div>
    </div>
  )
}

export default HashTable