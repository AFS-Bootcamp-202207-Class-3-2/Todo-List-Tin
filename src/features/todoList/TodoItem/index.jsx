import "./index.css";

export default function TodoItem(props) {
  const { itemValue } = props;
  return <div className="container">{itemValue.text}</div>;
}
