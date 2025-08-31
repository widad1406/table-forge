export default function StripedRowsTable() {
  return (
    <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-2 font-semibold text-gray-600">Project</th>
          <th className="px-4 py-2 font-semibold text-gray-600">Status</th>
          <th className="px-4 py-2 font-semibold text-gray-600">Owner</th>
          <th className="px-4 py-2 font-semibold text-gray-600">Due</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <tr className="odd:bg-white even:bg-gray-50">
          <td className="px-4 py-2">Homepage Redesign</td>
          <td className="px-4 py-2">
            <span className="inline-flex rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
              Complete
            </span>
          </td>
          <td className="px-4 py-2">Alex</td>
          <td className="px-4 py-2">May 10</td>
        </tr>
        <tr className="odd:bg-white even:bg-gray-50">
          <td className="px-4 py-2">Mobile App</td>
          <td className="px-4 py-2">
            <span className="inline-flex rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-700">
              In Progress
            </span>
          </td>
          <td className="px-4 py-2">Sam</td>
          <td className="px-4 py-2">Jun 01</td>
        </tr>
        <tr className="odd:bg-white even:bg-gray-50">
          <td className="px-4 py-2">Marketing Campaign</td>
          <td className="px-4 py-2">
            <span className="inline-flex rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
              Queued
            </span>
          </td>
          <td className="px-4 py-2">Riley</td>
          <td className="px-4 py-2">Jul 15</td>
        </tr>
      </tbody>
    </table>
  );
}
