import sliceCake from "../../assets/american-heritage-chocolate-YQ9S0RU8LE8-unsplash__1_-removebg-preview.png";
import cake1 from "../../assets/1.jpeg";
import cake2 from "../../assets/2.jpeg";
import cake3 from "../../assets/3.jpeg";
// import cake4 from "../../assets/4.jpeg";
import cake5 from "../../assets/5.jpeg";
import cake6 from "../../assets/6.jpeg";
import cake7 from "../../assets/7.jpeg";
import { FaWhatsapp } from "react-icons/fa";
import { FacebookIcon, InstagramIcon } from "lucide-react";

const Home = () => {
  return (
    <main className="w-full h-96  p-4 " id="home">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-8 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={sliceCake}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[##aa7bc3]">
              Delicious Cake
            </h1>
            <p className="mb-8 leading-relaxed">
              "Experience the Artistry of Exceptional Baking: Where Every Crumb
              Tells a Story of Pure Delight at Alkmewa Bakery. Indulge in
              Handcrafted Perfection, Elevating Moments with Every Irresistible
              Bite."
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                More Products
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font " id="cakes">
        <div className="container px-5 py-12 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Our Cakes
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              "Savor the Sweet Symphony of Elegance and Flavor: Our Cakes,
              Crafted with Precision and Passion, Transform Every Celebration
              into a Unforgettable Occasion. Explore the Pinnacle of Baking
              Excellence at{" "}
              <span className="text-[#aa7bc3] text-2xl"> Alkmewa Bakery</span>"
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={cake1}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={cake2}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={cake3}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={cake6}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={cake5}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={cake7}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font" id="new">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                New Arrivels
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              "Savor the Sweet Symphony of Elegance and Flavor: Our Cakes,
              Crafted with Precision and Passion, Transform Every Celebration
              into a Unforgettable Occasion. Explore the Pinnacle of Baking
              Excellence at{" "}
              <span className="text-[#aa7bc3] text-2xl"> Alkmewa Bakery</span>"
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-top mb-6"
                  src={cake3}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Chocolate
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Come soon
                </h2>
                <p className="leading-relaxed text-base">Come soon</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-top mb-6"
                  src={cake5}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  come soon
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  come soon
                </h2>
                <p className="leading-relaxed text-base">come soon</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={cake6}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Come soon
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Come soon
                </h2>
                <p className="leading-relaxed text-base">Come soon</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={cake7}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Come soon
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Come soon
                </h2>
                <p className="leading-relaxed text-base">Come soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container px-5 py-12 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                About Us
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex lg:flex-row sm:flex-col ">
            <div className="md:p-2 p-1 w-1/2 sm:w-full">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={cake5}
              />
            </div>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-center">
              Welcome to Alkmewa Bakery, where the aroma of freshly baked
              delights fills the air and each bite is a taste of pure
              indulgence. At Alkmewa Bakery, we are passionate about crafting
              artisanal baked goods that elevate the simple joy of sharing
              delicious moments. Our story begins with a dedication to the art
              of baking. Established 2023, Alkmewa Bakery has become a beloved
              fixture in Ashkelon, known for our commitment to quality,
              creativity, and exceptional customer experiences. We believe in
              the magic of handcrafted recipes, using only the finest
              ingredients to bring you a symphony of flavors and textures that
              tantalize the taste buds. What sets us apart is our unwavering
              commitment to freshness. Every morning, our skilled bakers rise
              before the sun to create a tempting array of bread, pastries, and
              confections from scratch. From the crispy crust of our artisanal
              bread to the decadent layers of our signature cakes, each creation
              is a testament to our dedication to perfection. At Alkmewa Bakery,
              we embrace diversity in taste. Our menu boasts a diverse selection
              to cater to all palates, from classic favorites that evoke
              nostalgia to innovative treats that push the boundaries of
              culinary delight. Whether you're seeking the comfort of a warm
              croissant or the excitement of a new flavor experience, our bakery
              is a haven for connoisseurs and casual snackers alike. We take
              pride in being more than just a bakery; we are a community hub.
              Our inviting ambiance welcomes you to savor the moment, whether
              you're catching up with friends, celebrating milestones, or simply
              treating yourself to a well-deserved treat. The smiles on our
              customers' faces fuel our passion and inspire us to continually
              raise the bar in the world of baked delights. Alkmewa Bakery is
              not just a place to buy baked goods; it's a destination for
              culinary bliss. Join us on a journey of taste and tradition, where
              every bite tells a story of craftsmanship and care. Thank you for
              making us a part of your moments – we look forward to delighting
              your senses with the magic of Alkmewa Bakery. Indulge in the
              extraordinary. Indulge with{" "}
              <span className="text-[#aa7bc3] text-2xl"> Alkmewa Bakery</span>"
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font relative" id="contact">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Contact Us
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>

        <section className="text-gray-600 body-font relative">
          <div className="absolute inset-0 bg-gray-300">
            <iframe
              // style={"filter: grayscale(1) contrast(1.2) opacity(0.4);"}
              // marginheight="0"
              // marginwidth="0"
              title="map"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54332.195208823454!2d34.56465405!3d31.66772505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15029c5141685e73%3A0xeb72211d3092dc0f!2zQXNjYWzDo28!5e0!3m2!1spt-BR!2sil!4v1700379189403!5m2!1spt-BR!2sil"
              width="100%"
              height="100%"
              // frameborder="0"
            ></iframe>
          </div>
          <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Contact
              </h2>

              <div className="relative mb-4 flex justify-between">
                <p>Phone</p>
                <a
                  href={`https://api.whatsapp.com/send?phone=9720547724271&text=Did you like your cakes and want to  talk with us for a order?`}
                >
                  Whatsapp
                  <FaWhatsapp size={26} color="#aa7bc3" />
                </a>
              </div>
              <div className="relative mb-4  flex justify-end flex-col items-end gap-6">
                <a href="">
                  Instagram
                  <InstagramIcon size={26} color="#aa7bc3" />
                </a>
                <a href="">
                  Facebook <FacebookIcon size={26} color="#aa7bc3" />
                </a>
                <a href=""></a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Home;
