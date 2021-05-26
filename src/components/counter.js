import React from 'react';
import '../index.css';
import {connect} from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

const Counter = ({counter, inc, dec, res}) => {
    return (
        <div className="content">
            <div className="wrapper">
                <h1>{counter}</h1>
            </div>
            <div className="buttons">
                <button onClick={dec} className="dec">
                    {/* <img src="./img/plus.svg" alt="plus"> */}
                </button>
                <button onClick={inc} className="inc">
                    {/* <img src="./img/minus.svg" alt="minus"> */}
                </button>
                <button onClick={res} className="res">
                    {/* <img src="./img/res.svg" alt="reset"> */}
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);