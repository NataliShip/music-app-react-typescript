import React, { Component } from 'react';
import './Search.scss';
import {ISearchProps} from "./types";

class Search extends Component<ISearchProps> {
  render() {
    const {props: {match}} = this
    return (
      <div>
        Страница поиска
        <div>{match.params.query}</div>
      </div>
    );
  }
}

export default Search;