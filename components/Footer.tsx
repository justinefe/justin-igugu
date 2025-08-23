import Link from "next/link";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/justin-igugu-4bb465171/" },
  { label: "GitHub", href: "https://github.com/justinefe" },
  { label: "Email", href: "mailto:efejustin3@gmail.com" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 mt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Justin Igugu. Built with Next.js and Tailwind CSS.
          </p>
          
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}