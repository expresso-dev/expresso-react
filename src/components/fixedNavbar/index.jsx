import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import './style.scss';

export default class FixedNavbar extends Component {

    render() {
        return (

            <div className={'fixedNavbar'}>

                <div className={'container'}>

                    <img className={'brand'} src={'https://bccuoa.org/static/img/dasset.svg'} />

                    <ul>

                        <li> <a href=""> Products </a> </li>

                        <li> <a href=""> About </a> </li>

                        <li> <a href=""> Fees </a> </li>

                        <li> <a href=""> Contact </a> </li>

                        <li/><li/><li/>

                    </ul>

                    <ul className={'right'}>

                        <li style={{ color:'#788294', marginRight: '35px', fontSize: '13px' }} > <span> Log in </span> </li> 

                        <li style={{ marginLeft: '0px', marginRight: '10px'}} > <Button type={'primary buttonLoginFixedNavbar'} children={'Sign Up'}/> </li> 

                    </ul>

                </div>

            </div>

        );
    }
}