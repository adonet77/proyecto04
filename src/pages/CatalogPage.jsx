import React from "react";
import ProductCard from "../components/product/ProductCard";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";
import ProductFilters from "../components/product/ProductFilters";
import Pagination from "../components/ui/Pagination";

export default function CatalogPage() {
  const { addItem } = useCart();
  const {
    loading,
    error,
    products,
    total,
    page,
    totalPages,
    setPage,
    filters,
    updateFilters,
    categories,
  } = useProducts({ pageSize: 6 });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error cargando productos.</div>;

  return (
    <main className="catalog-page">
      <div className="container">
        <header className="page-heading">
          <div>
            <p className="eyebrow">La barra de la casa</p>
            <h1>Botellas con carácter.</h1>
            <p className="page-heading__intro">
              Una selección breve de destilados para beber despacio, compartir
              bien y recordar después.
            </p>
          </div>
          <div className="catalog-count">
            <strong>{total}</strong>
            <span> referencias</span>
          </div>
        </header>

        <ProductFilters
          categories={categories}
          filters={filters}
          onChange={updateFilters}
        />

        <section className="catalog-grid">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onAdd={(product) => addItem(product, 1)}
            />
          ))}
        </section>

        <footer className="pagination-wrap">
          <Pagination page={page} totalPages={totalPages} onPage={setPage} />
        </footer>
      </div>
    </main>
  );
}
