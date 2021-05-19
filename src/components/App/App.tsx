import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../actions'
import { RootState } from '../../types'
import Track from '../Track/Track'
import css from './app.module.sass'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const data = useSelector((state: RootState) => state.chartReducer.data)

  useEffect(() => {
    dispatch(actions.fetchChart())
  }, [dispatch])

  const tracks = data.tracks.data

  return (
    <div className={css.root}>
      <header className={css.header}>
        Chart
      </header>
      <div className={css.list}>
        <div className={css.container}>
          {tracks
            ? tracks.map(track => <Track key={track.id} track={track}/>)
            : <span>Идет загрузка...</span>
          }
        </div>
      </div>
    </div>
  )
}

export default App
