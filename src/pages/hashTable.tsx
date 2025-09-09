
import LessonPage from "../components/LessonPage";

export default function HashTable() {
  return (
    <LessonPage
      lessonKey="hashTable"
      title="Hash Table"
      content={[
        "A hash table, also known as hash map, is a data structure that implements an associative array or dictionary.",
        "It maps keys to values using a hash function to compute an index into an array of buckets or slots."
      ]}
    />
  );
}
