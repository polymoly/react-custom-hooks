import { usePreviousState } from "./hooks/usePreviousState";

function App() {
  const [prevState, state, setValue] = usePreviousState(0);

  return (
    <div>
      <button onClick={() => setValue(state + 1)}>increase</button>
      <span>{prevState}</span> {/* return previous value */}
      <span>{state}</span> {/* return current value */}
    </div>
  );
}

export default App;
