import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/Username";

function Header() {
  return (
    <header className=" flex items-center justify-between border-b-4 border-stone-300 bg-amber-400 px-4  py-3 uppercase sm:px-6 ">
      <Link to="/" className="tracking-widest">
        Fast React Pizaa Co.
      </Link>
      {/* <br /> */}
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
