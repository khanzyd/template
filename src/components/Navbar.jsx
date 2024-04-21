import Image from "next/image";
import image from "/public/image.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" w-full flex flex-col justify-between ">
      <div className=" w-full p-2 flex justify-between items-center px-4">
        <Image src={image} width={150} alt="Logo" />
        <h1 className=" text-2xl font-bold text-neutral-600">Contact us - xyz@email.com</h1>
      </div>
      <div className="w-full bg-[#d8cbc4] flex justify-end gap-6 text-lg font-semibold px-4 py-2">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About us</Link>
        <Link href={"/departments"}>Departments</Link>
        <Link href={"/departments"}>Departments</Link>
        <Link href={"/departments"}>Departments</Link>
        <Link href={"/"}>Contact</Link>
      </div>
    </div>
  );
}
