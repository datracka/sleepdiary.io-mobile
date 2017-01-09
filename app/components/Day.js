import React, {Component, PropTypes} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import styles from '../styles';

export default class Day extends Component {
  static defaultProps = {
    customStyle: {},
  }

  static propTypes = {
    caption: PropTypes.any,
    customStyle: PropTypes.object,
    filler: PropTypes.bool,
    event: PropTypes.object,
    isSelected: PropTypes.bool,
    isToday: PropTypes.bool,
    isWeekend: PropTypes.bool,
    onPress: PropTypes.func,
    usingEvents: PropTypes.bool,
    sleepingIndicators: PropTypes.object,
    calendarView: PropTypes.string
  }

  dayCircleStyle = (isWeekend, isSelected, isToday, event, sleepingIndicators, calendarView) => {
    const {customStyle} = this.props;
    const dayCircleStyle = [styles.dayCircleFiller, customStyle.dayCircleFiller];

    /*    if (isSelected && !isToday) {
     dayCircleStyle.push(styles.selectedDayCircle, customStyle.selectedDayCircle);
     } else if (isSelected && isToday) {
     dayCircleStyle.push(styles.currentDayCircle, customStyle.currentDayCircle);
     }*/
    if (typeof sleepingIndicators !== 'undefined') {
      if (calendarView === 'SHOW_SLEEPING_QUALITY') {
        switch (sleepingIndicators.sleepingQuality) {
          case 'good':
            dayCircleStyle.push(styles.greenDayCircle);
            break;
          case 'regular':
            dayCircleStyle.push(styles.yellowDayCircle);
            break;
          case 'bad':
            dayCircleStyle.push(styles.redDayCircle);
            break;
          default:
          //nothing
        }
      }

      if (calendarView === 'SHOW_TIREDNESS_FEELING') {
        switch (sleepingIndicators.tirednessFeeling) {
          case 'good':
            dayCircleStyle.push(styles.greenDayCircle);
            break;
          case 'regular':
            dayCircleStyle.push(styles.yellowDayCircle);
            break;
          case 'bad':
            dayCircleStyle.push(styles.redDayCircle);
            break;
          default:
          //nothing
        }

      }
    }

    if (event) {
      dayCircleStyle.push(styles.hasEventCircle, customStyle.hasEventCircle, event.hasEventCircle)
    }
    return dayCircleStyle;
  }

  dayTextStyle = (isWeekend, isSelected, isToday, event) => {
    const {customStyle} = this.props;
    const dayTextStyle = [styles.day, customStyle.day];

    if (isToday && !isSelected) {
      dayTextStyle.push(styles.currentDayText, customStyle.currentDayText);
    }  else if (isWeekend) {
      dayTextStyle.push(styles.weekendDayText, customStyle.weekendDayText);
    }

    if (event) {
      dayTextStyle.push(styles.hasEventText, customStyle.hasEventText, event.hasEventText)
    }
    return dayTextStyle;
  }

  render() {
    let {caption, customStyle} = this.props;
    const {
      filler,
      event,
      isWeekend,
      isSelected,
      isToday,
      usingEvents,
      sleepingIndicators,
      calendarView
    } = this.props;

    return filler
      ? (
      <TouchableWithoutFeedback>
        <View style={[styles.dayButtonFiller, customStyle.dayButtonFiller]}>
          <Text style={[styles.day, customStyle.day]}/>
        </View>
      </TouchableWithoutFeedback>
    )
      : (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={[styles.dayButton, customStyle.dayButton]}>
          <View style={this.dayCircleStyle(isWeekend, isSelected, isToday,
            event, sleepingIndicators, calendarView)}>
            <Text style={this.dayTextStyle(isWeekend, isSelected, isToday, event)}>{caption}</Text>
          </View>
          {usingEvents &&
          <View style={[
            styles.eventIndicatorFiller,
            customStyle.eventIndicatorFiller,
            event && styles.eventIndicator,
            event && customStyle.eventIndicator,
            event && event.eventIndicator]}
          />
          }
        </View>
      </TouchableOpacity>
    );
  }
}
