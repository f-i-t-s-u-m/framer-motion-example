import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" bg-neutral-900  ">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <h1 className=" text-3xl text-center p-4 text-white">Navbar</h1>{" "}
        </Link>
        <ol className=" flex justify-around p-4 gap-4 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>About</li>
          <li>Contact</li>
        </ol>
      </div>
    </div>
  );
};
export default Navbar;
