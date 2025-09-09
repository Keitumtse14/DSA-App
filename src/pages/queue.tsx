
import LessonPage from "../components/LessonPage";

export default function Queue() {
  return (
    <LessonPage
      lessonKey="queue"
      title="Queue"
      content={[
        "A queue is a collection of entities maintained in a sequence, modified by addition at one end and removal from the other.",
        "The end where elements are added is called the back/tail/rear; the end where elements are removed is the head/front."
      ]}
    />
  );
}