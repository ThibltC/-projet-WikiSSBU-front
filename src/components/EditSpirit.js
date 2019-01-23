import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import FormSpirits from './FormSpirits'

import './css/EditSpirit.css'



class EditSpirit extends Component {


    render() {
        if (!localStorage.getItem('token')) return <Redirect to={'/'} />
        return (
            <div className='EditSpirit'>
            <FormSpirits scrud='post'/>
            </div>
        )
    }
}


export default EditSpirit
