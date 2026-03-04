'use client';
import React from 'react';

export default function BoeyPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fdfbf7', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: '#333', marginBottom: '20px', fontSize: '2.5rem' }}>بوئے بہشت</h1>
      <div style={{ width: '100%', maxWidth: '850px', border: '1px solid gray', borderRadius: '10px', overflow: 'hidden' }}>
        <iframe 
          src="https://heyzine.com/flip-book/4e3fc869cf.html" 
          style={{ width: '100%', height: '500px', border: 'none' }} 
        />
      </div>
    </div>
  );
}