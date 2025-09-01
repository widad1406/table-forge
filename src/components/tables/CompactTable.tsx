export default function CompactTable() {
  return (
    <table className="min-w-full border-separate border-spacing-0 text-left text-xs">
      <thead>
        <tr>
          <th className="sticky top-0  px-3 py-2 font-semibold text-foreground">
            ID
          </th>
          <th className="sticky top-0 px-3 py-2 font-semibold text-foreground">
            Metric
          </th>
          <th className="sticky top-0 px-3 py-2 font-semibold text-foreground">
            Value
          </th>
          <th className="sticky top-0 px-3 py-2 font-semibold text-foreground">
            Delta
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-3 py-1.5">A-01</td>
          <td className="px-3 py-1.5">Visitors</td>
          <td className="px-3 py-1.5">12,450</td>
          <td className="px-3 py-1.5 text-green-600">+8%</td>
        </tr>
        <tr className="bg-muted">
          <td className="px-3 py-1.5">A-02</td>
          <td className="px-3 py-1.5">Signups</td>
          <td className="px-3 py-1.5">1,248</td>
          <td className="px-3 py-1.5 text-red-600">-2%</td>
        </tr>
        <tr>
          <td className="px-3 py-1.5">A-03</td>
          <td className="px-3 py-1.5">Revenue</td>
          <td className="px-3 py-1.5">$32,890</td>
          <td className="px-3 py-1.5 text-green-600">+5%</td>
        </tr>
      </tbody>
    </table>
  );
}
