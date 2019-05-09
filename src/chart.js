export function getBarChart() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: ['2014', '2015', '2016', '2017', '2018', '2019'],
      axisLine:{
        lineStyle:{
          color:'#8FA3B7',//y轴颜色
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#6D6D6D',
        }
      },
      axisTick: {show: false}
    }],
    yAxis: [{
      type: 'value',
      splitLine:{show: false},
      //max: 700,
      splitNumber: 3,
      axisTick: {show: false},
      axisLine:{
        lineStyle:{
          color:'#8FA3B7',//y轴颜色
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#6D6D6D',
        }
      },
    }],
    series: [

      {
        name: 'a',
        type: 'bar',
        barWidth: '40%',
        itemStyle: {
          normal: {
            color: '#FAD610'
          }
        },
        stack: '信息',
        data: [320, 132, 101, 134, 90, 30]
      },
      {
        name: 'b',
        type: 'bar',
        itemStyle: {
          normal: {
            color: '#27ECCE'
          }
        },
        stack: '信息',
        data: [220, 182, 191, 234, 290, 230]
      },
      {
        name: 'c',
        type: 'bar',
        itemStyle: {
          normal: {
            color: '#4DB3F5'
          }
        },
        stack: '信息',
        data: [150, 132, 201, 154, 90, 130]
      }
    ]
  };
  return option;
}

export function getLineChart() {
  //option
  const option = {
    color: ['#D53A35'],
    tooltip: {
      trigger: 'axis',
      //formatter: "{b} <br> 合格率: {c}%"
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      name: '',
      boundaryGap: false,
      axisLine:{
        show:false,
        lineStyle:{
          color:'#525252'
        }
      },
      axisTick:{
        show:false
      },
      axisLabel:{
        color:'#525252'
      },
      data: ['01', '02', '03', '04', '05', '06', '07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24']
    },
    yAxis: {
      type: 'value',
      name: '',
      axisLine:{
        show:false,
      },
      axisTick:{
        show:false
      },
      axisLabel:{
        color:'#525252'
      },
      splitLine:{
        lineStyle:{
          type:'dotted',
          color:'#AAA'//F3F3F3
        }
      }
    },
    series: [{
      name: 'a',
      type: 'line',
      symbol: 'circle',
      data: [100,120, 132, 101, 134, 90, 230, 210,80,20,90,210,200,100,120, 132, 101, 134, 90, 230, 210,80,20,90]
    }
    ]
  };
  return option;
}

export function getPieChart() {
  //option
  const option = {
    color: ['#3AA1FF', '#36CBCB', '#4ECB73', '#FBD338'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    series: [{
      name: '消费能力',
      type: 'pie',
      radius: ['40%', '55%'],
      center: ['50%', '55%'],
      avoidLabelOverlap: true,
      itemStyle: {
        normal: {
          borderColor: '#FFFFFF',
          borderWidth: 2
        }
      },
      label: {
        normal: {
          show: false,
        },
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [{
        name: 'a',
        value: '20'
      }, {
        name: 'b',
        value: '40'
      }, {
        name: 'c',
        value: '10'
      }, {
        name: 'd',
        value: '10'
      }]
    }]
  };
  return option;
}