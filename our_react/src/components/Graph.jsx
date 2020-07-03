/* eslint-disable react/prop-types */
import React from 'react';
import Plot from 'react-plotly.js';

export default function Graph(props) {
  const points = { x: [], y: [] };
  const { data, country } = props;
  data.forEach((e, i) => {
    if (i % 8 === 0 || i === 0) {
      points.x = [...points.x, e.Date];
      points.y = [...points.y, e.Cases];
    }
  });
  return (
    <Plot
      data={[
        {
          x: [...points.x],
          y: [...points.y],
          type: 'scatter',
          mode: 'lines',
        },

      ]}
      layout={{
        width: 1000,
        height: 700,
        plot_bgcolor: 'rgb(245, 245, 245)',
        paper_bgcolor: 'rgb(245, 245, 245)',
        xaxis: {
          title: { text: 'Date' },
          showgrid: false,
        },
        yaxis: {
          title: { text: 'Number of deaths' },
          showgrid: false,
        },
        title: `Deaths in ${country} from February to present (weekly interval)`,
      }}
      config={{
        editable: false,
        responsive: true,
        displayModeBar: false,
      }}
    />
  );
}
