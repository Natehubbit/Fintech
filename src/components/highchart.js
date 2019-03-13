import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
    title: {
      text: 'Expenditure Chart'
    },
    series: [{
      data: [5, 2, 3]
    }],
    xAxis: [{
        title:{
            text:'Duration'
        }
    }],
    yAxis: [{
        title:{
            text:'Amount Spent'
        }
    }]
}

const highchart = () => {
  return (
    <HighchartsReact
        highcharts={Highcharts}
        options={options}
    />
  )
}

export default highchart
