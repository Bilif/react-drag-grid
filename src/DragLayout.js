import React, { PureComponent } from 'react';
import { Layout,Button } from 'antd';
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
import ReactEcharts from 'echarts-for-react';
import { getBarChart,getLineChart,getPieChart } from "./chart";

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const { Header, Content} = Layout;

export default class DragLayout extends PureComponent {
  static defaultProps = {
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 100,
  };

  constructor(props) {
    super(props);
    this.state = {
      layout: [],
      data: [],
    };
  }

  generateDOM = () => {
    // const componentLayout = JSON.parse(window.localStorage.getItem('component'));
    return _.map(this.state.data, (l, i) => {
      let option;
      if (l.type === 'bar') {
        option = getBarChart();
      }else if (l.type === 'line') {
        option = getLineChart();
      }else if (l.type === 'pie') {
        option = getPieChart();
      }
      let component = (
        <ReactEcharts
          option={option}
          notMerge={true}
          lazyUpdate={true}
          style={{width: '100%',height:'100%'}}
        />
      )
      return (
        <div key={i} data-grid={l}>
          {component}
        </div>
      );
    });
  };

  addChart(type) {
    const addItem = {
      x: (this.state.layout.length * 2) % (this.state.cols || 12),
      y: Infinity, // puts it at the bottom
      w: 2,
      h: 2,
      i: this.state.layout.length.toString(),
    };
    this.setState(
      {
        layout: this.state.layout.concat(addItem),
        data: this.state.data.concat({
          ...addItem,
          type,
        }),
      },
    );
  };

  render() {
   return(
     <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Button type="primary" style={{'marginRight':'20px'}} onClick={this.addChart.bind(this,'bar')}>Add Bar chart</Button>
        <Button type="primary" style={{'marginRight':'20px'}} onClick={this.addChart.bind(this,'line')}>Add Line chart</Button>
        <Button type="primary" style={{'marginRight':'20px'}} onClick={this.addChart.bind(this,'pie')}>Add Pie chart</Button>
      </Header>
      <Content style={{ marginTop: 24 }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 800 }}>
          <ResponsiveReactGridLayout
            {...this.props}
            onBreakpointChange={this.onBreakpointChange}
            onLayoutChange={this.onLayoutChange}
          >
            {this.generateDOM()}
          </ResponsiveReactGridLayout>
        </div>
      </Content>
    </Layout>
   )}
}
