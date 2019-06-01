export interface IAppProps {
  fetchChart: () => void;
  chart?: IChart;
}

export interface IAppState {
  chartReducer: { chart : IChart | undefined }
}

interface IChart {
  tracks: object
}
