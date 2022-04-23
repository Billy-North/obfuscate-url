import { useParams } from "react-router-dom";

export default function ViewUrl() {
  const params = useParams();
  return <h2>URL ID: {params.urlid}</h2>;
} 