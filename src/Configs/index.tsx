

export const baseURL = 'https://retoolapi.dev/zu9TVE/';

export const token = localStorage.getItem('token')

export const CONFIG = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': token,
        'Access-Control-Allow-Origin': '*',
    },
};


export const paginationComponentOptions = {
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
};
