const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {

  it('should return html saying hi', async() => {
    const response = await request(app)
      .get('/')


    expect(response.text).toEqual('hi')

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
});
