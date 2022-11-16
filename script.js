Highcharts.chart('pie-chart-container', {
  chart: {
    type: 'pie'
  },
  title: {
    text: 'Komoditas Bahan Pangan - Des 2017'
  },
  series: [{
    data: [{
      name: 'Beras',
      y: 30.92
    }, {
      name: 'Gandum',
      y: 20.88
    }, {
      name: 'Kedelai',
      y: 19.31
    }, {
      name: 'Jagung',
      y: 15.42
    }, {
      name: 'Cabai',
      y: 13.65
    }]
  }],
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      }
    }
  }
});


var chart = {
  type: 'scatter',
  zoomType: 'xy'
};
var title = {
  text: 'Fluktuasi Harga Cabai Tahun 2017 (per Kg)'
};
var subtitle = {
  text: 'Source: Open Data Jakarta'
};
var xAxis = {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  title: {
    enabled: true,
    text: 'Bulan'
  },
  startOnTick: true,
};
var yAxis = {
  title: {
    text: 'Harga (Rp)'
  }
};
var legend = {
  layout: 'vertical',
  align: 'left',
  verticalAlign: 'top',
  x: 100,
  y: 70,
  floating: true,
  backgroundColor: (
    Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
    '#FFFFFF',
  borderWidth: 1
}
var plotOptions = {
  scatter: {
    marker: {
      radius: 5,
      states: {
        hover: {
          enabled: true,
          lineColor: 'rgb(100,100,100)'
        }
      }
    },
    states: {
      hover: {
        marker: {
          enabled: false
        }
      }
    },
    tooltip: {
      headerFormat: '<b>{series.name}</b><br>',
      pointFormat: 'Rp{point.y}'
    }
  }
};
var series = [
  {
    name: 'Cabai',
    color: 'rgba(223, 83, 83, .5)',
    data: [
      ["Jan", 31000], ["Feb", 31900], ["Mar", 34700],
      ["Apr", 29000], ["Mei", 30100], ["Jun", 27090],
      ["Jul", 30060], ["Agu", 32980], ["Sep", 35701],
      ["Okt", 32900], ["Nov", 30000], ["Des", 29960]
    ]
  }
];

var json = {};
json.chart = chart;
json.title = title;
json.subtitle = subtitle;
json.legend = legend;
json.xAxis = xAxis;
json.yAxis = yAxis;
json.series = series;
json.plotOptions = plotOptions;

Highcharts.chart('scatter-chart-container', json);

Highcharts.chart('boxplot-container', {

  chart: {
    type: 'boxplot'
  },

  title: {
    text: 'Highcharts Box Plot Example'
  },

  legend: {
    enabled: false
  },

  xAxis: {
    categories: ['Kedelai', 'Gandum', 'Jagung'],
    title: {
      text: 'Jenis Pangan'
    }
  },

  yAxis: {
    title: {
      text: 'Rata-rata Konsumsi (Gr)'
    },
  },

  series: [{
    name: 'Data Konsumsi',
    data: [
      [760, 801, 848, 895, 965],
      [733, 853, 939, 980, 1080],
      [714, 762, 817, 870, 918]
    ],
    tooltip: {
      headerFormat: '<em>Data {point.key}</em><br/>'
    }
  }]
});

Highcharts.chart('bar-chart-container', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Harga Beras, Gandum, dan Jagung tiap Tahun (per Kg)'
  },
  subtitle: {
    text: 'Source: Open Data Jakarta'
  },
  xAxis: {
    categories: ['Jakarta Utara', 'Jakarta Selatan', 'Jakarta Barat', 'Jakarta Timur', 'Jakarta Pusat'],
    title: {
      text: 'Kota'
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Harga (Rp)',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    layout: 'horizontal',
    align: 'right',
    verticalAlign: 'top',
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
    shadow: true
  },

  credits: {
    enabled: false
  },
  series: [
    {
      name: 'Harga Beras (Liter)',
      data: [11335, 10450, 11393, 9848, 12265]
    },
    {
      name: 'Harga Gula (Kg)',
      data: [11500, 12795, 11223, 11018, 12250]
    },
    {
      name: 'Harga Minyak Goreng (Liter)',
      data: [11308, 12027, 11750, 11215, 11500]
    }
  ],
})