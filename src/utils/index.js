
function checkStatus (response) { 
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON (response) {debugger
  return response.json()
}

function getPostParams (data) {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
}

export {checkStatus, parseJSON, getPostParams}
