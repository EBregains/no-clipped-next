import Cart from "./Cart";
import Logo from "./NavBar/Logo";
import Navigation from "./NavBar/Navigation";

export default async function NavBar() {
  return <nav className="w-full bg-white flex items-center justify-center border-b-[1px] border-slate-200">
    <div className="grid h-12 grid-cols-3 w-full max-w-[1000px]">
      <Navigation />
      <Logo />
      <div className="flex justify-end items-center">
        <Cart />
        {/* <UserMenu /> */}
      </div>
    </div>
  </nav>
} 