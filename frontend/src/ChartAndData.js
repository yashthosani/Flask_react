import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { getData } from "./ApiCalls";

import { Bar, Bubble, Doughnut, Line, Radar } from "react-chartjs-2";

const ChartAndData = () => {
  const [info, setInfo] = useState();
  const [choice, setchoice] = useState(0);

  useEffect(() => {
    preloadData();
  }, []);

  const getChart = () => {
    const options = {
      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 20,
          bottom: 20,
        },
      },
    };
    if (choice === 0) {
      return <Line data={info} options={options} />;
    } else if (choice === 1) {
      return <Bar data={info} options={options} />;
    } else if (choice === 2) {
      return <Doughnut data={info} options={options} />;
    } else if (choice === 3) {
      return <Radar data={info} options={options} />;
    }
  };
  const preloadData = () => {
    getData().then((data) => {
      const newData = {
        labels: data.map((element) => element.month),
        datasets: [
          {
            label: "Sales",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: data.map((element) => element.value),
          },
        ],
      };

      setInfo(newData);
    });
  };
  const handleClick = (ch) => {
    setchoice(ch);
  };
  return (
    <div className="shadow p-2">
      <Row className = " ">
        <Col md ="10">
          <span>
            <ButtonGroup>
              <Button size="sm" onClick={() => handleClick(0)} disabled ={choice===0}>
                Line
              </Button>
              <Button size="sm" onClick={() => handleClick(1)} disabled ={choice===1}>
                Bar
              </Button>
              <Button size="sm" onClick={() => handleClick(2)} disabled ={choice===2}>
                Doughnut
              </Button>
              <Button size="sm" onClick={() => handleClick(3)} disabled ={choice===3}>
                Radar
              </Button>
            </ButtonGroup>
          </span>
        </Col>
        <Col className =""  md ="2">
          <Button size="sm" onClick ={preloadData} variant = "info">Refresh</Button>
        </Col>
      </Row>
      {getChart()}
    </div>
  );
};

export default ChartAndData;
