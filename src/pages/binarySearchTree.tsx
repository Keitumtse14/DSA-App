import BackButton from '../assets/back-button.svg';

import { NavLink } from 'react-router-dom';
import CheckedButton from '../assets/checked-button';


function BinarySearchTree() {
  return (
    <div className="dsa-card px-4">
      <h1 className="my-[1em]" >Binary Search Tree</h1>
      <button className="w-8 flex justify-self-end relative right-3 bottom-[5.8rem] hover:scale-125">
        <CheckedButton />
      </button>
      <p>A binary search tree (BST), also called an ordered or sorted binary tree, is a rooted binary tree data structure with the key of each internal node being greater than all the keys in the respective node's left subtree and less than the ones in its right subtree. The time complexity of operations on the binary search tree is directly proportional to the height of the tree.</p>
      <NavLink
        to="/"
        className="w-10 inline-block">
        <img className='mt-6 hover:scale-[1.3] hover:duration-150' src={BackButton} alt="My SVG" width={40} />
      </NavLink>
    </div>
  )
}

export default BinarySearchTree