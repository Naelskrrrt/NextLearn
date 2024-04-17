
const Employee = async () => {
  return (
    <table className="table table-zebra">
        <thead className="text-sm text-gray-700 uppercase bg-gray-50">
            <tr>
                <th className="py-3 px-6">#</th>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">Phone Number</th>
                <th className="py-3 px-6">Created At</th>
                <th className="py-3 px-6 text-center">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b text-slate-800">
                <td className="py-3 px-6">1</td>
                <td className="py-3 px-6">Blabla coder </td>
                <td className="py-3 px-6">blabla@exemple.com</td>
                <td className="py-3 px-6">+261 32 44 405 60</td>
                <td className="py-3 px-6">
                    July 11
                </td>
                <td className="justify-center flex gap-1 py-3">
                    Edit | Delete
                </td>

            </tr>
        </tbody>

    </table>
  )
}

export default Employee
