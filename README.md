# CRUDMan — Free Fake REST API for Frontend Developers

> **A no-backend, zero-config fake REST API** built with React + Vite. Drop it into any frontend project to test UI, prototype features, and generate code snippets — no server setup required.

---

## 🚀 Live Demo

**👉 [https://crud-man.vercel.app](https://crud-man.vercel.app)**

> **Base URL:** `https://crud-man.vercel.app`

All endpoints below are available at this base URL. Running locally? Use `http://localhost:5174` instead.

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

> Replace `https://crud-man.vercel.app` with your host (e.g. `http://localhost:5174` locally, or your deployed URL).

---

### 👤 Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `https://crud-man.vercel.app/user` | Get all users |
| `GET` | `https://crud-man.vercel.app/user/{uuid}` | Get single user by UUID |
| `POST` | `https://crud-man.vercel.app/user` | Create a new user |
| `PUT` | `https://crud-man.vercel.app/user/{uuid}` | Update user by UUID |
| `DELETE` | `https://crud-man.vercel.app/user/{uuid}` | Delete user (mocked) |

**cURL Examples:**
```bash
# Get all users
curl -X GET "https://crud-man.vercel.app/user" \
  -H "Accept: application/json"

# Get single user
curl -X GET "https://crud-man.vercel.app/user/2b67c08a-12b1-44ae-bf6f-f4b66efe800a" \
  -H "Accept: application/json"

# Create a user
curl -X POST "https://crud-man.vercel.app/user" \
  -H "Content-Type: application/json" \
  -d '{"name":"Alex Morgan","user_name":"alexm","email":"alex@example.com","phone":"+1-555-019-2834"}'

# Update a user
curl -X PUT "https://crud-man.vercel.app/user/2b67c08a-12b1-44ae-bf6f-f4b66efe800a" \
  -H "Content-Type: application/json" \
  -d '{"name":"Alex Morgan Updated","email":"alex.updated@example.com"}'

# Delete a user (mocked)
curl -X DELETE "https://crud-man.vercel.app/user/2b67c08a-12b1-44ae-bf6f-f4b66efe800a"
```

---

### 🌍 Countries

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `https://crud-man.vercel.app/countries` | Get all countries |
| `GET` | `https://crud-man.vercel.app/countries/{uuid}` | Get country by UUID |
| `POST` | `https://crud-man.vercel.app/countries` | Add a new country |
| `PUT` | `https://crud-man.vercel.app/countries/{uuid}` | Update country details |
| `DELETE` | `https://crud-man.vercel.app/countries/{uuid}` | Delete country (mocked) |

**cURL Examples:**
```bash
# Get all countries
curl -X GET "https://crud-man.vercel.app/countries"

# Create a country
curl -X POST "https://crud-man.vercel.app/countries" \
  -H "Content-Type: application/json" \
  -d '{"country":"India","currency_code":"INR","language_code":"hi"}'
```

---

### 📝 Content

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `https://crud-man.vercel.app/content` | Get all content blocks |
| `GET` | `https://crud-man.vercel.app/content/{uuid}` | Get single content block |
| `POST` | `https://crud-man.vercel.app/content` | Create content block |
| `PUT` | `https://crud-man.vercel.app/content/{uuid}` | Update content block |
| `DELETE` | `https://crud-man.vercel.app/content/{uuid}` | Delete content (mocked) |

```bash
curl -X GET "https://crud-man.vercel.app/content"
```

---

### 🌐 Network

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `https://crud-man.vercel.app/network` | Get network records (domains, IPs) |
| `GET` | `https://crud-man.vercel.app/network/{uuid}` | Get single network record |
| `POST` | `https://crud-man.vercel.app/network` | Store network record |
| `PUT` | `https://crud-man.vercel.app/network/{uuid}` | Update network record |
| `DELETE` | `https://crud-man.vercel.app/network/{uuid}` | Delete network record (mocked) |

```bash
curl -X GET "https://crud-man.vercel.app/network"
```

---

### 🕐 Date-Time

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `https://crud-man.vercel.app/date-time` | Get all date-time records |
| `GET` | `https://crud-man.vercel.app/date-time/{uuid}` | Get single record |
| `POST` | `https://crud-man.vercel.app/date-time` | Create timestamp entry |
| `PUT` | `https://crud-man.vercel.app/date-time/{uuid}` | Update timestamp values |

```bash
curl -X GET "https://crud-man.vercel.app/date-time"
```

---

### 🛒 Products *(E-Commerce)*

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `https://crud-man.vercel.app/products` | Get all products |
| `GET` | `https://crud-man.vercel.app/products/{uuid}` | Get product by UUID |
| `POST` | `https://crud-man.vercel.app/products` | Add product |
| `PUT` | `https://crud-man.vercel.app/products/{uuid}` | Update product |
| `DELETE` | `https://crud-man.vercel.app/products/{uuid}` | Delete product (mocked) |

**cURL Example:**
```bash
# Get all products
curl -X GET "https://crud-man.vercel.app/products"

# Create a product
curl -X POST "https://crud-man.vercel.app/products" \
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
| `GET` | `https://crud-man.vercel.app/carts` | Get all shopping carts |
| `GET` | `https://crud-man.vercel.app/carts/{uuid}` | Get cart by UUID |
| `POST` | `https://crud-man.vercel.app/carts` | Create cart |
| `PUT` | `https://crud-man.vercel.app/carts/{uuid}` | Update cart |
| `DELETE` | `https://crud-man.vercel.app/carts/{uuid}` | Delete cart (mocked) |

```bash
curl -X GET "https://crud-man.vercel.app/carts"
```

---

### 🏷️ Categories *(E-Commerce)*

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `https://crud-man.vercel.app/categories` | Get all product categories |

```bash
curl -X GET "https://crud-man.vercel.app/categories"
```

---

### 🧑‍💼 E-Commerce Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `https://crud-man.vercel.app/e_commerce_users` | Get all e-commerce users |

```bash
curl -X GET "https://crud-man.vercel.app/e_commerce_users"
```

---

### 📰 Posts *(Blog)*

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `https://crud-man.vercel.app/post` | Get all blog posts |
| `GET` | `https://crud-man.vercel.app/post/{uuid}` | Get single post |
| `POST` | `https://crud-man.vercel.app/post` | Publish a new post |
| `PUT` | `https://crud-man.vercel.app/post/{uuid}` | Update post |
| `DELETE` | `https://crud-man.vercel.app/post/{uuid}` | Delete post (mocked) |

```bash
curl -X GET "https://crud-man.vercel.app/post"
```

---

### 💬 Comments *(Blog)*

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `https://crud-man.vercel.app/comments` | Get all comments |
| `POST` | `https://crud-man.vercel.app/comments` | Post a comment |
| `DELETE` | `https://crud-man.vercel.app/comments/{uuid}` | Delete comment (mocked) |

```bash
curl -X GET "https://crud-man.vercel.app/comments"
```

---

### ✍️ Blog Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `https://crud-man.vercel.app/blog_users` | Get blog authors and contributors |

```bash
curl -X GET "https://crud-man.vercel.app/blog_users"
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
curl -X GET "https://crud-man.vercel.app/user/123"
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

After deployment, replace `https://crud-man.vercel.app` in your project with your live URL (e.g. `https://crudman.vercel.app`).

---

## 📄 License

MIT — Free to use in personal and commercial projects.

---

> Built with ❤️ using React + Vite · No backend · No auth · Just fake data, fast.
