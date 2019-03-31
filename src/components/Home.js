import React, { Component } from 'react'
import FormLogin from './FormLogin';

import './css/Home.css'

class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <FormLogin />
            </div>
        )
    }
}

export default Home
