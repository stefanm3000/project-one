import React from "react";
import { render } from "react-dom";
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book job='asdf' />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/41SG4SO4T9L._SX351_BO1,204,203,200_.jpg"
      alt="book pic"
    />
  );
};

const Book = (props) => {
  console.log(props)
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Title = () => {
  return <h1> Ikigai: The Japanese Secret to a Long and Happy Life </h1>;
};

const Author = () => {
  return <h4> Hector Garcia </h4>;
};

render(<BookList />, document.getElementById("root"));
