import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, editProduct, cancelEdit } from "./productSlice";
import { gsap } from "gsap";

const empty = { name: "", category: "Other", price: "", description: "", image: "" };

export default function ProductForm() {
  const dispatch = useDispatch();
  const editing = useSelector((s) => s.products.editing);

  const [form, setForm] = useState(empty);
  const [error, setError] = useState("");
  const formRef = useRef();

  useEffect(() => {
    if (editing) setForm({ ...editing, price: String(editing.price ?? "") });
    else setForm(empty);
    setError("");

    // Animation
    gsap.from(formRef.current, { opacity: 0, y: 20, duration: 0.5 });
  }, [editing]);

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    if (!form.name.trim()) return "Name is required";
    const price = Number(form.price);
    if (!Number.isFinite(price) || price <= 0) return "Price must be > 0";
    return "";
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const msg = validate();
    if (msg) return setError(msg);

    const payload = { ...form, price: Number(form.price) };
    if (editing) dispatch(editProduct(payload));
    else dispatch(addProduct(payload));
    setForm(empty);
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} style={{ display: "grid", gap: 12, marginBottom: 24 }}>
      <h2>{editing ? "Edit Product" : "Add Product"}</h2>

      <input placeholder="Name" value={form.name} onChange={onChange("name")} />
      <select value={form.category} onChange={onChange("category")}>
        <option value="Electronics">Electronics</option>
        <option value="Home">Home</option>
        <option value="Other">Other</option>
      </select>

      <input type="number" placeholder="Price" value={form.price} onChange={onChange("price")} />
      <textarea placeholder="Description" value={form.description} onChange={onChange("description")} />

      {error && <div style={{ color: "crimson" }}>{error}</div>}

      <div style={{ display: "flex", gap: 12 }}>
        <button type="submit">{editing ? "Save" : "Add"}</button>
        {editing && <button type="button" onClick={() => dispatch(cancelEdit())}>Cancel</button>}
      </div>
    </form>
  );
}
