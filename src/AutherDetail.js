import React from "react";

function AuthorDetail({ author }) {
  //   const author = props.author;
  //   const authorName = `${author.first_name} ${author.last_name}`;
  let books = author.books.map(book => (
    <tr>
      <td>{book.title}</td>
      <td>{author.first_name + " " + author.last_name}</td>
      <td>
        <button AuthorDetail="btn" style={{ backgroundColor: book.color }} />
      </td>
    </tr>
  ));
  return (
    <div AuthorDetail="author col-xs-10">
      <div>
        <h3>{author.first_name + " " + author.last_name}</h3>
        <img src={author.imageUrl} AuthorDetail="img-thumbnail" alt="" />
      </div>
      <table className="mt-3 table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Authors</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>{books}</tbody>
      </table>
    </div>
  );
}

export default AuthorDetail;
