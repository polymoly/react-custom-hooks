import { useToggleText } from "../../hooks";

const _useToggleTextExample = () => {
  const { text, toggle } = useToggleText("default value", "toggled value");
  return (
    <div
      style={{ width: 300, height: 300, background: "#ccc" }}
      onClick={toggle}
    >
      {text}
    </div>
  );
};

export default _useToggleTextExample;
