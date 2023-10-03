import { expect, test } from 'vitest';
import request from 'supertest';
const server = 'http://localhost:3030';
import dotenv from 'dotenv';

dotenv.config();

test('/api/apps responds to GET request with 200 status', () => {
    return request(server)
      .get('/api/apps')
      .expect(200)
  });
