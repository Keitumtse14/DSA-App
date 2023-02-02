import BackButton from '../assets/back-button.svg';
import { Link } from 'react-router-dom';


function Queue() {
  return (
    <div className="dsa-card px-4">

      <div className="dsa-card">
        <h1 className="my-[1em]">Queue</h1>
        <p>A queue is a collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and the removal of entities from the other end of the sequence. By convention, the end of the sequence at which elements are added is called the back, tail, or rear of the queue, and the end at which elements are removed is called the head or front of the queue, analogously to the words used when people line up to wait for goods or services.</p>
        <Link to="/"> <img className='mt-6 hover:scale-[1.3] hover:duration-150' src={BackButton} alt="My SVG" width={40} />
        </Link>
      </div>
    </div>
  )
}

export default Queue