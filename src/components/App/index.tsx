import {connect} from "react-redux";
import { Dispatch, AnyAction } from 'redux';
import React, { Component } from 'react';
import _ from 'lodash'
import {fetchChart} from '../../actions/fetchChart'
import {IAppProps, IAppState} from './types'
import './App.scss';

class App extends Component<IAppProps, IAppState> {
  componentWillMount() {
      this.props.fetchChart();
  }

  render() {
    const tracks = _.get(this.props, ['chart', 'tracks', 'data'])
    return (
      <div className="app">
        <header className='app__header'>
          Chart
        </header>
        <div className='list'>
          <div className='list__container'>
            {tracks ?
              _.map(tracks, track => {
                return (
                  <div key={track.id} className='list__track'>
                    <img src={track.album.cover} alt=""/>
                    <div>{track.title}</div>
                  </div>
                )
              })
              : <span>Идет загрузка...</span>
            }
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state : IAppState) {
    return {
        chart: state.chartReducer.chart
    }
}

function mapDispatchToProps(dispatch : Dispatch<AnyAction>) {
    return ({
        fetchChart: () => {dispatch(fetchChart())},
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
