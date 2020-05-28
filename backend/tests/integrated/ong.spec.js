const request= require('supertest');
const app= require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', ()=>{
    beforeEach(async ()=>{
        await connection.migrate.latest();
    });

    afterAll(async()=>{
        //await connection.migrate.rollback();
        await connection.destroy();
    });

    it('should be able to create a new ONG', async ()=>{
        const response= await request (app)
            .post('/ongs')
            .send({
                name: "APAD3",
                email: "contato@apad.com.br",
                whatsapp: "4897349378",
                city: "Rio Claro",
                uf: "SC"
            });
        //console.log(response.body);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);

    });
    
    it('should be able to list incidents by ONG ID', async ()=>{
        const response= await request (app)
            .post('/profile')
            .set('Authorization', '439638df');
    });

    /*it('ONG should be able to login', async ()=>{
        const response= await request (app)
            .post('/sessions')
            .send({
                id: "f146d287",
            });
        
        expect(response.body).toHaveProperty('name');
    })*/
});