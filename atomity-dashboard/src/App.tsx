import { useClusters } from "./hooks/useClusters";

function App() {
  const { data, isLoading, error } = useClusters();

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Error...</h1>;

  return (
    <main>
      <h1>Atomity Dashboard</h1>

      <p>Total Clusters: {data.length}</p>
    </main>
  );
}

export default App;