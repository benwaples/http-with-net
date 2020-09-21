module.exports = rawRequest => {
  let request = {};
  const method = rawRequest.split('\n')[0].split(' ')[0]
  const path = rawRequest.split('\n')[0].split(' ')[1]
  const headerAndBody = rawRequest.split('\n')
  
  if(headerAndBody.includes("\r") || headerAndBody.includes("")) {
    return request = {
      method: method,
      path: path,
      body: headerAndBody.pop()
    }
  } else {
    return request = {
      method: method,
      path: path,
    }
  }
};
