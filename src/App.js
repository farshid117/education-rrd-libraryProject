
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import Books from "./components/Books";
import Book from "./components/Book";
import Footer from "./components/Footer";


function App() {
  //  const navigate = useNavigate()
  return (
    <div className='App d-flex justify-content-center flex-wrap vh-100'>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='/books' element={<Books />}>
            <Route
              index
              element={
                <main className='d-flex  mt-5  px-3'>
                  <div className='fw-bold fs-5'>
                    لطفا کتاب خود را انتخاب نمائید ...
                  </div>
                </main>
              }
            />
            <Route path='/books/:bookId' element={<Book />} />
          </Route>

          <Route
            path='*'
            element={
              <main className='mt-5 bg-light mx-auto w-50 rounded-3 '>
                <h1 className="text-center text-danger mt-3 fw-bold">گشتم نبود نگرد نیست</h1>
              </main>
            }
          />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
