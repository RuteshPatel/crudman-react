import React from 'react';
import { Search, Filter, ChevronRight, Hash } from 'lucide-react';

export default function Sidebar({
  catalog,
  activeCategory,
  selectedEndpointId,
  onSelectEndpoint,
  searchQuery,
  setSearchQuery,
  selectedMethodFilter,
  setSelectedMethodFilter
}) {
  // Group catalog endpoints by resource
  const groupedResources = catalog.reduce((acc, item) => {
    if (!acc[item.resource]) {
      acc[item.resource] = [];
    }
    acc[item.resource].push(item);
    return acc;
  }, {});

  return (
    <aside style={{
      width: '320px',
      backgroundColor: '#0D1322',
      borderRight: '1px solid rgba(255, 255, 255, 0.08)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflow: 'hidden'
    }}>
      {/* Search & Filter Header */}
      <div style={{ padding: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div style={{ position: 'relative', marginBottom: '12px' }}>
          <Search size={15} color="#9CA3AF" style={{ position: 'absolute', left: '12px', top: '10px' }} />
          <input
            type="text"
            placeholder="Filter endpoints or paths..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              paddingLeft: '36px',
              fontSize: '0.82rem',
              backgroundColor: '#161F33'
            }}
          />
        </div>

        {/* Method Filter Badges */}
        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
          {['ALL', 'GET', 'POST', 'PUT', 'DELETE'].map((method) => {
            const isSelected = selectedMethodFilter === method;
            return (
              <button
                key={method}
                onClick={() => setSelectedMethodFilter(method)}
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '3px 8px',
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: isSelected ? '#FF5722' : '#1A243B',
                  color: isSelected ? '#FFFFFF' : '#9CA3AF',
                  transition: 'all 0.15s ease'
                }}
              >
                {method}
              </button>
            );
          })}
        </div>
      </div>

      {/* Resource Sections List */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px' }}>
        {Object.keys(groupedResources).length === 0 ? (
          <div style={{ textAlign: 'center', padding: '24px 12px', color: '#6B7280', fontSize: '0.85rem' }}>
            No endpoints match your filter criteria.
          </div>
        ) : (
          Object.entries(groupedResources).map(([resource, items]) => (
            <div key={resource} style={{ marginBottom: '18px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#9CA3AF',
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                marginBottom: '8px',
                paddingLeft: '6px'
              }}>
                <span>{resource}</span>
                <span style={{
                  fontSize: '0.65rem',
                  backgroundColor: '#1E293B',
                  color: '#6B7280',
                  padding: '1px 6px',
                  borderRadius: '10px'
                }}>
                  {items.length}
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                {items.map((api) => {
                  const isActive = selectedEndpointId === api.id;
                  return (
                    <div
                      key={api.id}
                      onClick={() => onSelectEndpoint(api)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '8px 10px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        backgroundColor: isActive ? 'rgba(255, 87, 34, 0.12)' : 'transparent',
                        border: `1px solid ${isActive ? 'rgba(255, 87, 34, 0.3)' : 'transparent'}`,
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
                        <span className={`badge-method ${api.method}`} style={{ fontSize: '0.65rem', padding: '2px 6px' }}>
                          {api.method}
                        </span>
                        <span style={{
                          fontSize: '0.82rem',
                          fontWeight: isActive ? 600 : 400,
                          color: isActive ? '#FFFFFF' : '#D1D5DB',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}>
                          {api.title}
                        </span>
                      </div>
                      <ChevronRight size={13} color={isActive ? '#FF5722' : '#4B5563'} />
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </aside>
  );
}
