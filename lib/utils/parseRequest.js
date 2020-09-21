module.exports = rawRequest => {
  let request = {};
  const method = rawRequest.split('\n')[0].split(' ')[0]
  const path = rawRequest.split('\n')[0].split(' ')[1]
  const headerAndBody = rawRequest.split('\n')
  
  headerAndBody.includes("") 
  ?
  request = {
    method: method,
    path: path,
    body: headerAndBody.pop()
  }
  :
  request = {
    method: method,
    path: path,
  }

  return request
};
