import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setSelected } from '../slices/maintenanceSlice';
import { useAppDispatch } from '../store/hooks';

export interface Maintenance {
  id: number;
  month: string;
  amount: number;
  status: 'Paid' | 'Pending';
  dueDate: string;
  remarks?: string;
}

export default function MaintenanceHistory() {
  const dispatch = useAppDispatch();

  // Dummy data
  const dummyData: Maintenance[] = [
    { id: 1, month: 'January 2025', amount: 1500, status: 'Paid', dueDate: '2025-01-15', remarks: 'Paid on time' },
    { id: 2, month: 'February 2025', amount: 1500, status: 'Pending', dueDate: '2025-02-15', remarks: 'Payment pending' },
    { id: 3, month: 'March 2025', amount: 1500, status: 'Paid', dueDate: '2025-03-15', remarks: 'Paid on 14th March' },
    { id: 4, month: 'April 2025', amount: 1500, status: 'Pending', dueDate: '2025-04-15', remarks: 'Pending due to holiday' },
  ];

  // Load dummy data into Redux store on component mount (optional)
  useEffect(() => {
    dummyData.forEach((m) => dispatch(setSelected(m)));
  }, [dispatch]);

  return (
    <div className="p-6 overflow-y-auto h-full bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-gray-700">Maintenance History</h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyData.map((m: Maintenance) => (
          <li
            key={m.id}
            onClick={() => dispatch(setSelected(m))}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all cursor-pointer border border-gray-200"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-lg font-semibold text-gray-800">{m.month}</span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  m.status === 'Paid' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                }`}
              >
                {m.status}
              </span>
            </div>

            <div className="space-y-1">
              <p className="text-gray-600">
                <span className="font-medium">Amount:</span> ₹ {m.amount}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Due Date:</span> {m.dueDate}
              </p>
              {m.remarks && (
                <p className="text-gray-500 italic text-sm">{m.remarks}</p>
              )}
            </div>

            <Link
              to={`/dashboard/MaintenanceHistory/${m.id}`}
              className="mt-4 inline-block text-blue-600 font-medium hover:underline"
            >
              View Details →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
