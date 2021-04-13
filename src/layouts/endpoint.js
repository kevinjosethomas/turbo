import { useParams } from "react-router-dom";

export const Endpoint = (props) => {
  const { method } = useParams();
  return <div>Hello</div>;
};
