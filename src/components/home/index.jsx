import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Button from '../button';

// const mapStateToProps = state => {
//     return {};
// };

export default class Home extends Component {

    render() {
        return (

            <div className="home container">

            	<div className="landingText">
	                
	                <p className="main">Hello, world.</p>

	                <p className="subMain">This text appears</p>

	                <Button children="I'm a button" />

	                <p className="disclaimer"> By continuing you agree with all <a href="">terms and conditions </a> </p>

	            </div>

            </div>

        );
    }
}