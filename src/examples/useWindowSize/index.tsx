import { useWindowSize } from "../../hooks";

const _useWindowSizeExample = () => {
  const { width } = useWindowSize();

  return (
    <div
      style={{
        width: 300,
        height: 300,
        backgroundColor: width < 500 ? "red" : "blue",
      }}
    ></div>
  );
};

export default _useWindowSizeExample;
