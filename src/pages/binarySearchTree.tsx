import LessonPage from "../components/LessonPage";

export default function BinarySearchTree() {
  return (
    <LessonPage
      lessonKey="binarySearchTree"
      title="Binary Search Tree"
      content={[
        "A BST is a rooted binary tree where each node's key is greater than the left subtree and less than the right subtree.",
        "The time complexity of operations is directly proportional to the height of the tree.",
      ]}
    />
  );
}
