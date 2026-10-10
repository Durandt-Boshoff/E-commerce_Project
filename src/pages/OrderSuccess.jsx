import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="w-full max-w-sm rounded-lg bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl">
          ✓
        </div>

        <h1 className="mt-5 text-2xl font-medium">Yay, it's ordered!</h1>

        <p className="mt-2 text-sm text-gray-600">
          Thanks a lot for shopping with us. We got your order and we're
          packing it now. 
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-md bg-neutral-900 px-6 py-2.5 text-sm text-white hover:bg-black"
        >
          Continue shopping
        </Link>
      </div>
    </main>
  );
}