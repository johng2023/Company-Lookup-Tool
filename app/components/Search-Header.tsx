export default function SearchInput() {

    // would query Apollo API and 

  return (
    <div className="mt-40 w-full flex flex-col justify-center items-center gap-5">
      <h1 className="text-4xl font-bold">Look up a Company</h1>
      <input
        className="w-100 p-3 border-2 rounded-2xl"
        type="search"
        placeholder="Type Company Name..."
      ></input>
    </div>
  );
}
