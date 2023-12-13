 let books = [
  {
    name: "آئین زندگی",
    number: 21,
    amount: "50,000",
    due: "1401/01/12",
    discount : 0
  },
  {
    name: "زمان حال",
    number: 22,
    amount: "65,000",
    due: "1400/12/22",
    discount : 25
  },
  {
    name: "مدیریت زمان",
    number: 23,
    amount: "42,000",
    due: "1400/08/03",
    discount : 25
  },
  {
    name: "اثر مرکب",
    number: 24,
    amount: "75,000",
    due: "1399/01/12",
    discount : 30
  },
  {
    name: "انگیزه",
    number: 25,
    amount: "52,000",
    due: "1401/02/14",
    discount : 20
  },
  {  name: "صد سال تنهایی",
    number: 26,
    amount: "52,000",
    due: "1401/02/14",
    discount : 0
  },
  {  name: "صدای دوست",
    number: 27,
    amount: "52,000",
    due: "1401/02/14",
    discount : 25
  },
  {  name: "آدمیزاد",
    number: 28,
    amount: "52,000",
    due: "1401/02/14",
    discount : 50
  },
  {  name: "زمان دوستی",
    number: 29,
    amount: "52,000",
    due: "1401/02/14",
    discount : 20
  },
  {  name: "آئین دوستی",
    number: 30,
    amount: "52,000",
    due: "1401/02/14",
    discount : 0
  },
  
];

export const getBooks = () => {
  return books;
};


export const getBook = (number) =>{
    return books.find( book => book.number === number)
};

export const deleteBook = (number) => {
  return books =  books.filter( book => book.number !== number)
}
