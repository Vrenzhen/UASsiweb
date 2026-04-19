'use client'; // Wajib ditambahkan agar bisa mendeteksi halaman aktif (usePathname)

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname(); // Mengambil URL halaman saat ini

  // Daftar menu navigasi di Sidebar
  const navLinks = [
    { name: 'Home', href: '/dashboard', icon: '🏠' },
    { name: 'Fleet', href: '/dashboard/fleet', icon: '🚢' },
    { name: 'Analytics', href: '/dashboard/analytics', icon: '📊' },
    { name: 'Map', href: '/dashboard/map', icon: '🧭' },
  ];

  return (
    <div className="flex h-screen bg-[#0B0D14] text-white font-sans overflow-hidden">
      
      {/* Sidebar / Bar Sisi */}
      <aside className="w-64 bg-[#05050A] border-r border-gray-900 flex flex-col justify-between z-50">
        <div>
          {/* Logo Papan Pemuka */}
          <div className="h-20 bg-[#D977F9] flex items-center px-6 gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#250F2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 14L6 18H18L20 14M4 14L2 10H22L20 14M4 14H20" />
              <path d="M7 10V6H17V10" />
              <path d="M10 6V4H14V6" />
            </svg>
            <span className="text-xl font-bold text-[#250F2D] tracking-widest uppercase">Sea Parcel</span>
          </div>

          {/* Pautan Navigasi Dinamis */}
          <nav className="p-4 space-y-2 mt-4">
            {navLinks.map((link) => {
              // Mengecek apakah URL saat ini sama dengan link menu
              const isActive = pathname === link.href;

              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`flex items-center gap-4 p-3 rounded text-sm font-semibold transition-all duration-200 border-l-4 ${
                    isActive 
                      ? 'bg-[#11131A] text-white border-[#D977F9]' // Style jika menu sedang AKTIF ditekan
                      : 'text-gray-500 border-transparent hover:text-white hover:bg-[#11131A] hover:border-gray-700' // Style jika TIDAK AKTIF
                  }`}
                >
                  <span className={isActive ? 'text-[#D977F9]' : ''}>{link.icon}</span>
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Profil & Log Keluar */}
        <div className="p-4 border-t border-gray-900">
          <div className="flex items-center gap-3 p-3 mb-2 bg-[#11131A] rounded border border-gray-800">
            <div className="w-8 h-8 bg-[#2C1935] rounded-full flex items-center justify-center text-xs">👤</div>
            <div>
              <p className="text-xs font-bold text-white">Admin</p>
              <p className="text-[10px] text-[#D977F9]">admin access</p>
            </div>
          </div>
          <Link href="/login" className="flex items-center gap-4 text-gray-500 p-3 hover:text-red-400 hover:bg-red-500/10 rounded transition text-sm font-semibold">
            <span>🚪</span> Sign Out
          </Link>
        </div>
      </aside>

      {/* Ruangan Kandungan Utama */}
      <main className="flex-1 overflow-y-auto bg-[#0B0D14]">
        {children}
      </main>
    </div>
  );
}