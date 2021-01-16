import app from '../src/index';
import * as supertest from 'supertest';

describe('app', () => {
  let request;

  beforeEach(() => {
    request = supertest(app);
  });

  it('successful response for GET /', async () => {
    const { body } = await request.get("/")
    expect(body).toEqual({
      message: "hello world"
    })
  });
});