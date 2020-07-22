import React, { FC, memo } from "react";
import { Chart } from "react-google-charts";
import { ChartWrapperOptions } from "react-google-charts/dist/types";

type PieChartProps = {
    title: string;
    width?: string;
    height?: string;
    dataLegend: [string, string];
    data: Array<[string, number]>;
    is3D?: boolean;
};

const PieChart: FC<PieChartProps> = (props: PieChartProps): JSX.Element => {
   const { title, height, width, dataLegend, data, is3D } = props;

   const options: ChartWrapperOptions["options"] = { title, is3D, pieHole: 0.4 };

   return (
      <Chart
         chartType="PieChart"
         data={[dataLegend, ...data]}
         options={options}
         graph_id="PieChart"
         width={width}
         height={height}
         legend_toggle
      />
   );
};

export default memo(PieChart);
