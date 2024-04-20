var barChartOptions = {
    series: [{
    data: [800, 780, 730, 670, 640, 580, 590, 1100, 100, 1380]
    
  }],
    chart: {
    type:'bar',
    height: 350,
    toolbar:{
        show:false
    },
  },
plotOptions: {
    bar: {
        distibuted:true,
      borderRadius: 4,
      horizontal: false,
      columnWidth:'40%',
    
    }
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    show:false
  },
  xaxis: {
   
    categories: ['2024', '2023', '2022', '2021', '2020', '2019','2018','2017','2016','2015'],
    title:{
        text:"Year"
    }
    
    

},
  yaxis:{
    title:{
        text:"Consumption"
    }
    
    


  },
  
  };

  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barChart.render();

  //another chart
  var bar1ChartOptions = {
    series: [{
    data: [800, 780, 730, 670, 640, 580, 590, 1100, 100, 1380]
  }],
    chart: {
    type:'bar',
    height: 350,
    toolbar:{
        show:false
    },
  },
plotOptions: {
    bar: {
        distibuted:true,
      borderRadius: 4,
      horizontal: false,
      columnWidth:'40%',
    
    }
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    show:false
  },
  xaxis: {
    categories: ['jan', 'feb', 'mar', 'apr', 'may', 'jun','july','aug','sep','oct'],
    title:{
        text:"Months"
    }
},
  yaxis:{
    title:{
        text:"Consumption"
    }
  },
  
  };

  var bar1Chart = new ApexCharts(document.querySelector("#bar1-chart"), bar1ChartOptions);
  bar1Chart.render();

//another chart
// Sample data for the pie chart
var pieChartData = {
    series: [34, 12, 13, 31, 10],
    labels: ['AC','SMART LED' ,'FAN', 'HEATER','BULB'],
  };

  var pieChartOptions = {
    chart: {
      type: 'pie',
      height: 400
    },
    labels: pieChartData.labels,
    series: pieChartData.series,
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  var pieChart = new ApexCharts(document.querySelector("#pie-chart"), pieChartOptions);
  pieChart.render();


//next chart
var pie1ChartData = {
    series: [43, 21, 8, 21, 7],
    labels: ['AC','SMART LED' ,'FAN', 'HEATER','BULB'],
  };

  var pie1ChartOptions = {
    chart: {
      type: 'pie',
      height: 400
    },
    labels: pie1ChartData.labels,
    series: pie1ChartData.series,
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  var pie1Chart = new ApexCharts(document.querySelector("#pie1-chart"), pie1ChartOptions);
  pie1Chart.render();

  // Line chart data
var lineChartData = {
    series: [{
        name: 'Series 1',
        data: [30, 40, 35, 150, 49, 60, 40, 91, 125,30]
    }],
    chart: {
        type: 'line',
        height: 350,
        toolbar: {
            show: false
        },
    },
    plotOptions: {
        bar: {
            distibuted: true,
            borderRadius: 4,
            horizontal: false,
            columnWidth: '40%',
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    xaxis: {
        categories: [0,5,15,20,25,30,35,40,45,50],
        title: {
            text: "hour of the day"
        }
    },
    yaxis: {
        title: {
            text: "Average teamperature in F"
        }
    },
};

// Create line chart
var lineChart = new ApexCharts(document.querySelector("#line-chart"), lineChartData);
lineChart.render();