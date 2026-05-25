import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="flex flex-col bg-[#05050A] text-white font-mono min-h-screen selection:bg-[#D977F9]/30">
      
      {/* ================= HEADER SECTION ================= */}
      <section className="pt-24 pb-16 flex flex-col items-center text-center px-16 relative">
        {/* Glow Background */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D977F9]/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="text-[#D977F9] mb-4 flex items-center justify-center">
            <span className="text-3xl font-black">{'>_'}</span>
          </div>
          <h1 className="text-[56px] font-black leading-[1.1] tracking-tighter uppercase mb-6">
            COMMS <span className="text-[#D977F9] drop-shadow-[0_0_15px_rgba(217,119,249,0.5)]">UPLINK</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
            Establish a secure connection with our command center. All transmissions are end-to-end encrypted.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT GRID ================= */}
      <section className="px-16 pb-32 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* LEFT: TERMINAL FORM */}
        <div className="bg-[#0A0C12] border border-[#2C1935] rounded-xl flex flex-col overflow-hidden shadow-2xl">
          {/* Terminal Window Header */}
          <div className="bg-[#11131A] border-b border-[#2C1935] p-4 flex items-center gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-[10px] text-gray-500 font-bold tracking-widest">
              SEAPARCEL_HQ_TERMINAL.EXE
            </span>
          </div>

          {/* Terminal Body */}
          <form className="p-8 flex flex-col gap-6">
            
            {/* Input 1: User */}
            <div>
              <label className="flex items-center gap-2 text-[#D977F9] text-xs font-bold tracking-widest mb-3 uppercase">
                <span>{'>'}</span> IDENTIFY_USER
              </label>
              <input 
                type="text" 
                placeholder="Enter your designation..." 
                className="w-full bg-[#11131A] border border-gray-800 text-white text-xs p-4 rounded focus:border-[#D977F9] focus:outline-none placeholder-gray-600 transition"
              />
            </div>

            {/* Input 2: Email */}
            <div>
              <label className="flex items-center gap-2 text-[#D977F9] text-xs font-bold tracking-widest mb-3 uppercase">
                <span>{'>'}</span> RETURN_ADDRESS
              </label>
              <input 
                type="email" 
                placeholder="comm_link@domain.com" 
                className="w-full bg-[#11131A] border border-gray-800 text-white text-xs p-4 rounded focus:border-[#D977F9] focus:outline-none placeholder-gray-600 transition"
              />
            </div>

            {/* Input 3: Message */}
            <div>
              <label className="flex items-center gap-2 text-[#D977F9] text-xs font-bold tracking-widest mb-3 uppercase">
                <span>{'>'}</span> PAYLOAD_DATA
              </label>
              <textarea 
                rows={4}
                placeholder="Input your transmission here..." 
                className="w-full bg-[#11131A] border border-gray-800 text-white text-xs p-4 rounded focus:border-[#D977F9] focus:outline-none placeholder-gray-600 transition resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="button" 
              className="w-full mt-2 bg-[#D977F9] text-[#250F2D] font-bold text-xs tracking-widest py-4 rounded hover:bg-[#c75be9] active:scale-[0.98] transition flex justify-center items-center gap-3 shadow-[0_0_15px_rgba(217,119,249,0.3)]"
            >
              TRANSMIT SECURELY 
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </form>
        </div>

        {/* RIGHT: INFO & MAP */}
        <div className="flex flex-col gap-6">
          
          {/* Map Image Card */}
          <div className="bg-[#11131A] border border-[#2C1935] rounded-xl h-[220px] relative overflow-hidden group">
            {/* Dark Purple Map Overlay Image */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
              alt="Global Map Node" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-[#D977F9] mix-blend-multiply opacity-40"></div>
            
            {/* HQ Located Badge */}
            <div className="absolute bottom-4 left-4 bg-[#0A0C12] border border-[#D977F9]/50 px-3 py-1.5 rounded flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#D977F9] rounded-full animate-pulse"></span>
              <span className="text-[9px] font-bold text-[#D977F9] tracking-widest uppercase">HQ LOCATED</span>
            </div>
          </div>

          {/* 2-Column Info Cards */}
          <div className="grid grid-cols-2 gap-6">
            {/* Global Command */}
            <div className="bg-[#0A0C12]/80 border border-[#2C1935] p-6 rounded-xl hover:border-[#D977F9]/50 transition-colors">
              <div className="text-[#D977F9] mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="text-[13px] font-bold tracking-widest text-white mb-2">Global Command</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Sector 7, Neo-Jakarta<br/>Pacific Rim Hub
              </p>
            </div>

            {/* Direct Line */}
            <div className="bg-[#0A0C12]/80 border border-[#2C1935] p-6 rounded-xl hover:border-[#D977F9]/50 transition-colors">
              <div className="text-[#D977F9] mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3 className="text-[13px] font-bold tracking-widest text-white mb-2">Direct Line</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                +62 (800) 555-CYBER<br/>24/7 Ops Center
              </p>
            </div>
          </div>

          {/* Encrypted Mail Full Width Card */}
          <div className="bg-[#0A0C12]/80 border border-[#2C1935] p-6 rounded-xl hover:border-[#D977F9]/50 transition-colors">
            <div className="text-[#D977F9] mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <h3 className="text-[13px] font-bold tracking-widest text-white mb-2">Encrypted Mail</h3>
            <p className="text-[11px] text-gray-500">
              comm@seaparcel.network
            </p>
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#05050A] pt-16 pb-12 px-16 border-t border-gray-900 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D977F9" strokeWidth="2">
                <path d="M4 14L6 18H18L20 14M4 14L2 10H22L20 14M4 14H20" />
                <path d="M7 10V6H17V10" />
                <path d="M10 6V4H14V6" />
              </svg>
              <span className="text-lg font-bold tracking-widest text-white">SEA PARCEL</span>
            </div>
            <p className="text-gray-500 text-[11px] leading-relaxed mb-4">
              © 2026 Sea Parcel. All rights reserved.
            </p>
            <p className="text-gray-500 text-[11px] leading-relaxed">
              PrimeLog Fleet System
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-[11px] font-bold tracking-widest text-white mb-6 uppercase">QUICK LINKS</h5>
            <ul className="text-gray-500 text-[11px] space-y-4">
              <li><Link href="/" className="hover:text-[#D977F9] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#D977F9] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#D977F9] transition-colors">Our Services</Link></li>
              <li><Link href="/contact" className="hover:text-[#D977F9] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-[11px] font-bold tracking-widest text-white mb-6 uppercase">SERVICES</h5>
            <ul className="text-gray-500 text-[11px] space-y-4">
              <li>Sea Parcel Economy</li>
              <li>Sea Parcel Standard</li>
              <li>Sea Parcel Heavy</li>
              <li>Sea Parcel Express</li>
              <li>Sea Parcel Premium</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-[11px] font-bold tracking-widest text-white mb-6 uppercase">CONTACT</h5>
            <ul className="text-gray-500 text-[11px] space-y-4">
              <li className="flex gap-3">
                <span className="text-[#D977F9]">📍</span> 
                <span>Pelabuhan Tanjung Priok,<br/>Jakarta Utara, Indonesia</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D977F9]">📞</span> 
                <span>+62 21 4366-7890</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D977F9]">📧</span> 
                <span>info@seaparcel.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Slogan */}
        <div className="text-center pt-8">
           <p className="text-[9px] font-bold tracking-[0.3em] text-gray-700 uppercase">
             NAVIGATING THE FUTURE - PRIMELOG FLEET SYSTEM
           </p>
        </div>
      </footer>
    </main>
  );
}