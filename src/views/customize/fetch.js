import { useEffect, useState } from 'react';
import moment from 'moment';
import axios from 'axios';
function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        async function fetchData() {
            // try {
            let res = await axios
                .get(url)
                .then((res) => {
                    let data = res && res.data ? res.data : [];
                    if (data && data.length > 0) {
                        var newData = data.map((item) => {
                            item.dateChecked = moment(item.dateChecked).format('DD/MM/YYYY');
                            return item;
                        });
                    }
                    setData(newData);
                    setLoading(false);
                })
                .catch((e) => {
                    alert(e.message);
                    setIsError(true);
                    setLoading(false);
                });
        }
        setTimeout(() => {
            fetchData();
        }, 3000);
    }, []);
    return { data, loading, isError };
}
export default useFetch;

// 'https://api.covidtracking.com/v1/us/daily.json'
