export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-2">Total Users</h3>
        <p className="text-4xl font-bold text-blue-600">120</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-2">Source Codes</h3>
        <p className="text-4xl font-bold text-green-600">58</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-2">Visitors Today</h3>
        <p className="text-4xl font-bold text-purple-600">842</p>
      </div>
    </div>
  );
}
