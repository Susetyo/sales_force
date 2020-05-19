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
            "https://login.salesforce.com/services/oauth2/token?grant_type=password&client_id=" +
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

        console.log(res);
    };
}

let objAccessToken = new accessToken();

objAccessToken.getToken();

// {
//     access_token: '00D2x000003t1Qg!ARsAQGjJWVrbZrsFEZAZdWChNiqhD2gOu.MNhySOPw6ZKPcMzX5LsFTLr8EzKfYjxuLJvyKvY9zhTfkeEdbkfxjea9X4WMvl',
//     instance_url: 'https://ap17.salesforce.com',
//     id: 'https://login.salesforce.com/id/00D2x000003t1QgEAI/0052x000001XDDBAA4',
//     token_type: 'Bearer',
//     issued_at: '1589796579939',
//     signature: 'sigoIXjhvoCrN9gUJ9WfbsbtwUebTjk0yL9pinvwIvw='
//   }
