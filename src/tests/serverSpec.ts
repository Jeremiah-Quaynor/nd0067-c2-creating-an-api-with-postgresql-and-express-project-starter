import supertest from 'supertest'
import { app } from '../server'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import verifyAuthToken from '../middleware/verifyToken';
import { usersType } from '../models/users';

const request = supertest(app);
dotenv.config();
const SECRET_KEY: any = process.env.SECRET_KEY;



describe('Testing endpoint responses', () => {
    it('should home route ', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });

    it('should get Store route', async () => {
        const response = await request.get('/store');
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
        const response = await request.get('/store/products/category/lights')
        expect(response.status).toBe(200);
    });
    it('should add a new product and return the created product', async () => {
        const productData = {
          name: 'Test Product',
          price: 1000,
          category: 'Test'
        }
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpbeyJpZCI6OCwiZmlyc3RuYW1lIjoiamFtZXMiLCJsYXN0bmFtZSI6ImhvbW1leSIsInBhc3N3b3JkIjoiJDJiJDEwJEdRaDlRZWpRUElCQVJWRGFZTXVJRE9yOGlGc1BjSUhEcG5jUkk1MzlTQmZ1N3gzSE52VFlhIn1dLCJpYXQiOjE2NzMyNTYyOTN9.PKUTRMA7HLz1wGZst8uXsiCgbyROw2BZjSKbZbZxTaU'
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
        const response = await request.post('/store/products/add')
          .set(headers)
          .send(productData)
        expect(response.status).toEqual(200)
        expect(response.body).toEqual(response.body)


      })
});


describe("Tests for User Routes", ()=> {
    it('should get users route', async () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpbeyJpZCI6OCwiZmlyc3RuYW1lIjoiamFtZXMiLCJsYXN0bmFtZSI6ImhvbW1leSIsInBhc3N3b3JkIjoiJDJiJDEwJEdRaDlRZWpRUElCQVJWRGFZTXVJRE9yOGlGc1BjSUhEcG5jUkk1MzlTQmZ1N3gzSE52VFlhIn1dLCJpYXQiOjE2NzMyNTYyOTN9.PKUTRMA7HLz1wGZst8uXsiCgbyROw2BZjSKbZbZxTaU'
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
        const response = await request.get('/store/users/').set(headers)
    });

    it('should a user route ', async () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpbeyJpZCI6OCwiZmlyc3RuYW1lIjoiamFtZXMiLCJsYXN0bmFtZSI6ImhvbW1leSIsInBhc3N3b3JkIjoiJDJiJDEwJEdRaDlRZWpRUElCQVJWRGFZTXVJRE9yOGlGc1BjSUhEcG5jUkk1MzlTQmZ1N3gzSE52VFlhIn1dLCJpYXQiOjE2NzMyNTYyOTN9.PKUTRMA7HLz1wGZst8uXsiCgbyROw2BZjSKbZbZxTaU'
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
        const response = await request.get('/store/users/1').set(headers);
        expect(response.status).toBe(200);
    });

    it('should create a user route', async () => {
        const user: usersType = {
            firstName: "Jerry",
            lastName: "Hommey",
            password: "fishfood"
        }
        const response = await request.post('/store/users/add').send(user);
        expect(response.status).toBe(200);
    });

})

describe("Should Get Orders routes", ()=> {

    it('should Index Orders route ', async () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpbeyJpZCI6OCwiZmlyc3RuYW1lIjoiamFtZXMiLCJsYXN0bmFtZSI6ImhvbW1leSIsInBhc3N3b3JkIjoiJDJiJDEwJEdRaDlRZWpRUElCQVJWRGFZTXVJRE9yOGlGc1BjSUhEcG5jUkk1MzlTQmZ1N3gzSE52VFlhIn1dLCJpYXQiOjE2NzMyNTYyOTN9.PKUTRMA7HLz1wGZst8uXsiCgbyROw2BZjSKbZbZxTaU'
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
        const response = await request.get('/store/orders').set(headers);
        expect(response.status).toBe(200);
    });

    it('should get Orders by Status route', async () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpbeyJpZCI6OCwiZmlyc3RuYW1lIjoiamFtZXMiLCJsYXN0bmFtZSI6ImhvbW1leSIsInBhc3N3b3JkIjoiJDJiJDEwJEdRaDlRZWpRUElCQVJWRGFZTXVJRE9yOGlGc1BjSUhEcG5jUkk1MzlTQmZ1N3gzSE52VFlhIn1dLCJpYXQiOjE2NzMyNTYyOTN9.PKUTRMA7HLz1wGZst8uXsiCgbyROw2BZjSKbZbZxTaU'
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
        const response = await request.get('/store/orders/completed').set(headers)
        expect(response.status).toBe(200);
    });
})

