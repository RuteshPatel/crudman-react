import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.resolve(__dirname, '../data');

const routeFileMap = {
  'user': 'users.json',
  'countries': 'country.json',
  'content': 'content.json',
  'network': 'internet.json',
  'date-time': 'date_time.json',
  'products': 'products.json',
  'carts': 'carts.json',
  'categories': 'categories.json',
  'e_commerce_users': 'e_commerce_users.json',
  'post': 'post.json',
  'comments': 'comments.json',
  'blog_users': 'blog_users.json'
};

const singularMap = {
  'user': 'Users',
  'countries': 'Countries',
  'content': 'Content',
  'network': 'Network',
  'date-time': 'Date-Time',
  'products': 'Products',
  'carts': 'Carts',
  'categories': 'Categories',
  'e_commerce_users': 'E-Commerce Users',
  'post': 'Posts',
  'comments': 'Comments',
  'blog_users': 'Blog Authors'
};

export function createApiMiddleware() {
  return {
    name: 'crudman-api-middleware',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
        const pathname = url.pathname;
        const parts = pathname.slice(1).split('/');
        const routeKey = parts[0];
        const uuid = parts.length > 1 ? parts[1] : null;

        if (!routeFileMap[routeKey]) {
          return next();
        }

        // Set CORS & JSON headers for cURL and external callers
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept');
        res.setHeader('Content-Type', 'application/json; charset=utf-8');

        if (req.method === 'OPTIONS') {
          res.statusCode = 200;
          res.end();
          return;
        }

        const fileName = routeFileMap[routeKey];
        const filePath = path.join(dataDir, fileName);
        
        let dataset = [];
        try {
          if (fs.existsSync(filePath)) {
            const raw = fs.readFileSync(filePath, 'utf-8');
            dataset = JSON.parse(raw);
          }
        } catch (err) {
          dataset = [];
        }

        const resourceName = singularMap[routeKey] || routeKey;

        // Parse body for POST / PUT
        let body = null;
        if (req.method === 'POST' || req.method === 'PUT') {
          const buffers = [];
          for await (const chunk of req) {
            buffers.push(chunk);
          }
          const rawBody = Buffer.concat(buffers).toString();
          if (rawBody) {
            try {
              body = JSON.parse(rawBody);
            } catch {
              body = rawBody;
            }
          }
        }

        // 1. GET Request
        if (req.method === 'GET') {
          if (uuid) {
            if (uuid === '123') {
              res.statusCode = 404;
              res.end(JSON.stringify({
                success: false,
                message: "Invalid UUID",
                status_code: 404
              }, null, 2));
              return;
            }

            const item = dataset.find(i => (i.uuid && i.uuid === uuid) || (i.id && String(i.id) === uuid));
            if (item) {
              res.statusCode = 200;
              res.end(JSON.stringify({
                success: true,
                message: `${resourceName} data fetched Successfully`,
                status_code: 200,
                data: [item]
              }, null, 2));
            } else {
              res.statusCode = 404;
              res.end(JSON.stringify({
                success: false,
                message: "Invalid UUID",
                status_code: 404
              }, null, 2));
            }
            return;
          }

          // GET all items
          res.statusCode = 200;
          res.end(JSON.stringify({
            success: true,
            message: `${resourceName} data fetched Successfully`,
            status_code: 200,
            data: dataset
          }, null, 2));
          return;
        }

        // 2. POST Request
        if (req.method === 'POST') {
          const newItem = body || { uuid: `generated-${Date.now()}`, created: true };
          dataset.unshift(newItem);
          try {
            fs.writeFileSync(filePath, JSON.stringify(dataset, null, 2));
          } catch (e) {}

          res.statusCode = 201;
          res.end(JSON.stringify({
            success: true,
            message: `${resourceName} data added Successfully`,
            status_code: 201,
            data: [newItem]
          }, null, 2));
          return;
        }

        // 3. PUT Request
        if (req.method === 'PUT') {
          let updatedItem = null;
          const targetUuid = uuid || (body && body.uuid);

          dataset = dataset.map(item => {
            if ((item.uuid && item.uuid === targetUuid) || (item.id && String(item.id) === targetUuid)) {
              updatedItem = { ...item, ...body };
              return updatedItem;
            }
            return item;
          });

          if (!updatedItem) {
            updatedItem = { uuid: targetUuid || 'updated-id', ...body };
            dataset.unshift(updatedItem);
          }

          try {
            fs.writeFileSync(filePath, JSON.stringify(dataset, null, 2));
          } catch (e) {}

          res.statusCode = 200;
          res.end(JSON.stringify({
            success: true,
            message: `${resourceName} details updated Successfully`,
            status_code: 200,
            data: [updatedItem]
          }, null, 2));
          return;
        }

        // 4. DELETE Request (mocked delete response)
        if (req.method === 'DELETE') {
          res.statusCode = 200;
          res.end(JSON.stringify({
            success: true,
            message: `${resourceName} deleted successfully`,
            status_code: 200,
            data: [
              {
                message: `${resourceName} deleted successfully`,
                deleted: true
              }
            ]
          }, null, 2));
          return;
        }

        next();
      });
    }
  };
}
