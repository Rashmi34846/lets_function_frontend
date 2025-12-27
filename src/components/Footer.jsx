export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 text-sm">
      <div className="mx-auto max-w-7xl p-6 text-center text-gray-500">
        © {new Date().getFullYear()} Lets Function. All rights reserved.
      </div>
    </footer>
  );
}