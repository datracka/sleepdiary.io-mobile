import {connect} from 'react-redux';
import MonthlyView from '../components/MonthlyView';
import {AsyncStorage} from 'react-native';
import {fetchEntries} from '../actions'

const mapStateToProps = (state) => ({
  entries: state.entries,
  calendarView: state.filters
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEntries: () => {
      dispatch(fetchEntries())
        .then((response) => {
          console.log("then?", response);
        })
        .catch((response)=> {
          console.log("catched! ", response);
        });
    }
  }
}

export default LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MonthlyView)