
import supertest from 'supertest';
import app from '../server';

describe('Test basic endpoint server', () => {
    it('Get the / endpoint', async () => {
        const response = await request.get('/')
        expect(response.status).toBe(200);
    })
})
// describe('Test basic endpoint user', () => {
//     it('Get the /api/user endpoint', async () => {
//         const response = await request.post("/api/user")
//         expect(response.status).toBe(200);
//     })
// })
//create request object 
const request = supertest(app);
