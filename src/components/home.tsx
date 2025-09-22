const Home = () => {
  const announcements = [
    {
      title: "Water Supply Maintenance",
      desc: "Water supply will be unavailable from 10 AM - 2 PM on 25th Sept due to maintenance.",
      date: "24 Sept 2025",
    },
    {
      title: "Diwali Celebration",
      desc: "Society will organize Diwali celebration on 1st Nov with cultural events and dinner.",
      date: "20 Sept 2025",
    },
    {
      title: "Parking Renewal",
      desc: "Residents are requested to renew parking stickers before 30th Sept.",
      date: "18 Sept 2025",
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto h-full p-6 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
      
     {/* Society Header */}
<div className="relative rounded-xl shadow-lg overflow-hidden h-44 md:h-52 lg:h-56">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center animate-[pulse_6s_ease-in-out_infinite]"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1529429617124-95b109e86b43?auto=format&fit=crop&w=1400&q=80')",
    }}
  ></div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-purple-800/40 to-blue-700/40"></div>

  {/* Ribbon */}
  <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-400 to-blue-400 text-white px-5 py-1.5 rounded-bl-xl shadow-md animate-bounce">
    Silver Star Society
  </div>

  {/* Logo Circle */}
  <div className="absolute bottom-0 left-5 mb-4 w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center text-white text-sm font-bold shadow-xl animate-spin-slow">
    Photo
  </div>

  {/* Welcome Text */}
  <div className="relative z-10 flex flex-col h-full justify-center pl-28">
    <p className="text-white font-bold text-xl drop-shadow-md animate-fade-in">
      Welcome, Vishal Karape
    </p>
    <span className="text-gray-200 text-xs">Your Community, Your Pride 🏢</span>
  </div>
</div>

      {/* Maintenance Info */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
          <h3 className="text-sm text-gray-500">Current Month</h3>
          <p className="text-2xl font-bold text-sky-600 mt-2">₹ 2,500</p>
          <span className="text-xs text-gray-400">Due by 30th Sept</span>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
          <h3 className="text-sm text-gray-500">Total Outstanding</h3>
          <p className="text-2xl font-bold text-red-500 mt-2">₹ 7,500</p>
          <span className="text-xs text-gray-400">As of today</span>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
          <h3 className="text-sm text-gray-500">Last Payment</h3>
          <p className="text-2xl font-bold text-green-500 mt-2">₹ 2,500</p>
          <span className="text-xs text-gray-400">Paid on 1st Sept</span>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
          <h3 className="text-sm text-gray-500">Next Due</h3>
          <p className="text-2xl font-bold text-purple-500 mt-2">₹ 2,500</p>
          <span className="text-xs text-gray-400">Due by 31st Oct</span>
        </div>
      </div>

      {/* Announcements Section */}
      <div className="mt-10 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">📢 General Announcements</h2>
        <ul className="space-y-4">
          {announcements.map((a, idx) => (
            <li
              key={idx}
              className="p-4 rounded-lg border border-gray-200 bg-gradient-to-r from-sky-50 to-indigo-50 hover:shadow-md transition"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-700">{a.title}</h3>
                <span className="text-xs text-gray-500">{a.date}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{a.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
