import { useState, useEffect } from "react";

export function useLocalForm(key, initialState) {
  const [formData, setFormData] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      if (!saved) return initialState;
      const parsed = JSON.parse(saved);

      
      if (Array.isArray(parsed) || typeof parsed !== "object" || parsed === null) {
        return initialState;
      }

      return { ...initialState, ...parsed };
    } catch {
      return initialState;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(formData));
    } catch {}
  }, [formData, key]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData(initialState);
    localStorage.removeItem(key);
  };

  return { formData, handleChange, resetForm };
}