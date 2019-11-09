const express = require('express');
const app = express();

const sendJSON = (res) => (result) => res.json(result)
const logError = (res) => (error) => console.log(error)

const tryAwait = async (untilGetResult, callback) => {
    try {
        const data = await untilGetResult
        return callback.try(data)
    } catch (error) {
        return callback.catch(error)
    }
}

const callback = (res) => ({
    try: sendJSON(res),
    catch: logError(res),
})

/*const findAll = (req, res) =>
    tryAwait(Controller.findAll(), callback(res))

const findAll = async (req, res) => {
    const data = await Controller.findAll().catch(error => error)
    return respondAsJSON(data)
}*/