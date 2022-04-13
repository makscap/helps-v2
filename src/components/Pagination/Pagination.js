import React from "react";
import s from "./Pagination.module.css";

function Pagination({ productsPerPage, totalProducts, paginate }) {
  const pageNumbers = [];

  const page = Math.ceil(totalProducts / productsPerPage);

  for (let i = 1; i <= page; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={s.paginate}>
      <ul className={s.list}>
        {pageNumbers.map((num) => (
          <li key={num} className={s.item}>
            <a
              href="!#"
              className={s.link}
              onClick={(e) => {
                e.preventDefault();
                paginate(num);
              }}
            >
              {num}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
