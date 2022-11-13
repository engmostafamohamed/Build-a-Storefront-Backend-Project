"use strict";
describe('Test basic endpoint orders', () => {
    it('create orders endpoint', async () => {
        async function addUser(url) {
            const response = await fetch(url);
            return expect(response.status).toBe(200);
        }
        addUser("http://localhost:3000/api/orders").then((res) => console.log(res));
    });
});
