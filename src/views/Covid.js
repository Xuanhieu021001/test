import { useEffect, useState } from 'react';
import './Covid.scss';
import axios from 'axios';
import moment from 'moment';
function Covid() {
    const [dataCovid, setDataCovid] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get('https://api.covidtracking.com/v1/us/daily.json');
            let data = res && res.data ? res.data : [];
            if (data && data.length > 0) {
                var newData = data.map((item) => {
                    item.dateChecked = moment(item.dateChecked).format('DD/MM/YYYY');
                    return item;
                });
            }
            setDataCovid(newData);
            setLoading(false);
        };
        setTimeout(() => {
            fetchData();
            console.log('kkkk');
        }, 3000);
    }, []);
    return (
        <table>
            <thead>
                <tr>
                    <th>Ngày</th>
                    <th>Số người chết</th>
                    <th>Số người nhập viện</th>
                    <th>Số ca nhiễm</th>
                </tr>
            </thead>
            <tbody>
                {loading === false &&
                    dataCovid &&
                    dataCovid.length > 0 &&
                    dataCovid.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.dateChecked}</td>
                                <td>{item.death}</td>
                                <td>{item.hospitalized}</td>
                                <td>{item.negative}</td>
                            </tr>
                        );
                    })}
                {loading === true && (
                    <tr>
                        <td colSpan="5" style={{ textAlign: 'center' }}>
                            Loading...
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default Covid;
