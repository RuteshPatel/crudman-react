import React, { useState, useEffect } from 'react';
import { executeApiCall } from '../services/apiService';
import { 
  Database, 
  Search, 
  RefreshCw, 
  Plus, 
  Eye, 
  Edit3, 
  Trash2, 
  Check, 
  AlertCircle,
  FileJson,
  X
} from 'lucide-react';

export default function DataVisualizer({ baseUrl, activeCategory }) {
  const [selectedResource, setSelectedResource] = useState('user');
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newPayloadJson, setNewPayloadJson] = useState('');
  const [notice, setNotice] = useState(null);

  const resourceMap = {
    user: { title: 'General Users', endpoint: '/user', method: 'GET' },
    countries: { title: 'Countries', endpoint: '/countries', method: 'GET' },
    content: { title: 'Content Blocks', endpoint: '/content', method: 'GET' },
    network: { title: 'Network Records', endpoint: '/network', method: 'GET' },
    'date-time': { title: 'Date-Time Entries', endpoint: '/date-time', method: 'GET' },
    products: { title: 'Products Inventory', endpoint: '/products', method: 'GET' },
    carts: { title: 'Shopping Carts', endpoint: '/carts', method: 'GET' },
    post: { title: 'Blog Posts', endpoint: '/post', method: 'GET' },
    comments: { title: 'Comments', endpoint: '/comments', method: 'GET' }
  };

  const loadData = async () => {
    setLoading(true);
    const resourceConfig = resourceMap[selectedResource] || resourceMap['user'];
    const res = await executeApiCall({
      endpoint: resourceConfig.endpoint,
      method: 'GET',
      baseUrl
    });

    let items = [];
    if (res.data) {
      if (Array.isArray(res.data)) {
        items = res.data;
      } else if (res.data.data && Array.isArray(res.data.data)) {
        items = res.data.data;
      } else if (typeof res.data === 'object') {
        items = [res.data];
      }
    }

    setDataList(items);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [selectedResource, baseUrl]);

  const handleCreateRecord = async () => {
    try {
      const parsedJson = JSON.parse(newPayloadJson);
      const resourceConfig = resourceMap[selectedResource];
      const res = await executeApiCall({
        endpoint: resourceConfig.endpoint,
        method: 'POST',
        payload: parsedJson,
        baseUrl
      });

      setNotice({ type: 'success', message: 'Record created successfully!' });
      setShowAddModal(false);
      loadData();
      setTimeout(() => setNotice(null), 3000);
    } catch (err) {
      alert('Invalid JSON formatting in payload editor: ' + err.message);
    }
  };

  const filteredData = dataList.filter(item => {
    if (!searchTerm) return true;
    const jsonString = JSON.stringify(item).toLowerCase();
    return jsonString.includes(searchTerm.toLowerCase());
  });

  return (
    <div style={{ flex: 1, padding: '24px 32px', overflowY: 'auto' }}>
      {/* Top Banner */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '24px'
      }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Database size={22} color="#FF5722" />
            Data Management Dashboard
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>
            Inspect, search, and manage live dataset records stored in the CRUDMan backend engine.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn-secondary" onClick={loadData} disabled={loading}>
            <RefreshCw size={15} className={loading ? 'spin-anim' : ''} />
            Refresh Data
          </button>
          <button className="btn-primary" onClick={() => {
            setNewPayloadJson(JSON.stringify({ name: "Sample Record", created_at: new Date().toISOString() }, null, 2));
            setShowAddModal(true);
          }}>
            <Plus size={15} />
            Create Record
          </button>
        </div>
      </div>

      {notice && (
        <div style={{
          padding: '12px 16px',
          borderRadius: '8px',
          backgroundColor: notice.type === 'success' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
          border: `1px solid ${notice.type === 'success' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
          color: notice.type === 'success' ? '#34D399' : '#FCA5A5',
          marginBottom: '20px',
          fontSize: '0.85rem',
          fontWeight: 600
        }}>
          {notice.message}
        </div>
      )}

      {/* Dataset Selector Tabs */}
      <div style={{
        display: 'flex',
        gap: '8px',
        overflowX: 'auto',
        paddingBottom: '8px',
        marginBottom: '20px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        {Object.entries(resourceMap).map(([key, config]) => {
          const isSelected = selectedResource === key;
          return (
            <button
              key={key}
              onClick={() => setSelectedResource(key)}
              style={{
                padding: '8px 14px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.82rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                backgroundColor: isSelected ? '#FF5722' : '#161F33',
                color: isSelected ? '#FFFFFF' : '#9CA3AF',
                transition: 'all 0.15s ease'
              }}
            >
              {config.title}
            </button>
          );
        })}
      </div>

      {/* Search Input Bar */}
      <div style={{ marginBottom: '20px', position: 'relative' }}>
        <Search size={16} color="#9CA3AF" style={{ position: 'absolute', left: '14px', top: '11px' }} />
        <input
          type="text"
          placeholder={`Search ${resourceMap[selectedResource]?.title || 'records'}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', paddingLeft: '40px' }}
        />
      </div>

      {/* Records Grid / Table */}
      <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
        <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFF' }}>
            {resourceMap[selectedResource]?.title} Table
          </span>
          <span style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>
            Total Records: {filteredData.length}
          </span>
        </div>

        <div style={{ overflowX: 'auto', maxHeight: '550px' }}>
          {filteredData.length === 0 ? (
            <div style={{ padding: '40px', textAlign: 'center', color: '#6B7280', fontSize: '0.9rem' }}>
              {loading ? 'Loading records...' : 'No records found.'}
            </div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.83rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#0B0F17', color: '#9CA3AF', borderBottom: '1px solid var(--border-color)' }}>
                  <th style={{ padding: '12px 16px' }}>#</th>
                  <th style={{ padding: '12px 16px' }}>UUID / ID</th>
                  <th style={{ padding: '12px 16px' }}>Primary Fields</th>
                  <th style={{ padding: '12px 16px', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => {
                  const idVal = item.uuid || item.id || `rec-${index + 1}`;
                  const titleOrName = item.name || item.title || item.country || item.sentence || item.domain_name || item.date_time || 'Item Record';
                  return (
                    <tr 
                      key={index} 
                      style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', transition: 'backgroundColor 0.15s ease' }}
                    >
                      <td style={{ padding: '12px 16px', color: '#6B7280' }}>{index + 1}</td>
                      <td style={{ padding: '12px 16px', fontFamily: 'var(--font-mono)', color: '#38BDF8' }}>
                        {String(idVal).substring(0, 18)}...
                      </td>
                      <td style={{ padding: '12px 16px', fontWeight: 600, color: '#F3F4F6' }}>
                        {String(titleOrName)}
                      </td>
                      <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                        <button
                          className="btn-secondary"
                          style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                          onClick={() => setSelectedRecord(item)}
                        >
                          <Eye size={13} /> Inspect JSON
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Inspect JSON Modal Drawer */}
      {selectedRecord && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div className="glass-card" style={{ width: '560px', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFF' }}>Record Detail View</h3>
              <button className="btn-icon" onClick={() => setSelectedRecord(null)}>
                <X size={18} />
              </button>
            </div>
            <div className="code-window">
              <div className="code-content" style={{ maxHeight: '400px' }}>
                <pre>{JSON.stringify(selectedRecord, null, 2)}</pre>
              </div>
            </div>
            <div style={{ marginTop: '16px', textAlign: 'right' }}>
              <button className="btn-secondary" onClick={() => setSelectedRecord(null)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Create Record Modal */}
      {showAddModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div className="glass-card" style={{ width: '540px', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFF' }}>
                Add New {resourceMap[selectedResource]?.title} Record
              </h3>
              <button className="btn-icon" onClick={() => setShowAddModal(false)}>
                <X size={18} />
              </button>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#9CA3AF', marginBottom: '12px' }}>
              Provide valid JSON body payload to post to endpoint: <code>{resourceMap[selectedResource]?.endpoint}</code>
            </p>
            <textarea
              rows={10}
              value={newPayloadJson}
              onChange={(e) => setNewPayloadJson(e.target.value)}
              style={{ width: '100%', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '16px' }}>
              <button className="btn-secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
              <button className="btn-primary" onClick={handleCreateRecord}>Create Record</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
