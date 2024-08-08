"use strict"

const axios  = require("axios");
const apiKey = process.env.API_KEY;

const getCat = async(res) => {
    try {
        const response = await axios.get("https://api.thecatapi.com/v1/images/search", {
            headers: {'x-api-key': apiKey}
    });
       res.json(response.data);
    } catch (error){
        console.error('Error fetching data from cat API:', error);
    }
};

module.exports = {getCat};