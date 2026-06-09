import { useEffect } from 'react';
import Script from 'next/script';

export default function AdsterraGacor() {
  // LINK DIRECT LINK BARU KAMU
  const adsterraDirectLink = "https://northseize.com/ai/28748898/index.php";

  useEffect(() => {
    // Jeda 2 detik agar iklan popunder sempat loading (double cuan)
    const timer = setTimeout(() => {
      window.location.href = adsterraDirectLink;
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ 
      backgroundColor: '#000', 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      color: '#fff',
      fontFamily: 'sans-serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      
      {/* SCRIPT IKLAN ADSTERRA (Opsional: Tetep pasang biar dapet double profit) */}
      <Script 
        src="https://pl28763278.effectivegatecpm.com/ee/04/09/ee040951564d0118f9c97849ba692abb.js" 
        strategy="afterInteractive" 
      />

      <div className="loader"></div>
      
      <h2 style={{ marginTop: '20px', fontSize: '1.2rem', fontWeight: 'bold' }}>
        Memverifikasi Link Aman...
      </h2>
      <p style={{ color: '#888', fontSize: '0.9rem', maxWidth: '300px' }}>
        Tunggu sebentar, sistem sedang mengalihkan Anda ke server tujuan.
      </p>
      
      <p style={{ color: '#222', fontSize: '0.7rem', marginTop: '50px' }}>
        Ref-ID: ADST-GACOR-2026
      </p>

      <style jsx>{`
        .loader {
          border: 4px solid #111;
          border-top: 4px solid #00ff00; /* Warna hijau neon biar beda sama Shopee */
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
