import {connect} from 'react-redux';
import MonthlyView from '../components/MonthlyView';
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

export default MonthlyViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MonthlyView)