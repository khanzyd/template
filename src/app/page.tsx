import Image from "next/image";
import College from "/public/College.webp";
export default function Home() {
  return (
    <div>
      <div className=" overflow-hidden relative bg-[#5b3e41]">
        <div className=" flex gap-3 text-lg font-regular scroll w-full py-1 ">
          <a className="  text-white cursor-pointer ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            optio mollitia perspiciatis totam nihil dolorem distinctio deserunt
            pariatur molestias officiis?
          </a>
        </div>
      </div>
      <div  className=" w-full flex justify-center py-2 flex-col items-center overflow-hidden">
        <div className="pic-ctn">
            <Image src={College} width={1080} alt="College Image" className="pic" />
            <Image src={College} width={1080} alt="College Image" className="pic" />
            <Image src={College} width={1080} alt="College Image" className="pic" />
            <Image src={College} width={1080} alt="College Image" className="pic" />
            <Image src={College} width={1080} alt="College Image" className="pic" />
        </div>
        <section className="mt-32 mx-16 italic text-[1.5rem]">
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor nisi ex alias consequuntur consequatur veritatis quo animi quod asperiores saepe voluptate, ipsum nihil, incidunt omnis veniam in magni deserunt expedita illum debitis id! Sunt quod ad impedit quasi amet. Id laboriosam molestias quam ratione possimus impedit veniam illo? Quos, laudantium.</div>
        </section>
        <section className="flex mx-16 mt-16 text-[1.25rem] items-center gap-16 pl-16">
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor nisi ex alias consequuntur consequatur veritatis quo animi quod asperiores saepe voluptate, ipsum nihil, incidunt omnis veniam in magni deserunt expedita illum debitis id! Sunt quod ad impedit quasi amet. Id laboriosam molestias quam ratione possimus impedit veniam illo? Quos, laudantium.</div>
            <img src={"https://images.pexels.com/photos/4069882/pexels-photo-4069882.jpeg?auto=compress&cs=tinysrgb&w=600"} 
                alt="image"
                className="w-1/2"></img>
        </section>
        <section className="flex mx-16 mt-16 text-[1.25rem] items-center gap-16 pl-16">
            <img src={"https://images.pexels.com/photos/4069882/pexels-photo-4069882.jpeg?auto=compress&cs=tinysrgb&w=600"} 
                alt="image"
                className="w-1/2"></img>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor nisi ex alias consequuntur consequatur veritatis quo animi quod asperiores saepe voluptate, ipsum nihil, incidunt omnis veniam in magni deserunt expedita illum debitis id! Sunt quod ad impedit quasi amet. Id laboriosam molestias quam ratione possimus impedit veniam illo? Quos, laudantium.</div>
        </section>
        <section className="flex mx-16 mt-16 text-[1.25rem] items-center gap-16 pl-16">
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor nisi ex alias consequuntur consequatur veritatis quo animi quod asperiores saepe voluptate, ipsum nihil, incidunt omnis veniam in magni deserunt expedita illum debitis id! Sunt quod ad impedit quasi amet. Id laboriosam molestias quam ratione possimus impedit veniam illo? Quos, laudantium.</div>
            <img src={"https://images.pexels.com/photos/4069882/pexels-photo-4069882.jpeg?auto=compress&cs=tinysrgb&w=600"} 
                alt="image"
                className="w-1/2"></img>
        </section>
        <section className="flex mx-16 mt-16 text-[1.25rem] items-center gap-16 pl-16">
            <img src={"https://images.pexels.com/photos/4069882/pexels-photo-4069882.jpeg?auto=compress&cs=tinysrgb&w=600"} 
                alt="image"
                className="w-1/2"></img>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor nisi ex alias consequuntur consequatur veritatis quo animi quod asperiores saepe voluptate, ipsum nihil, incidunt omnis veniam in magni deserunt expedita illum debitis id! Sunt quod ad impedit quasi amet. Id laboriosam molestias quam ratione possimus impedit veniam illo? Quos, laudantium.</div>
        </section>
      </div>
    </div>
  );
}
