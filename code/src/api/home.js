import axios from "./index";

export function banner() {
    return new Promise((resolve, reject) => {
        let result = require('../json/home.json');
        !!result ? resolve(result) : reject(result);
    })
}