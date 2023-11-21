import { useContext, useEffect, useState } from "react";
import HeaderDashboard from "../../components/headerDashboard";
import { AuthContext } from "../../context";
import Container from "../../components/container";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db, storage } from "../../services/firebase.config";
import { deleteObject, ref } from "firebase/storage";
import { FiTrash } from "react-icons/fi";

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

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState<productProps[]>([]);
  useEffect(() => {
    function loadProducts() {
      if (!user?.uid) {
        return;
      }
      const productsRef = collection(db, "products");
      const queryRef = query(productsRef, where("uid", "==", user.uid));

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
        .catch((e) => {
          console.log(e);
        });
    }
    loadProducts();
  }, [user]);

  const handleDeleteItem = async (product: productProps) => {
    const itemProduct = product;
    const docRef = doc(db, "products", itemProduct.id);
    await deleteDoc(docRef);

    itemProduct.images.map(async (image) => {
      const imagePath = `images/${image.uid}/${image.name}`;
      const imageRef = ref(storage, imagePath);

      try {
        await deleteObject(imageRef);
        setProducts(
          products.filter((product) => product.id !== itemProduct.id)
        );
      } catch (e) {
        console.log(e);
      }
    });
  };

  return (
    <div>
      <HeaderDashboard />
      <div>
        <Container>
          <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <section
                className="w-full bg-white rounded-lg relative"
                key={product.id}
              >
                <button
                  className="absolute right-2 border-2 p-1 rounded-full bg-white flex items-center justify-center top-2 drop-shadow-md"
                  onClick={() => {
                    handleDeleteItem(product);
                  }}
                >
                  <FiTrash size={26} color="#000" />
                </button>
                <img
                  src={product.images[0].url}
                  alt=""
                  className="w-full rounded-lg mb-2 max-h-70"
                />
                <p className="font-bold mt-1 px-w mb-2">{product.name}</p>
                <div className="flex flex-col px-2">
                  <strong className="text-black font-bold mt-4">
                    <span className="text-2xl">₪</span> {product.price}
                  </strong>
                </div>
                <div className="w-full h-px bg-slate-200 my-2"></div>
                <div className="px-2 pb-2">
                  <p className="text-black">{product.description}</p>
                </div>
              </section>
            ))}
          </main>
        </Container>
      </div>
    </div>
  );
};
export default Dashboard;
