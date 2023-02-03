import { useParams } from "react-router-dom";

export default function CharactersPageDetail() {
  const { id } = useParams();

  console.log(id);
  return <div>{"HOLA"}</div>;
}
