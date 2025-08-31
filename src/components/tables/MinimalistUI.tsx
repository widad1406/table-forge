export default function MinimalistUI() {
  return (
    <div className="rounded-lg border">
      <table className="w-full caption-bottom text-sm">
        <thead className="[&_tr]:border-b">
          <tr className="border-b">
            <th className="text-muted-foreground h-10 px-4 text-left align-middle font-medium">
              Name
            </th>
            <th className="text-muted-foreground h-10 px-4 text-left align-middle font-medium">
              Title
            </th>
            <th className="text-muted-foreground h-10 px-4 text-left align-middle font-medium">
              Email
            </th>
            <th className="text-muted-foreground h-10 px-4 text-left align-middle font-medium">
              Role
            </th>
          </tr>
        </thead>
        <tbody className="[&_tr:last-child]:border-0">
          <tr className="hover:bg-muted/50 border-b transition-colors">
            <td className="p-4 align-middle">Lindsay Walton</td>
            <td className="p-4 align-middle">Front-end Developer</td>
            <td className="p-4 align-middle">lindsay.walton@example.com</td>
            <td className="p-4 align-middle">Member</td>
          </tr>
          <tr className="hover:bg-muted/50 border-b transition-colors">
            <td className="p-4 align-middle">Courtney Henry</td>
            <td className="p-4 align-middle">Designer</td>
            <td className="p-4 align-middle">courtney.henry@example.com</td>
            <td className="p-4 align-middle">Admin</td>
          </tr>
          <tr className="hover:bg-muted/50 border-b transition-colors">
            <td className="p-4 align-middle">Tom Cook</td>
            <td className="p-4 align-middle">Director of Product</td>
            <td className="p-4 align-middle">tom.cook@example.com</td>
            <td className="p-4 align-middle">Owner</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
