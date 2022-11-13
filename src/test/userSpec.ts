// import supertest from 'supertest';
// import routes from '../routes/api/users';


describe('Test basic endpoint user', () => {
    it('create user endpoint', async () => {
        async function addUser(url: RequestInfo | URL) {
            const response = await fetch(url)
            return expect(response.status).toBe(200)
        }

        addUser("http://localhost:3000/api/user").then((res) => console.log(res))
    })
})
// create request object
// const request = supertest(routes);