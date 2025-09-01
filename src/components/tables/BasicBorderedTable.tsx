export default function BasicBorderedTable() {
  return (
    <table className="min-w-full border text-left text-sm">
      <thead className="bg-muted text-muted-foreground">
        <tr>
          <th className="px-4 py-2 font-medium">Name</th>
          <th className="px-4 py-2 font-medium">Title</th>
          <th className="px-4 py-2 font-medium">Email</th>
          <th className="px-4 py-2 font-medium">Role</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t">
          <td className="px-4 py-2">Lindsay Walton</td>
          <td className="px-4 py-2">Front-end Developer</td>
          <td className="px-4 py-2">lindsay.walton@example.com</td>
          <td className="px-4 py-2">Member</td>
        </tr>
        <tr className="border-t">
          <td className="px-4 py-2">Courtney Henry</td>
          <td className="px-4 py-2">Designer</td>
          <td className="px-4 py-2">courtney.henry@example.com</td>
          <td className="px-4 py-2">Admin</td>
        </tr>
        <tr className="border-t">
          <td className="px-4 py-2">Tom Cook</td>
          <td className="px-4 py-2">Director of Product</td>
          <td className="px-4 py-2">tom.cook@example.com</td>
          <td className="px-4 py-2">Owner</td>
        </tr>
      </tbody>
    </table>
  );
}
