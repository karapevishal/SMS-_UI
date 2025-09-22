import { useState } from 'react';

export interface Resident {
  id: number;
  name: string;
  flatNo: string;
  contact: string;
  email: string;
  role: 'Owner' | 'Tenant';
  photo?: string;
}

export default function CommunityDetails() {
  const residents: Resident[] = [
    { id: 1, name: 'Vishal Karape', flatNo: '101', contact: '+91 98765 43210', email: 'vishal@society.com', role: 'Owner', photo: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Anita Sharma', flatNo: '102', contact: '+91 91234 56789', email: 'anita@society.com', role: 'Owner', photo: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Ramesh Gupta', flatNo: '103', contact: '+91 99887 66554', email: 'ramesh@society.com', role: 'Tenant', photo: 'https://i.pravatar.cc/150?img=3' },
    { id: 4, name: 'Sonal Patil', flatNo: '104', contact: '+91 98765 44321', email: 'sonal@society.com', role: 'Owner', photo: 'https://i.pravatar.cc/150?img=4' },
    { id: 5, name: 'Rahul Mehta', flatNo: '105', contact: '+91 91234 12345', email: 'rahul@society.com', role: 'Tenant', photo: 'https://i.pravatar.cc/150?img=5' },
  ];

  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Community Residents</h2>

      <div className="space-y-6">
        {residents.map((resident) => {
          const isExpanded = expandedId === resident.id;
          return (
            <div
              key={resident.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden w-full cursor-pointer"
              onClick={() => toggleExpand(resident.id)}
            >
              {/* Header: Photo + Name + Flat + Role */}
              <div className="flex items-center p-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                <img
                  src={resident.photo}
                  alt={resident.name}
                  className="w-16 h-16 rounded-full border-2 border-white shadow-md object-cover"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-white">{resident.name}</h3>
                  <p className="text-white text-sm">Flat: {resident.flatNo}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  resident.role === 'Owner' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
                }`}>
                  {resident.role}
                </span>
              </div>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="p-4 bg-gray-50 space-y-2">
                  <p><span className="font-semibold">Contact:</span> {resident.contact}</p>
                  <p><span className="font-semibold">Email:</span> {resident.email}</p>
                  <p><span className="font-semibold">Additional Notes:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p><span className="font-semibold">Parking Info:</span> 2-Wheeler: 1 slot, 4-Wheeler: 1 slot</p>
                  <p><span className="font-semibold">Charges:</span> Common Area ₹2000, Water ₹500, Cleaning ₹300</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
