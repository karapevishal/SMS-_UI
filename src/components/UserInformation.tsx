import { useState } from 'react';

interface UserInfo {
  name: string;
  email: string;
  role: string;
  contact: string;
  flatNo: string;
  photo?: string;
}

interface UserInformationProps {
  user: UserInfo;
}

export default function UserInformation({ user }: UserInformationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      {/* User Icon in Header */}
      <div className="relative">
        <img
          src={user.photo || 'https://i.pravatar.cc/150?img=12'}
          alt={user.name}
          className="w-10 h-10 rounded-full cursor-pointer border-2 border-white shadow-md"
          onClick={toggleModal}
        />
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
          onClick={toggleModal}
        >
          {/* Modal Content */}
          <div
            className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 p-6 relative"
            onClick={(e) => e.stopPropagation()} // prevent closing on content click
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              onClick={toggleModal}
            >
              ✕
            </button>

            {/* User Info */}
            <div className="flex flex-col items-center space-y-4">
              <img
                src={user.photo || 'https://i.pravatar.cc/150?img=12'}
                alt={user.name}
                className="w-24 h-24 rounded-full border-4 border-blue-400 shadow-lg object-cover"
              />
              <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
              <p className="text-gray-600">{user.role}</p>

              <div className="w-full mt-4 space-y-2">
                <p><span className="font-semibold">Email:</span> {user.email}</p>
                <p><span className="font-semibold">Contact:</span> {user.contact}</p>
                <p><span className="font-semibold">Flat No:</span> {user.flatNo}</p>
              </div>

              <button
                className="mt-4 w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg hover:opacity-90 transition"
                onClick={() => alert('Logout clicked')}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
