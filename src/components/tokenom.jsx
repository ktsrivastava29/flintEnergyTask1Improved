import React, { Component }  from 'react';
//import { LineChart,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import {Pie, Line, Doughnut} from 'react-chartjs-2';


export const Tokenom = (props) => {


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
      <div className="column">
      <div className="col-xs-12 col-md-2"></div>
          <div className="col-xs-12 col-md-10">
          
    <Doughnut
          data={state1}
          options={{
            
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },

            layout: {
              padding: 40
          },
            plugins: {
              legend: {
                  display: true,
                  position: 'left',
                  font: {
                    size: 24
                },
                  labels: {
                      color: 'rgb(255, 99, 132)'
                  }
              }
          }
          }}
        />

</div>


      



</div>
</div>
      
    </div>
  );
};
