export default function StripedRowsTable() {
  return (
    <table className="min-w-full divide-y divide-border text-left text-sm">
      <thead className="bg-muted">
        <tr>
          <th className="px-4 py-2 font-semibold text-muted-foreground">
            Project
          </th>
          <th className="px-4 py-2 font-semibold text-muted-foreground">
            Status
          </th>
          <th className="px-4 py-2 font-semibold text-muted-foreground">
            Owner
          </th>
          <th className="px-4 py-2 font-semibold text-muted-foreground">Due</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-border">
        <tr className="odd:bg-none even:bg-muted">
          <td className="px-4 py-2">Homepage Redesign</td>
          <td className="px-4 py-2">
            <span className="inline-flex rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-500">
              Complete
            </span>
          </td>
          <td className="px-4 py-2">Alex</td>
          <td className="px-4 py-2">May 10</td>
        </tr>
        <tr className="odd:bg-none even:bg-muted">
          <td className="px-4 py-2">Mobile App</td>
          <td className="px-4 py-2">
            <span className="inline-flex rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-700">
              In Progress
            </span>
          </td>
          <td className="px-4 py-2">Sam</td>
          <td className="px-4 py-2">Jun 01</td>
        </tr>
        <tr className="odd:bg-none even:bg-muted">
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
