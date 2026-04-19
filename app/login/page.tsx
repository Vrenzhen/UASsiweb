'use client'; // Wajib ditambahkan untuk interaksi klik

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  // State untuk menyimpan tab mana yang sedang aktif (user atau admin)
  const [activeTab, setActiveTab] = useState<'user' | 'admin'>('user');
  
  // Router untuk berpindah halaman
  const router = useRouter();

  // Fungsi saat tombol login ditekan
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah halaman reload
    
    // Arahkan ke halaman yang sesuai berdasarkan tab yang dipilih
    if (activeTab === 'user') {
      router.push('/user'); // Ke halaman tracking user
    } else {
      router.push('/dashboard'); // Ke halaman admin
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05050A] relative overflow-hidden">
      
      {/* Gambar Background Latar */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-[#05050A]/60 to-transparent"></div>

      {/* Kad Log Masuk */}
      <div className="relative z-10 w-full max-w-md">
        
        {/* Logo & Tajuk */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 bg-[#D977F9]/10 border border-[#D977F9]/30 rounded-lg flex items-center justify-center mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D977F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 14L6 18H18L20 14M4 14L2 10H22L20 14M4 14H20" />
              <path d="M7 10V6H17V10" />
              <path d="M10 6V4H14V6" />
              <path d="M2 21C2 21 3.5 19.5 6 19.5C8.5 19.5 10 21 12 21C14 21 15.5 19.5 18 19.5C20.5 19.5 22 21 22 21" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-widest uppercase">Sea Parcel</h1>
          <p className="text-[#00E5FF] text-[10px] font-bold tracking-[0.2em] mt-2">EXPRESS SHIPPING PORTAL</p>
        </div>

        {/* Borang Log Masuk */}
        <div className="bg-[#11131A] p-8 rounded-lg border border-gray-800 shadow-2xl">
          
          {/* Tab Pengguna / Admin (BISA DIKLIK) */}
          <div className="flex mb-8 rounded bg-black overflow-hidden border border-gray-800">
            <button 
              type="button"
              onClick={() => setActiveTab('user')}
              className={`flex-1 py-3 text-xs font-bold tracking-widest transition-colors ${activeTab === 'user' ? 'bg-[#D977F9] text-[#250F2D]' : 'text-gray-500 hover:text-gray-300'}`}
            >
              USER
            </button>
            <button 
              type="button"
              onClick={() => setActiveTab('admin')}
              className={`flex-1 py-3 text-xs font-bold tracking-widest transition-colors ${activeTab === 'admin' ? 'bg-[#D977F9] text-[#250F2D]' : 'text-gray-500 hover:text-gray-300'}`}
            >
              ADMIN
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-white text-[10px] font-bold mb-2 tracking-widest uppercase">
                {activeTab === 'admin' ? 'Admin ID' : 'Username'}
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-gray-500">👤</span>
                <input required type="text" placeholder="ENTER CREDENTIALS" className="w-full bg-[#1A1C24] border border-transparent text-white text-xs p-4 pl-10 rounded focus:border-[#D977F9] focus:outline-none placeholder-gray-600 transition" />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-white text-[10px] font-bold tracking-widest uppercase">Password</label>
                <a href="#" className="text-gray-500 text-[10px] hover:text-[#D977F9]">FORGOT KEY?</a>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-3 text-gray-500">🔒</span>
                <input required type="password" placeholder="••••••••" className="w-full bg-[#1A1C24] border border-transparent text-white text-xs p-4 pl-10 rounded focus:border-[#D977F9] focus:outline-none placeholder-gray-600 transition" />
              </div>
            </div>

            <button type="submit" className="w-full bg-[#D977F9] text-[#250F2D] font-bold text-xs tracking-widest py-4 rounded hover:bg-[#c75be9] active:scale-[0.98] transition mt-4">
              ACCESS SYSTEM
            </button>
          </form>

          <div className="mt-8 text-center border-t border-gray-800 pt-6">
            <p className="text-[#00E5FF] text-[9px] font-bold tracking-[0.1em] flex items-center justify-center gap-2 mb-2">
              <span className="w-2 h-2 bg-[#00E5FF] rounded-full animate-pulse"></span> SECURE CONNECTION ESTABLISHED
            </p>
            <p className="text-gray-600 text-[9px] tracking-[0.15em] uppercase">ENCRYPTION: AES-256 &nbsp;&nbsp;|&nbsp;&nbsp; PORT: 443 &nbsp;&nbsp;|&nbsp;&nbsp; NODE: MAR-72-B</p>
          </div>
        </div>
      </div>
    </div>
  );
}