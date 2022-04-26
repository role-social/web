import { useState } from 'react';
import { useIMask } from 'react-imask';

export function Input(props) {
  const [opts, setOpts] = useState({ mask: props.mask });
  const { ref } = useIMask(opts);

  return (
    <div className={`col-md-${props.size} mb-2`}>
      <div className="form-outline">
        <input
          type={props.type}
          id={props.name}
          className="form-control form-control-lg"
          placeholder={props.label}
          name={props.name}
          onChange={props.onChange}
          ref={ref}
          min={0}
          max={props.max}
        />
        <label className="form-label" htmlFor="text" style={{ color: 'red' }}>
          {props.msgError}
        </label>
      </div>
    </div>
  );
}
