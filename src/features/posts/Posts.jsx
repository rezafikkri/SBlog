import { Link } from "react-router-dom";

export default function Posts() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold leading-7 text-gray-900 mb-6 mt-10">Daftar Artikel</h1>
      <Link to={'posts/create'} className="bg-teal-500 hover:bg-teal-600 rounded py-2 px-4 text-md font-medium text-white shadow-sm">Tambah Data</Link>

      <div className="relative overflow-x-auto">
      <table className="mt-6 w-full text-md text-left text-gray-500">
        <thead className="text-gray-700 bg-gray-50">
          <tr>
            <th className="px-6 py-3 w-0">No</th>
            <th className="px-6 py-3">Judul</th>
            <th className="px-6 py-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Membuat website dengan reactjs dan redux</td>
            <td className="px-6 py-4">
              <a href="" className="font-medium text-blue-600 hover:underline mr-2 inline-block">Edit</a>
              <a href="" className="font-medium text-blue-600 hover:underline inline-block">Delete</a>
            </td>
          </tr>
          <tr className="bg-white border-b">
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Membuat aplikasi dengan reactjs dan express js</td>
            <td className="px-6 py-4">
              <a href="" className="font-medium text-blue-600 hover:underline mr-2 inline-block">Edit</a>
              <a href="" className="font-medium text-blue-600 hover:underline inline-block">Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}
