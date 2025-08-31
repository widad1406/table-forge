export default function BasicDarkTable() {
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-800">
      <table className="min-w-full text-left text-sm text-gray-800 dark:text-gray-200">
        <thead className="bg-gray-100 text-gray-700 dark:bg-neutral-900 dark:text-gray-300">
          <tr>
            <th className="px-4 py-2 font-semibold">Product</th>
            <th className="px-4 py-2 font-semibold">Price</th>
            <th className="px-4 py-2 font-semibold">Stock</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
          <tr className="bg-white dark:bg-neutral-950/40">
            <td className="px-4 py-2">Headphones</td>
            <td className="px-4 py-2">$89.00</td>
            <td className="px-4 py-2">In Stock</td>
          </tr>
          <tr className="bg-white dark:bg-neutral-950/60">
            <td className="px-4 py-2">Keyboard</td>
            <td className="px-4 py-2">$129.00</td>
            <td className="px-4 py-2">Low</td>
          </tr>
          <tr className="bg-white dark:bg-neutral-950/40">
            <td className="px-4 py-2">Mouse</td>
            <td className="px-4 py-2">$49.00</td>
            <td className="px-4 py-2">Out</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
