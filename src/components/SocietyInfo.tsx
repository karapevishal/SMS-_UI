export default function SocietyInfo() {
  // Dummy committee members data
  const committeeMembers = [
    { name: 'Vishal Karape', designation: 'President', flatNo: '101', contact: '+91 98765 43210', email: 'vishal@society.com' },
    { name: 'Anita Sharma', designation: 'Secretary', flatNo: '102', contact: '+91 91234 56789', email: 'anita@society.com' },
    { name: 'Ramesh Gupta', designation: 'Treasurer', flatNo: '103', contact: '+91 99887 66554', email: 'ramesh@society.com' },
    { name: 'Sonal Patil', designation: 'Member', flatNo: '104', contact: '+91 98765 44321', email: 'sonal@society.com' },
  ];

  return (
    <div className="flex-1 overflow-y-auto h-full bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
      {/* Hero Section */}
      <div className="relative h-48 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 flex items-center justify-center text-white shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold">Silver Star Society</h1>

        {/* Logo/Profile Circle */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 border-4 border-white shadow-lg flex items-center justify-center text-lg font-bold">
            Logo
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 pt-20 pb-12 space-y-12">
        {/* General Info & Facilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: General Info */}
          <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">General Information</h2>
            <p><span className="font-semibold">👤 President:</span> Vishal Karape</p>
            <p><span className="font-semibold">📍 Address:</span> 123 Star Lane, Pune, Maharashtra</p>
            <p><span className="font-semibold">👥 Members:</span> 120</p>
            <p><span className="font-semibold">📞 Contact:</span> +91 98765 43210</p>
            <p><span className="font-semibold">📧 Email:</span> silverstar@society.com</p>
          </div>

          {/* Right: Facilities */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Facilities</h2>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <div className="p-4 rounded-lg bg-gradient-to-r from-pink-200 to-pink-300 shadow hover:shadow-lg transition">🏊 Swimming Pool</div>
              <div className="p-4 rounded-lg bg-gradient-to-r from-purple-200 to-purple-300 shadow hover:shadow-lg transition">🏋 Gym</div>
              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-200 to-blue-300 shadow hover:shadow-lg transition">🌳 Garden</div>
              <div className="p-4 rounded-lg bg-gradient-to-r from-green-200 to-green-300 shadow hover:shadow-lg transition">🏠 Clubhouse</div>
            </div>
          </div>
        </div>

        {/* Committee Members */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Committee Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committeeMembers.map((member, idx) => (
              <div key={idx} className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 p-4 rounded-xl shadow-md hover:shadow-lg transition flex flex-col space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <p><span className="font-medium">Designation:</span> {member.designation}</p>
                <p><span className="font-medium">Flat No:</span> {member.flatNo}</p>
                <p><span className="font-medium">Contact:</span> {member.contact}</p>
                <p><span className="font-medium">Email:</span> {member.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
