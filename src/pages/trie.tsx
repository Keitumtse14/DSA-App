
import LessonPage from "../components/LessonPage";

export default function Trie() {
  return (
    <LessonPage
      lessonKey="trie"
      title="Trie"
      content={[
        "A trie, also called digital tree or prefix tree, is a type of k-ary search tree used for locating specific keys from within a set.",
        "Keys are most often strings, with links between nodes defined by individual characters."
      ]}
    />
  );
}