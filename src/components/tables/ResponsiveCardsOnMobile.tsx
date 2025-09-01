export default function ResponsiveCardsOnMobile() {
  return (
    <div className="flow-root">
      <div className="py-2">
        <div className="inline-block min-w-full align-middle px-4">
          <table className="hidden min-w-full divide-y divide-border text-left text-sm sm:table">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-2 font-semibold text-muted-foreground">
                  Name
                </th>
                <th className="px-4 py-2 font-semibold text-muted-foreground">
                  Amount
                </th>
                <th className="px-4 py-2 font-semibold text-muted-foreground">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
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
            <li className="rounded-lg border p-3 break-words">
              <div className="text-sm font-medium text-foreground">
                Payment from Olivia Rhye
              </div>
              <div className="mt-1 text-sm text-foreground">$20.00</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Jan 22, 2024
              </div>
            </li>
            <li className="rounded-lg border p-3 break-words">
              <div className="text-sm font-medium text-foreground">
                Payment from Lana Steiner
              </div>
              <div className="mt-1 text-sm text-foreground">$5.00</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Jan 15, 2024
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
