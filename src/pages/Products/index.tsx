import { useEffect, useState } from "react";
import Container from "../../components/container";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../services/firebase.config";
import { Link } from "react-router-dom";

interface productProps {
  id: string;
  description: string;
  descriptionHebrew: string;
  ingredients: string;
  name: string;
  owner: string;
  price: string;
  productHebrew: string;
  uid: string;
  weight: string;
  whatsapp: string;
  images: ImagesProps[];
  created: string;
}

interface ImagesProps {
  name: string;
  uid: string;
  url: string;
}

const Products = () => {
  const [products, setProducts] = useState<productProps[]>([]);

  useEffect(() => {
    function loadProducts() {
      const productsRef = collection(db, "products");

      const queryRef = query(productsRef, orderBy("created", "desc"));

      getDocs(queryRef)
        .then((snapshot) => {
          const productsList = [] as productProps[];
          snapshot.forEach((doc) => {
            productsList.push({
              id: doc.id,
              name: doc.data().name,
              ingredients: doc.data().ingredients,
              created: doc.data().created,
              description: doc.data().description,
              descriptionHebrew: doc.data().descriptionHebrew,
              images: doc.data().images,
              price: doc.data().price,
              weight: doc.data().weight,
              whatsapp: doc.data().whatsapp,
              owner: doc.data().owner,
              productHebrew: doc.data().productHebrew,
              uid: doc.data().uid,
            });
          });
          console.log(productsList);
          setProducts(productsList);
        })
        .catch((err) => {
          console.error(err);
        });
    }

    loadProducts();
  }, []);

  return (
    <section className="pt-12">
      <Container>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          Our Products
        </h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        <div className=" grid lg:grid-cols-3 sm:grid-cols-1 ">
          {products.map((product) => (
            <Link to={`/products/${product.id}`}>
              <div className="mt-10 w-full" key={product.id}>
                <div className="p-4">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={product.images[0].url}
                      alt="blog"
                    />
                    <div className="p-6 bg-white">
                      <h1 className="title-font text-lg font-medium text-[#aa7bc3] mb-3">
                        {product.name}
                      </h1>
                      <p className="leading-relaxed mb-3">
                        {product.description}
                      </p>
                      <div className="flex items-center flex-wrap">
                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                          See More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Products;
