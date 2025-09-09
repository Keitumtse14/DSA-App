
import LessonPage from "../components/LessonPage";

export default function Graph() {
  return (
    <LessonPage
      lessonKey="graph"
      title="Graph"
      content={[
        "A graph data structure consists of a finite set of vertices (nodes), together with a set of edges (links) connecting pairs of vertices.",
        "Edges can be unordered (undirected graph) or ordered (directed graph)."
      ]}
    />
  );
}