import React, { useState, useEffect } from "react";
import { Bar, Bubble, Doughnut } from "react-chartjs-2";
import { Container, Alert, Row, Col, Button } from "react-bootstrap";
import { getData } from "./ApiCalls";
import ChartAndData from "./ChartAndData";
import Tables from "./Tables";
import Fade from "react-reveal/Fade";
const Home = () => {
  const data2 = [
    {
      name: "Data",
      number: 211,
    },
    {
      name: "Data",
      number: 211,
    },
    {
      name: "Data",
      number: 211,
    },
    {
      name: "Data",
      number: 211,
    },
  ];
  return (
    <div>
      <Container fluid>
        <Fade>
          <Row className="justify-content-md-center m-2">My Dashboard</Row>

          <Row className="mb-1 mt-1">
            {data2.map((element) => {
              return (
                <Col>
                  <Alert variant="primary" size="sm">
                    <div className="text-dark">{element.name}</div>
                    <span className="muted">{element.number}</span>
                  </Alert>
                </Col>
              );
            })}
          </Row>
          <Row className="justify-content-md-center m-2">
            <Col sm="6">
              <ChartAndData />
            </Col>
            <Col sm="6">
              <ChartAndData />
            </Col>
          </Row>
          <Row className="justify-content-md-center m-2 ">
            <Col sm="4">
              <Tables heading="Toys" />
            </Col>
            <Col sm="4">
              <Tables heading="Stationary Items" />
            </Col>

            <Col sm="4">
              <Tables heading="Games" />
            </Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
};

export default Home;
