import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 xl:px-0 flex items-center justify-center py-20">
      <div className="max-w-2xl min-h-[400px] flex flex-col items-center justify-center gap-y-5">
        <h2 className="text-4xl font-bold">Page not Found</h2>
        <p className="text-base font-medium text-center">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <Link
          href={"/"}
          className="bg-black text-white w-44 h-12 rounded-full text-base font-semibold flex items-center justify-center hover:bg-gray-800 duration-200"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
