import { NavLink, Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { useRef, useEffect } from 'react';

import { getBooks } from './../data/data';
import { MYBLUE, YELLOWBootStrap } from "../helpers/color"

import "./Books.css"

const Books = () => {
  const books = getBooks()
  const inputFocus = useRef(null)
  const location = useLocation()

  const [searchParams, setSearchParams] = useSearchParams({})
  console.log("searchParams: ", searchParams);

  useEffect(() => {
    inputFocus.current.focus()
  }, [])

  const handleOnchange = (event) => {
    let filterText = event.target.value;
    if (filterText) {
      setSearchParams({ filterText: filterText });
    } else {
      setSearchParams({  });
    }
  };

  return (
    <>

      <div className='col-12 col-md-5 d-flex justify-content-center align-items-center flex-column m-5 rounded-3 py-3'
        style={{ background: MYBLUE }}>
        <h1 className='pb-3 text-white fw-bold fs-4'>لیست کتابهای موجود</h1>
        <div className='input-group mb-3 flex-row-reverse align-items-center justify-content-center'>
          <button
            className='btn btn-warning rounded-3 ms-2'
            type='button'
            id='button-addon1'
          >
            جستجو
          </button>
          <input
            type='text'
            value={searchParams.get("filterText") || ""}
            onChange={handleOnchange}
            className='form-control w-25 rounded-3'
            style={{ flex: "0 1 40%" }}
            ref={inputFocus}
            placeholder='جستجوی کتابها'
          />
        </div>

        {books
          .filter((book) => {
            let filterText = searchParams.get("filterText");
            if (!filterText) return true;
            let name = book.name.toLowerCase();
            return name.includes(filterText.toLowerCase());
          })
          .map((book) => (
            <NavLink
              to={`/books/${book.number}${location.search}`}
              key={book.number}
              className='btn d-block btn-lg text-center w-50 mx-4 my-2 '
              style={({ isActive }) => {
                return {
                  color: isActive ? "#000" : "#fff",
                  display: "block",
                  fontWeight: isActive ? "bold" : "",
                  background: isActive ? YELLOWBootStrap : "#0a1045",
                  borderColor: isActive ? YELLOWBootStrap : "",
                };
              }}>
              {book.name}
            </NavLink>
          ))}
      </div>

      <div className="col-12 col-md-6">
        <Outlet />
      </div>
    </>
  );
}

export default Books;