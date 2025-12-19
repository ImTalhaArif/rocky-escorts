"use client";

import { useState } from "react";

const API_URL =
  "https://niofuewv64pr4am2dofpqywgfy0awmbp.lambda-url.eu-north-1.on.aws/";

type Model = {
  id: string;
  name: string;
  age: number;
  tone: string;
  preference: string;
  image: string;
};

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [models, setModels] = useState<Model[]>([]);
  const [form, setForm] = useState<Model>({
    id: "",
    name: "",
    age: 20,
    tone: "",
    preference: "",
    image: "",
  });

  /* ---------------- LOGIN ---------------- */

  const handleLogin = async () => {
    if (email === "admin@gmail.com" && password === "admin123") {
      setIsLoggedIn(true);
      await fetchModels();
    } else {
      alert("Invalid credentials");
    }
  };

  /* ---------------- FETCH MODELS ---------------- */

  const fetchModels = async () => {
    try {
      const res = await fetch(API_URL);
      const text = await res.text();
      const data = text ? JSON.parse(text) : {};

      // ✅ FIX: DynamoDB scan returns { Items: [] }
      const items: Model[] = Array.isArray(data?.Items)
        ? data.Items
        : [];

      setModels(items);
    } catch (err) {
      console.error("Fetch models failed:", err);
      setModels([]);
    }
  };

  /* ---------------- ADD / UPDATE MODEL ---------------- */

  const saveModel = async () => {
    if (!form.id) {
      alert("ID is required");
      return;
    }

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({
      id: "",
      name: "",
      age: 20,
      tone: "",
      preference: "",
      image: "",
    });

    fetchModels();
  };

  /* ---------------- DELETE MODEL ---------------- */

  const deleteModel = async (id: string) => {
    await fetch(API_URL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    fetchModels();
  };

  /* ---------------- LOGIN SCREEN ---------------- */

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-sm bg-neutral-950 border border-neutral-800 rounded-2xl p-8">
          <h2 className="text-2xl text-center mb-6">
            Admin Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 rounded-lg bg-neutral-900 border border-neutral-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 p-3 rounded-lg bg-neutral-900 border border-neutral-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-full bg-amber-400 text-neutral-900 font-medium hover:bg-amber-300 transition"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  /* ---------------- ADMIN PANEL ---------------- */

  return (
    <div className="max-w-7xl mx-auto px-6 py-14">
      <h1 className="text-3xl mb-10">Admin Panel</h1>

      {/* ADD MODEL */}
      <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 mb-12">
        <h2 className="text-xl mb-6">Add / Update Model</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <input
            placeholder="ID (unique)"
            className="p-3 rounded-lg bg-neutral-900 border border-neutral-700"
            value={form.id}
            onChange={(e) => setForm({ ...form, id: e.target.value })}
          />
          <input
            placeholder="Name"
            className="p-3 rounded-lg bg-neutral-900 border border-neutral-700"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Age"
            className="p-3 rounded-lg bg-neutral-900 border border-neutral-700"
            value={form.age}
            onChange={(e) =>
              setForm({ ...form, age: Number(e.target.value) })
            }
          />
          <input
            placeholder="Skin Tone"
            className="p-3 rounded-lg bg-neutral-900 border border-neutral-700"
            value={form.tone}
            onChange={(e) => setForm({ ...form, tone: e.target.value })}
          />
          <input
            placeholder="Preference"
            className="p-3 rounded-lg bg-neutral-900 border border-neutral-700"
            value={form.preference}
            onChange={(e) =>
              setForm({ ...form, preference: e.target.value })
            }
          />
          <input
            placeholder="Image (/model1.jpg)"
            className="p-3 rounded-lg bg-neutral-900 border border-neutral-700"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />
        </div>

        <button
          onClick={saveModel}
          className="mt-6 px-6 py-3 rounded-full bg-amber-400 text-neutral-900 font-medium hover:bg-amber-300"
        >
          Save Model
        </button>
      </div>

      {/* MODELS TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full border border-neutral-800 rounded-xl overflow-hidden">
          <thead className="bg-neutral-900">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Age</th>
              <th className="p-4 text-left">Tone</th>
              <th className="p-4 text-left">Preference</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {models.map((m) => (
              <tr key={m.id} className="border-t border-neutral-800">
                <td className="p-4">{m.id}</td>
                <td className="p-4">{m.name}</td>
                <td className="p-4">{m.age}</td>
                <td className="p-4">{m.tone}</td>
                <td className="p-4">{m.preference}</td>
                <td className="p-4 flex gap-3">
                  <button
                    onClick={() => setForm(m)}
                    className="text-amber-400 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteModel(m.id)}
                    className="text-red-400 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {models.length === 0 && (
              <tr>
                <td colSpan={6} className="p-6 text-center text-neutral-500">
                  No models found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
