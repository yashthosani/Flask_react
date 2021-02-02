import React, { useState, useEffect } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { getTableData } from "./ApiCalls";
import Fade from "react-reveal/Fade";

const Tables = ({ heading = "" }) => {
  const [data, setdata] = useState([]);

  const preloadData = () => {
    getTableData().then((res) => {
      setdata(res);
    });
  };

  useEffect(() => {
    preloadData();
  }, []);

  return (

    <div className="shadow p-2">
      <Fade>
      <Row className ="p-1">
        <Col sm ="9">
          <h5>{heading}</h5>
        </Col>
        <Col sm ="3">
          <Button size="sm" onClick={preloadData} variant="info">
            Refresh
          </Button>
        </Col>
      </Row>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Item</th>
            <th>Sold</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr>
              <td>{entry.name}</td>
              <td>{entry.sold}</td>
              <td>{entry.stock}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </Fade>
    </div>
  );
};

export default Tables;
