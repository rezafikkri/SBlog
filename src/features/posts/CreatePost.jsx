import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const navigate = useNavigate();
  return (
    <form action="">
      <input type="text" name="title" placeholder="Judul..."/>
      <button type="submit">Simpan</button>
      <button type="button" onClick={() => navigate(-1)}>Cancel</button>
    </form>
  );
}
