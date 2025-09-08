
import { Link } from "react-router-dom";
import BackButton from "../assets/back-button.svg";
import { useLessonCheck } from "../hooks/useLessonCheck";

function Heap() {
  const { checked, toggle } = useLessonCheck("heap");

  return (
    <div className="dsa-card px-4">
      <div className="dsa-card">
        <h1 className="my-[1em]">Heap</h1>

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
              A heap is a specialized tree-based data structure which is essentially an almost complete tree that satisfies the heap property.
            </li>
            <li>In a max heap, the parent node's value is greater than or equal to its children; in a min heap, it's less than or equal.</li>
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

export default Heap;
