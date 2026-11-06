import { useEffect, useState } from "react";

export function App() {
  const [status, setStatus] = useState("checking...");

  useEffect(() => {
    fetch("/api/health")
      .then((r) => r.json())
      .then((d: { ok: boolean }) => setStatus(d.ok ? "server is up" : "server error"))
      .catch(() => setStatus("server is down"));
  }, []);

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: 32 }}>
      <h1>Argus</h1>
      <p>AI back office that guards a PayPal merchant account.</p>
      <p>Server status: {status}</p>
    </main>
  );
}
