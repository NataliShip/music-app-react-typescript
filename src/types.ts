export interface Data {
  id: number
  title: string
  album: { cover_medium : string }
  artist: { name: string }
  preview: string
}

export interface ChartState {
  data: {
    tracks: {
      data: Data[]
    }
  },
  error: Error | null,
  isLoaded: boolean
}

export interface RootState {
  chartReducer: ChartState,
}
