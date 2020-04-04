import { connect } from 'react-redux';
import Price from './Price.presentational.jsx';

const mapStateToProps = state => ({
  oddsFormat: state.oddsFormat
});

export default connect(mapStateToProps)(Price);
