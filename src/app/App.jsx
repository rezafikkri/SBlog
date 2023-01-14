import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <nav className="border-b">
        <div className="container px-4">
          <div className="relative flex h-12 items-center justify-between">
            <Link to={'/'} className="hover:bg-gray-100 px-3 py-2 rounded-md">Home</Link>
          </div>
        </div>
      </nav>
      <main>
        <div className="container px-4">
          <Outlet />
        </div>
      </main>
    </>
  );
}
