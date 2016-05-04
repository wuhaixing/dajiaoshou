import fetch from 'isomorphic-fetch'
export const REQUEST_HOME = 'REQUEST_HOME'
export const REQUEST_HOME_SUCCEED = 'REQUEST_HOME_SUCCEED'
export const REQUEST_HOME_FAILED = 'REQUEST_HOME_FAILED'

export function fetchHome(homeId) {
  return dispatch => {
    dispatch(requestHome())
    return fetch('/api/home/')
      .then(response => response.json())
      .then(json => {
        if(json.success) {
          return dispatch(requestHomeSucceed(json))
        } else {
          return dispatch(requestHomeFailed(json))
        }
      })
     .catch( err => {
        return dispatch(requestHomeFailed('首页信息请求失败',err)) 
      })
  }
}


function requestHome() {
  return {
    type: REQUEST_HOME,
    requestedAt:Date.now()
  }
}

function requestHomeSucceed(json) {
  return {
    type: REQUEST_HOME_SUCCEED,
    result: json,
    receivedAt: Date.now()
  }
}

function requestHomeFailed(message,err) {
  return {
    type: REQUEST_HOME_FAILED,
    message: message,
    err:err,
    receivedAt: Date.now()
  }
}