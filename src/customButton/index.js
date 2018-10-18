import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { CHANGE_BUTTON_STATE } from '../redux/actionTypes';
import './customButton.scss';

const mapStateToProps = state => ({ customButtonValue: state.customButtonValue });

class CustomButton extends Component {
  handleClick = (value) => {
    const { dispatch } = this.props;
    const currentState = (value === 'primary' ? 'secondary' : 'primary');
    dispatch({
      type: CHANGE_BUTTON_STATE,
      payload: {
        customButtonValue: currentState,
      },
    });
  }

  render() {
    const { customButtonValue } = this.props;
    return (
      <div>
        <Button
          variant="raised"
          value={customButtonValue}
          className={`custom-button button-${customButtonValue}`}
          onClick={() => this.handleClick(customButtonValue)}
        >
          {customButtonValue}
        </Button>
      </div>);
  }
}

CustomButton.propTypes = {
  customButtonValue: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(CustomButton);
