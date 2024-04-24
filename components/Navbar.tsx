"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Department_Modal from "./Department_Modal";

const Navbar = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="h-10 bg-slate-300 flex gap-2 justify-end px-6 py-5 items-center font-semibold tracking-wide text-lg">
        <p className="hover:font-bold">Career</p>|
        <p className="hover:font-bold">Knowledge Resource Center</p>|
        <p className="hover:font-bold">Student Support</p>|
        <p className="hover:font-bold">ERP Login</p>
      </div>
      <div className="bg-slate-100 h-48 px-[3%] flex justify-between items-center">
        <div className="flex items-end">
          <Image src={"/gdclogo.jpeg"} className=" rounded-tl-full rounded-tr-full mr-2" alt="" height={"150"} width={"150"} />
          <div className=" ">
            <div className="ml-5 text-center mb-3">
              <h2 className="text-4xl font-bold">
                Government Dental College &amp; Hospital,{" "}
              </h2>
              <p className="text-xl font-semibold">chh. sambajinagar</p>
            </div>
            <div className="flex">
              <Image
                src={"/NAAC.png"}
                className=" rounded-full border-4 border-slate-600 mr-2"
                height={60}
                width={60}
                alt=""
              />
              <Image
                src={"/ACCRED2.png"}
                className=" rounded-full border-4 border-slate-600 mr-2"
                height={60}
                width={60}
                alt=""
              />
              <Image
                src={"/NAAC.png"}
                className=" rounded-full border-4 border-slate-600 mr-2"
                height={60}
                width={60}
                alt=""
              />
              <Image
                src={"/ACCRED3.png"}
                className=" rounded-full border-4 border-slate-600 bg-slate-200"
                height={60}
                width={60}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-evenly bg-yellow-600 text-slate-100 h-full px-2">
          <div>
            <h3 className="flex font-bold items-center">
              <Image
                src={"/email.svg"}
                alt=""
                height={30}
                width={30}
                className="mr-2"
              />
              Email :
            </h3>
            <p className="ml-4 underline">
              Lorem_ipsum@gmail.com <br /> GDC_aurangabad@edu.in
            </p>
          </div>
          <div>
            <h3 className="flex font-bold items-center">
              <Image
                src={"/email.svg"}
                alt=""
                height={30}
                width={30}
                className="mr-2"
              />
              Have a question? :
            </h3>
            <p className="ml-4 underline">
              call on 91+ 99990111 <br />
              student sec: 91+ 90002101
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-slate-400 h-14 px-[3%] flex items-center justify-center font-semibold text-lg tracking-wide relative z-20">
        <Link href={"/"}>Home</Link>
        <Link className="ml-6" href={"/about"}>
          about
        </Link>
        <div
          className="ml-6 flex relative z-0 h-full py-[1%]"
          onMouseEnter={() => setModal(true)}
          onMouseLeave={() => setModal(false)}
        >
          Departments
          <Image
            src={`${modal ? "/up.svg" : "down.svg"}`}
            alt=""
            height={10}
            width={25}
          />
          <div
            id="modal"
            className={
              `${
                modal ? "visible top-full h-fit" : "h-0 hidden overflow-hidden"
              }` + " min-w-fit absolute shadow-xl"
            }
          >
            <Department_Modal />
          </div>
        </div>
        <Link className="ml-6" href={"/"}>
          Infrastructure
        </Link>
        <Link className="ml-6" href={"/research"}>
          Research & Innovation
        </Link>
        <Link className="ml-6" href={"/"}>
          Patient Care
        </Link>
        <Link className="ml-6" href={"/"}>
          Student Support
        </Link>
        <Link className="ml-6" href={"/"}>
          Library
        </Link>
        <Link className="ml-6" href={"/"}>
          GDC Publications
        </Link>
        <Link className="ml-6" href={"/"}>
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
