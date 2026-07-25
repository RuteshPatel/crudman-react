# CRUDMan — Free Fake REST API for Frontend Developers

> **A no-backend, zero-config fake REST API** built with React + Vite. Drop it into any frontend project to test UI, prototype features, and generate code snippets — no server setup required.

---

## 🚀 Live Demo

> **Base URL:** `{YOUR_DEPLOYED_URL}` *(e.g. `https://crudman.vercel.app` or `http://localhost:5174` locally)*

All endpoints are served relative to this base URL. Replace `{BASE_URL}` in the examples below with your deployment URL.

---

## ✨ Features

- ✅ **Full CRUD support** — `GET`, `POST`, `PUT`, `DELETE` on all resources
- ✅ **No backend required** — 100% client-side React + Vite SPA
- ✅ **Interactive API Explorer** — Test endpoints live in the browser
- ✅ **Multi-language code generation** — Instantly get `cURL`, `JavaScript`, `Python`, `Axios` snippets
- ✅ **Mocked DELETE** — DELETE responses return a success confirmation without mutating data
- ✅ **Persistent state** — POST / PUT changes persist across page reloads via `localStorage`
- ✅ **UUID-based routing** — All records are identified by UUID
- ✅ **Error simulation** — Test 404 responses with invalid UUID routes

---

## 📦 Tech Stack

| Layer | Tech |
|-------|------|
| Framework | React 19 + Vite 8 |
| Styling | Vanilla CSS |
| Icons | Lucide React |
| State | React `useState` + `localStorage` |
| Data | Local JSON datasets (12 resources) |

---

## 🛠️ Local Setup

```bash
# 1. Clone the repo
git clone https://github.com/RuteshPatel/crudman-react.git
cd crudman-react

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# App will be available at http://localhost:5174
```

---

## 📂 API Resources & Endpoints

> Replace `{BASE_URL}` with your host (e.g. `http://localhost:5174` locally, or your deployed URL).

---

### 👤 Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `{BASE_URL}/user` | Get all users |
| `GET` | `{BASE_URL}/user/{uuid}` | Get single user by UUID |
| `POST` | `{BASE_URL}/user` | Create a new user |
| `PUT` | `{BASE_URL}/user/{uuid}` | Update user by UUID |
| `DELETE` | `{BASE_URL}/user/{uuid}` | Delete user (mocked) |

**cURL Examples:**
```bash
# Get all users
curl -X GET "{BASE_URL}/user" \
  -H "Accept: application/json"

# Get single user
curl -X GET "{BASE_URL}/user/2b67c08a-12b1-44ae-bf6f-f4b66efe800a" \
  -H "Accept: application/json"

# Create a user
curl -X POST "{BASE_URL}/user" \
  -H "Content-Type: application/json" \
  -d '{"name":"Alex Morgan","user_name":"alexm","email":"alex@example.com","phone":"+1-555-019-2834"}'

# Update a user
curl -X PUT "{BASE_URL}/user/2b67c08a-12b1-44ae-bf6f-f4b66efe800a" \
  -H "Content-Type: application/json" \
  -d '{"name":"Alex Morgan Updated","email":"alex.updated@example.com"}'

# Delete a user (mocked)
curl -X DELETE "{BASE_URL}/user/2b67c08a-12b1-44ae-bf6f-f4b66efe800a"
```

---

### 🌍 Countries

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `{BASE_URL}/countries` | Get all countries |
| `GET` | `{BASE_URL}/countries/{uuid}` | Get country by UUID |
| `POST` | `{BASE_URL}/countries` | Add a new country |
| `PUT` | `{BASE_URL}/countries/{uuid}` | Update country details |
| `DELETE` | `{BASE_URL}/countries/{uuid}` | Delete country (mocked) |

**cURL Examples:**
```bash
# Get all countries
curl -X GET "{BASE_URL}/countries"

# Create a country
curl -X POST "{BASE_URL}/countries" \
  -H "Content-Type: application/json" \
  -d '{"country":"India","currency_code":"INR","language_code":"hi"}'
```

---

### 📝 Content

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `{BASE_URL}/content` | Get all content blocks |
| `GET` | `{BASE_URL}/content/{uuid}` | Get single content block |
| `POST` | `{BASE_URL}/content` | Create content block |
| `PUT` | `{BASE_URL}/content/{uuid}` | Update content block |
| `DELETE` | `{BASE_URL}/content/{uuid}` | Delete content (mocked) |

```bash
curl -X GET "{BASE_URL}/content"
```

---

### 🌐 Network

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `{BASE_URL}/network` | Get network records (domains, IPs) |
| `GET` | `{BASE_URL}/network/{uuid}` | Get single network record |
| `POST` | `{BASE_URL}/network` | Store network record |
| `PUT` | `{BASE_URL}/network/{uuid}` | Update network record |
| `DELETE` | `{BASE_URL}/network/{uuid}` | Delete network record (mocked) |

```bash
curl -X GET "{BASE_URL}/network"
```

---

### 🕐 Date-Time

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `{BASE_URL}/date-time` | Get all date-time records |
| `GET` | `{BASE_URL}/date-time/{uuid}` | Get single record |
| `POST` | `{BASE_URL}/date-time` | Create timestamp entry |
| `PUT` | `{BASE_URL}/date-time/{uuid}` | Update timestamp values |

```bash
curl -X GET "{BASE_URL}/date-time"
```

---

### 🛒 Products *(E-Commerce)*

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `{BASE_URL}/products` | Get all products |
| `GET` | `{BASE_URL}/products/{uuid}` | Get product by UUID |
| `POST` | `{BASE_URL}/products` | Add product |
| `PUT` | `{BASE_URL}/products/{uuid}` | Update product |
| `DELETE` | `{BASE_URL}/products/{uuid}` | Delete product (mocked) |

**cURL Example:**
```bash
# Get all products
curl -X GET "{BASE_URL}/products"

# Create a product
curl -X POST "{BASE_URL}/products" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Wireless Headphones",
    "price": 299.99,
    "rating": 4.8,
    "stock": 45,
    "brand": "AudioPro"
  }'
```

---

### 🛍️ Carts *(E-Commerce)*

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `{BASE_URL}/carts` | Get all shopping carts |
| `GET` | `{BASE_URL}/carts/{uuid}` | Get cart by UUID |
| `POST` | `{BASE_URL}/carts` | Create cart |
| `PUT` | `{BASE_URL}/carts/{uuid}` | Update cart |
| `DELETE` | `{BASE_URL}/carts/{uuid}` | Delete cart (mocked) |

```bash
curl -X GET "{BASE_URL}/carts"
```

---

### 🏷️ Categories *(E-Commerce)*

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `{BASE_URL}/categories` | Get all product categories |

```bash
curl -X GET "{BASE_URL}/categories"
```

---

### 🧑‍💼 E-Commerce Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `{BASE_URL}/e_commerce_users` | Get all e-commerce users |

```bash
curl -X GET "{BASE_URL}/e_commerce_users"
```

---

### 📰 Posts *(Blog)*

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `{BASE_URL}/post` | Get all blog posts |
| `GET` | `{BASE_URL}/post/{uuid}` | Get single post |
| `POST` | `{BASE_URL}/post` | Publish a new post |
| `PUT` | `{BASE_URL}/post/{uuid}` | Update post |
| `DELETE` | `{BASE_URL}/post/{uuid}` | Delete post (mocked) |

```bash
curl -X GET "{BASE_URL}/post"
```

---

### 💬 Comments *(Blog)*

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `{BASE_URL}/comments` | Get all comments |
| `POST` | `{BASE_URL}/comments` | Post a comment |
| `DELETE` | `{BASE_URL}/comments/{uuid}` | Delete comment (mocked) |

```bash
curl -X GET "{BASE_URL}/comments"
```

---

### ✍️ Blog Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `{BASE_URL}/blog_users` | Get blog authors and contributors |

```bash
curl -X GET "{BASE_URL}/blog_users"
```

---

## 📤 Standard Response Format

All endpoints return a consistent JSON envelope:

```json
{
  "success": true,
  "message": "Users data fetched Successfully",
  "status_code": 200,
  "data": [ ... ]
}
```

### Error Response (404)
```json
{
  "success": false,
  "message": "Invalid UUID",
  "status_code": 404
}
```

### DELETE Response (mocked)
```json
{
  "success": true,
  "message": "User deleted successfully",
  "status_code": 200,
  "data": [{ "message": "User deleted successfully", "deleted": true }]
}
```

---

## 🧪 Testing Invalid UUIDs

You can intentionally trigger a `404` error by passing `/123` as a UUID:

```bash
curl -X GET "{BASE_URL}/user/123"
# Returns: { "success": false, "message": "Invalid UUID", "status_code": 404 }
```

---

## 🔑 HTTP Method Quick Reference

| Badge | Method | Use Case |
|-------|--------|----------|
| 🟢 `GET` | Read | Fetch all records or single by UUID |
| 🟡 `POST` | Create | Add new record to collection |
| 🟣 `PUT` | Update | Modify existing record by UUID |
| 🔴 `DELETE` | Delete | Mocked delete — returns success, data unchanged |

---

## 🗂️ Project Structure

```
crudman-react/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Top nav with category tabs
│   │   ├── Sidebar.jsx         # Endpoint list + search + filters
│   │   ├── ApiExplorer.jsx     # Single-line compact endpoint cards
│   │   └── CodeGenerator.jsx   # cURL / JS / Python / Axios snippets
│   ├── services/
│   │   ├── apiCatalog.js       # All endpoint definitions
│   │   ├── apiService.js       # Request executor (client-side)
│   │   ├── mockServer.js       # In-memory CRUD engine (localStorage)
│   │   └── apiMiddleware.js    # Vite dev-server middleware for cURL support
│   ├── data/                   # JSON datasets (12 resources)
│   ├── App.jsx                 # Root layout + category state
│   ├── main.jsx                # React entry point
│   └── index.css              # Global design tokens + dark theme
├── index.html                  # Animated preloader + app shell
├── vite.config.js             # Vite + custom API middleware
└── package.json
```

---

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy the /dist folder to Vercel, Netlify, or any static host
```

After deployment, replace `{BASE_URL}` in your project with your live URL (e.g. `https://crudman.vercel.app`).

---

## 📄 License

MIT — Free to use in personal and commercial projects.

---

> Built with ❤️ using React + Vite · No backend · No auth · Just fake data, fast.
