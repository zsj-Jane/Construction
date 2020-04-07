import axios from 'axios';
// let request = axios.create({
//     // baseURL: '/api',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept':"*/*"
//     }
// });


export function getData(params) {
    return axios({
        url: 'http://47.52.252.130:17001/individual_stock_news',
        method: 'GET',
        params,
        headers: {
            'Content-Type': 'application/json',
            // 'Accept':"*/*"
            'Accept':"application/json"
        }
    });
}