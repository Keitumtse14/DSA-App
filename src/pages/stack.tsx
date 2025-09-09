import LessonPage from "../components/LessonPage";

export default function Stack() {
  return (
    <LessonPage
      lessonKey="stack"
      title="Stack"
      content={[
        "A stack is an abstract data type that serves as a collection of elements, with two main operations:",
        "Push, which adds an element to the collection",
        "Pop, which removes the most recently added element that was not yet removed"
      ]}
    />
  );
}
