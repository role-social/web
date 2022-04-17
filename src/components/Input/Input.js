export function Input(props) {
  return (
    <div className={`col-md-${props.size} mb-4`}>
      <div className="form-outline">
        <input type="text" id="text" className="form-control form-control-lg" />
        <label className="form-label" htmlFor="text">
          {props.name}
        </label>
      </div>
    </div>
  );
}
