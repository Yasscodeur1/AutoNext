"use client";

import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css'; // Importez le fichier CSS
// import { App } from './App'; // Assurez-vous que votre App.tsx est correct
import { Logo } from '@pmndrs/branding';

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <a href="https://pmnd.rs/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        pmnd.rs
        <br />
        dev collective
      </a>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>ok —</div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>22/12/2022</div>
    </div>
  );
}

export function SceneWithOverlay() {
  const rootRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (rootRef.current) {
      createRoot(rootRef.current).render(
        <>
          <App />
          <Overlay />
          <Logo style={{ position: 'absolute', bottom: 40, left: 40, width: 30 }} />
        </>
      );
    }
  }, []);

  return <div id="root" ref={rootRef} className="container" />;
}