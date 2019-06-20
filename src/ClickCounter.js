import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClickCounter extends Component {
    constructor(props) {
        super(props);
        this.onClickIncreaseButton = this.onClickIncreaseButton.bind(this);
        this.onClickDecreaseButton = this.onClickDecreaseButton.bind(this);
        this.state = {
            count: props.initValue || 0
        };
    }

    onClickIncreaseButton() {
        this.setState({count: this.state.count + 1});
    }

    onClickDecreaseButton() {
        this.setState({count: this.state.count - 1});
    }

    render() {
        const counterStyle = { margin: '16px' }
        const { Caption } = this.props;
        return (
            <div style={counterStyle}>
                <button onClick={this.onClickIncreaseButton}>+</button>
                <button onClick={this.onClickDecreaseButton}>-</button>
                <span>{ Caption } Count: {this.state.count}</span>
            </div>
        );
    }
}

ClickCounter.defaultProps = {
    initValue: 10,
};

ClickCounter.propTypes = {
    Caption: PropTypes.string.isRequired,
    initValue: PropTypes.number
};

export default ClickCounter;