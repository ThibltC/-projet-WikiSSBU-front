import { GET_RANDOM_SPIRITS, GET_RESULT_SPIRITS } from './types';
import axios from 'axios';


const domain = process.env.REACT_APP_DOMAIN_NAME

export const postSpirit = (id, name, selectedFile, spirit_type, serie, rank) => dispatch => {
    const url = `${domain}api/spirits`;
    const body = {
        name,
        id,
        picture_spirit: selectedFile,
        spirit_type,
        serie,
        rank
    }

    const data = new FormData()
    data.append("name", body.name)
    data.append("id", body.id)
    data.append("type", body.spirit_type)
    data.append("picture_spirit", body.picture_spirit)
    data.append("id_series", body.serie)
    data.append("rank", body.rank)

    try {
        axios.post(url, data).then(_ => console.log('Post Réussi'))
    } catch (err) {
        console.log(err)
    }
}

export const getRandomSpirit = () => dispatch => {
    const url = `${domain}api/spirits/random`;
    try {
        axios({
            method: "GET",
            url,
        }).then(res => {
            dispatch({
                type: GET_RANDOM_SPIRITS,
                randomSpiritsArray: res.data
            })
        })
    } catch (err) {
        console.log(err)
    }
}

export const searchSpirits = (name, serie, type, rank, skill) => dispatch => {
    const url = `${domain}api/spirits/search/?name=${name}&serie=${serie}&type=${type}&rank=${rank}&skill=${skill}`;
    try {
        console.log(url)
        axios({
            method: "GET",
            url,
        }).then(res => {
            console.log(res)
            dispatch({
                type: GET_RESULT_SPIRITS,
                resultSpiritsArray: res.data
            })
        })
    } catch (err) {
        console.log(err)
    }
}