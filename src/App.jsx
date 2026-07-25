import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ApiExplorer from './components/ApiExplorer';
import { API_CATALOG, CATEGORIES } from './services/apiCatalog';
import { executeApiCall } from './services/apiService';
import { Terminal } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES.GENERAL);
  const [selectedEndpoint, setSelectedEndpoint] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMethodFilter, setSelectedMethodFilter] = useState('ALL');
  const [baseUrl, setBaseUrl] = useState(typeof window !== 'undefined' ? window.location.origin : 'http://localhost:5173');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setBaseUrl(window.location.origin);
    }
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 850);
    return () => clearTimeout(timer);
  }, []);

  // Filter catalog based on category, search, and method filter
  const categoryCatalog = API_CATALOG.filter(item => item.category === activeCategory);

  const filteredCatalog = categoryCatalog.filter(item => {
    const matchesMethod = selectedMethodFilter === 'ALL' || item.method === selectedMethodFilter;
    const matchesSearch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.endpoint.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.resource.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesMethod && matchesSearch;
  });

  const handleSelectEndpoint = (api) => {
    setSelectedEndpoint(api);
    const element = document.getElementById(api.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  if (isLoading) {
    return (
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#060911',
        backgroundImage: 'radial-gradient(circle at 50% 50%, #0D1527 0%, #04060C 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999,
        overflow: 'hidden'
      }}>
        {/* Floating background badges stream */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.15, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '20%', left: '10%', color: '#10B981', fontFamily: 'monospace', fontSize: '0.85rem' }}>GET /user</div>
          <div style={{ position: 'absolute', top: '70%', left: '15%', color: '#F59E0B', fontFamily: 'monospace', fontSize: '0.85rem' }}>POST /products</div>
          <div style={{ position: 'absolute', top: '30%', left: '80%', color: '#6366F1', fontFamily: 'monospace', fontSize: '0.85rem' }}>PUT /carts</div>
          <div style={{ position: 'absolute', top: '80%', left: '75%', color: '#EF4444', fontFamily: 'monospace', fontSize: '0.85rem' }}>DELETE /post</div>
          <div style={{ position: 'absolute', top: '50%', left: '88%', color: '#10B981', fontFamily: 'monospace', fontSize: '0.85rem' }}>GET /countries</div>
          <div style={{ position: 'absolute', top: '15%', left: '60%', color: '#F59E0B', fontFamily: 'monospace', fontSize: '0.85rem' }}>POST /content</div>
        </div>

        {/* Center Glass Card */}
        <div style={{
          position: 'relative',
          width: '440px',
          padding: '36px 32px',
          borderRadius: '24px',
          backgroundColor: 'rgba(13, 20, 36, 0.88)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 0 60px rgba(0, 0, 0, 0.85), 0 0 30px rgba(255, 87, 34, 0.2)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div style={{
            position: 'relative',
            width: '75px',
            height: '75px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px'
          }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #FF5722 0%, #FF8A65 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 25px rgba(255, 87, 34, 0.8)'
            }}>
              <Terminal size={28} color="#FFF" />
            </div>
          </div>

          <h1 style={{ fontSize: '2rem', fontWeight: 900, color: '#FFF', marginBottom: '4px' }}>
            CRUD<span style={{ color: '#FF5722' }}>Man</span>
          </h1>

          <p style={{ fontSize: '0.82rem', color: '#9CA3AF', marginBottom: '20px', fontWeight: 500 }}>
            Free Fake REST API for Frontend Developers
          </p>

          <div style={{
            width: '100%',
            height: '44px',
            backgroundColor: '#080D1A',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            padding: '0 16px',
            fontFamily: 'monospace',
            fontSize: '0.8rem',
            color: '#A7F3D0',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '20px',
            whiteSpace: 'nowrap',
            overflow: 'hidden'
          }}>
            <span style={{ color: '#FF5722', fontWeight: 700, flexShrink: 0, whiteSpace: 'nowrap' }}>FETCH &gt;</span>
            <div style={{ flex: 1, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
              <span>GET /api/crudman 200 OK</span>
            </div>
          </div>

          <div style={{
            width: '100%',
            height: '6px',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            borderRadius: '6px',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <div style={{
              height: '100%',
              width: '100%',
              background: 'linear-gradient(90deg, #FF5722, #F59E0B, #10B981, #38BDF8)',
              borderRadius: '6px',
              boxShadow: '0 0 16px rgba(255, 87, 34, 0.9)'
            }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Header
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        baseUrl={baseUrl}
      />

      <main className="main-layout">
        <Sidebar
          catalog={filteredCatalog}
          activeCategory={activeCategory}
          selectedEndpointId={selectedEndpoint?.id}
          onSelectEndpoint={handleSelectEndpoint}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedMethodFilter={selectedMethodFilter}
          setSelectedMethodFilter={setSelectedMethodFilter}
        />

        <ApiExplorer
          catalog={filteredCatalog}
          selectedEndpoint={selectedEndpoint}
          baseUrl={baseUrl}
          onExecuteRequest={executeApiCall}
          activeCategory={activeCategory}
        />
      </main>
    </div>
  );
}
