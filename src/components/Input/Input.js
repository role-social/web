export function Input(props) {
  return (
    <div className={`col-md-${props.size} mb-2`}>
      <div className="form-outline">
        <input
          type={props.type}
          id="text"
          className="form-control form-control-lg"
          placeholder={props.label}
          name={props.name}
          onChange={props.onChange}
        />
        <label className="form-label" htmlFor="text"></label>
      </div>
    </div>
  );
}
