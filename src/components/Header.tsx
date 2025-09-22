import UserInformation from "./UserInformation";

interface Props { toggleSidebar: () => void }

export default function Header({ toggleSidebar }: Props) {
  const user = {
    name: 'Vishal Karape',
    email: 'vishal@society.com',
    role: 'President',
    contact: '+91 98765 43210',
    flatNo: '101',
    photo: 'https://i.pravatar.cc/150?img=1',
  };
  return (
    <header className='flex items-center justify-between bg-white shadow px-4 py-2'>
      <div className='flex items-center space-x-4'>
        <button onClick={toggleSidebar} className='text-2xl'>☰</button>
        <div className='font-bold text-lg'>Society Management System</div>
      </div>
      <UserInformation user={user} />
    </header>
  )
}
