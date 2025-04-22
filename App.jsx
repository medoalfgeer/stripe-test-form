import { useState } from "react";

export default function StripeTestForm() {
  const [form, setForm] = useState({
    name: "Mohammed Al-Mutasim",
    email: "test@example.com",
    card: "4242 4242 4242 4242",
    exp: "12/34",
    cvv: "123",
    zip: "90019"
  });

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-md space-y-4">
      <h1 className="text-xl font-bold text-center">Stripe Test Payment</h1>
      <form className="space-y-3">
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="w-full p-2 border rounded"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Card Number"
          value={form.card}
          onChange={(e) => setForm({ ...form, card: e.target.value })}
        />
        <div className="flex space-x-2">
          <input
            className="w-1/2 p-2 border rounded"
            type="text"
            placeholder="MM/YY"
            value={form.exp}
            onChange={(e) => setForm({ ...form, exp: e.target.value })}
          />
          <input
            className="w-1/2 p-2 border rounded"
            type="text"
            placeholder="CVV"
            value={form.cvv}
            onChange={(e) => setForm({ ...form, cvv: e.target.value })}
          />
        </div>
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="ZIP Code"
          value={form.zip}
          onChange={(e) => setForm({ ...form, zip: e.target.value })}
        />
        <button
          type="button"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Submit Test Payment
        </button>
      </form>
    </div>
  );
}
