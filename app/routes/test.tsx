import Search from "~/components/Search";
import Btntoggle from "~/components/Btntoggle";

function test() {
  return (
    <div className='container bg-primary1 dark:bg-black dark:text-white p-16'>
      <Search />
      <Btntoggle />
      <p>
        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
        ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus
        ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque
        ornare sem lacinia quam venenatis vestibulum.
      </p>
    </div>
  );
}

export default test;
