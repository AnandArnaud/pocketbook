import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StatsigProvider, useClientAsyncInit } from "@statsig/react-bindings";
import App from "./App";
import "./index.css";

const clientKey = import.meta.env.VITE_STATSIG_CLIENT_KEY ?? "client-key";

// The app has no sign-in yet: a stable per-browser id stands in for the user.
function currentUserId(): string {
  const key = "pocketbook.user";
  let id = localStorage.getItem(key);
  if (!id) {
    id = "user_" + Math.random().toString(36).slice(2, 10);
    localStorage.setItem(key, id);
  }
  return id;
}

function Root() {
  const { client } = useClientAsyncInit(clientKey, { userID: currentUserId(), custom: { plan: "free" } });
  return (
    <StatsigProvider client={client}>
      <App />
    </StatsigProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
