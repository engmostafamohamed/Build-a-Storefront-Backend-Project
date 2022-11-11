import supertest from 'supertest';
import app from '../server';

describe('Test basic endpoint server', () => {
    it('Get the / endpoint', async () => {
        const response = await request.get('/')
        expect(response.status).toBe(200);
    })
})
//create request object 
const request = supertest(app);