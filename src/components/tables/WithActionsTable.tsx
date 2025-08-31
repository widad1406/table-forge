export default function WithActionsTable() {
  return (
    <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-2 font-semibold text-gray-600">User</th>
          <th className="px-4 py-2 font-semibold text-gray-600">Role</th>
          <th className="px-4 py-2 font-semibold text-gray-600">Status</th>
          <th className="px-4 py-2" />
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <tr>
          <td className="px-4 py-2">Ava Williams</td>
          <td className="px-4 py-2">Editor</td>
          <td className="px-4 py-2">
            <span className="inline-flex rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
              Active
            </span>
          </td>
          <td className="px-4 py-2 text-right">
            <button className="rounded-md border px-2 py-1 text-xs hover:bg-gray-100">
              Edit
            </button>
            <button className="ml-2 rounded-md border px-2 py-1 text-xs hover:bg-gray-100 ">
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td className="px-4 py-2">Noah Patel</td>
          <td className="px-4 py-2">Viewer</td>
          <td className="px-4 py-2">
            <span className="inline-flex rounded-full bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-700">
              Invited
            </span>
          </td>
          <td className="px-4 py-2 text-right">
            <button className="rounded-md border px-2 py-1 text-xs hover:bg-gray-100">
              Edit
            </button>
            <button className="ml-2 rounded-md border px-2 py-1 text-xs hover:bg-gray-100">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
