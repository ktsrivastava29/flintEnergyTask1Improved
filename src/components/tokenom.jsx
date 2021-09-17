import React, { Component }  from 'react';
import { LineChart,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import {Pie, Line, Doughnut} from 'react-chartjs-2';


export const Tokenom = (props) => {

  const state = {
    labels: ['Team & Advisor', 'Operations', 'Reserve',
             'Airdrop', 'Marketing', 'Private Sale', 'Public Sale', 'Exchange Liquidity', 'Liquidity mining'],
    datasets: [
      {
        label: 'Tokens',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [8000000, 4000000, 1932075, 1600000, 6400000, 16000000, 18867925, 4000000, 19200000]
      }
    ]
  }

  const state1 = {
    labels: ['Team & Advisor', 'Operations', 'Reserve',
    'Airdrop', 'Marketing', 'Private Sale', 'Public Sale', 'Exchange Liquidity', 'Liquidity mining'],
    datasets: [
      {
        label: 'Allocations',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#457F9F',
          '#4594D7',
          '#C994CA',
          '#C9E9FF',
          '#6800B4'
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#45949F',
        '#4594CA',
      '#C97ACA',
      '#C9C6FF',
        '#35014F'
        ],
        data: [10, 5, 2.42, 2, 8, 20, 23.58, 5, 24]
      }
    ]
  }

  


  return (
    <div id="about">
      <div className="container">

      <h2>Tokenomics</h2>
      <br/>
      <div className="row">
      <div className="col-xs-12 col-md-4"></div>
          <div className="col-xs-12 col-md-8">
          
    <Doughnut
          data={state1}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

</div>


      



</div>
</div>
      
    </div>
  );
};
