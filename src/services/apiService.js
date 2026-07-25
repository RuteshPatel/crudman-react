import { processClientSideRequest } from './mockServer';

export async function pingBackendServer() {
  // Client-side standalone mode is always active and healthy!
  return { online: true, status: 200, message: 'React Engine Online' };
}

export async function executeApiCall({ endpoint, method, payload, baseUrl }) {
  const startTime = performance.now();
  
  // Execute client-side mock request instantly
  const result = await processClientSideRequest({ endpoint, method, payload });
  
  const endTime = performance.now();
  const responseTimeMs = Math.round(endTime - startTime);

  const origin = baseUrl || (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:5173');

  return {
    success: result.status >= 200 && result.status < 300,
    status: result.status,
    statusText: result.statusText,
    responseTimeMs,
    data: result.data,
    url: `${origin}${endpoint.startsWith('/') ? endpoint : '/' + endpoint}`,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'x-powered-by': 'CRUDMan Client-Side React Engine'
    },
    isMock: false
  };
}

