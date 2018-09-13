import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echartslink',
  templateUrl: './echartslink.component.html',
  styles: []
})
export class EchartslinkComponent implements OnInit {

  echartsIntance: any;

  loading = true;

  linkoption = {
    title: {
      text: '网站今日访问量'
    },
    color: ['#3398DB'],
    // 气泡提示框，常用于展现更详细的数据
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    toolbox: {
      show: true,
      feature: {
        // 显示缩放按钮
        dataZoom: {
          show: true
        },
        // 显示折线和块状图之间的切换
        magicType: {
          show: true,
          type: ['bar', 'line']
        },
        // 显示是否还原
        restore: {
          show: true
        },
        // 是否显示图片
        saveAsImage: {
          show: true
        }
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
      data: [21231, 1212, 21231, 3213],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        interval: 0,
        rotate: 20
      },
    }],
    yAxis: [{
      name: '网站今日访问量',
      type: 'value'
    }],
    series: [{
      name: '今日访问次数',
      type: 'bar',
      barWidth: '60%',
      label: {
        normal: {
          show: true
        }
      },
      data: [21231, 1212, 21231, 3213]
    }]
  };


  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  onChartInit(ec) {
    this.echartsIntance = ec;
  }

}
