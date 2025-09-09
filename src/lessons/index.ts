// This file contains lesson data for each data structure
// Each lesson exports an object with title, key, and content array

export interface Lesson {
    key: string;
    title: string;
    content: string[];
}

const lessons: Record<string, Lesson> = {
    stack: {
        key: "stack",
        title: "Stack",
        content: [
            "A stack is an abstract data type that serves as a collection of elements, with two main operations:",
            "Push, which adds an element to the collection",
            "Pop, which removes the most recently added element that was not yet removed"
        ]
    },
    set: {
        key: "set",
        title: "Set",
        content: [
            "A set is an abstract data type that can store unique values, without any particular order.",
            "Unlike most other collection types, you typically test a value for membership in a set."
        ]
    },
    queue: {
        key: "queue",
        title: "Queue",
        content: [
            "A queue is a collection of entities maintained in a sequence, modified by addition at one end and removal from the other.",
            "The end where elements are added is called the back/tail/rear; the end where elements are removed is the head/front."
        ]
    },
    binarySearchTree: {
        key: "binarySearchTree",
        title: "Binary Search Tree",
        content: [
            "A BST is a rooted binary tree where each node's key is greater than the left subtree and less than the right subtree.",
            "The time complexity of operations is directly proportional to the height of the tree."
        ]
    },
    hashTable: {
        key: "hashTable",
        title: "Hash Table",
        content: [
            "A hash table, also known as hash map, is a data structure that implements an associative array or dictionary.",
            "It maps keys to values using a hash function to compute an index into an array of buckets or slots."
        ]
    },
    linkedList: {
        key: "linkedList",
        title: "Linked List",
        content: [
            "A linked list is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next.",
            "Each node contains: data, and a reference (link) to the next node in the sequence."
        ]
    },
    trie: {
        key: "trie",
        title: "Trie",
        content: [
            "A trie, also called digital tree or prefix tree, is a type of k-ary search tree used for locating specific keys from within a set.",
            "Keys are most often strings, with links between nodes defined by individual characters."
        ]
    },
    heap: {
        key: "heap",
        title: "Heap",
        content: [
            "A heap is a specialized tree-based data structure which is essentially an almost complete tree that satisfies the heap property.",
            "In a max heap, the parent node's value is greater than or equal to its children; in a min heap, it's less than or equal."
        ]
    },
    graph: {
        key: "graph",
        title: "Graph",
        content: [
            "A graph data structure consists of a finite set of vertices (nodes), together with a set of edges (links) connecting pairs of vertices.",
            "Edges can be unordered (undirected graph) or ordered (directed graph)."
        ]
    }
};

export default lessons;
