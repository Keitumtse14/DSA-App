
import { Link } from "react-router-dom";
import BackButton from "../assets/back-button.svg";
import { useLessonCheck } from "../hooks/useLessonCheck";

function HashTable() {
  const { checked, toggle } = useLessonCheck("hashTable");

  return (
    <div className="dsa-card px-4">
      <div className="dsa-card">
        <h1 className="my-[1em]">Hash Table</h1>

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
              A hash table, also known as hash map, is a data structure that implements an associative array or dictionary.
            </li>
            <li>It maps keys to values using a hash function to compute an index into an array of buckets or slots.</li>
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

export default HashTable;
