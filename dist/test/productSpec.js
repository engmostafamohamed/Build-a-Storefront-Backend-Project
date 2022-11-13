"use strict";
describe('Test basic endpoint products', () => {
    it('create products endpoint', async () => {
        async function addUser(url) {
            const response = await fetch(url);
            return expect(response.status).toBe(200);
        }
        addUser("http://localhost:3000/api/products").then((res) => console.log(res));
    });
});
