import { useNavigate, useParams } from "react-router-dom";
import { useUpdatePostMutation, useGetPostQuery } from "../services/posts";
import Loading from "../../common/Loading";

export default function EditPost() {
  let titleElement;
  let postIdElement;
  const [ updatePost, { isLoading: isUpdating, isSuccess: isUpdated } ] = useUpdatePostMutation();
  const { postId } = useParams();
  const { data: post, error, isSuccess: isGetted, isLoading: isGetting } = useGetPostQuery(postId);

  function handleSubmit(e) {
    e.preventDefault();
    
    if (!titleElement.value.trim()) return;
    
    updatePost({ id: postIdElement.value, title: titleElement.value });
    e.target.reset();
  }

  const navigate = useNavigate();
  return (
    <div className="max-w-3xl relative">
    <h1 className="text-3xl font-bold leading-7 text-gray-900 mb-6 mt-10">Edit Artikel</h1>
    {
      isUpdated ? (
        <div className="p-4 mb-4 text-md text-green-700 bg-green-100 rounded-lg" role="alert">
          <span className="font-medium">Selamat!</span> Data artikel telah diubah.
        </div>
      ) : isGetting ? (
        <Loading />
      ) : null
    }
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label htmlFor="title" className="block mb-2 text-md font-medium text-gray-900">Judul</label>
        <input
          type="hidden"
          name="post_id"
          ref={element => postIdElement = element}
          defaultValue={isGetted ? post.id : ''}/>
        <input
          ref={element => titleElement = element}
          id="title"
          type="text"
          name="title"
          placeholder="Judul..."
          className="g-gray-50 border border-gray-300 focus:border-teal-500 text-gray-900 text-md rounded-lg block w-full p-2.5 outline-2 outline-teal-500"
          defaultValue={isGetted ? post.title : ''}
        />
      </div>
      <button type="submit" className="bg-teal-500 hover:bg-teal-600 rounded py-2 px-4 text-md font-medium text-white shadow-sm mr-2">{ isUpdating ? 'Loading...' : 'Simpan'}</button>
      <button type="button" className="bg-gray-500 hover:bg-gray-600 rounded py-2 px-4 text-md font-medium text-white shadow-sm" onClick={() => navigate(-1)}>Kembali</button>
    </form>
    </div>
  );
}
