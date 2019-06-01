import React from 'react';
import {ITrack} from './types'

const Track = ({track}: ITrack) => {
  const {
    album,
    artist,
    title,
    preview,
  } = track
  return (
    <div className='list__track'>
      <img className='list__img' src={album.cover_medium} alt='cover'/>
      <div>
        <div className='list__text'>
          <b>{artist.name}</b> {'-'}
          <span className='list__title'>{title}</span>
        </div>
        <audio
          className='list__audio'
          controls
          src={preview}>
          Ваш браузер не пожжерживает тег audio
        </audio>
      </div>
    </div>
  )
}

export default Track;