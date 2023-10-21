import Layout from "@/components/Layout";
import { useState } from "react";

export default function Estado() {
  const [numero, setNumero] = useState(0); // React hooks

  function incrementar() {
    setNumero(numero + 1);
  }
  return (
    <Layout titulo="Componente com Estado">
      <div>{numero}</div>
      <button onClick={incrementar}>Incrementar</button>
    </Layout>
  );
}
