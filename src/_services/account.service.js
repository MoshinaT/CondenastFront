import { BehaviorSubject } from 'rxjs';

import config from 'config';
import { fetchWrapper, history } from '@/_helpers';

const userSubject = new BehaviorSubject(null);
const baseUrl = `${config.apiUrl}/accounts`;

export const accountService = {
    getAll,
    searchVal,
};


// function getAll() {
//     return fetchWrapper.get('https://newsapi.org/v2/top-headlines?country=gb&category=general&apiKey=5150e08921524ad9a80742fd9187d139');
// }

// function searchVal(val) {
//     return fetchWrapper.get(`https://newsapi.org/v2/everything?q=corona&sortBy=publishedAt&apiKey=5150e08921524ad9a80742fd9187d139`);
// }

function getAll() {
    return fetchWrapper.get(baseUrl);
  }
  
  function searchVal(val) {
    return fetchWrapper.get(`${baseUrl}/${val}`);
  }


