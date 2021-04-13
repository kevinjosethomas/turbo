import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const Endpoint = (props) => {
  const { method } = useParams();
  const endpoint = useQuery().get("endpoint");
  const [response, setResponse] = useState("Sending request");

  useEffect(() => {
    const responseListener = (_, res) => {
      setResponse(res.data);
      console.log("done");
    };
    window.ipcRenderer.on("receive-request", responseListener);

    window.ipcRenderer.send("send-request", {
      method: method,
      endpoint: endpoint,
    });
  }, []);

  return (
    <div>
      <span>{JSON.stringify(response)}</span>
    </div>
  );
};
