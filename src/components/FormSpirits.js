import React, { Component } from 'react'
import { getListSeries } from '../actions/seriesActions'
import { postSpirit, searchSpirits } from '../actions/spiritsActions'
import { connect } from 'react-redux';


class FormSpirits extends Component {

    state = {
        selectedFile: null,
        image: undefined,
        name: '',
        id: '',
        spirit_type: '',
        serie: '',
        rank: '',
        skill:''
    };

    componentDidMount = () => {
        this.props.getListSeries()
    }

    handleChange = event => {
        if (event.target.name === 'serie') {
            this.setState({
                [event.target.name]: this.props.listOfSerie.filter(e => e.name === event.target.value)[0].id
            })
        } else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        const { scrud, postSpirit, searchSpirits } = this.props
        const { id, name, selectedFile, spirit_type, serie, rank, skill } = this.state
        if (scrud === 'post') { postSpirit(id, name, selectedFile, spirit_type, serie, rank) }
        if (scrud === 'get') { searchSpirits(name, serie, spirit_type, rank, skill) }
    }

    handleChangeFile = event => {
        const fr = new FileReader();
        fr.onload = a => {
            this.setState({ image: a.currentTarget.result });
        };
        fr.readAsDataURL(document.querySelector('input[type="file"]').files[0]);
        this.setState({ selectedFile: event.target.files[0] });
    };


    render() {
        const { scrud, listOfSerie } = this.props
        return (
            <div className='FormSpirits'>
                <form onSubmit={this.handleSubmit} method='POST' encType="multipart/form-data">
                    {scrud === 'post' &&
                        <div className='formForPost'>
                            <label htmlFor="file-input">
                                <img
                                    src={this.state.image}
                                    alt="picture_spirit"
                                />
                            </label>
                            <input
                                id="file-input"
                                type="file"
                                name="picture_spirit"
                                onChange={this.handleChangeFile}
                                hidden
                            />
                            <input
                                type="number"
                                min='1'
                                onChange={this.handleChange}
                                value={this.state.id}
                                name="id"
                                placeholder={`Numéro de l'esprit`}
                            />
                        </div>}
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.textInput}
                        name="name"
                        placeholder={`Nom de l'esprit`}
                    />
                    <input
                        type="number"
                        onChange={this.handleChange}
                        value={this.state.rank}
                        name="rank"
                        min='0'
                        max='4'
                        placeholder={`Rareté de l'esprit`}
                    />
                    <select
                        name="serie"
                        onChange={this.handleChange}
                        defaultValue="serie"
                        onClick={this.handleClick}
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
                        onChange={this.handleChange}
                        defaultValue="type"
                    >
                        <option value="type" disabled>
                            Type d'esprit&nbsp;
                        </option>
                        <optgroup>
                            <option>Aucun</option>
                            <option>Primaire</option>
                            <option>Soutien</option>
                        </optgroup>
                    </select>
                    {scrud === 'post' && <button>Valider</button>}
                    {scrud === 'get' && <button>Chercher</button>}

                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    listOfSerie: state.series.listSeries
})

export default connect(mapStateToProps, { getListSeries, postSpirit, searchSpirits })(FormSpirits)
