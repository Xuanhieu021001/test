import { useEffect, useState } from 'react';
import './Covid.scss';
import useFetch from './customize/fetch';
function Covid() {
    const { data: dataCovid, loading, isError } = useFetch('https://api.covidtracking.com/v1/us/daily.json');
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
                {isError === false &&
                    loading === false &&
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
                {isError === true && (
                    <tr>
                        <td colSpan="5" style={{ textAlign: 'center' }}>
                            Something wrong...
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default Covid;
