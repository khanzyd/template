import Link from "next/link"

export default function Footer(){
    return <>
        <div className="text-white bg-[#4b3e41] mt-8">
            <div className="bg-[#d8cbc4] text-black flex py-4 justify-around gap-16 text-[1.25rem]">
                <div className="w-[50%] flex flex-col items-center gap-4">
                    <div className="font-bold">Quick Links</div>
                    <Link href={""}>Home</Link>
                    <Link href={""}>Departments</Link>
                    <Link href={""}>Departments</Link>
                    <Link href={""}>Departments</Link>
                    <Link href={""}>About Us</Link>
                </div>
                <div className="w-[50%] flex flex-col gap-4">
                    <div className="font-bold">Contact Us</div>
                    <div>
                        Address: <br></br> Navkhanda, Aurangabad <br></br> Maharashtra 431001 
                    </div>
                    <div>
                        Email: <br></br> gdca83@yahoo.com
                    </div>
                    <div>
                        Phone: <br></br> 0240-2402382/0240-2402383
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-16 text-2xl">
                © Copyright GDC 2024. Designed and Developed by MIT.
            </div>
        </div>
    </>
}