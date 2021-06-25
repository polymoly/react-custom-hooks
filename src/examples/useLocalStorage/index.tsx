import { useLocalStorage } from "../../hooks";

function _useLocalStorageExample() {
  // pass your key to args.
  const [value, setValue] = useLocalStorage("name");

  console.log(value);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default _useLocalStorageExample;
