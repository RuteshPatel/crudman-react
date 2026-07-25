import React from 'react';
import { CATEGORIES } from '../services/apiCatalog';
import { 
  Terminal, 
  Globe, 
  ShoppingBag,
  BookOpen
} from 'lucide-react';

export default function Header({ 
  activeCategory, 
  setActiveCategory
}) {
  return (
    <header style={{
      height: '70px',
      backgroundColor: '#0C111D',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      {/* Brand / Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, #FF5722 0%, #FF8A65 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(255, 87, 34, 0.4)'
        }}>
          <Terminal size={22} color="#FFFFFF" />
        </div>
        <div>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.5px' }}>
            CRUD<span style={{ color: '#FF5722' }}>Man</span>
          </h1>
          <p style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>Interactive API Platform</p>
        </div>
      </div>

      {/* Category Navigation Tabs */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#161F33',
        padding: '4px',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.06)'
      }}>
        <button
          onClick={() => setActiveCategory(CATEGORIES.GENERAL)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 18px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            backgroundColor: activeCategory === CATEGORIES.GENERAL ? '#FF5722' : 'transparent',
            color: activeCategory === CATEGORIES.GENERAL ? '#FFFFFF' : '#9CA3AF'
          }}
        >
          <Globe size={15} />
          General
        </button>

        <button
          onClick={() => setActiveCategory(CATEGORIES.ECOMMERCE)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 18px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            backgroundColor: activeCategory === CATEGORIES.ECOMMERCE ? '#FF5722' : 'transparent',
            color: activeCategory === CATEGORIES.ECOMMERCE ? '#FFFFFF' : '#9CA3AF'
          }}
        >
          <ShoppingBag size={15} />
          E-Commerce
        </button>

        <button
          onClick={() => setActiveCategory(CATEGORIES.BLOG)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 18px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            backgroundColor: activeCategory === CATEGORIES.BLOG ? '#FF5722' : 'transparent',
            color: activeCategory === CATEGORIES.BLOG ? '#FFFFFF' : '#9CA3AF'
          }}
        >
          <BookOpen size={15} />
          Blog
        </button>
      </div>

      <div style={{ width: '140px' }} />
    </header>
  );
}
