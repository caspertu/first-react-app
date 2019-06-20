import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClickCounter extends Component {
    constructor(props) {
        super(props);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.state = {
            count: props.initValue || 0
        };
    }

    updateCounter(isIncrement) {
        const previousValue = this.state.count
        const newValue = isIncrement ? this.state.count + 1 : this.state.count - 1
        this.setState({ count: newValue })
        this.props.onUpdate(previousValue, newValue)
    }

    onClickIncrementButton() {
        this.updateCounter(true)
    }

    onClickDecrementButton() {
        this.updateCounter(false)
    }


    render() {
        const counterStyle = { margin: '16px' }
        const { Caption } = this.props;
        return (
            <div style={counterStyle}>
                <button onClick={this.onClickIncrementButton}>+</button>
                <button onClick={this.onClickDecrementButton}>-</button>
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
    initValue: PropTypes.number,
    onUpdate: PropTypes.func.isRequired
};

export default ClickCounter;