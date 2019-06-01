export interface ITrack {
  track: {
    id: number;
    title: string;
    album: { cover_medium : string };
    artist: { name: string };
    preview: string;
  }
}