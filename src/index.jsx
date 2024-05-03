import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

try {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error("Error rendering the React app:", error);
}

if ("WebSocket" in window) {
  const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
  const address = `${protocol}//${window.location.host}`;
  const socket = new WebSocket(address);

  socket.onmessage = (message) => {
    if (message.data === "reload") {
      window.location.reload();
    }
  };

  socket.onopen = () => console.log("WebSocket connected for live reloading");
  socket.onerror = (error) => console.log("WebSocket error:", error);
  socket.onclose = () => console.log("WebSocket disconnected");
}
