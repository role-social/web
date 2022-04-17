export function Button(props) {
  return (
    <button type="button" className={`btn btn-${props.color} btn-lg`}>
      {props.name}
    </button>
  );
}
