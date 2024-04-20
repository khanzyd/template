import Link from "next/link"

export default function Navbar(){
    return (
        <>
            <div className="navbar">
                <Link className="nav_items" href="/">Home</Link>
                <Link className="nav_items" href="/about">About</Link>
            </div>
        </>
    ) 
}
