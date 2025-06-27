import axios from 'axios';

class HttpService {
    async postMemo(item) {
        console.log('postMemo - item: ', item);
    }

    async getMemoList(params) {
        console.log('getMemoList - params: ', params);
    }
    
    async getMemo(id) {
        console.log('getMemo - id: ', id);
    }

    async putMemo(item) {
        console.log('putMemo - item: ', item);
    }

    async deleteMemo(params) {
        console.log('deleteMemo - params: ', params);
    }
}

export default new HttpService();