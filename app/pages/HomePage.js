'use strict';

//https://github.com/DickyT/react-native-tabbar-navigator#
import React, {Component} from 'react';
import {
  View,
  Text,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import {TabViewAnimated, TabBarTop, TabBar} from 'react-native-tab-view';
import MonthlyViewContainer from '../containers/MonthlyViewContainer';
import styles from '../styles'

import Footer from '../components/Footer';


export default class HomePage extends Component {

  state = {
    index: 0,
    routes: [
      {key: '1', title: 'Calendar'},
      {key: '2', title: 'Statistics'},
      {key: '3', title: 'Logs'},
    ],
  };

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderContent}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }

  _handleChangeTab = (index) => {
    this.setState({index});
  };

  _renderHeader = (props) => {
    return (
      <TabBarTop
        {...props}
        indicatorStyle={styles.indicator}
        renderIcon={this._renderIcon}
        style={styles.tabbar}
      />
    );
  };

  _renderContent = ({route}) => {
    switch (route.key) {
      case '1':
        return <MonthlyViewContainer/>;
      case '2':
        return <View style={[styles.page, {backgroundColor: '#673ab7'}]}/>;
      case '3':
        return <View style={[styles.page, {backgroundColor: 'red'}]}/>;
      default:
        return null;
    }
  };

}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
                        onPress={() => navigator.parentNavigator.pop()}>
        <Text style={{color: 'white', margin: 10,}}>
          back
        </Text>
      </TouchableOpacity>
    );
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          what?
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, navState) {
    return <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{color: 'white', margin: 10, fontSize: 16}}>
        right
      </Text>
    </TouchableOpacity>;
  }
};

