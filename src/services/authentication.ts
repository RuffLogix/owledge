import axios from "axios";

const authentication = (userName , passWord) => {

    const createUrl = (key:string , gql:string) => {
        let gq = 'SELECT '+ gql;
        let encodedgg = encodeURIComponent(gq);
        let url = 'https://docs.google.com/spreadsheets/d/' + key + '/gviz/tq?tq=' + encodedgg;
        return url;
    };


    async function check(){
        const url = createUrl('1f5lh7ovy_81itCzCbzBRYoBgYJyZ-2rfYhk9qE1iisQ', '* WHERE A="' + userName + '" and B="' + passWord + '"');
        const res = await axios.get(url);
        const responseText = res.data;
        const resData = JSON.parse(
            responseText.match(/(?<=.*\().*(?=\);)/s)[0]
        ).table.rows;

        return resData.length!==0;
    }

    return check();
}

export default authentication;