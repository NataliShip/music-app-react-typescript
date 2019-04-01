export interface IAppProps {
  fetchChart: () => void;
  chart?: IChart;
}

export interface IAppState {
  chartReducer: { chart : IChart | undefined }
}

interface IChart {
  tracks: { data: ITrack[] }
}

interface ITrack {
    id: number;
    title: string;
    album: { cover_small : string };
    artist: { name: string }
}