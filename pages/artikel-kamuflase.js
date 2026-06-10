import Head from 'next/head';

export default function ArtikelKamuflase() {
  return (
    <div style={{ backgroundColor: '#ffffff', color: '#333333', fontFamily: 'sans-serif', minHeight: '100vh', padding: '0', margin: '0' }}>
      <Head>
        <title>Pentingnya Menjaga Kesehatan Mata di Era Digital - Tech & Health</title>
        <meta name="description" content="Simak tips dan trik terbaik menjaga kesehatan mata dari paparan radiasi layar gadget setiap hari." />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Header Blog Palsu */}
      <header style={{ borderBottom: '1px solid #eaeaea', padding: '15px 20px', backgroundColor: '#f8f9fa' }}>
        <span style={{ fontWeight: 'bold', color: '#007bff', fontSize: '1.2rem' }}>🌐 PortalSehat Info</span>
      </header>

      {/* Konten Artikel */}
      <main style={{ maxWidth: '700px', margin: '40px auto', padding: '0 20px', lineHeight: '1.7' }}>
        <h1 style={{ fontSize: '1.8rem', color: '#111111', marginBottom: '10px' }}>
          Tips Efektif Menjaga Kesehatan Mata Saat Menatap Layar HP dan PC
        </h1>
        <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '30px' }}>Dipublikasikan oleh: Tim Medis • Juni 2026</p>

        <p>
          Di era digital yang serba cepat ini, penggunaan perangkat elektronik seperti smartphone, tablet, dan komputer sudah menjadi bagian dari aktivitas sehari-hari yang tidak bisa dihindari. Namun, menatap layar dalam durasi yang terlalu lama dapat memicu sindrom kelelahan mata digital (Computer Vision Syndrome).
        </p>

        <h2 style={{ fontSize: '1.3rem', marginTop: '25px', color: '#222222' }}>1. Terapkan Aturan 20-20-20</h2>
        <p>
          Salah satu metode paling efektif yang disarankan oleh para dokter spesialis mata adalah aturan 20-20-20. Setiap kali Anda menatap layar selama 20 menit, alihkan pandangan Anda untuk melihat objek yang berjarak sekitar 20 kaki (6 meter) selama minimal 20 detik. Cara ini terbukti ampuh merelaksasi otot mata yang tegang.
        </p>

        <h2 style={{ fontSize: '1.3rem', marginTop: '25px', color: '#222222' }}>2. Atur Pencahayaan Ruangan dan Gadget</h2>
        <p>
          Pastikan pencahayaan di dalam ruangan Anda seimbang. Hindari menggunakan gadget di dalam ruangan yang gelap gulita karena kontras cahaya yang terlalu tinggi dapat mempercepat kerusakan retina. Manfaatkan juga fitur filter cahaya biru (Blue Light Filter) yang ada pada sistem operasi smartphone Anda.
        </p>

        <p style={{ marginTop: '30px', backgroundColor: '#f1f3f5', padding: '15px', borderRadius: '8px', fontStyle: 'italic', color: '#495057' }}>
          Kesimpulan: Menjaga kesehatan mata sejak dini adalah investasi jangka panjang yang sangat berharga. Mulailah membatasi waktu layar demi kenyamanan penglihatan Anda di masa depan.
        </p>
      </main>

      <footer style={{ textAlign: 'center', padding: '20px', borderTop: '1px solid #eaeaea', color: '#999', fontSize: '0.8rem', marginTop: '60px' }}>
        &copy; 2026 PortalSehat Info. Hak Cipta Dilindungi Undang-Undang.
      </footer>
    </div>
  );
}
