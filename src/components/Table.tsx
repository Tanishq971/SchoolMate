import React from "react";

const Table = ({ columns, data, rowFun }: any) => {
  return (
    <div className="w-full p-4">
      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#F7F8FA]">
            <tr>
              {columns.map((column: any, index: number) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-sm font-medium text-muted-foreground uppercase tracking-wider"
                >
                  {column.label || column}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row: any, rowIndex: number) => (
              <tr
                key={rowIndex}
                onClick={() => rowFun && rowFun(row)}
                className="hover:bg-primary/10 transition-all cursor-pointer"
              >
                {columns.map((column: any, colIndex: number) => (
                  <td
                    key={colIndex}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                  >
                    {row[column.key] || row[column] || "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;