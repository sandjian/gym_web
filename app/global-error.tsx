"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="flex flex-col items-center justify-center h-screen bg-red-50">
        <h2 className="text-2xl font-bold text-red-600">¡Something went wrong!</h2>
        <p className="mt-4 text-gray-700">{error.message}</p>
        <button
          onClick={reset}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Refresh
        </button>
      </body>
    </html>
  );
}