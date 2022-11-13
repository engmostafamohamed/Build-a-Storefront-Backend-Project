
describe('Test basic endpoint orders', () => {
    it('create orders endpoint', async () => {
        async function addOrders(url: RequestInfo | URL) {
            const response = await fetch(url)
            return expect(response.status).toBe(200)
        }
        addOrders("http://localhost:3000/api/orders").then((res) => console.log(res))
    })
})
