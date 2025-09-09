
import LessonPage from "../components/LessonPage";

export default function Heap() {
  return (
    <LessonPage
      lessonKey="heap"
      title="Heap"
      content={[
        "A heap is a specialized tree-based data structure which is essentially an almost complete tree that satisfies the heap property.",
        "In a max heap, the parent node's value is greater than or equal to its children; in a min heap, it's less than or equal."
      ]}
    />
  );
}
