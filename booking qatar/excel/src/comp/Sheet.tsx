import "./main.css";
import React, { useState } from "react";
import {del} from "../images/index";
  


const ExcelComponent = () => {
  const [rows, setRows] = useState<any>([]);
  const [numRows, setNumRows] = useState<any>(0);

  const handleAddRow = () => {
    setRows([...rows, { name: "", phone: "", email: "", comments: ""}]);
  };

  const handleDeleteRow = (index: number) => {
    const newRows = rows.filter((_: any, i: number) => i !== index);
    setRows(newRows);
  };

  const handleAddMultipleRows = () => {
    const newRows = Array.from({ length: numRows }, () => ({
      name: "",
      phone: "",
      email: "",
      comments: "",
    }));
    setRows([...rows, ...newRows]);
    setNumRows(0);
  };

  const handleChange = (index: any, field: any, value: any) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  const handleSaveToLocalStorage = async () => {
    console.log(rows);

    alert("Data saved to local storage!");
  };

  return (
    <div className="excel-component">
      <div className="controls">
        <button onClick={handleAddRow}>Add Row</button>
        <input
          type="number"
          value={numRows}
          onChange={(e) => setNumRows(e.target.value)}
          placeholder="Number of rows"
        />
        <button onClick={handleAddMultipleRows}>Add Multiple Rows</button>
        <button onClick={handleSaveToLocalStorage}>Send</button>
      </div>
      <table className="excel-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row: any, index: any) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={row.name}
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.phone}
                  onChange={(e) => handleChange(index, "phone", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.email}
                  onChange={(e) => handleChange(index, "email", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.comments}
                  onChange={(e) =>
                    handleChange(index, "comments", e.target.value)
                  }
                />
              </td>
                <button className="w-8"
                onClick={() => handleDeleteRow(index)}>
                    <img
                    src = {del}
                    />
                </button>
              
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { ExcelComponent };
