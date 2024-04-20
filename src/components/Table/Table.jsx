import React from "react";
import "./Table.css";

// Define the Table component
function Table({ classNumbers, classStats, measureNames, type }) {
  return (
    <div className="stats-table">
      {/* Display the title of the table */}
      <h2>{type} Table</h2>

      {/* Create the table structure */}
      <table cellSpacing={0}>
        <thead>
          {/* Create table header with measure names and class numbers */}
          <tr>
            <th>Measure</th>
            {classNumbers.map((classNumber, index) => (
              <th key={index}>Class {classNumber}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {/* Populate the table body with rows for each measure */}
          {measureNames.map((measureName, rowIndex) => (
            <tr key={rowIndex} className="row">
              {/* Display the measure name for each row */}
              <td className="colHeading">
                {type} {measureName}
              </td>

              {/* Display the stats for each class under the corresponding measure */}
              {classStats.map((stats, colIndex) => (
                <td key={colIndex}>{String(parseFloat(stats[measureName.toLowerCase()]).toFixed(3))}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Export the Table component as the default export
export default Table;
