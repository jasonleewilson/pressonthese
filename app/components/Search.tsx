import { Form } from "@remix-run/react";

function Search() {
  return (
    <div>
      Search:{" "}
      <Form>
        <input
          type='text'
          name='query'
          placeholder='Search tweets...'
          className='w-80 rounded-md p-2 text-sm caret-pink-500 ring-1 ring-gray-900/10 focus:ring-2 focus:ring-pink-500 focus:outline-none dark:bg-gray-950/25 dark:ring-1 dark:ring-white/5 dark:focus:bg-gray-950/10 dark:focus:ring-2 dark:focus:ring-pink-500'
          //   defaultValue={params.get("query")}
        />
      </Form>
    </div>
  );
}

export default Search;
