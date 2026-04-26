function Footer() {
  return (
    <footer className="bg-white text-black dark:bg-black dark:text-white py-6 border-t border-gray-300 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Prathmesh Pawar • Built with React, Tailwind & Vercel
      </div>
    </footer>
  );
}

export default Footer;