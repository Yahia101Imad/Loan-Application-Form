import "./app.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [age, setAge] = useState("");
  const [employee, setEmployee] = useState("");

  const salaryOptions = [
  "Less than 500$",
  "Between 500$ & 2000$",
  "Above 2000$",
];
const [selectedSalary, setSelectedSalary] = useState("");

  

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleNumberChange(event) {
    setNumber(event.target.value);
  }
  function handleAgeChange(event) {
    setAge(event.target.value);
  }
  function handleEmployeeChange(event) {
    setEmployee(event.target.checked);
  }
  function handleSalaryChange(event) {
    setSelectedSalary(event.target.value);
  }

  return (
    <div className="body">
      <div className="container">
        <h2>Requesting a Loan</h2>
        <hr />
        <form className="form">
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
          <label>Phone Number:</label>
          <input type="number" value={number} onChange={handleNumberChange} />
          <label>Age:</label>
          <input type="number" value={age} onChange={handleAgeChange} />
          <label>Are you an employee ?</label>
          <input
            type="checkbox"
            value={employee}
            onChange={handleEmployeeChange}
          />
          <label>Salary</label>
          <select value={selectedSalary} onChange={handleSalaryChange}>
            {salaryOptions.map((salaryOption, index) => (
              <option key={index} value={salaryOption}>{salaryOption}</option>
            ))}
          </select>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
