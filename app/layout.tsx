import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trainer Platform",
  description: "Book and manage fitness trainers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <header className="bg-white shadow">
          <nav className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">TrainerHub</h1>
            <div className="space-x-4">
              <a href="/client/search" className="text-gray-700 hover:text-blue-600">Find Trainers</a>
              <a href="/trainer/register" className="text-gray-700 hover:text-blue-600">Become Trainer</a>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
