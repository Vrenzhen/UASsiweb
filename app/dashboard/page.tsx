export default function AdminDashboard() {
  // Data simulasi untuk jadual
  const vessels = [
    { id: 'VS001', name: 'OCEAN NAVIGATOR', status: 'En Route', statusColor: 'text-[#00E5FF] border-[#00E5FF]', route: 'Jakarta → Singapore', eta: '2026-04-19 14:30' },
    { id: 'VS002', name: 'MARITIME EXPLORER', status: 'In Port', statusColor: 'text-green-400 border-green-400', route: 'Surabaya Port', eta: '-' },
    { id: 'VS003', name: 'PACIFIC VOYAGER', status: 'Delayed', statusColor: 'text-red-400 border-red-400', route: 'Manila → Jakarta', eta: '2026-04-22 16:45' },
    { id: 'VS004', name: 'STELLAR CARRIER', status: 'Maintenance', statusColor: 'text-orange-400 border-orange-400', route: 'Tanjung Priok Port', eta: '-' },
    { id: 'VS005', name: 'GLOBAL PIONEER', status: 'En Route', statusColor: 'text-[#00E5FF] border-[#00E5FF]', route: 'Hong Kong → Jakarta', eta: '2026-04-20 11:20' },
  ];

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
        <p className="text-sm text-gray-400">Fleet statistics and vessel monitoring</p>
      </div>

      {/* Kad Statistik */}
      <div className="grid grid-cols-5 gap-6 mb-10">
        {[
          { title: 'TOTAL VESSELS', value: '5', color: 'text-[#D977F9]', icon: '🚢' },
          { title: 'EN ROUTE', value: '2', color: 'text-[#00E5FF]', icon: '🧭' },
          { title: 'IN PORT', value: '1', color: 'text-green-400', icon: '⚓' },
          { title: 'DELAYED', value: '1', color: 'text-red-400', icon: '⚠️' },
          { title: 'MAINTENANCE', value: '1', color: 'text-orange-400', icon: '🔧' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-[#11131A] p-6 rounded-lg border border-gray-900 shadow-lg relative overflow-hidden">
            <h3 className={`text-[10px] font-bold tracking-widest uppercase mb-4 ${stat.color}`}>{stat.title}</h3>
            <p className="text-4xl font-bold text-white">{stat.value}</p>
            <div className={`absolute top-6 right-6 opacity-50 ${stat.color} text-xl`}>{stat.icon}</div>
          </div>
        ))}
      </div>

      {/* Jadual Senarai Kapal */}
      <div className="bg-[#11131A] rounded-lg border border-gray-900 shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-900">
          <h2 className="text-lg font-bold text-white">Vessel List</h2>
          <p className="text-xs text-gray-500">Current fleet status and routes</p>
        </div>
        
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#0A0C10] text-[10px] text-gray-500 uppercase tracking-widest">
              <th className="p-4 font-bold">VESSEL ID</th>
              <th className="p-4 font-bold">NAME</th>
              <th className="p-4 font-bold">STATUS</th>
              <th className="p-4 font-bold">ROUTE</th>
              <th className="p-4 font-bold">ETA</th>
            </tr>
          </thead>
          <tbody className="text-xs text-gray-300">
            {vessels.map((vessel, idx) => (
              <tr key={idx} className="border-b border-gray-900 hover:bg-[#1A1C24] transition">
                <td className="p-4 font-mono text-[#D977F9]">{vessel.id}</td>
                <td className="p-4 font-bold text-white">{vessel.name}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] border bg-black/50 ${vessel.statusColor}`}>
                    ● {vessel.status}
                  </span>
                </td>
                <td className="p-4 text-gray-400">{vessel.route}</td>
                <td className="p-4 font-mono text-gray-500">{vessel.eta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}