import { useEffect, useState } from "react";
import DataTable from "../../components/DataTable";
import axios from "axios";
import SortArrow from "../../utils/SortArrow";
import Loader from "../../components/Loader";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Dashboard() {
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [filter, setFilter] = useState({
    limit: 10,
    page: 1,
    order: "asc", //desc
    orderby: "",
    search: ''
  })
  const column = () => {
    return [
      {
        title: <span className="cursor-pointer">ID</span>,
        render: (rowData) => {
          return <span>{rowData.id}</span>;
        },
      },
      {
        title: <span className="cursor-pointer flex items-center" onClick={() => handleSort("name")}>Name {SortArrow(filter, "name")}</span>,
        render: (rowData) => {
          return <span>{rowData.name}</span>;
        },
      },
      {
        title: <span className="cursor-pointer flex items-cente" onClick={() => handleSort("email")}>Email {SortArrow(filter, "email")}</span>,
        render: (rowData) => {
          return <span>{rowData.email}</span>;
        },
      },
      {
        title: <span className="cursor-pointer flex items-cente" onClick={() => handleSort("phone")}>Phone {SortArrow(filter, "phone")}</span>,
        render: (rowData) => {
          return <span>{rowData.phone}</span>;
        },
      }
      // {
      //   title: 'Action',
      //   render: (rowData) => {
      //     return <div className="flex items-center"><button className='btn btn-primary p-1 mr-1' onClick={handleEdit(rowData)}><PencilSquareIcon className="h-[20px]" /></button></div>
      //   },
      // },
    ];
  };
  const handleSort = (item) => {
    if (item === filter?.orderby) {
      if (filter?.order === "asc") {
        setFilter({ ...filter, orderby: "", order: "asc" })
      } else {
        setFilter({ ...filter, orderby: item, order: "asc" })
      }
    } else {
      setFilter({ ...filter, orderby: item, order: "desc" })
    }
  }
  const onBatchChange = (e) => {
    setFilter({ ...filter, page: e });
  };

  useEffect(() => {
    setIsLoading(true)
    const url = new URL('https://696ccd65f4a79b31517fd397.mockapi.io/api/users');
    url.searchParams.append('page', filter.page);
    url.searchParams.append('limit', filter.limit);
    url.searchParams.append('order', filter.order);
    url.searchParams.append('orderby', filter.orderby);
    axios.get(url).then(async res => { 
      setList(res)
      setIsLoading(false)
     })
  }, [filter])

  if(isLoading){
    return <Loader size="lg" />
  }
  return <div>
    <DataTable
      cols={column()}
      data={list}
      total={90}
      filter={filter}
      onBatchChange={onBatchChange}
    />
  </div>;
}
