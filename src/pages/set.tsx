
import LessonPage from "../components/LessonPage";

export default function Set() {
  return (
    <LessonPage
      lessonKey="set"
      title="Set"
      content={[
        "A set is an abstract data type that can store unique values, without any particular order.",
        "Unlike most other collection types, you typically test a value for membership in a set."
      ]}
    />
  );
}