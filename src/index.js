import { Web3Modal } from "@web3modal/react";
import ReactDOM from "react-dom/client";
import App from "./App";

const config = {
  projectId: "9338b83ff89083cd0ee7da8cea475c23",
  theme: "dark",
  accentColor: "default",
  ethereum: {
    appName: "web3Modal",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <Web3Modal config={config} />
  </>
);
