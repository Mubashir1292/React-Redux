import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddNewCustomer,
  AddNumberOfCustomer,
  RemoveCustomer,
  Reset,
} from "./counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const [valueToAdd, setValueToAdd] = useState(0);

  const handleAddValue = () => {
    const value = Number(valueToAdd) || 0;
    dispatch(AddNumberOfCustomer(value));
  };

  const containerStyle = {
    border: "2px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    maxWidth: "420px",
    margin: "30px auto",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#f9f9f9",
  };

  const inputStyle = {
    padding: "10px",
    width: "60px",
    textAlign: "center",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  };

  const resetButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#dc3545",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "20px",
  };

  return (
    <div style={containerStyle}>
      <p style={{ fontSize: "24px", margin: "10px 0" }}>
        Customer Count: {count}
      </p>
      <input
        type="number"
        name="valuetoAdd"
        value={valueToAdd}
        onChange={(e) => setValueToAdd(e.target.value)}
        style={inputStyle}
      />
      <div style={buttonContainerStyle}>
        <button onClick={() => dispatch(AddNewCustomer())} style={buttonStyle}>
          + Customer
        </button>
        <button onClick={() => dispatch(RemoveCustomer())} style={buttonStyle}>
          - Customer
        </button>
        <button onClick={handleAddValue} style={buttonStyle}>
          Add Value
        </button>
        <button
          onClick={() => {
            dispatch(Reset());
            setValueToAdd(0);
          }}
          style={resetButtonStyle}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
