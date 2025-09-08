
import { Link } from "react-router-dom";
import BackButton from "../assets/back-button.svg";
import { useLessonCheck } from "../hooks/useLessonCheck";

function Trie() {
  const { checked, toggle } = useLessonCheck("trie");

  return (
    <div className="dsa-card px-4">
      <div className="dsa-card">
        <h1 className="my-[1em]">Trie</h1>

        <button className="w-8 flex justify-self-end relative right-3 bottom-[5.8rem] hover:scale-125">
          <img
            alt={checked ? "Checked" : "Unchecked"}
            className={`cursor-pointer ${checked ? "opacity-100" : "opacity-50"}`}
            onClick={toggle}
            width={32}
          />
        </button>

        <div className="max-w-[47ch]">
          <ul>
            <li className="mb-[1em]">
              A trie, also called digital tree or prefix tree, is a type of k-ary search tree used for locating specific keys from within a set.
            </li>
            <li>Keys are most often strings, with links between nodes defined by individual characters.</li>
          </ul>
        </div>

        <Link to="/" className="w-10 inline-block">
          <img
            className="mt-6 hover:scale-[1.3] hover:duration-150"
            src={BackButton}
            alt="Back"
            width={40}
          />
        </Link>
      </div>
    </div>
  );
}

export default Trie;