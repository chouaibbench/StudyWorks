import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setCategory, setPriceRange } from "./productSlice";

export default function SearchFilter() {
  const dispatch = useDispatch();
  const { search, category, priceMin, priceMax } = useSelector((s) => s.products);

  return (
    <div style={{ display: "grid", gap: 12, marginBottom: 24 }}>
      <input
        placeholder="Search by name..."
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <select value={category} onChange={(e) => dispatch(setCategory(e.target.value))}>
          <option value="ALL">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Home">Home</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="number"
          placeholder="Min price"
          value={priceMin}
          onChange={(e) => dispatch(setPriceRange({ min: e.target.value, max: priceMax }))}
        />
        <input
          type="number"
          placeholder="Max price"
          value={priceMax}
          onChange={(e) => dispatch(setPriceRange({ min: priceMin, max: e.target.value }))}
        />
      </div>
    </div>
  );
}
