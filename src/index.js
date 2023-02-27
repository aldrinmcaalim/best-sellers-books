import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from "./books";

import Book from "./Book";

function App() {
  // const getBook = (id) => {
  //   const book = books.find((book) => book.id === id);
  //   console.log(book);
  // };

  // getBook(2);

  return (
    <React.Fragment>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </React.Fragment>
  );
}

// const EventExamples = () => {
//   const handleFormInput = (e) => {
//     console.log(e.target.value);
//   };
//   const handleButtonClick = () => {
//     alert("handle button click");
//   };
//   const handleFormSubmission = (e) => {
//     e.preventDefault();
//     console.log("form submitted");
//   };
//   return (
//     <section>
//       <form onSubmit={handleFormSubmission}>
//         <h2>Typical form</h2>
//         <input
//           type="text"
//           name="example"
//           onChange={handleFormInput}
//           style={{ margin: "1rem 0" }}
//         />
//         <button type="submit" onClick={handleButtonClick}>
//           submit form
//         </button>
//       </form>
//       <button type="button" onClick={handleButtonClick}>
//         Click me
//       </button>
//     </section>
//   );
// };

// const Image = (props) => {
//   return <img src={props.props.image} alt={props.props.title} />;
// };

// const Title = (props) => {
//   return <h2>{props.title}</h2>;
// };

// const Author = (props) => {
//   return <h4>{props.author}</h4>;
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
