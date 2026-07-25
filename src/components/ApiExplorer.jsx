import React, { useState } from 'react';
import CodeGenerator from './CodeGenerator';
import { 
  Copy, 
  Check, 
  Clock, 
  Send,
  Code,
  ChevronDown,
  ChevronUp,
  Sparkles
} from 'lucide-react';

export default function ApiExplorer({ 
  catalog, 
  baseUrl, 
  onExecuteRequest,
  activeCategory
}) {
  const [copiedId, setCopiedId] = useState(null);
  const [expandedCode, setExpandedCode] = useState({});
  const [expandedResponses, setExpandedResponses] = useState({});
  const [executedResults, setExecutedResults] = useState({});
  const [loadingIds, setLoadingIds] = useState({});

  const handleCopyUrl = (e, apiId, url) => {
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopiedId(apiId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleRunSingle = async (e, api) => {
    e.stopPropagation();
    setLoadingIds(prev => ({ ...prev, [api.id]: true }));
    const result = await onExecuteRequest({
      endpoint: api.endpoint,
      method: api.method,
      payload: api.sampleRequestBody,
      baseUrl
    });

    setExecutedResults(prev => ({ ...prev, [api.id]: result }));
    setExpandedResponses(prev => ({ ...prev, [api.id]: true }));
    setLoadingIds(prev => ({ ...prev, [api.id]: false }));
  };

  const toggleCode = (apiId) => {
    setExpandedCode(prev => ({ ...prev, [apiId]: !prev[apiId] }));
  };

  const toggleResponse = (apiId) => {
    setExpandedResponses(prev => ({ ...prev, [apiId]: !prev[apiId] }));
  };

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '20px 28px' }}>
      {/* Category Overview Banner */}
      <div style={{
        marginBottom: '20px',
        padding: '14px 20px',
        borderRadius: '10px',
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sparkles size={18} color="#FF5722" />
          <div>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFF', lineHeight: 1.2 }}>
              {activeCategory.toUpperCase()} API Endpoints
            </h2>
            <p style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>
              Interactive API suite for rapid testing and code snippet generation.
            </p>
          </div>
        </div>

        <div style={{
          fontSize: '0.75rem',
          fontWeight: 700,
          backgroundColor: '#1E293B',
          color: '#FF5722',
          padding: '4px 12px',
          borderRadius: '6px',
          border: '1px solid rgba(255, 87, 34, 0.2)'
        }}>
          {catalog.length} Endpoints
        </div>
      </div>

      {/* Single-Line Compact Endpoint Cards List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {catalog.map((api) => {
          const fullUrl = `${baseUrl}${api.endpoint.startsWith('/') ? api.endpoint : '/' + api.endpoint}`;
          const isCopied = copiedId === api.id;
          const result = executedResults[api.id];
          const isLoading = loadingIds[api.id];
          const isCodeExpanded = expandedCode[api.id];
          const isResponseExpanded = expandedResponses[api.id];

          return (
            <div 
              key={api.id} 
              id={api.id}
              className="glass-card" 
              style={{
                padding: '12px 18px',
                borderLeft: `4px solid ${
                  api.method === 'GET' ? '#10B981' :
                  api.method === 'POST' ? '#F59E0B' :
                  api.method === 'PUT' ? '#6366F1' : '#EF4444'
                }`,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              {/* Single-Line Main Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px'
              }}>
                {/* Left: Method Badge + Title + URL */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: 0 }}>
                  <span className={`badge-method ${api.method}`} style={{ fontSize: '0.7rem', padding: '3px 8px' }}>
                    {api.method}
                  </span>

                  <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', whiteSpace: 'nowrap' }}>
                    {api.title}
                  </span>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: '#0B0F17',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    minWidth: 0,
                    overflow: 'hidden'
                  }}>
                    <code style={{ fontSize: '0.8rem', color: '#38BDF8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {fullUrl}
                    </code>

                    <button
                      onClick={(e) => handleCopyUrl(e, api.id, fullUrl)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: isCopied ? '#10B981' : '#6B7280',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                      title="Copy URL"
                    >
                      {isCopied ? <Check size={13} /> : <Copy size={13} />}
                    </button>
                  </div>
                </div>

                {/* Right Action Buttons: Code Snippets & Test API */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                  <button
                    onClick={() => toggleCode(api.id)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backgroundColor: isCodeExpanded ? '#1E293B' : 'transparent',
                      color: isCodeExpanded ? '#FF5722' : '#9CA3AF',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <Code size={14} />
                    <span>cURL / Code</span>
                    {isCodeExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                  </button>

                  <button
                    className="btn-primary"
                    onClick={(e) => handleRunSingle(e, api)}
                    disabled={isLoading}
                    style={{
                      padding: '6px 14px',
                      fontSize: '0.78rem',
                      opacity: isLoading ? 0.7 : 1
                    }}
                  >
                    {isLoading ? (
                      <Clock size={14} className="spin-anim" />
                    ) : (
                      <Send size={14} />
                    )}
                    {isLoading ? 'Executing...' : 'Test API'}
                  </button>
                </div>
              </div>

              {/* Expandable Code Snippets Drawer */}
              {isCodeExpanded && (
                <div style={{ paddingTop: '8px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <CodeGenerator 
                    endpoint={api.endpoint} 
                    method={api.method} 
                    baseUrl={baseUrl} 
                    sampleBody={api.sampleRequestBody}
                    isOpenDirectly={true}
                  />
                </div>
              )}

              {/* Expandable Live Execution Response Drawer */}
              {result && isResponseExpanded && (
                <div style={{ paddingTop: '8px', borderTop: '1px dashed rgba(255, 87, 34, 0.3)' }}>
                  <div 
                    onClick={() => toggleResponse(api.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      userSelect: 'none',
                      marginBottom: '8px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '2px 6px',
                        borderRadius: '4px',
                        backgroundColor: result.status >= 200 && result.status < 300 ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                        color: result.status >= 200 && result.status < 300 ? '#10B981' : '#EF4444',
                        border: `1px solid ${result.status >= 200 && result.status < 300 ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`
                      }}>
                        Status: {result.status} {result.statusText}
                      </span>

                      <span style={{ fontSize: '0.75rem', color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={12} /> {result.responseTimeMs} ms
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#9CA3AF', fontSize: '0.75rem' }}>
                      <span>Hide Response</span>
                      <ChevronUp size={14} />
                    </div>
                  </div>

                  <div className="code-window">
                    <div className="code-header" style={{ padding: '6px 12px' }}>
                      <span>Response Output</span>
                      <span>JSON</span>
                    </div>
                    <div className="code-content" style={{ maxHeight: '250px', padding: '10px 12px' }}>
                      <pre style={{ color: result.status >= 200 && result.status < 300 ? '#A7F3D0' : '#FCA5A5' }}>
                        {JSON.stringify(result.data, null, 2)}
                      </pre>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
