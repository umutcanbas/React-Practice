import { Link, Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <nav>
        <ul className="flex justify-between p-4">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <div className="flex gap-4">
            <li>
              <Link to={"/users/add"}>Add</Link>
            </li>
            <li>
              <Link to={"/users/:id"}>Detail</Link>
            </li>
            <li>
              <Link to={"/users/:id/edit"}>Edit</Link>
            </li>
          </div>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
