// src/components/AfterSubmit.tsx
import { useEffect } from 'react';

export default function AfterSubmit() {
  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.get('w3f') === 'ok') {
      // 1) navigue vers la route hash
      window.location.hash = '#/merci';
      // 2) nettoie l'URL (supprime ?w3f=ok)
      url.search = '';
      url.hash = '#/merci';
      window.history.replaceState({}, '', url.toString());
    }
  }, []);
  return null;
}
