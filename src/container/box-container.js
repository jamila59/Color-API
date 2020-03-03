import React from 'react';
import { directive } from '@babel/types';
import Box from '../component/box';
import {connect} from 'react-redux';
import *  as actionCreators from "../actions/index"


class BoxCon extends React.Component {
    render(){
        return(
           <Box handleClick={this.props.loadColor} color={this.props.color}></Box>
        )
    }
}

const mapStateToProps=(state)=>{
    return state
};


export default connect (mapStateToProps, actionCreators)(BoxCon);