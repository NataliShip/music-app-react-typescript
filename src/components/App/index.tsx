import {connect} from "react-redux";
import {Dispatch, AnyAction} from 'redux';
import React, { Component } from 'react';
import _ from 'lodash'
import {index} from '../../actions/index'
import {IAppProps, IAppState} from './types'
import './app.scss';
import Track from '../Track'

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
                  <Track track={track}/>
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
        fetchChart: () => {dispatch(index())},
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
