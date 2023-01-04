import { Product, productType } from "../../src/models/product";


const product = new Product();

describe('Product model ', ()=> {

    describe('Index method suite', ()=>{
        it('should have an index method', ()=> {
            expect(product.index()).toBeDefined();
        });
    
        it('should return a list of products', async() => {
            const result = await product.index();
            expect(result).toEqual([]);
        })
    })

    describe('Show method suite', ()=>{
        it('should have an show method', ()=> {
            expect(product.show("2")).toBeDefined();
        });
    
        it('should return a list of products', async() => {
            const result = await product.show("2");
            expect(result).toEqual({id:21, name:"weiuwheiu", price:67});
        })
    })


})