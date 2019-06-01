export interface ITrack {
  track: {
    id: number;
    title: string;
    album: { cover_small : string };
    artist: { name: string }
  }
}