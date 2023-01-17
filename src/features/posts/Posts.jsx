import { Link } from "react-router-dom";
import { useGetPostsQuery, useDeletePostMutation } from "../services/posts";
import Loading from "../../common/Loading";

export default function Posts() {
  const [ deletePost, { isLoading: isDeleting } ] = useDeletePostMutation();
  const { data: posts, error, isLoading: isGetting, isFetching, isSuccess: isGetted } = useGetPostsQuery();

  function handleDelete(e) {
    e.preventDefault();
    
    const postId = e.target.dataset.postId;
    deletePost(postId);
  }
 
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold leading-7 text-gray-900 mb-6 mt-10">Daftar Artikel</h1>
      <Link to={'posts/create'} className="bg-teal-500 hover:bg-teal-600 rounded py-2 px-4 text-md font-medium text-white shadow-sm inline-block">Tambah Data</Link>
      <div className="relative min-h-[100px] mb-5 mt-6 overflow-x-auto">
      { isDeleting || isFetching ? <Loading /> : null }
      {
        error ? (
          <>Oh no, there was an error</>
        ) : isGetting ? (
          <Loading />
        ) : isGetted ? ( 
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
                      <a href="#" data-post-id={post.id} onClick={handleDelete} className="font-medium text-blue-600 hover:underline inline-block">Delete</a>
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
