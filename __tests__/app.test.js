const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {

  it('should return html saying hi', async() => {
    const response = await request(app)
      .get('/')


    expect(response.text).toEqual('hi')

  })

  it('should return status code 200 OK and have the body of the request in the body of the response as plain text', async() => {
    const response = await request(app)
      .post('/echo')
      .send('put this text in the body of the response as plain text')

    expect(response.text).toEqual('put this text in the body of the response as plain text')
    expect(response.statusCode).toEqual(200)
  })

  it('should return HTML document with the title red', async() => {
    const response = await request(app)
      .get('/red')

    expect(response.text).toEqual('<html><body><h1>Red</h1></body></html>')
  })

  it('should return HTML document with the title green', async() => {
    const response = await request(app)
      .get('/green')

    expect(response.text).toEqual('<html><body><h1>Green</h1></body></html>')
  })
  
  it('should return HTML document with the title blue', async() => {
    const response = await request(app)
      .get('/blue')

    expect(response.text).toEqual('<html><body><h1>Blue</h1></body></html>')
  })
});
