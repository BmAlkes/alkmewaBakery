import sliceCake from "../../assets/american-heritage-chocolate-YQ9S0RU8LE8-unsplash__1_-removebg-preview.png";
import cake1 from "../../assets/1.jpeg";
import cake2 from "../../assets/2.jpeg";
import cake3 from "../../assets/3.jpeg";
// import cake4 from "../../assets/4.jpeg";
import cake5 from "../../assets/5.jpeg";
import cake6 from "../../assets/6.jpeg";
import cake7 from "../../assets/7.jpeg";

const Home = () => {
  return (
    <main className="w-full h-96 p-4 " id="home">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
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

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              Our Cakes
            </h1>
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
    </main>
  );
};

export default Home;
