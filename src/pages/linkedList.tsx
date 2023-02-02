import BackButton from '../assets/back-button.svg';
import { Link } from 'react-router-dom';


function LinkedList() {
  return (
    <div className="dsa-card px-4">

      <div className="dsa-card">
        <h1 className="my-[1em]">Linked List</h1>
        <p>a linked list is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence. In its most basic form, each node contains: data, and a reference (in other words, a link) to the next node in the sequence.</p>
        <Link to="/"> <img className='mt-6 hover:scale-[1.3] hover:duration-150' src={BackButton} alt="My SVG" width={40} />
        </Link>
      </div>
    </div>
  )
}

export default LinkedList