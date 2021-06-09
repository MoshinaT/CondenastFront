import { BehaviorSubject } from 'rxjs';

import config from 'config';
import { fetchWrapper, history } from '@/_helpers';

const userSubject = new BehaviorSubject(null);
const baseUrl = `${config.apiUrl}/accounts`;

export const accountService = {
    getAll,
    searchVal,
};



function getAll() {
    return fetchWrapper.get(baseUrl);
  }
  
  function searchVal(val) {
    return fetchWrapper.get(`${baseUrl}/${val}`);
  }


