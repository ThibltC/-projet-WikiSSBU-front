import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getRandomSpirit } from '../actions/spiritsActions'

import FormSpirits from './FormSpirits'

import './css/Spirits.css'

class Spirits extends Component {

  state = {
    selectedFile: null,
    image: undefined,
    name: '',
    id: '',
    spirit_type: '',
    serie: '',
    rank:''
};

  componentDidMount = () => {
    this.props.getRandomSpirit()
  }

  render() {
    const { randomSpirits, resultSpirits } = this.props
    return (
      <div className='Spirits'>
        {randomSpirits && randomSpirits.map((e, i) =>
          <div className='imageSpirit' key={`imageSpirit${i}`}>
            <img src={`http://localhost:8888/${e.path_image}`} alt="imageSpirit" />
          </div>
        )}
         <FormSpirits scrud='get'/> 
         {resultSpirits && resultSpirits.map((e, i) =>
          <div className='imageSpirit' key={`imageSpirit${i}`}>
            <img src={`http://localhost:8888/${e.path_image}`} alt="imageSpirit" />
          </div>
        )}      
      </div>
    )
  }
}
const mapStateToProps = state => ({
  randomSpirits: state.spirits.randomSpirits,
  resultSpirits: state.spirits.resultSpirits
})

export default connect(mapStateToProps, { getRandomSpirit })(Spirits)
