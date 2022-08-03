import "../TodoItem/index.css";
export default function TodoDoneItem(props) {
  const { itemValue } = props;
  return (
    <div className="item">
      <div>{itemValue.text}</div>
    </div>
  );
}
