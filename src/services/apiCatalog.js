export const CATEGORIES = {
  GENERAL: 'general',
  ECOMMERCE: 'ecommerce',
  BLOG: 'blog'
};

export const API_CATALOG = [
  // --- GENERAL CATEGORY ---
  {
    id: 'user_get_all',
    category: CATEGORIES.GENERAL,
    resource: 'Users',
    title: 'Get All Users',
    endpoint: '/user',
    method: 'GET',
    description: 'Fetch complete list of general fake users dataset.',
    sampleRequestBody: null
  },
  {
    id: 'user_post',
    category: CATEGORIES.GENERAL,
    resource: 'Users',
    title: 'Store User',
    endpoint: '/user',
    method: 'POST',
    description: 'Create a new user entry in the general dataset.',
    sampleRequestBody: {
      uuid: "2b67c08a-12b1-44ae-bf6f-f4b66efe900b",
      name: "Alex Morgan",
      user_name: "alexm",
      email: "alex.morgan@example.com",
      address: "742 Evergreen Terrace, Springfield, OR 97477",
      phone: "+1-555-019-2834",
      date_of_birth: "1992-08-14"
    }
  },
  {
    id: 'user_put',
    category: CATEGORIES.GENERAL,
    resource: 'Users',
    title: 'Update User Details',
    endpoint: '/user/2b67c08a-12b1-44ae-bf6f-f4b66efe800a',
    method: 'PUT',
    description: 'Update user profile attributes by UUID.',
    sampleRequestBody: {
      name: "Alex Morgan Updated",
      user_name: "alexm_pro",
      email: "alex.updated@example.com"
    }
  },
  {
    id: 'user_get_single',
    category: CATEGORIES.GENERAL,
    resource: 'Users',
    title: 'User Details',
    endpoint: '/user/2b67c08a-12b1-44ae-bf6f-f4b66efe800a',
    method: 'GET',
    description: 'Retrieve detailed information for a specific user UUID.',
    sampleRequestBody: null
  },
  {
    id: 'user_delete',
    category: CATEGORIES.GENERAL,
    resource: 'Users',
    title: 'Delete User',
    endpoint: '/user/2b67c08a-12b1-44ae-bf6f-f4b66efe800a',
    method: 'DELETE',
    description: 'Delete a user record by UUID (mocked response).',
    sampleRequestBody: null
  },
  {
    id: 'user_invalid_uuid',
    category: CATEGORIES.GENERAL,
    resource: 'Users',
    title: 'User Invalid UUID Test',
    endpoint: '/user/123',
    method: 'GET',
    description: 'Test API error handling when requesting an invalid non-existent UUID.',
    sampleRequestBody: null
  },

  // Countries
  {
    id: 'countries_get_all',
    category: CATEGORIES.GENERAL,
    resource: 'Countries',
    title: 'Get All Countries',
    endpoint: '/countries',
    method: 'GET',
    description: 'Fetch country metadata, currency codes, and spoken languages.',
    sampleRequestBody: null
  },
  {
    id: 'countries_post',
    category: CATEGORIES.GENERAL,
    resource: 'Countries',
    title: 'Store Country',
    endpoint: '/countries',
    method: 'POST',
    description: 'Add a new country record to the countries directory.',
    sampleRequestBody: {
      uuid: "62ae3545-7edc-4bfb-93fe-c31ebfdc7777",
      country: "India",
      currency_code: "INR",
      language_code: "hi"
    }
  },
  {
    id: 'countries_put',
    category: CATEGORIES.GENERAL,
    resource: 'Countries',
    title: 'Update Country Details',
    endpoint: '/countries/62ae3545-7edc-4bfb-93fe-c31ebfdc7538',
    method: 'PUT',
    description: 'Modify currency or details for a specified country UUID.',
    sampleRequestBody: {
      currency_code: "ITQ"
    }
  },
  {
    id: 'countries_get_single',
    category: CATEGORIES.GENERAL,
    resource: 'Countries',
    title: 'Country Details',
    endpoint: '/countries/3ae198fc-3690-4ab2-811b-635fef2c43df',
    method: 'GET',
    description: 'Fetch country profile by UUID.',
    sampleRequestBody: null
  },
  {
    id: 'countries_delete',
    category: CATEGORIES.GENERAL,
    resource: 'Countries',
    title: 'Delete Country',
    endpoint: '/countries/3ae198fc-3690-4ab2-811b-635fef2c43df',
    method: 'DELETE',
    description: 'Delete country metadata entry (mocked response).',
    sampleRequestBody: null
  },
  {
    id: 'countries_invalid_uuid',
    category: CATEGORIES.GENERAL,
    resource: 'Countries',
    title: 'Country Invalid UUID Test',
    endpoint: '/countries/123',
    method: 'GET',
    description: 'Test 404 response structure for missing country record.',
    sampleRequestBody: null
  },

  // Content
  {
    id: 'content_get_all',
    category: CATEGORIES.GENERAL,
    resource: 'Content',
    title: 'Get All Content',
    endpoint: '/content',
    method: 'GET',
    description: 'Fetch generated sentence, paragraph, and text content samples.',
    sampleRequestBody: null
  },
  {
    id: 'content_post',
    category: CATEGORIES.GENERAL,
    resource: 'Content',
    title: 'Store Content Data',
    endpoint: '/content',
    method: 'POST',
    description: 'Save mock sentences or text content blocks.',
    sampleRequestBody: {
      uuid: "37da3a9c-bcf0-4a9d-9fd3-8716222ef54c",
      sentence: "Designing user interfaces with React and Vite improves Developer Experience.",
      paragraph: "Modern web architecture leverages micro-components, robust CSS tokens, and reactive state management.",
      text: "Comprehensive dummy text generated for UI layout prototyping."
    }
  },
  {
    id: 'content_put',
    category: CATEGORIES.GENERAL,
    resource: 'Content',
    title: 'Update Content Data',
    endpoint: '/content/37da3a9c-bcf0-4a9d-9fd3-8716222ef45c',
    method: 'PUT',
    description: 'Update text block or sentence content.',
    sampleRequestBody: {
      sentence: "Updated Content Sample Sentence"
    }
  },
  {
    id: 'content_get_single',
    category: CATEGORIES.GENERAL,
    resource: 'Content',
    title: 'Content Details',
    endpoint: '/content/918cccbd-85ad-4c97-81f7-1dde995b72d3',
    method: 'GET',
    description: 'Fetch single content record by UUID.',
    sampleRequestBody: null
  },
  {
    id: 'content_delete',
    category: CATEGORIES.GENERAL,
    resource: 'Content',
    title: 'Delete Content Block',
    endpoint: '/content/918cccbd-85ad-4c97-81f7-1dde995b72d3',
    method: 'DELETE',
    description: 'Remove content sample by UUID (mocked response).',
    sampleRequestBody: null
  },
  {
    id: 'content_invalid_uuid',
    category: CATEGORIES.GENERAL,
    resource: 'Content',
    title: 'Content Invalid UUID Test',
    endpoint: '/content/123',
    method: 'GET',
    description: 'Test invalid lookup for content endpoint.',
    sampleRequestBody: null
  },

  // Network
  {
    id: 'network_get_all',
    category: CATEGORIES.GENERAL,
    resource: 'Network',
    title: 'Get Network Data',
    endpoint: '/network',
    method: 'GET',
    description: 'Fetch domain names, URLs, IPv4, and IPv6 network entries.',
    sampleRequestBody: null
  },
  {
    id: 'network_post',
    category: CATEGORIES.GENERAL,
    resource: 'Network',
    title: 'Store Network Data',
    endpoint: '/network',
    method: 'POST',
    description: 'Store new domain and network address records.',
    sampleRequestBody: {
      uuid: "a54e2f00-e409-4e82-a7b4-f6505de80c42",
      domain_name: "testing.com",
      url: "https://testing.com/",
      ipv4: "168.194.76.204",
      ipv6: "3889:6be1:2aa3:bab0:e7d3:1f5b:be7c:3d6c"
    }
  },
  {
    id: 'network_put',
    category: CATEGORIES.GENERAL,
    resource: 'Network',
    title: 'Update Network Data',
    endpoint: '/network/a54e2f00-e409-4e82-a7b4-f6505de80c41',
    method: 'PUT',
    description: 'Modify network domain or URL information.',
    sampleRequestBody: {
      domain_name: "test.com",
      url: "http://test.com/"
    }
  },
  {
    id: 'network_get_single',
    category: CATEGORIES.GENERAL,
    resource: 'Network',
    title: 'Network Details',
    endpoint: '/network/a54e2f00-e409-4e82-a7b4-f6505de80c41',
    method: 'GET',
    description: 'Retrieve network record details by UUID.',
    sampleRequestBody: null
  },
  {
    id: 'network_delete',
    category: CATEGORIES.GENERAL,
    resource: 'Network',
    title: 'Delete Network Record',
    endpoint: '/network/a54e2f00-e409-4e82-a7b4-f6505de80c41',
    method: 'DELETE',
    description: 'Delete domain or IP record by UUID (mocked response).',
    sampleRequestBody: null
  },
  {
    id: 'network_invalid_uuid',
    category: CATEGORIES.GENERAL,
    resource: 'Network',
    title: 'Network Invalid UUID Test',
    endpoint: '/network/123',
    method: 'GET',
    description: 'Check response for invalid network UUID parameter.',
    sampleRequestBody: null
  },

  // Date-Time
  {
    id: 'datetime_get_all',
    category: CATEGORIES.GENERAL,
    resource: 'Date-Time',
    title: 'Get Date-Time Data',
    endpoint: '/date-time',
    method: 'GET',
    description: 'Fetch mock dates, timestamps, and formatted date strings.',
    sampleRequestBody: null
  },
  {
    id: 'datetime_post',
    category: CATEGORIES.GENERAL,
    resource: 'Date-Time',
    title: 'Store Date-Time Data',
    endpoint: '/date-time',
    method: 'POST',
    description: 'Record custom timestamp entry.',
    sampleRequestBody: {
      uuid: "a8d0b8c8-492f-4c24-b970-8235ee9eca22",
      date: "2026-07-25",
      time: "17:53:06",
      date_time: "2026-07-25 17:53:48"
    }
  },
  {
    id: 'datetime_put',
    category: CATEGORIES.GENERAL,
    resource: 'Date-Time',
    title: 'Update Date-Time Data',
    endpoint: '/date-time/a8d0b8c8-492f-4c24-b970-8235ee9eca11',
    method: 'PUT',
    description: 'Update timestamp values for record.',
    sampleRequestBody: {
      date: "2026-08-19",
      time: "15:38:06",
      date_time: "2026-12-07 20:09:48"
    }
  },
  {
    id: 'datetime_get_single',
    category: CATEGORIES.GENERAL,
    resource: 'Date-Time',
    title: 'Date-Time Details',
    endpoint: '/date-time/f4ffe933-5453-40d6-8df3-4fb68b03cc0f',
    method: 'GET',
    description: 'Fetch single date-time entry by UUID.',
    sampleRequestBody: null
  },
  {
    id: 'datetime_invalid_uuid',
    category: CATEGORIES.GENERAL,
    resource: 'Date-Time',
    title: 'Date-Time Invalid UUID Test',
    endpoint: '/date-time/123',
    method: 'GET',
    description: 'Test invalid UUID handling for date-time service.',
    sampleRequestBody: null
  },


  // --- E-COMMERCE CATEGORY ---
  {
    id: 'products_get_all',
    category: CATEGORIES.ECOMMERCE,
    resource: 'Products',
    title: 'Get All Products',
    endpoint: '/products',
    method: 'GET',
    description: 'Fetch product catalog with titles, pricing, ratings, and stock inventory.',
    sampleRequestBody: null
  },
  {
    id: 'products_post',
    category: CATEGORIES.ECOMMERCE,
    resource: 'Products',
    title: 'Store Product',
    endpoint: '/products',
    method: 'POST',
    description: 'Create a new product item in the e-commerce inventory.',
    sampleRequestBody: {
      uuid: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
      title: "Wireless Noise Canceling Headphones",
      description: "High fidelity audio with active noise cancellation and 30-hour battery life.",
      price: 299.99,
      discountPercentage: 15.5,
      rating: 4.8,
      stock: 45,
      brand: "AudioPro",
      category: "smartphones",
      thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    }
  },
  {
    id: 'products_put',
    category: CATEGORIES.ECOMMERCE,
    resource: 'Products',
    title: 'Update Product Details',
    endpoint: '/products/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    method: 'PUT',
    description: 'Update price, stock, or description of a product by UUID.',
    sampleRequestBody: {
      title: "Wireless Headphones Pro",
      price: 249.99,
      stock: 60
    }
  },
  {
    id: 'products_get_single',
    category: CATEGORIES.ECOMMERCE,
    resource: 'Products',
    title: 'Product Details',
    endpoint: '/products/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    method: 'GET',
    description: 'Fetch detailed product specification by UUID.',
    sampleRequestBody: null
  },
  {
    id: 'products_delete',
    category: CATEGORIES.ECOMMERCE,
    resource: 'Products',
    title: 'Delete Product',
    endpoint: '/products/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    method: 'DELETE',
    description: 'Delete product item from inventory (mocked response).',
    sampleRequestBody: null
  },
  {
    id: 'products_invalid_uuid',
    category: CATEGORIES.ECOMMERCE,
    resource: 'Products',
    title: 'Product Invalid UUID Test',
    endpoint: '/products/123',
    method: 'GET',
    description: 'Test invalid product UUID lookup.',
    sampleRequestBody: null
  },

  // Carts
  {
    id: 'carts_get_all',
    category: CATEGORIES.ECOMMERCE,
    resource: 'Carts',
    title: 'Get All Shopping Carts',
    endpoint: '/carts',
    method: 'GET',
    description: 'Retrieve shopping cart instances, total items, and pricing summaries.',
    sampleRequestBody: null
  },
  {
    id: 'carts_post',
    category: CATEGORIES.ECOMMERCE,
    resource: 'Carts',
    title: 'Store Cart',
    endpoint: '/carts',
    method: 'POST',
    description: 'Initialize new user checkout cart.',
    sampleRequestBody: {
      uuid: "e12a4567-e89b-12d3-a456-426614174000",
      user_id: 1,
      products: [
        { id: 1, quantity: 2, price: 549 },
        { id: 2, quantity: 1, price: 899 }
      ],
      total: 1997,
      discountedTotal: 1800,
      totalProducts: 2,
      totalQuantity: 3
    }
  },
  {
    id: 'carts_put',
    category: CATEGORIES.ECOMMERCE,
    resource: 'Carts',
    title: 'Update Cart Details',
    endpoint: '/carts/e12a4567-e89b-12d3-a456-426614174000',
    method: 'PUT',
    description: 'Update cart items or total pricing breakdown.',
    sampleRequestBody: {
      totalQuantity: 4,
      total: 2450
    }
  },
  {
    id: 'carts_get_single',
    category: CATEGORIES.ECOMMERCE,
    resource: 'Carts',
    title: 'Cart Details',
    endpoint: '/carts/e12a4567-e89b-12d3-a456-426614174000',
    method: 'GET',
    description: 'Fetch shopping cart payload by UUID.',
    sampleRequestBody: null
  },

  // Categories
  {
    id: 'carts_delete',
    category: CATEGORIES.ECOMMERCE,
    resource: 'Carts',
    title: 'Delete Cart',
    endpoint: '/carts/e12a4567-e89b-12d3-a456-426614174000',
    method: 'DELETE',
    description: 'Remove shopping cart session by UUID (mocked response).',
    sampleRequestBody: null
  },
  {
    id: 'categories_get_all',
    category: CATEGORIES.ECOMMERCE,
    resource: 'Categories',
    title: 'Get Product Categories',
    endpoint: '/categories',
    method: 'GET',
    description: 'Fetch list of available product store categories.',
    sampleRequestBody: null
  },
  {
    id: 'e_commerce_users_get_all',
    category: CATEGORIES.ECOMMERCE,
    resource: 'Users',
    title: 'Get E-Commerce Users',
    endpoint: '/e_commerce_users',
    method: 'GET',
    description: 'Fetch registered e-commerce shopper accounts.',
    sampleRequestBody: null
  },


  // --- BLOG CATEGORY ---
  {
    id: 'post_get_all',
    category: CATEGORIES.BLOG,
    resource: 'Post',
    title: 'Get All Posts',
    endpoint: '/post',
    method: 'GET',
    description: 'Fetch list of blog articles, author tags, and content bodies.',
    sampleRequestBody: null
  },
  {
    id: 'post_post',
    category: CATEGORIES.BLOG,
    resource: 'Post',
    title: 'Store Post',
    endpoint: '/post',
    method: 'POST',
    description: 'Publish a new blog post entry.',
    sampleRequestBody: {
      uuid: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
      title: "Building Modern Web Apps with React & Vite",
      body: "React coupled with modern build engines like Vite provides unparalleled performance, lightning fast HMR, and smooth user experiences.",
      userId: 5,
      tags: ["react", "webdev", "javascript"],
      reactions: 42
    }
  },
  {
    id: 'post_put',
    category: CATEGORIES.BLOG,
    resource: 'Post',
    title: 'Update Post Details',
    endpoint: '/post/f47ac10b-58cc-4372-a567-0e02b2c3d479',
    method: 'PUT',
    description: 'Edit post content, title, or reaction counters.',
    sampleRequestBody: {
      title: "Building Modern Web Apps with React & Vite (Updated Edition)",
      reactions: 88
    }
  },
  {
    id: 'post_get_single',
    category: CATEGORIES.BLOG,
    resource: 'Post',
    title: 'Post Details',
    endpoint: '/post/f47ac10b-58cc-4372-a567-0e02b2c3d479',
    method: 'GET',
    description: 'Retrieve single blog post by UUID.',
    sampleRequestBody: null
  },

  // Comments
  {
    id: 'post_delete',
    category: CATEGORIES.BLOG,
    resource: 'Post',
    title: 'Delete Post',
    endpoint: '/post/f47ac10b-58cc-4372-a567-0e02b2c3d479',
    method: 'DELETE',
    description: 'Delete blog post article (mocked response).',
    sampleRequestBody: null
  },
  {
    id: 'comments_get_all',
    category: CATEGORIES.BLOG,
    resource: 'Comments',
    title: 'Get All Comments',
    endpoint: '/comments',
    method: 'GET',
    description: 'Fetch reader comments across blog posts.',
    sampleRequestBody: null
  },
  {
    id: 'comments_post',
    category: CATEGORIES.BLOG,
    resource: 'Comments',
    title: 'Store Comment',
    endpoint: '/comments',
    method: 'POST',
    description: 'Submit a new comment on a blog post.',
    sampleRequestBody: {
      uuid: "c8901234-a12b-34c5-d678-90123456789a",
      body: "Great post! Really helped clarify how the API endpoints work.",
      postId: 1,
      user: {
        id: 12,
        username: "tech_enthusiast"
      }
    }
  },

  // Blog Users
  {
    id: 'comments_delete',
    category: CATEGORIES.BLOG,
    resource: 'Comments',
    title: 'Delete Comment',
    endpoint: '/comments/c8901234-a12b-34c5-d678-90123456789a',
    method: 'DELETE',
    description: 'Delete comment entry by UUID (mocked response).',
    sampleRequestBody: null
  },
  {
    id: 'blog_users_get_all',
    category: CATEGORIES.BLOG,
    resource: 'Users',
    title: 'Get Blog Authors',
    endpoint: '/blog_users',
    method: 'GET',
    description: 'Fetch profiles of blog authors, contributors, and commenters.',
    sampleRequestBody: null
  }
];
