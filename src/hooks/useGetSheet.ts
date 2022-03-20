import axios from "axios";
import { useEffect, useState } from "react";

const useGetSheet = (gsKey:string , gql:string) => {
 
	const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<string[]>([]);

    const createUrl = (key:string , gql:string) => {
        let gq = 'SELECT '+ gql;
        let encodedgg = encodeURIComponent(gq);
        let url = 'https://docs.google.com/spreadsheets/d/' + key + '/gviz/tq?tq=' + encodedgg;
        return url;
    };

	useEffect(() => {
		(async () => {
			const url = createUrl(gsKey, gql);

			const res = await axios.get(url);
			const responseText = res.data;
			const resData = JSON.parse(
				responseText.match(/(?<=.*\().*(?=\);)/s)[0]
			).table.rows;

            setData(resData);
            setLoading(true);
		})();
	}, [data]);

	return { data, loading };
};

export default useGetSheet;