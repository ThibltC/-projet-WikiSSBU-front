import { GET_LIST_SERIE } from './types';
import axios from 'axios';


const domain = process.env.REACT_APP_DOMAIN_NAME

export const getListSeries = () => dispatch => {
    const url = `${domain}api/series`;
    try {
        axios({
            method: "GET",
            url,
        }).then(res => {
            dispatch({
                type: GET_LIST_SERIE,
                listSeriesArray: res.data
            })
        })
    } catch (err) {
        console.log(err)
    }
}

