export default function ResponsiveCardsOnMobile() {
  return (
    <div className="flow-root">
      <div className="py-2">
        <div className="inline-block min-w-full align-middle px-4">
          <table className="hidden min-w-full divide-y divide-gray-200 text-left text-sm sm:table">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 font-semibold text-gray-600">Name</th>
                <th className="px-4 py-2 font-semibold text-gray-600">
                  Amount
                </th>
                <th className="px-4 py-2 font-semibold text-gray-600">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2">Payment from Olivia Rhye</td>
                <td className="px-4 py-2">$20.00</td>
                <td className="px-4 py-2">Jan 22, 2024</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Payment from Lana Steiner</td>
                <td className="px-4 py-2">$5.00</td>
                <td className="px-4 py-2">Jan 15, 2024</td>
              </tr>
            </tbody>
          </table>
          <ul role="list" className="grid grid-cols-1 gap-3 sm:hidden">
            <li className="rounded-lg border border-gray-200 p-3 break-words">
              <div className="text-sm font-medium text-gray-900">
                Payment from Olivia Rhye
              </div>
              <div className="mt-1 text-sm text-gray-700">$20.00</div>
              <div className="mt-1 text-xs text-gray-500">Jan 22, 2024</div>
            </li>
            <li className="rounded-lg border border-gray-200 p-3 break-words">
              <div className="text-sm font-medium text-gray-900">
                Payment from Lana Steiner
              </div>
              <div className="mt-1 text-sm text-gray-700">$5.00</div>
              <div className="mt-1 text-xs text-gray-500">Jan 15, 2024</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
