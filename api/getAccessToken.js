const fetch = require("node-fetch");
const dotenv = require("dotenv").config();

function accessToken() {
    this.consumerSecret = process.env.CONSUMER_SECRET;
    this.consumerKey = process.env.CONSUMER_KEY;
    this.callBackUrl = process.env.CALL_BACK_URL;
    this.userName = process.env.USER_NAME;
    this.password = process.env.PASSWORD;

    this.getToken = async function () {
        const url =
            process.env.URL_SALES +
            "oauth2/token?grant_type=password&client_id=" +
            this.consumerKey +
            "&client_secret=" +
            this.consumerSecret +
            "&username=" +
            this.userName +
            "&password=" +
            this.password;

        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        });

        let res = await response.json();

        return res;
    };
}

let objAccessToken = new accessToken();

module.exports = objAccessToken;
