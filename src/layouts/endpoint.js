import JSONPretty from "react-json-pretty";
import { useEffect, useState } from "react";
import "react-json-pretty/themes/monikai.css";
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
    };
    window.ipcRenderer.on("receive-request", responseListener);

    window.ipcRenderer.send("send-request", {
      method: method,
      endpoint: endpoint,
    });
  }, []);

  return (
    <div>
      <JSONPretty id="response" data={response} />
    </div>
  );
};
