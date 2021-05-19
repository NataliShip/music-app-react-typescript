import React from 'react';
import {ITrack} from './types'
import css from './track.module.sass'

const Track: React.FC<ITrack> = ({ track }) => {
  const { album, artist, title, preview } = track
  return (
    <div className={css.track}>
      <img className={css.img} src={album.cover_medium} alt='cover'/>
      <div>
        <div className={css.text}>
          <b>{artist.name}</b> {'-'}
          <span className={css.title}>{title}</span>
        </div>
        <audio
          className={css.audio}
          controls
          src={preview}>
          Ваш браузер не пожжерживает тег audio
        </audio>
      </div>
    </div>
  )
}

export default Track
