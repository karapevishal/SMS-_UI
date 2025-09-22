import { useParams } from 'react-router-dom';

export interface Maintenance {
  id: number;
  month: string;
  amount: number;
  status: 'Paid' | 'Pending';
  dueDate: string;
  remarks?: string;
  paymentMode?: string;
  collectedBy?: string;
  notes?: string;
  parkingTwoWheeler?: number;
  parkingFourWheeler?: number;
  commonAreaCharges?: number;
  cleaningCharges?: number;
  waterCharges?: number;
  cidcoCharges?: number;
}

export default function MaintenanceDetails() {
  const { id } = useParams();

  // Dummy data
  const dummyData: Maintenance[] = [
    {
      id: 1,
      month: 'January 2025',
      amount: 1500,
      status: 'Paid',
      dueDate: '2025-01-15',
      remarks: 'Paid on time',
      paymentMode: 'UPI',
      collectedBy: 'Mr. Sharma',
      notes: 'No issues',
      parkingTwoWheeler: 200,
      parkingFourWheeler: 400,
      commonAreaCharges: 500,
      cleaningCharges: 150,
      waterCharges: 150,
      cidcoCharges: 100,
    },
    {
      id: 2,
      month: 'February 2025',
      amount: 1500,
      status: 'Pending',
      dueDate: '2025-02-15',
      remarks: 'Payment pending',
      paymentMode: 'Cash',
      collectedBy: 'Mr. Sharma',
      notes: 'Reminder sent',
      parkingTwoWheeler: 200,
      parkingFourWheeler: 400,
      commonAreaCharges: 500,
      cleaningCharges: 150,
      waterCharges: 150,
      cidcoCharges: 100,
    },
  ];

  const maintenance = dummyData.find((m) => m.id === Number(id));

  if (!maintenance)
    return <p className="p-6 text-gray-500">Maintenance record not found.</p>;

  return (
    <div className="p-6 h-full overflow-y-auto bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
        {/* Gradient Header */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-t-2xl animate-gradient-x"></div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-2">
            {maintenance.month} Maintenance
          </h2>
          <span
            className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-6 ${
              maintenance.status === 'Paid'
                ? 'bg-green-200 text-green-800'
                : 'bg-red-200 text-red-800'
            }`}
          >
            {maintenance.status}
          </span>

          {/* Basic Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 text-gray-700">
            <div>
              <p className="font-medium">Amount:</p>
              <p className="text-lg">₹ {maintenance.amount}</p>
            </div>
            <div>
              <p className="font-medium">Due Date:</p>
              <p className="text-lg">{maintenance.dueDate}</p>
            </div>
            <div>
              <p className="font-medium">Payment Mode:</p>
              <p className="text-lg">{maintenance.paymentMode || 'N/A'}</p>
            </div>
            <div>
              <p className="font-medium">Collected By:</p>
              <p className="text-lg">{maintenance.collectedBy || 'N/A'}</p>
            </div>
          </div>

          {/* Charges Section */}
          <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
            Charges Breakdown
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
            <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 p-4 rounded-xl shadow-md">
              <p className="font-medium">Parking (2 Wheeler)</p>
              <p className="text-lg">₹ {maintenance.parkingTwoWheeler || 0}</p>
            </div>
            <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 p-4 rounded-xl shadow-md">
              <p className="font-medium">Parking (4 Wheeler)</p>
              <p className="text-lg">₹ {maintenance.parkingFourWheeler || 0}</p>
            </div>
            <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 p-4 rounded-xl shadow-md">
              <p className="font-medium">Common Area Charges</p>
              <p className="text-lg">₹ {maintenance.commonAreaCharges || 0}</p>
            </div>
            <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 p-4 rounded-xl shadow-md">
              <p className="font-medium">Cleaning Charges</p>
              <p className="text-lg">₹ {maintenance.cleaningCharges || 0}</p>
            </div>
            <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 p-4 rounded-xl shadow-md">
              <p className="font-medium">Water Charges</p>
              <p className="text-lg">₹ {maintenance.waterCharges || 0}</p>
            </div>
            <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 p-4 rounded-xl shadow-md">
              <p className="font-medium">CIDCO Charges</p>
              <p className="text-lg">₹ {maintenance.cidcoCharges || 0}</p>
            </div>
          </div>

          {/* Remarks and Notes */}
          {maintenance.remarks && (
            <div className="mt-6">
              <p className="font-medium">Remarks:</p>
              <p className="text-gray-600">{maintenance.remarks}</p>
            </div>
          )}

          {maintenance.notes && (
            <div className="mt-4">
              <p className="font-medium">Notes:</p>
              <p className="text-gray-600">{maintenance.notes}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
