import Link from "next/link";

function Header(){
    return (
        <header className="flex justify-between">
            {/*Logo */}
            <div>
              <h2  className="text-5xl font-semibold">My Website</h2>  
            </div>
            {/* Links */}
            <nav>
                    <ul className="flex gap-x-5 text-3xl">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href= "/about" >About_Us</Link></li>
                        <li><Link href="/contact" >Contact_Us</Link></li>
                    </ul>
                </nav>
        </header>
    );
}

export default Header;
<div>
<div className="homeContainer"></div>

<div className="childContainer">
    width: 250px
    height:300px
    </div>
</div>