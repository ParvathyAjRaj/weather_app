import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';
import { Card } from 'antd';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  function Bargraph({nextDaysForecast}){

    useEffect(()=>{
        const labels=[];
        const data=[];
        {nextDaysForecast.map((eachForecast) => {
            for(let i = 0;i<24;i+=4){
                labels.push(eachForecast[0].hour[i].time.split(" ")[1]);
                data.push(eachForecast[0].hour[i].temp_c)
            }   
        })}
        const dataSource = {
            labels,
            datasets:[
                {label:'Temperature(°C)', 
                data : data , 
                backgroundColor :  '#2234ae',
                backgroundImage: 'linear-gradient(315deg, #2234ae 0%, #191714 74%)'
                }]}
        setWeatherData(dataSource);
    },[nextDaysForecast])

    const [weatherData,setWeatherData] = useState({labels:[],datasets:[]});

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'Temperature Graph',
          },
        },
        scales: {
            y: {
                suggestedMin: 0, // Minimum value for the y-axis scale
                suggestedMax: 40 // Maximum value for the y-axis scale
            }
        }
      };

      return(
        <Card style={{width:290,height:200,marginBottom:20}}>
            <Bar options={options} data={weatherData} style={{paddingRight:30,paddingTop:10}}></Bar>
        </Card>
    )
}

  export default Bargraph;