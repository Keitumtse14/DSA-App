import { Suspense, lazy } from 'react';

const DSA = lazy(() => import('./DSA'));


export default function Grid() {
  return (

    <Suspense fallback={<div className="text-lg grid place-items-center">Loading...</div>}>
      <h1 className='mx-auto my-[1.5em] text-center'>Data Structures and Algorithms</h1>
      <div className="grid gap-[1rem] sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto px-4 mb-3">
        <DSA dataStructure="Stack" link={"/stack"} />
        <DSA dataStructure="Set" link={"/set"} />
        <DSA dataStructure="Queue" link={"/queue"} />
        <DSA dataStructure="Binary Search Tree" link={"/binary-search-tree"} />
        <DSA dataStructure="Hash Table" link={"/hash-table"} />
        <DSA dataStructure="Linked List" link={"/linked-list"} />
        <DSA dataStructure="Trie" link={"/trie"} />
        <DSA dataStructure="Heap" link={"/heap"} />
        <DSA dataStructure="Graph" link={"/graph"} />
      </div>
    </Suspense>
  );
}