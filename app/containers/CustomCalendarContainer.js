import {connect} from 'react-redux';
import CustomCalendar from '../components/CustomCalendar';
import {fetchEntries} from '../actions';


const mapStateToProps = (state) => ({
  entries: state.entries,
  calendarView: state.filters
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEntries: () => {
      dispatch(fetchEntries())
        .then((response) => {

        })
        .catch((response)=> {

        });
    }
  }
}

export default CustomCalendarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomCalendar)