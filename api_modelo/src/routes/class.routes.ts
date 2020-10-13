import { Router } from 'express';
import { getRepository } from 'typeorm';
import Class from '../models/Class';

const api = Router();

// Criar uma class
api.post('/class', async (request, response) => {
  const repo = getRepository(Class);
  const res = await repo.save(request.body);
  return response.status(201).json(res);
});

// FindClass
api.get('/', async (request, response) => {
  response.json(await getRepository(Class).find());
});

// Buscar class name
api.get('/:name', async (request, response) => {
  const repository = getRepository(Class);
  const res = await repository.find({
    where: {
      name: request.params.name,
    },
  });
  response.json(res);
});

export default api;
