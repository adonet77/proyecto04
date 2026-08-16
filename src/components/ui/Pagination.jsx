import React from "react";

/**
 * Simple pagination UI.
 * Props: `page`, `totalPages`, `onPage` (number) => void
 */
export default function Pagination({ page, totalPages, onPage }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <nav aria-label="Paginación">
      <ul className="pagination">
        <li>
          <button
            onClick={() => onPage(Math.max(1, page - 1))}
            disabled={page === 1}
          >
            «
          </button>
        </li>
        {pages.map((p) => (
          <li key={p}>
            <button
              onClick={() => onPage(p)}
              aria-current={p === page ? "page" : undefined}
              className={p === page ? "active" : ""}
            >
              {p}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => onPage(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
          >
            »
          </button>
        </li>
      </ul>
    </nav>
  );
}
