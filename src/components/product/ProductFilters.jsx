import React from "react";

/**
 * Component for searching and selecting category filter.
 * Props:
 * - categories: array of category strings
 * - filters: current filters object
 * - onChange: callback to update filters
 */
export default function ProductFilters({
  categories = [],
  filters = {},
  onChange,
}) {
  return (
    <form
      className="product-filters"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Filtros de productos"
    >
      <input
        type="search"
        placeholder="Buscar por nombre o descripción"
        value={filters.search || ""}
        onChange={(e) => onChange({ search: e.target.value })}
        aria-label="Buscar productos"
      />

      <select
        value={filters.category || "all"}
        onChange={(e) => onChange({ category: e.target.value })}
        aria-label="Filtrar por categoría"
      >
        {categories.map((c) => (
          <option key={c} value={c}>
            {c === "all" ? "Todas" : c}
          </option>
        ))}
      </select>
    </form>
  );
}
