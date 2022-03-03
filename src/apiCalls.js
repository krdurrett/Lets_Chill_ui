import { handleResponse } from "./utils"

export const getAllFeelings = () => {
  return fetch('https://lets-chill-api.herokuapp.com/api/v1/feelings')
    .then(response => handleResponse(response))
}

export const getSpecificFeeling = id => {
  return fetch(`https://lets-chill-api.herokuapp.com/api/v1/feelings/${id}`)
    .then(response => handleResponse(response))
}

export const getAllActions = () => {
  return fetch('https://lets-chill-api.herokuapp.com/api/v1/actions')
    .then(response => handleResponse(response))
}

export const getSpecificAction = id => {
  return fetch(`https://lets-chill-api.herokuapp.com/api/v1/actions/${id}`)
    .then(response => handleResponse(response))
}

export const getLog = () => {
  return fetch('https://lets-chill-api.herokuapp.com/api/v1/log')
    .then(response => handleResponse(response))
}

export const postToLog = (entry) => {
  return fetch('https://lets-chill-api.herokuapp.com/api/v1/log', {
    method: 'POST',
    body: JSON.stringify(entry),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => handleResponse(response))
}