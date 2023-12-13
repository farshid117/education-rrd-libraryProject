import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getBook, deleteBook } from "../data/data";

const Book = () => {
  const params = useParams()
  const book = getBook(parseInt(params.bookId))
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <>
      {
        book ? (
          <div>
                  <ul className='list-group justify-content-center mt-5 mb-3 text-center '>
                    <li className='list-group-item'>
                      <span style={{ fontWeight: "bold", fontSize: 25 }}>
                        نام کتاب : {book.name}
                      </span>
                    </li>
                    <li className='list-group-item  '>
                      <span>شناسه کتاب : {book.number}</span>
                    </li>
                    <li className='list-group-item'>قیمت : {book.amount} تومان</li>
                    <li className='list-group-item'> تاریخ انتشار : {book.due}</li>
                    <li
                      className='list-group-item fw-bold disabled '
                      style={{ color: "red" }}>
                      این کتاب با تخفیف {`${book.discount}`} درصد میباشد
                    </li>
                  </ul>

                  <div className="text-center">
                    <button type='button' className='btn btn-primary mt-3 '>
                      افزودن به سبد
                    </button>
                    <button
                      type='button'
                      className='btn btn-warning ms-2 mt-3'
                      onClick={() => {
                        deleteBook(parseInt(params.bookId));
                        navigate("/about" + location.search);
                      }}>
                      حذف کتاب
                    </button>
                  </div>
          </div>
        ) : (
          <div className="d-inline-flex pt-5 text-center col-8 col-sm-6 col-md-5 col-lg-4 mx-5 " >
            <div className="w-100">
              <ul className="list-group justify-content-center align-items-stretch  ">
                <li className="list-group-item"><span style={{ fontWeight: "bold", fontSize: 25 }}>کتابی با این مشخصات یافت نشد</span></li>

              </ul>
            </div>
          </div>
        )

      }
    </>
  )
}

export default Book;