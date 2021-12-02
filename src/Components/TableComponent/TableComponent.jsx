import React, {useState} from 'react';
import {Alert, Table} from "react-bootstrap";
import LoadingComponent from "../LoadingComponent/LoadingComponent";

const TableComponent = ({data, loading, setReloadTable}) => {
  const [apiUrl] = useState(process.env.REACT_APP_BASE_API_URL);

  const handleClick = () => {
    setReloadTable(true);
  };

  const list = data.map((item, index) => {
    return (
      <tr key={item.id}>
        <td>{index + 1}</td>
        <td>{item.full_url}</td>
        <td>
          <a
            onClick={handleClick}
            target="_blank"
            href={`${apiUrl}/${item.shorted_code}`} className="alert-link">
            {item.shorted_code}
          </a>
        </td>
        <td>{item.title}</td>
        <td>{item.click_count}</td>
      </tr>
    )
  });

  if (loading) {
    return <LoadingComponent/>;
  }

  if (data.length === 0) {
    return (
      <Alert variant="warning">
        No Short URLs found!
      </Alert>
    );
  }

  return (
    <>
      <Table responsive striped bordered hover>
        <thead>
        <tr>
          <th>#</th>
          <th>Full URL</th>
          <th>Shorted URL</th>
          <th>Title</th>
          <th>Click Counts</th>
        </tr>
        </thead>
        <tbody>
        {list}
        </tbody>
      </Table>
    </>
  )
};

export default TableComponent;
