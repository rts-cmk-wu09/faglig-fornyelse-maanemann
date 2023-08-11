import Link from "next/link";

const Nav = () => {
    return (
            <nav className="text-cyan-500">
                <Link href="subsite">
                    &#62; Link in a global nav! &#60;
                </Link>
            </nav>
     );
}
 
export default Nav;