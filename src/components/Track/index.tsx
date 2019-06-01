import React from 'react';
import {ITrack} from './types'

const Track = ({track}: ITrack) => {
  const {
    id,
    album,
    artist,
    title,
  } = track
  return (
    <div key={id} className='list__track'>
      <img className='list__img' src={album.cover_small} alt='cover'/>
      <div><b>{artist.name}</b> {'-'} {title}</div>
    </div>
  )
}

export default Track;