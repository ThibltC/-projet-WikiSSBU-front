import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import FormSpiritsPost from './FormSpiritsPost'

import './css/EditSpirit.css'



class EditSpirit extends Component {


    render() {
        if (!sessionStorage.getItem('token')) return <Redirect to={'/'} />
        return (
            <div className='EditSpirit'>
            <FormSpiritsPost scrud='post'/>
            </div>
        )
    }
}


export default EditSpirit
