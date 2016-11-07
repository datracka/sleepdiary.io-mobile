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
import MonthlyView from '../components/MonhtlyView';
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
        return <MonthlyView/>;

      /*return <CustomCalendar
       scrollEnabled={true}
       showControls={true}
       titleFormat={'MMMM YYYY'}
       dayHeadings={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
       monthNames={Array}
       prevButtonText={'Prev'}
       nextButtonText={'Next'}
       onDateSelect={(date) => this.onDateSelect(date)}
       onTouchPrev={this.onTouchPrev}
       onTouchNext={this.onTouchNext}
       onSwipePrev={this.onSwipePrev}
       onSwipeNext={this.onSwipeNext}
       eventDates={['2015-07-01']}
       today={'2016-16-05'}
       startDate={'2015-08-01'}
       selectedDate={'2015-08-15'}
       customStyle={{day: {fontSize: 15, textAlign: 'center'}}}
       weekStart={1}
       />;*/
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

