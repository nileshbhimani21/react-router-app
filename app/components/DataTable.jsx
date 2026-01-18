import React from "react";
import Pagination from "./Pagination";

const DataTable = ({ cols, data, total, filter, onBatchChange }) => {
  return (    
    <div className="overflow-x-auto">
      <table className={`w-full`}>
        <thead>
          <tr>
            {cols.map((headerItem, index) => (
              <th key={index} className='py-2 px-3 text-left bg-primary text-white'>{headerItem.title}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-[#d4d4d440]">
          {data?.length > 0 ? data?.map((item, index) => (
            <tr key={index}>
              {cols.map((col, key) => (
                <td key={key} className="py-2 px-3 text-left border-b border-gray-400"> {col.render(item)}</td>
              ))}
            </tr>
          )) : <tr>
            <td colSpan={cols?.length} className="py-2 px-3 text-center border-b border-gray-400"> Data not available !</td>
          </tr>}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={cols?.length} className="py-2 px-3 bg-primary text-white">
              <Pagination totalPages={Math.ceil(total / filter?.limit)} currentPage={filter?.page} maxVisibleButtons={5} onPageChanged={(e) => onBatchChange(e)} />
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default DataTable;