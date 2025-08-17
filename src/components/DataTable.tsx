import React from 'react';

export function DataTable({ data, columns }) {
  return (
    <table className="table-auto w-full border">
      <thead>
        <tr>{columns.map(col => <th key={col.key} className="border px-2 py-1">{col.header}</th>)}</tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map(col => <td key={col.key} className="border px-2 py-1">{row[col.key]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
