import { Link } from "react-router-dom";
import { postsApi, useGetPostsQuery } from "../services/posts";
import Loading from "../../common/Loading";

export default function Posts() {
  const { data: posts, error, isLoading, isSuccess } = useGetPostsQuery();
 
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold leading-7 text-gray-900 mb-6 mt-10">Daftar Artikel</h1>
      <Link to={'posts/create'} className="bg-teal-500 hover:bg-teal-600 rounded py-2 px-4 text-md font-medium text-white shadow-sm inline-block">Tambah Data</Link>
      <div className="relative min-h-[100px] mb-5 mt-6 overflow-x-auto">
      {
        error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <Loading />
        ) : isSuccess ? (
          <table className="w-full text-md text-left text-gray-500">
            <thead className="text-gray-700 bg-gray-50">
              <tr>
                <th className="px-6 py-3 w-0">No</th>
                <th className="px-6 py-3">Judul</th>
                <th className="px-6 py-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
            {
              posts.length ?
                posts.map((post, index) => (
                  <tr className="bg-white border-b" key={post.id}>
                    <td className="px-6 py-4">{index+1}</td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{post.title}</td>
                    <td className="px-6 py-4">
                      <Link to={`posts/edit/${post.id}`} className="font-medium text-blue-600 hover:underline mr-2 inline-block">Edit</Link>
                      <a href="" className="font-medium text-blue-600 hover:underline inline-block">Delete</a>
                    </td>
                  </tr>
                ))
              : (
                <tr className="bg-white border-b">
                  <td colSpan={3} className="px-6 py-4">Data post tidak ada...</td>
                </tr>
              )
            }
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
}
