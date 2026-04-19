import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black text-white">
      <h1 className="font-bold">SEA PARCEL</h1>

      <div className="flex gap-6">
        <Link href="/">HOME</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/services">SERVICES</Link>
        <Link href="/contact">CONTACT</Link>
      </div>

      <button className="bg-purple-500 px-4 py-1 rounded">
        LOGIN
      </button>
    </nav>
  );
}