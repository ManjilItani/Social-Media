import { Request, Router } from 'itty-router'


import Posts from './handlers/posts'
import Post from './handlers/post'

const router = Router()

router
  .get('/api/posts', Posts)
  .get('/api/posts/:id', Post)
  .get('*', () => new Response("Not found", { status: 404 }))

export const handleRequest = (request: Request | Request) => router.handle(request)