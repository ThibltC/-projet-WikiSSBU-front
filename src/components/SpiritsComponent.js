import React, { Component } from 'react'
import { connect } from 'react-redux';

import FormSpiritsSearch from './FormSpiritsSearch'
import CartoucheRandomSpirits from './CartoucheRandomSpirits'

import './css/Spirits.css'


class SpiritsComponent extends Component {

  render() {
    const { resultSpirits } = this.props
    return (
      <div className='SpiritsComponent'>


        <CartoucheRandomSpirits />


        <FormSpiritsSearch />
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
  resultSpirits: state.spirits.resultSpirits
})

export default connect(mapStateToProps, {})(SpiritsComponent)
