import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export default class Skills extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        stroke: {
          width: 1,
          colors: ['white'],
        },
        theme: {
          mode: 'light',
        },
        colors: ['rgba(255, 0, 0, 0.7)'],
        fill: {
          colors: ['rgba(255, 0, 0, 0.7)'],
        },
        dataLabels: {
          style: {
            colors: ['white'],
          },
        },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        title: {
          text: 'Core Programming Languages',
          align: 'center',
          floating: true,
          style: {
            fontSize: '16px',
          },
        },
        chart: {
          id: 'basic-bar',
        },
        xaxis: {
          categories: ['JavaScript', 'C++', 'Java', 'Python'],
          style: {
            colors: ['#ffffff'],
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
          },
          labels: {
            style: {
              colors: ['#ffffff'],
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
            },
          },
        },
      },
      series: [
        {
          name: 'Proficiency',
          data: [90, 80, 70, 60],
        },
      ],
    }
  }

  render() {
    return (
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            width="800"
          />
        </div>
      </div>
    )
  }
}
