import { Suspense, lazy } from "react";
import ProgressBar from "../components/ProgressBar";
import { useProgress } from "../hooks/useProgress";

const DSA = lazy(() => import("./DSA"));

export default function Grid() {
  const { completed, total } = useProgress();

  return (
    <Suspense fallback={<div className="text-lg grid place-items-center">Loading...</div>}>

      <div className="flex justify-between items-center mx-auto my-[1.5em] max-w-4xl px-4">
        <h1 className="text-2xl font-bold text-center w-full">Data Structures and Algorithms</h1>
        <button
          className="ml-4 px-3 py-1 rounded bg-gray-700 text-white hover:bg-gray-900 transition"
          onClick={() => {
            document.documentElement.classList.toggle('dark');
          }}
        >
          Toggle Dark Mode
        </button>
      </div>

      {/* Progress bar */}
      <div className="max-w-4xl mx-auto px-4 mb-6">
        <ProgressBar />
        <p className="text-right text-sm mt-1">
          {completed} / {total} lessons completed
        </p>
      </div>

      <div className="grid gap-[1rem] sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto px-4 mb-3">
        <DSA dataStructure="Stack" link="/stack" />
        <DSA dataStructure="Set" link="/set" />
        <DSA dataStructure="Queue" link="/queue" />
        <DSA dataStructure="Binary Search Tree" link="/binary-search-tree" />
        <DSA dataStructure="Hash Table" link="/hash-table" />
        <DSA dataStructure="Linked List" link="/linked-list" />
        <DSA dataStructure="Trie" link="/trie" />
        <DSA dataStructure="Heap" link="/heap" />
        <DSA dataStructure="Graph" link="/graph" />
      </div>
    </Suspense>
  );
}
