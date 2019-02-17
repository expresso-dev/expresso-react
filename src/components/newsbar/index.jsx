import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import './style.scss';

export default class Newsbar extends Component {


    render() {
        return (

            <div className={'newsbar'}>

            	<div className={'container'}>

            		<p>Hey I'm some interesting news! You can tell your audience something important here. <span className={'actionButton'}> Learn More </span> </p>

            	</div>

            </div>

        );
    }
}