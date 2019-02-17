import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class Footer extends Component {

    render() {
        return (

            <div>

            <div className={'footer'}>

                <div className={'container'}>

                    <ul>

                        <li> 
                            <h5> Products </h5>
                            <p> Product one</p>
                            <p> Product two </p>
                        </li>

                        <li> 
                            <h5> Resources </h5>
                            <p> FAQ </p>
                            <p> News </p>
                            
                        </li>

                        <li> 
                            <h5> About </h5>
                            <p> About </p>
                            <p> Notes </p>
                        </li>

                        <li> 
                            <h5> Contact </h5>
                            <p> Contact us </p>
                            <p> Help </p>
                        </li>

                        <li></li>

                    </ul>

                </div>

            </div>

            <div className={'subFooter'}>

                <div className={'container'}>
                        
                    <ul> 

                        <li> © YTD</li>

                        <li> Link 1 </li>

                        <li> Link 2 </li>

                        <li> Link 3 </li>

                    </ul>

                </div>

            </div>

            </div>

        );
    }
}