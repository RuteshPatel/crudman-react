import usersData from '../data/users.json';
import countryData from '../data/country.json';
import contentData from '../data/content.json';
import internetData from '../data/internet.json';
import dateTimeData from '../data/date_time.json';
import productsData from '../data/products.json';
import cartsData from '../data/carts.json';
import categoriesData from '../data/categories.json';
import eCommerceUsersData from '../data/e_commerce_users.json';
import postData from '../data/post.json';
import commentsData from '../data/comments.json';
import blogUsersData from '../data/blog_users.json';

// In-Memory Database initialized with default datasets
const initialDb = {
  user: usersData,
  countries: countryData,
  content: contentData,
  network: internetData,
  'date-time': dateTimeData,
  products: productsData,
  carts: cartsData,
  categories: categoriesData,
  e_commerce_users: eCommerceUsersData,
  post: postData,
  comments: commentsData,
  blog_users: blogUsersData
};

// Retrieve or initialize local database from localStorage for persistence across reloads
function getDatabase() {
  const stored = localStorage.getItem('crudman_react_db');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      // Fallback if parsing fails
    }
  }
  localStorage.setItem('crudman_react_db', JSON.stringify(initialDb));
  return initialDb;
}

function saveDatabase(db) {
  localStorage.setItem('crudman_react_db', JSON.stringify(db));
}

export function resetDatabaseToDefault() {
  localStorage.setItem('crudman_react_db', JSON.stringify(initialDb));
  return initialDb;
}

export async function processClientSideRequest({ endpoint, method, payload }) {
  // Simulate natural network delay (80-220ms)
  const delay = Math.floor(Math.random() * 140) + 80;
  await new Promise((resolve) => setTimeout(resolve, delay));

  const db = getDatabase();
  
  // Clean endpoint path
  let cleanPath = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  if (cleanPath.endsWith('/')) {
    cleanPath = cleanPath.slice(0, -1);
  }

  const parts = cleanPath.split('/');
  const resourceKey = parts[0];
  const uuid = parts.length > 1 ? parts[1] : null;

  // Endpoint matching
  switch (resourceKey) {
    case 'user':
      return handleResourceCrud({ db, resourceKey: 'user', nameSingular: 'User', uuid, method, payload });
    
    case 'countries':
      return handleResourceCrud({ db, resourceKey: 'countries', nameSingular: 'Country', uuid, method, payload });

    case 'content':
      return handleResourceCrud({ db, resourceKey: 'content', nameSingular: 'Content', uuid, method, payload });

    case 'network':
      return handleResourceCrud({ db, resourceKey: 'network', nameSingular: 'Network', uuid, method, payload });

    case 'date-time':
      return handleResourceCrud({ db, resourceKey: 'date-time', nameSingular: 'Date-Time', uuid, method, payload });

    case 'products':
      return handleResourceCrud({ db, resourceKey: 'products', nameSingular: 'Product', uuid, method, payload });

    case 'carts':
      return handleResourceCrud({ db, resourceKey: 'carts', nameSingular: 'Cart', uuid, method, payload });

    case 'categories':
      return handleResourceCrud({ db, resourceKey: 'categories', nameSingular: 'Category', uuid, method, payload });

    case 'e_commerce_users':
      return handleResourceCrud({ db, resourceKey: 'e_commerce_users', nameSingular: 'E-Commerce User', uuid, method, payload });

    case 'post':
      return handleResourceCrud({ db, resourceKey: 'post', nameSingular: 'Post', uuid, method, payload });

    case 'comments':
      return handleResourceCrud({ db, resourceKey: 'comments', nameSingular: 'Comment', uuid, method, payload });

    case 'blog_users':
      return handleResourceCrud({ db, resourceKey: 'blog_users', nameSingular: 'Blog Author', uuid, method, payload });

    default:
      return {
        status: 404,
        statusText: 'Not Found',
        responseTimeMs: delay,
        data: {
          success: false,
          message: `Endpoint /${cleanPath} not found`,
          status_code: 404
        }
      };
  }
}

function handleResourceCrud({ db, resourceKey, nameSingular, uuid, method, payload }) {
  const collection = db[resourceKey] || [];

  // GET single item by UUID
  if (method === 'GET' && uuid) {
    if (uuid === '123') {
      return {
        status: 404,
        statusText: 'Not Found',
        data: {
          success: false,
          message: "Invalid UUID",
          status_code: 404
        }
      };
    }

    const item = collection.find(i => (i.uuid && i.uuid === uuid) || (i.id && String(i.id) === uuid));
    if (item) {
      return {
        status: 200,
        statusText: 'OK',
        data: {
          success: true,
          message: `${nameSingular} data fetched Successfully`,
          status_code: 200,
          data: [item]
        }
      };
    } else {
      return {
        status: 404,
        statusText: 'Not Found',
        data: {
          success: false,
          message: "Invalid UUID",
          status_code: 404
        }
      };
    }
  }

  // GET all collection items
  if (method === 'GET' && !uuid) {
    return {
      status: 200,
      statusText: 'OK',
      data: {
        success: true,
        message: `${nameSingular} data fetched Successfully`,
        status_code: 200,
        data: collection
      }
    };
  }

  // POST create item
  if (method === 'POST') {
    const newItem = payload || {
      uuid: `mock-uuid-${Date.now()}`,
      name: `New ${nameSingular}`,
      created_at: new Date().toISOString()
    };
    
    // Add to collection
    const updatedCollection = [newItem, ...collection];
    db[resourceKey] = updatedCollection;
    saveDatabase(db);

    return {
      status: 201,
      statusText: 'Created',
      data: {
        success: true,
        message: `${nameSingular} data added Successfully`,
        status_code: 201,
        data: [newItem]
      }
    };
  }

  // PUT update item
  if (method === 'PUT') {
    const targetUuid = uuid || (payload && payload.uuid);
    let updatedItem = null;

    const updatedCollection = collection.map(item => {
      const match = (item.uuid && item.uuid === targetUuid) || (item.id && String(item.id) === targetUuid);
      if (match || !targetUuid) {
        updatedItem = { ...item, ...payload };
        return updatedItem;
      }
      return item;
    });

    if (!updatedItem) {
      updatedItem = { uuid: targetUuid || 'updated-id', ...payload };
      updatedCollection.unshift(updatedItem);
    }

    db[resourceKey] = updatedCollection;
    saveDatabase(db);

    return {
      status: 200,
      statusText: 'OK',
      data: {
        success: true,
        message: `${nameSingular} details updated Successfully`,
        status_code: 200,
        data: [updatedItem]
      }
    };
  }

  // DELETE mock item (does not delete data, returns mock confirmation)
  if (method === 'DELETE') {
    return {
      status: 200,
      statusText: 'OK',
      data: {
        success: true,
        message: `${nameSingular} deleted successfully`,
        status_code: 200,
        data: [
          {
            message: `${nameSingular} deleted successfully`,
            deleted: true
          }
        ]
      }
    };
  }

  return {
    status: 400,
    statusText: 'Bad Request',
    data: {
      success: false,
      message: `Unsupported method ${method}`,
      status_code: 400
    }
  };
}
