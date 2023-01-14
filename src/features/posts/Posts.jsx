import { Link } from "react-router-dom";

export default function Posts() {
  return (
    <div>
      <Link to={'posts/create'}>Tambah</Link>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Judul</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Membuat website</td>
            <td>
              <a href="">Edit</a>
              <a href="">Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
