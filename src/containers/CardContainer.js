import Card from '../components/Card';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    card: state.cards.entities[ownProps.cardId],
  };
};

export default connect(mapStateToProps)(Card);
