import '../styles/globals.css'; // Adjusted import path
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}