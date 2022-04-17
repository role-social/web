export function Input(props) {
  return (
    <div className={`col-md-${props.size} mb-2`}>
      <div className="form-outline">
        <input type="text" id="text" className="form-control form-control-lg" placeholder={props.name}/>
        <label className="form-label" htmlFor="text">
        </label>
      </div>
    </div>
  );
}
