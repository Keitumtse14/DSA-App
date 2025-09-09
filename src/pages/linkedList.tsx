
import LessonPage from "../components/LessonPage";

export default function LinkedList() {
  return (
    <LessonPage
      lessonKey="linkedList"
      title="Linked List"
      content={[
        "A linked list is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next.",
        "Each node contains: data, and a reference (link) to the next node in the sequence."
      ]}
    />
  );
}