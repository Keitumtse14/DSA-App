import './styles/index.css';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes, } from "react-router-dom";




const Grid = lazy(() => import('./components/Grid'));
const Stack = lazy(() => import('./pages/stack'));
const BinarySearchTree = lazy(() => import('./pages/binarySearchTree'));
const Graph = lazy(() => import('./pages/graph'));
const HashTable = lazy(() => import('./pages/hashTable'));
const Heap = lazy(() => import('./pages/heap'));
const LinkedList = lazy(() => import('./pages/linkedList'));
const Queue = lazy(() => import('./pages/queue'));
const Set = lazy(() => import('./pages/set'));
const Trie = lazy(() => import('./pages/trie'));


export default function App() {

  return (
    <Suspense fallback={<div className="text-lg grid place-content-center">Loading</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Grid />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/binary-search-tree" element={<BinarySearchTree />} />
          <Route path="/graph" element={<Graph />} />
          <Route path="/hash-table" element={<HashTable />} />
          <Route path="/heap" element={<Heap />} />
          <Route path="/linked-list" element={<LinkedList />} />
          <Route path="/queue" element={<Queue />} />
          <Route path="/set" element={<Set />} />
          <Route path="/trie" element={<Trie />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}