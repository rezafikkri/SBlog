import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl">
    <h1 className="text-3xl font-bold leading-7 text-gray-900 mb-6 mt-10">Tambah Artikel</h1>
    <form action="">
      <div className="mb-6">
        <label for="default-input" class="block mb-2 text-md font-medium text-gray-900">Judul</label>
        <input type="text" name="title" placeholder="Judul..." className="g-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-0"/>
      </div>
      <button type="submit" className="bg-teal-500 hover:bg-teal-600 rounded py-2 px-4 text-md font-medium text-white shadow-sm mr-2">Simpan</button>
      <button type="button" className="bg-gray-500 hover:bg-gray-600 rounded py-2 px-4 text-md font-medium text-white shadow-sm" onClick={() => navigate(-1)}>Cancel</button>
    </form>
    </div>
  );
}
