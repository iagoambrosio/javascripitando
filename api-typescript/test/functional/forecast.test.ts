import { describe, it } from 'node:test'
import supertest from 'supertest'
import 

describe('Beach forecast functional test', () => {
it("should return a forecast with just a few times", async()=>{
const {body, status} = await supertest(app).get('/forecast');
expect(status).toBe(200);
expect(body).toBe([{
    
}])
  })
})
