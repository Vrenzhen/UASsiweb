import Link from 'next/link';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-[#0B0D14] text-white font-sans overflow-hidden">
      
      {/* Sidebar Khusus User */}
      <aside className="w-64 bg-[#05050A] border-r border-gray-900 flex flex-col justify-between">
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

          {/* Navigasi User */}
          <nav className="p-4 mt-4">
            <Link href="/user" className="flex items-center gap-4 bg-[#1A1C24] text-[#D977F9] p-3 rounded text-xs font-bold tracking-widest transition">
              <span>🏠</span> HOME
            </Link>
          </nav>
        </div>

        {/* Profil & Log Keluar */}
        <div className="p-4 border-t border-gray-900">
          <div className="flex items-center gap-3 p-3 mb-2 bg-[#11131A] rounded border border-gray-800">
            <div className="w-8 h-8 bg-[#1A1C24] rounded-full flex items-center justify-center text-xs text-gray-400">👤</div>
            <div>
              <p className="text-xs font-bold text-white">User</p>
              <p className="text-[10px] text-gray-500">user access</p>
            </div>
          </div>
          <Link href="/login" className="flex items-center gap-4 text-gray-500 p-3 hover:text-red-400 hover:bg-red-500/10 rounded transition text-xs font-bold tracking-widest">
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