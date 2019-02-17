import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class Button extends Component {

    // static propTypes = {
    //     type: PropTypes.oneOf(['primary', 'success', 'warning', 'danger', 'info', 'dark']).isRequired
    // };

    render() {
        const { type, children } = this.props;

        return (
            <span className={`button ${type?type:''}`}>
                {children}
            </span>
        );
    };
};

