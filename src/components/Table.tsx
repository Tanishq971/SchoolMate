const Table = ({
  columns,
  getRows,
  data,
}: {
  columns: { header: string }[];
  getRows: (item: any) => React.ReactNode;
  data: any[];
}) => {

  console.log(data)
  return (
    <table className="w-full bg-white border border-gray-200 rounded-lg">
      <thead>
        <tr className="bg-gray-100 text-gray-600 text-sm font-semibold">
          {columns.map((col, index) => (
            <th key={index} className="p-3 text-left">
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item, index) => getRows(item))}</tbody>
    </table>
  );
};

export default Table;