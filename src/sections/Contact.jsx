import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_42a2bkg",
        "template_b170ac1",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "pDiaaY84pLHqXfZlC"
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        setForm({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => setSent(false), 3000);
      })
.catch((error) => {
  console.log("FAILED", error);
  alert(error.text);
});
  };

  return (
    <section
      className="bg-white text-black dark:bg-black dark:text-white py-24 md:py-28 px-6"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Get In <span className="text-blue-500">Touch</span>
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Let’s build something together 🚀
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I’m a Software Engineer focused on building scalable web
              applications and AI-driven systems. If you’re hiring or working on
              something interesting, I’d love to connect and collaborate.
            </p>

            <div className="space-y-3 text-gray-600 dark:text-gray-300">
              <p><strong>Email:</strong> pawarprathmeshr@gmail.com</p>
              <p><strong>Location:</strong> Pune, Maharashtra, India</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 p-6 rounded-xl border border-gray-300 dark:border-gray-800 transition duration-300 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full p-3 bg-gray-100 text-black dark:bg-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full p-3 bg-gray-100 text-black dark:bg-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
            />

            <textarea
              placeholder="Your Message"
              required
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full p-3 bg-gray-100 text-black dark:bg-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg h-32 focus:outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {sent && (
              <p className="text-green-400 text-sm">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;