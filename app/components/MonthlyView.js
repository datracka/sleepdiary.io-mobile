import React, {Component} from 'react'
import {
  View,
  Text
} from 'react-native';

import CustomCalendarContainer from '../containers/CustomCalendarContainer'
export default class TestComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchEntries();
  }

  onDateSelect(date) {
    //console.log(date);
  }

  render() {
    //console.log(this.props.entries.entries);
    return (
      <CustomCalendarContainer
       scrollEnabled={false}
       showControls={true}
       titleFormat={'MMMM YYYY'}
       dayHeadings={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
       monthNames={[]}
       prevButtonText={'Prev'}
       nextButtonText={'Next'}
       onDateSelect={(date) => this.onDateSelect(date)}
       onTouchPrev={this.onTouchPrev}
       onTouchNext={this.onTouchNext}
       onSwipePrev={this.onSwipePrev}
       onSwipeNext={this.onSwipeNext}
       eventDates={['2015-07-01']}
       startDate={'2016-11-01'}
       selectedDate={'2016-11-15'}
       customStyle={{day: {fontSize: 15, textAlign: 'center'}}}
       weekStart={1}
       entries={this.props.entries.entries}
       />
    )
  }
}
