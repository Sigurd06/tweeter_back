import request from 'supertest';
import app from '../src/api/app';

describe('started app', () => {
    test('should return status code 200', async () => {
        await request(app)
            .get('/')
            .expect(200)
            .expect('Content-Type', /application\/json/)
            .expect((response) => {
                expect(response.body.status).toBe(true);
                expect(response.body.message).toEqual('Success started server!');
            });
    });

    afterAll(() => {
        app.close();
    });
});
