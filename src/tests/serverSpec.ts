import supertest from 'supertest'
import { app } from '../server'


const request = supertest(app);


describe('Testing endpoint responses', () => {
    it('should home route ', async () => {
        const response = await request.get('/');
        console.log("passed")
        expect(response.status).toBe(200);
    });

    it('should get Store route', async () => {
        const response = await request.get('/store');
        console.log("passed two")
        expect(response.status).toBe(200);
    });
});



describe('Testing Products responses', () => {
    it('should Index Products route ', async () => {
        const response = await request.get('/store/products');
        expect(response.status).toBe(200);
    });

    it('should get the Show Products route', async () => {
        const response = await request.get('/store/products/2');
        expect(response.status).toBe(200);
    });
    it('should Get Products by Category route ', async () => {
        const response = await request.get('/store/products/category/lights');
        expect(response.status).toBe(200);
    });
});


// describe("Tests for User Routes", ()=> {
//     it('should get users route', async () => {
//         const response = await request.get('/store/users');
//         expect(response.status).toBe(200);
//     });

//     it('should a user route ', async () => {
//         const response = await request.get('/store/users/1');
//         expect(response.status).toBe(200);
//     });

//     it('should create a user route', async () => {
//         const response = await request.post('/store/users/add');
//         expect(response.status).toBe(200);
//     });

// })

// describe("Should Get Orders routes", ()=> {

//     it('should Index Orders route ', async () => {
//         const response = await request.get('/store/orders');
//         expect(response.status).toBe(200);
//     });

//     it('should get Orders by Status route', async () => {
//         const response = await request.get('/store/orders/completed');
//         expect(response.status).toBe(200);
//     });
// })
