// External imports
const express = require('express');
const app = express();
const axios = require('axios');

// Constants
const PORT = 4000;
const API_BASE_URL = 'https://kbfszrxx5vacidgrgdhqzu25r40vyyuw.lambda-url.eu-central-1.on.aws';

// Cache
const LEARNERS_CACHE = {};
const TRAINERS_CACHE = {};


// Get leaner based on learner id
const getLearner = learnerId => {
    return new Promise((resolve, reject) => {
        // Retrieving from cache if exists
        if(LEARNERS_CACHE.hasOwnProperty(learnerId)){
            resolve(LEARNERS_CACHE[learnerId])
        }else{ // Retrieving from External API if not found in cache
            axios.get(`${API_BASE_URL}/api/learners/${learnerId}`)
            .then(response => {
                // setting up in cache
                LEARNERS_CACHE[learnerId] = response.data;
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
        }
    })
}

// Get all learners of a course based on ids
const getLearners = learnerIds => {
    const promises = [];
    learnerIds.forEach(id => {
        promises.push(getLearner(id))
    });
    return Promise.all(promises);
}


// Get trainer based on trainerId
const getTrainer = (trainerId) => {
    return new Promise((resolve, reject) => {
        // Retrieving from cache if trainer exists in cache
        if(TRAINERS_CACHE.hasOwnProperty(trainerId)){
            resolve(TRAINERS_CACHE[trainerId]);
        }else{ // Retrieving from External API if trainer not found in cache
            axios.get(`${API_BASE_URL}/api/trainers/${trainerId}`)
            .then(response => {
                // setting up learner in trainer cache
                TRAINERS_CACHE[trainerId] = response.data;
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
        }
    })
}

app.listen(PORT, () => {
    console.log("Server is running on PORT : ", PORT)
})


module.exports = {
    getLearner,
    getLearners,
    getTrainer
}