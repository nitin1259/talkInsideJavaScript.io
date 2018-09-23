import { getRequest } from './api-requests'
import {api, key} from '../config'

export default class Search {
    constructor(query) {
        this.query = query
    }

    async getResult() {

        const url = `${api}search?${key}&q=${this.query}`
        await getRequest(url).then(data => {
            this.result = data.recipes;
        })
    }
}