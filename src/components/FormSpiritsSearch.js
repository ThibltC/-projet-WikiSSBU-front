import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getListSeries } from '../actions/seriesActions'
import { searchSpirits } from '../actions/spiritsActions'

import './css/FormSpiritsSearch.css'

class FormSpiritsSearch extends Component {

    state = {
        name: '',
        spirit_type: '',
        serie: '',
        rank: '',
        skill: ''
    };

    componentDidMount = () => {
        this.props.getListSeries()
    }

    handleChangeInputForm = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const { name, spirit_type, serie, rank, skill } = this.state
        this.props.searchSpirits(name, serie, spirit_type, rank, skill)
    }

    render() {
        const { listOfSerie } = this.props

        return (
            <div className='FormSpiritsSearch'>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="name"
                        type="text"
                        placeholder={`Nom de l'esprit`}
                        onChange={this.handleChangeInputForm}
                        value={this.state.textInput}
                    />
                    <input
                        name="rank"
                        type="number"
                        placeholder={`Rareté de l'esprit`}
                        onChange={this.handleChangeInputForm}
                        value={this.state.rank}
                        min='0'
                        max='4'
                    />
                    <select
                        name="serie"
                        onChange={this.handleChangeInputForm}
                        defaultValue="serie"
                    >
                        <option value="serie" disabled>
                            Série&nbsp;
                        </option>
                        <optgroup>
                            {listOfSerie && listOfSerie.map((e, i) => <option id={e.id} key={`option-${i}`}>{e.name}</option>)}
                        </optgroup>
                    </select>
                    <select
                        name="spirit_type"
                        onChange={this.handleChangeInputForm}
                        defaultValue="type"
                    >
                        <option value="type" disabled>
                            Type d'esprit&nbsp;
                        </option>
                        <optgroup>
                            <option>Primaire</option>
                            <option>Soutien</option>
                            <option>Combattant</option>
                            <option>Maître</option>
                        </optgroup>
                    </select>
                    <button>Chercher</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    listOfSerie: state.series.listSeries
})

export default connect(mapStateToProps, { getListSeries, searchSpirits })(FormSpiritsSearch)
