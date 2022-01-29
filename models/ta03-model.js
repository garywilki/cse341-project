const response = require('response');
const fs = require('fs');
const path = require('path');

const p = 'https://byui-cse.github.io/cse341-course/lesson03/items.json';

const getData = cb => {
    fetch(p)
    .then((response) => response.json())
    .then((dataList) => {
        console.log(dataList);
    });
}

