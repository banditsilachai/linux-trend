import oneFile from "../data/last1months.json";
import threeFile from "../data/last3months.json";
import sixFile from "../data/last6months.json";
import twelveFile from "../data/last12months.json";
import { useState } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const resultData = [
  {
    name: oneFile.last1months[0].name,
    data: [
      twelveFile.last12months[0].rank,
      sixFile.last6months[0].rank,
      threeFile.last3months[0].rank,
      oneFile.last1months[0].rank,
    ],
  },
  {
    name: oneFile.last1months[1].name,
    data: [
      twelveFile.last12months[1].rank,
      sixFile.last6months[1].rank,
      threeFile.last3months[1].rank,
      oneFile.last1months[1].rank,
    ],
  },
  {
    name: oneFile.last1months[2].name,
    data: [
      twelveFile.last12months[2].rank,
      sixFile.last6months[2].rank,
      threeFile.last3months[2].rank,
      oneFile.last1months[2].rank,
    ],
  },
  {
    name: oneFile.last1months[3].name,
    data: [
      twelveFile.last12months[3].rank,
      sixFile.last6months[3].rank,
      threeFile.last3months[3].rank,
      oneFile.last1months[3].rank,
    ],
  },
  {
    name: oneFile.last1months[4].name,
    data: [
      twelveFile.last12months[4].rank,
      sixFile.last6months[4].rank,
      threeFile.last3months[4].rank,
      oneFile.last1months[4].rank,
    ],
  },
  {
    name: oneFile.last1months[5].name,
    data: [
      twelveFile.last12months[5].rank,
      sixFile.last6months[5].rank,
      threeFile.last3months[5].rank,
      oneFile.last1months[5].rank,
    ],
  },
  {
    name: oneFile.last1months[6].name,
    data: [
      twelveFile.last12months[6].rank,
      sixFile.last6months[6].rank,
      threeFile.last3months[6].rank,
      oneFile.last1months[6].rank,
    ],
  },
  {
    name: oneFile.last1months[7].name,
    data: [
      twelveFile.last12months[7].rank,
      sixFile.last6months[7].rank,
      threeFile.last3months[7].rank,
      oneFile.last1months[7].rank,
    ],
  },
  {
    name: oneFile.last1months[8].name,
    data: [
      twelveFile.last12months[8].rank,
      sixFile.last6months[8].rank,
      threeFile.last3months[8].rank,
      oneFile.last1months[8].rank,
    ],
  },
  {
    name: oneFile.last1months[9].name,
    data: [
      twelveFile.last12months[9].rank,
      sixFile.last6months[9].rank,
      threeFile.last3months[9].rank,
      oneFile.last1months[9].rank,
    ],
  },
];

export default function ChartSample() {
  const [dataSample, setDataSample] = useState({
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: [
          "Last 12 months",
          "Last 6 months",
          "Last 3 months",
          "Last 1 month",
        ],
      },
      stroke: {
        width: 2,
      },
      dataLabels: {
        enabled: false,
      },
    },
    series: resultData,
  });

  return (
    <>
      <Chart
        options={dataSample.options}
        series={dataSample.series}
        height={350}
      />
    </>
  );
}
