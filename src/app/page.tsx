import Image from "next/image";
import College from "/public/College.webp";
export default function Home() {
  return (
    <div className=" ">
      <div className=" overflow-hidden relative bg-[#5b3e41]">
        <div className=" flex gap-3 text-lg font-regular scroll w-full py-1 ">
          <a className="  text-white cursor-pointer ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            optio mollitia perspiciatis totam nihil dolorem distinctio deserunt
            pariatur molestias officiis?
          </a>
        </div>
      </div>
      <div  className=" w-full flex justify-center py-2 flex-col items-center">
        <Image src={College} width={1220} alt="College Image" className=" rounded-md" />
        <p className=" w-4/5 text-lg font-medium py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil facilis, alias pariatur voluptates ullam, sit quos harum porro, iste quaerat repellendus. Impedit dolores itaque cupiditate quis consequuntur dolorum suscipit ipsam quidem, omnis accusantium natus, distinctio eius, repellendus voluptatibus commodi exercitationem ipsum labore fugiat quia eaque dicta accusamus similique possimus? Beatae quod a accusamus nobis soluta mollitia eius assumenda voluptate. Quas cumque velit dicta vitae tempora voluptatibus exercitationem magni harum sed incidunt provident quos, rem sapiente magnam doloremque, enim recusandae earum? Dolorem accusamus rerum consequatur aliquam animi saepe blanditiis reprehenderit fuga accusantium, tempore cum odio possimus, unde illo assumenda eum veritatis ullam? Dignissimos vel quaerat distinctio sint, consequuntur veniam quas neque assumenda repellendus porro ipsa quisquam hic nemo iste sunt culpa obcaecati non ipsam in dolorum est officiis expedita. Quidem eos temporibus, ducimus delectus eveniet impedit sequi iste laudantium dolorem corrupti molestias explicabo vero nam maiores fugiat officiis eum cumque iusto. Consectetur voluptates earum quis adipisci blanditiis perferendis a necessitatibus modi, eius eos quo minima, tempora expedita aut eligendi reprehenderit, rerum id natus? Quaerat error ex quos nostrum laboriosam praesentium assumenda obcaecati eligendi porro commodi, eveniet, nulla omnis aut magnam eum reprehenderit aspernatur ab quasi dolor voluptates accusantium molestias accusamus animi.</p>
      </div>
    </div>
  );
}
