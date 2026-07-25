import React, { useState } from 'react';
import { Copy, Check, Code, ChevronDown, ChevronUp } from 'lucide-react';

export default function CodeGenerator({ endpoint, method, baseUrl, sampleBody, isOpenDirectly = false }) {
  const [isOpen, setIsOpen] = useState(isOpenDirectly);
  const [activeLang, setActiveLang] = useState('curl');
  const [copied, setCopied] = useState(false);

  const fullUrl = `${baseUrl}${endpoint.startsWith('/') ? endpoint : '/' + endpoint}`;

  const generateSnippet = () => {
    const formattedBody = sampleBody ? JSON.stringify(sampleBody, null, 2) : '';

    switch (activeLang) {
      case 'curl':
        if (method === 'GET') {
          return `curl -X GET "${fullUrl}" \\
  -H "Accept: application/json"`;
        }
        return `curl -X ${method} "${fullUrl}" \\
  -H "Content-Type: application/json" \\
  -d '${formattedBody}'`;

      case 'javascript':
        if (method === 'GET') {
          return `fetch("${fullUrl}")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`;
        }
        return `fetch("${fullUrl}", {
  method: "${method}",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(${formattedBody})
})
  .then(response => response.json())
  .then(data => console.log(data));`;

      case 'python':
        if (method === 'GET') {
          return `import requests

response = requests.get("${fullUrl}")
data = response.json()
print(data)`;
        }
        return `import requests

payload = ${formattedBody}
headers = {"Content-Type": "application/json"}

response = requests.${method.toLowerCase()}("${fullUrl}", json=payload, headers=headers)
print(response.json())`;

      case 'axios':
        if (method === 'GET') {
          return `import axios from 'axios';

const response = await axios.get("${fullUrl}");
console.log(response.data);`;
        }
        return `import axios from 'axios';

const payload = ${formattedBody};
const response = await axios.${method.toLowerCase()}("${fullUrl}", payload);
console.log(response.data);`;

      default:
        return '';
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateSnippet());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const showWindow = isOpenDirectly || isOpen;

  return (
    <div>
      {!isOpenDirectly && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'transparent',
            border: 'none',
            color: '#9CA3AF',
            fontSize: '0.78rem',
            fontWeight: 600,
            cursor: 'pointer',
            padding: '4px 0'
          }}
        >
          <Code size={14} color="#FF5722" />
          <span>{isOpen ? 'Hide Snippets (cURL / JS / Python / Axios)' : 'View Snippets (cURL / JS / Python / Axios)'}</span>
          {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      )}

      {showWindow && (
        <div className="code-window">
          <div className="code-header" style={{ padding: '6px 12px' }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              {[
                { id: 'curl', label: 'cURL' },
                { id: 'javascript', label: 'JavaScript' },
                { id: 'python', label: 'Python' },
                { id: 'axios', label: 'Axios' }
              ].map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setActiveLang(lang.id)}
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    padding: '3px 8px',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer',
                    backgroundColor: activeLang === lang.id ? '#1F293D' : 'transparent',
                    color: activeLang === lang.id ? '#FF5722' : '#9CA3AF',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <button
              onClick={handleCopy}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                background: 'transparent',
                border: 'none',
                color: copied ? '#10B981' : '#9CA3AF',
                fontSize: '0.75rem',
                cursor: 'pointer'
              }}
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>
          </div>

          <div className="code-content" style={{ padding: '10px 12px', maxHeight: '200px' }}>
            <pre>{generateSnippet()}</pre>
          </div>
        </div>
      )}
    </div>
  );
}
