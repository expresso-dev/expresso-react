import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import './style.scss';

// const mapStateToProps = state => {
//     return {};
// };

export default class Navbar extends Component {

    // static propTypes = {};

    // state = {};

    // constructor(props) {
    //     super(props);

    // }

    // componentWillMount() {

    // }

    // componentDidMount() {

    // }

    // componentWillReceiveProps(nextProps) {

    // }

    // shouldComponentUpdate(nextProps, nextState) {

    // }

    // componentWillUpdate(nextProps, nextState) {

    // }

    // componentDidUpdate(prevProps, prevState) {

    // }

    // componentWillUnmount() {

    // }

    render() {
        return (

            <div className={'navbar container'}>

                <b className={'brand'} children={'Expresso'} />

                <ul>

                    <li> <a href=""> Products </a> </li>

                    <li> <a href=""> About </a> </li>

                    <li> <a href=""> Contact </a> </li>

                    <li> <a href=""> More </a> </li>

                    <li/><li/><li/>

                </ul>

                <ul className={'right'}>

                    <span style={{ marginRight: '35px' }} className={'logIn'}> Log in </span>

                    <Button type={'buttonLogin'} children="Sign Up" />

                </ul>

            </div>

        );
    }
}