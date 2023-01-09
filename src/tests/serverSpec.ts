import supertest from 'supertest'
import { app } from '../server'
import dotenv from 'dotenv'


const request = supertest(app);
dotenv.config();

console.log(process.env.POSTGRES_DB)
console.log(process.env.POSTGRES_TEST_DB)
console.log(process.env.ENV)


describe('Testing endpoint responses', () => {
    it('should home route ', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });

    it('should get the Image Processing API', async () => {
        const response = await request.get('/store');
        expect(response.status).toBe(200);
    });
});