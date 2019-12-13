import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom'

import './styles.css';
//import { funcs } from './actions';


class NewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div className="textContainer">
        <h2>Hooray! You've downloaded my react boiler plate</h2>
        <h3>Anyways, this code is in src/container/NewPage/index.js</h3>
      </div>
    );
  }
}

NewPage.propTypes = {

};

NewPage.defaultProps = {

};

function mapStateToProps(state) {
  return {
    // action func name: state.reducerName.actionfuncname

  };
}

function mapDispatchToProps(dispatch) {
  //return bindActionCreators({ //funcs from actions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPage);
