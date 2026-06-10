import { NextResponse } from 'next/server';

export async function middleware(request) {
  const url = request.nextUrl.clone();
  
  // 🎯 1. FILTER JALUR: Hanya periksa halaman penayang video ([id].js)
  // Biar halaman admin, bulk share, dan homepage utama tidak ikut ter-cloak
  if (
    url.pathname === '/' || 
    url.pathname.startsWith('/_next') || 
    url.pathname.startsWith('/admin') || 
    url.pathname.startsWith('/bulk') ||
    url.pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const userAgent = request.headers.get('user-agent') || '';
  const userAgentLower = userAgent.toLowerCase();

  // 🎯 2. BOT LIST (Daftar radar robot scanner Meta/Facebook & Crawler Sosmed)
  const botList = [
    'facebookexternalhit', 'facebookplatform', 'fb_iab', 'fb4a', 'fbios',
    'googlebot', 'bingbot', 'yandexbot', 'baiduspider', 'twitterbot',
    'telegrambot', 'discordbot', 'slackbot', 'bot', 'crawler', 'spider'
  ];

  const isBot = botList.some(bot => userAgentLower.includes(bot));

  // 🎯 3. PROXY DETECTION (Menyaring pengguna VPN / Proxy server)
  const via = request.headers.get('via');
  const isProxy = via || request.headers.get('forwarded') || request.headers.get('x-forwarded-for')?.includes(',');

  // 🎯 EKSEKUSI PENYAMARAN GAIB
  if (isBot || isProxy) {
    // URL di browser tetap terkunci (Misal: cdnviduy.site/abcde), tapi isinya ditukar jadi artikel berita formal
    url.pathname = '/artikel-kamuflase'; 
    return NextResponse.rewrite(url);
  }

  // Jika lolos (Terdeteksi Manusia Asli dari browser biasa), tampilkan video player + Social Bar Adsterra
  return NextResponse.next();
}
