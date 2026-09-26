"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  type?: string;
  message?: string;
};

export default function ContactForm() {
  const [type, setType] = useState("A new project");
  const [errors, setErrors] = useState<FormErrors>({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!type) {
      newErrors.type = "Please select a project type.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((previous) => ({
        ...previous,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log({
      ...formData,
      type,
    });

    // Submit API request here
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>
          Name
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <span className="form-error">{errors.name}</span>
          )}
        </label>

        <label>
          Email
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <span className="form-error">{errors.email}</span>
          )}
        </label>
      </div>

      <label>
        Subject
        <input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What can we help with?"
          aria-invalid={!!errors.subject}
        />
        {errors.subject && (
          <span className="form-error">{errors.subject}</span>
        )}
      </label>

      <fieldset>
        <legend>Project type</legend>

        <div className="project-pills">
          {["A new project", "Partnership", "Just saying hi"].map(
            (item) => (
              <button
                key={item}
                type="button"
                className={type === item ? "selected" : ""}
                onClick={() => {
                  setType(item);

                  setErrors((previous) => ({
                    ...previous,
                    type: undefined,
                  }));
                }}
              >
                {item}
              </button>
            ),
          )}
        </div>

        {errors.type && (
          <span className="form-error">{errors.type}</span>
        )}
      </fieldset>

      <label>
        Message
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us a little about your goals..."
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <span className="form-error">{errors.message}</span>
        )}
      </label>

      <button className="submit-button" type="submit">
        Send message
        <ArrowRight size={16} />
      </button>
    </form>
  );
}