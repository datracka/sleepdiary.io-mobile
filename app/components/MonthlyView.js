import React, {Component} from 'react'
import {
  View,
  Text
} from 'react-native';

import styles from '../styles'
import CustomCalendarContainer from '../containers/CustomCalendarContainer'
export default class TestComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CustomCalendarContainer
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
       />
    )
  }
}
