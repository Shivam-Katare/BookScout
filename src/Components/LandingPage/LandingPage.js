import React, { useState } from "react";
import axios from "axios";
import BookCard from "../Cards/BookCard";
import "./landingPage.css";
import Footer from "../Footer/Footer";
import JoinMe from "../JoinMe/JoinMe";

function LandingPage() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const backupImage = "https://www.jainpathshalajaipur.com/Images/BookImages/default_book_cover.png"

  const searchBook = (event) => {
    event.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=20`
      )
      .then((res) => setData(res.data.items))
      .catch((err) => console.log(err));
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const trimDescription = (description) => {
    if (!description) {
      return "";
    }
    const words = description.split(" ");
    if (words.length > 50) {
      return words.slice(0, 50).join(" ") + " ...";
    }
    return description;
  };

  return (
    <>
      <JoinMe />
      <div className="container">
        <div className="title-container">
          <p className="title">BookScout</p>
        </div>

        <div className="search-container">
          <form onSubmit={searchBook}>
            <input
              id="search"
              type="search"
              pattern=".*\S.*"
              required
              value={search}
              placeholder="Search Your Book"
              onChange={handleInputChange}
            />
          </form>
        </div>

        {data.length > 0 && (
          <div>
            <h2 style={{
              fontSize: "3rem",
              color: "white"
            }}>Results:</h2>
            <div className="results-container">
              {data.map((book) => (
                console.log(book.saleInfo.isEbook),
                <BookCard
                  key={book.id}
                  image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : backupImage}
                  title={book.volumeInfo.title}
                  author={book.volumeInfo.authors ? " By " + book.volumeInfo.authors?.[0] : "Author not available"}
                  description={trimDescription(book.volumeInfo.description ? book.volumeInfo.description : "Description is not aviailable")}
                  pageCount={book.volumeInfo.pageCount ? book.volumeInfo.pageCount : "🤷🏻‍♂️"}
                  info={book.volumeInfo.infoLink}
                  previewLink={book.volumeInfo.previewLink}
                  price={
                    book.saleInfo.saleability === "FOR_SALE"
                      ? `Rs ${book.saleInfo.listPrice.amount}`
                      : "Price not available"
                  }
                  isEbook={book.saleInfo.isEbook ? "Ebook ✔️" : "Ebook ❌"}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
