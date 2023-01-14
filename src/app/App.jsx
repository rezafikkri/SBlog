import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <nav>
        <Link to={'/'}>Brand</Link>
      </nav>
      <hr />
      <main>
        <Outlet />
      </main>
    </>
  );
}
