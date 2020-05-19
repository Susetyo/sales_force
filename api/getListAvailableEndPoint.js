require("dotenv").config();
const fetch = require("node-fetch");
const accessToken = require("./getAccessToken");

function ListEndPoint() {
    this.url = process.env.URL_SALES + "data/v26.0/";

    this.getList = async function () {
        const token = await accessToken.getToken();
        const res = await fetch(this.url);
        const result = await res.json();

        return result;
    };
}

const list = new ListEndPoint();
console.log(list.getList());
