import request from 'supertest';
import app from '../../app';

describe('Question API', () => {
    it('should read questions properly', async () => {
        const result = await request(app).get('/api/questions');
        expect(result.status).toEqual(200);
        expect(result.body.length).toBeGreaterThanOrEqual(1);
    })
})