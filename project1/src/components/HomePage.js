import Cards from "./cards";
import {useContext} from "react";
import { MainContext } from "../context/MainContext";

export default function HomePage() {
  const {loginCount} = useContext(MainContext);
  return (
    <>
      <div className="flex flex-col items-center text-white">
        <div className="w-[90%] mt-8">
          <img
            className="rounded-2xl"
            src="/assets/faded_gallery-OfdOEdGYiuk-unsplash.jpg"
            alt=""
          />
        </div>
        <div className="text-center text-wrap mx-8">
          <h1 className="text-3xl mb-4 mt-4">Your login count is {loginCount}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            nihil dolores minima numquam et impedit. Repellat veritatis
            reiciendis fuga assumenda cupiditate inventore aut nobis accusamus
            perferendis labore voluptate vel dolore sunt, modi corrupti cum quam
            voluptatem atque neque eum possimus eos. Fuga eos ad, obcaecati,
            soluta blanditiis in libero iure nostrum ullam numquam facere modi
            deserunt labore tempora officiis temporibus ex inventore quas!
            Voluptatibus sed delectus excepturi, adipisci debitis, voluptates,
            at nisi voluptatem quas inventore ex sint deleniti harum accusamus
            reprehenderit amet. Cupiditate reiciendis, repellendus et, explicabo
            eveniet ipsa maiores adipisci deserunt provident sint dolorum qui
            libero saepe delectus? Praesentium sint, voluptatum quas
            exercitationem illum unde, ipsam odit eius soluta laudantium porro!
            Magnam corrupti dolorem non tenetur architecto, in laboriosam
            aperiam doloribus consequatur beatae eius iste unde at? Repellat
            suscipit recusandae error deleniti voluptatem, assumenda quaerat
            distinctio necessitatibus quibusdam architecto cum. Inventore maxime
            praesentium beatae, molestias recusandae et expedita labore minima
            officia, aliquam libero quo magnam alias aut error! Dolorum illum
            tempora neque vero necessitatibus, nam doloribus ab beatae soluta
            atque odio hic quo, suscipit numquam ducimus magni! Velit sapiente
            consequuntur architecto ipsa itaque, molestiae voluptatibus
            accusantium nesciunt exercitationem placeat magni repellendus
            quibusdam et voluptates consequatur nam iure vitae aspernatur. ndae
            eligendi atque beatae similique autem repellendus delectus, in natus
            odio voluptatibus quos laudantium laboriosam minima dolor quis amet.
            Nisi nostrum, deserunt, totam laborum neque nemo, atque mollitia
            assumenda quidem doloribus quisquam vitae perferendis. Adipisci et
            eligendi magnam commodi itaque mollitia culpa cumque sed inventore?
            Officiis sit sint consectetur?
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 mt-8 text-wrap">
        <Cards heading="John" content="Employee of Oracle" />{" "}
        <Cards heading="Kate" content="Employee of Microsoft" />{" "}
        <Cards heading="Harry" content="Employee of Google" />
      </div>
    </>
  );
}
