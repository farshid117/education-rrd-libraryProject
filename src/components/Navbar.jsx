import { NavLink, Outlet, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  console.log("location: ", location);
  return (

    <div className="container">
      <div className='row justify-content-center mb-auto ' style={{}}>
        <div className='col-12 d-flex flex-wrap justify-content-center align-items-start mt-4  '>
          <h3 className='fw-bold fs-4 mb-4 col-12 text-center'>به نام خدا</h3>
          <NavLink
            to='/books'
            className={({ isActive }) => {
              return isActive ? "btn btn-primary me-4 py-2" : "btn btn-danger me-4 py-2"
            }}
          >
            کتاب ها
          </NavLink>

          <NavLink
            to={`about${location.search}`}
            className='btn btn-info py-2 '
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "",
              };
            }}>
            درباره ما
          </NavLink>
        </div>
      </div>
      <div className="row">
        <Outlet />
      </div>
    </div>

  );
};

export default Navbar;
