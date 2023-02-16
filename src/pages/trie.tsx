import BackButton from '../assets/back-button.svg';
import { Link } from 'react-router-dom';
import CheckedButton from '../assets/checked-button';


function Trie() {
  return (
    <div className="dsa-card px-4">
      <div className="dsa-card">
        <h1 className="my-[1em]">Trie</h1>
        <button className="w-8 flex justify-self-end relative right-3 bottom-[5.8rem] hover:scale-125">
          <CheckedButton />
        </button>
        <p>a trie, also called digital tree or prefix tree, is a type of k-ary search tree, a tree data structure used for locating specific keys from within a set. These keys are most often strings, with links between nodes defined not by the entire key, but by individual characters. In order to access a key (to recover its value, change it, or remove it), the trie is traversed depth-first, following the links between nodes, which represent each character in the key.</p>
        <Link
          to="/"
          className="w-10 inline-block">
          <img className='mt-6 hover:scale-[1.3] hover:duration-150' src={BackButton} alt="My SVG" width={40} />
        </Link>      </div>
    </div>
  )
}
export default Trie