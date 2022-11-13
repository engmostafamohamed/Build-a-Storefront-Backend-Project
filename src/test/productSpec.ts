
describe('Test basic endpoint products', () => {
    it('create products endpoint', async () => {
        async function addProducts(url: RequestInfo | URL) {
            const response = await fetch(url)
            return expect(response.status).toBe(200)
        }

        addProducts("http://localhost:3000/api/products").then((res) => console.log(res))
    })
})
