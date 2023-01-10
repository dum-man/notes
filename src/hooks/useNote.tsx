import { useOutletContext } from "react-router-dom";
import { Note } from "../App";

const useNote = () => {
  return useOutletContext<Note>();
};

export default useNote;
