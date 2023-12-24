import React, { useState } from 'react';

const Dropdown = () => {

  const [option, setOption] = useState(null);
  const options = ['CSE', 'ECE', 'MTECH','EEE','AIDS','IT'];

  const handle = (event) => {
    const selectedValue = event.target.value;
    setOption(selectedValue);
  };

  return (
    <div>
      <h2>Dropdown Form</h2>
      <form>
        <label>
          Pick a Department:
          <select onChange={handle}>
            <option value="" disabled selected>
              Choose a Department
            </option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </form>
      {option && <p>Department: {option}</p>}
    </div>
  );
};

export default Dropdown;
