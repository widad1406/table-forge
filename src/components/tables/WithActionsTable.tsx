export default function WithActionsTable() {
  return (
    <table className="min-w-full divide-y divide-border text-left text-sm">
      <thead className="bg-muted">
        <tr>
          <th className="px-4 py-2 font-semibold text-muted-foreground">
            User
          </th>
          <th className="px-4 py-2 font-semibold text-muted-foreground">
            Role
          </th>
          <th className="px-4 py-2 font-semibold text-muted-foreground">
            Status
          </th>
          <th className="px-4 py-2" />
        </tr>
      </thead>
      <tbody className="divide-y divide-border">
        <tr>
          <td className="px-4 py-2">Ava Williams</td>
          <td className="px-4 py-2">Editor</td>
          <td className="px-4 py-2">
            <span className="inline-flex rounded-full bg-secondary px-2 py-0.5 text-xs font-medium  text-emerald-500">
              Active
            </span>
          </td>
          <td className="px-4 py-2 text-right">
            <button className="rounded-md border px-2 py-1 text-xs hover:bg-muted">
              Edit
            </button>
            <button className="ml-2 rounded-md border px-2 py-1 text-xs hover:bg-muted ">
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td className="px-4 py-2">Noah Patel</td>
          <td className="px-4 py-2">Viewer</td>
          <td className="px-4 py-2">
            <span className="inline-flex rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-orange-500">
              Invited
            </span>
          </td>
          <td className="px-4 py-2 text-right">
            <button className="rounded-md border px-2 py-1 text-xs hover:bg-muted">
              Edit
            </button>
            <button className="ml-2 rounded-md border px-2 py-1 text-xs hover:bg-muted">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
