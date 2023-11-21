import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../services/firebase.config";
import Container from "../../components/container";
import { FaWhatsapp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "../../components/ui/dialog";

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

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<productProps>();
  const navigate = useNavigate();
  const [sliderPreview, setSliderPreview] = useState<number>(2.5);

  useEffect(() => {
    async function loadProduct() {
      if (!id) {
        return;
      }

      const docRef = doc(db, "products", id);
      getDoc(docRef)
        .then((snapshot) => {
          if (!snapshot.data()) {
            navigate("/");
          }
          setProduct({
            id: snapshot.id,
            created: snapshot.data()?.created,
            description: snapshot.data()?.description,
            descriptionHebrew: snapshot.data()?.descriptionHebrew,
            images: snapshot.data()?.images,
            ingredients: snapshot.data()?.ingredients,
            name: snapshot.data()?.name,
            owner: snapshot.data()?.owner,
            price: snapshot.data()?.price,
            productHebrew: snapshot.data()?.productHebrew,
            uid: snapshot.data()?.uid,
            weight: snapshot.data()?.weight,
            whatsapp: snapshot.data()?.whatsapp,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    loadProduct();
  }, [id]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSliderPreview(1);
      } else {
        setSliderPreview(2.5);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(product);

  return (
    <Container>
      {product && (
        <Swiper
          slidesPerView={sliderPreview}
          pagination={{ clickable: true }}
          spaceBetween={20}
          // navigation
        >
          {product?.images.map((image) => {
            return (
              <SwiperSlide key={image.name}>
                <Dialog>
                  <DialogTrigger>
                    <img
                      src={image.url}
                      alt=""
                      className="w-full h-96 object-cover"
                    />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogDescription>
                        <img
                          src={image.url}
                          alt=""
                          className="w-full h-96 object-cover"
                        />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
      {product && (
        <main className="w-full bg-white rounded-lg p-6 my-4">
          <div className="flex flex-col sm:flex-row mb-4 items-center justify-between">
            <h1>{product.name}</h1>
            <h1 className="flex items-center justify-center text-xl">
              <span className="text-xl">₪ </span>
              {product.price}
            </h1>
          </div>
          <div className="flex flex-col w-full gap-6 my-4">
            <div>
              <p>Description</p>
              <strong>{product.description}</strong>
            </div>
            <div>
              <p>weight</p>
              <strong>{product.weight}</strong>
            </div>
            <div>
              <p>Ingredients</p>
              <strong>{product.ingredients}</strong>
            </div>
          </div>
          <a
            className="w-full bg-green-500 hover:bg-green-600 h-12 flex items-center justify-center rounded-2xl text-white gap-4 text-xl"
            href={`https://api.whatsapp.com/send?phone=972${product?.whatsapp}&text=Did you like this ${product.name} talk with us for order`}
            target="_blank"
          >
            <FaWhatsapp size={26} color="white" />
            For order
          </a>
        </main>
      )}
    </Container>
  );
};

export default Product;
