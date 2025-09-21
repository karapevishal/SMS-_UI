
interface Props { toggleSidebar: () => void }

export default function Header({ toggleSidebar }: Props) {
  return (
    <header className='flex items-center justify-between bg-white shadow px-4 py-2'>
      <div className='flex items-center space-x-4'>
        <button onClick={toggleSidebar} className='text-2xl'>☰</button>
        <div className='font-bold text-lg'>Society Management System</div>
      </div>
      <div className='text-2xl'>👤</div>
    </header>
  )
}
