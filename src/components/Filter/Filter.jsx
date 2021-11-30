import './Filter.scss';

function Filter({ value, onChange }) {
  return (
    <input
      className="input"
      type="text"
      name="filter"
      onChange={onChange}
      value={value}
      placeholder="search contact"
    ></input>
  );
}

export default Filter;
