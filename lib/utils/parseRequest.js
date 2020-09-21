module.exports = rawRequest => {
  let response = {};
  const method = rawRequest.toString().split('\n')[0].split(' ')[0]
  const path = rawRequest.toString().split('\n')[0].split(' ')[1]
  const headerAndBody = rawRequest.toString().split('\n')
  
  headerAndBody.includes("") 
  ?
  response = {
    method: method,
    path: path,
    body: headerAndBody.pop()
  }
  :
  response = {
    method: method,
    path: path,
  }

  return response
};
