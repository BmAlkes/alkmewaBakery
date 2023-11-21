import { FiTrash, FiUpload } from "react-icons/fi";
import Container from "../../../components/container";
import HeaderDashboard from "../../../components/headerDashboard";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../../components/input";
import { ChangeEvent, useContext, useState } from "react";
import { AuthContext } from "../../../context";
import { v4 as uuidv4 } from "uuid";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { db, storage } from "../../../services/firebase.config";
import { addDoc, collection } from "firebase/firestore";

const schema = z.object({
  name: z.string().nonempty("O campo e obrigatorio"),
  namehebrew: z.string().nonempty("O campo e obrigatorio"),
  ingredients: z.string().nonempty("O campo e obrigatorio"),
  price: z.string().nonempty("O campo e obrigatorio"),
  whatsapp: z.string().nonempty("O campo e obrigatorio"),
  description: z.string().nonempty("O campo e obrigatorio"),
  descriptionHebrew: z.string().nonempty("O campo e obrigatorio"),
  weight: z.string().nonempty("O campo e obrigatorio"),
});

type FormData = z.infer<typeof schema>;

interface ImageProps {
  uid: string;
  name: string;
  previewUrl: string;
  url: string;
}
const RegisterNew = () => {
  const { user } = useContext(AuthContext);
  const [images, setImages] = useState<ImageProps[]>([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const handleDataSubmit = (data: FormData) => {
    if (images.length === 0) {
      alert("Envie uma imagem do produto");
      return;
    }

    const imagesList = images.map((image) => {
      return {
        uid: image.uid,
        name: image.name,
        url: image.url,
      };
    });

    addDoc(collection(db, "products"), {
      name: data.name,
      productHebrew: data.namehebrew,
      price: data.price,
      ingredients: data.ingredients,
      weight: data.weight,
      whatsapp: data.whatsapp,
      description: data.description,
      descriptionHebrew: data.descriptionHebrew,
      created: new Date(),
      owner: user?.email,
      uid: user?.uid,
      images: imagesList,
    })
      .then(() => {
        reset();
        setImages([]);
        console.log("cadastrado com sucesso");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  // funcao que recebe o arquivo no input
  const handleFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];

      // se tiver os types correto salva
      if (image.type === "image/jpeg" || image.type === "image/png") {
        await handleUpload(image);
      } else {
        return;
      }
    }
  };

  async function handleUpload(image: File) {
    if (!user?.uid) {
      return;
    }
    const currentUId = user.uid;
    const uidImage = uuidv4();

    // comecando a salvar no firestorage
    // referencia onde eu quero salva a image no banco de dados
    const uploadRef = ref(storage, `images/${currentUId}/${uidImage}`);
    // salvando nova image
    uploadBytes(uploadRef, image)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadUrl) => {
          const imageItem = {
            name: uidImage,
            uid: currentUId,
            previewUrl: URL.createObjectURL(image),
            url: downloadUrl,
          };
          setImages((images) => [...images, imageItem]);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleDeleteImage = async (image: ImageProps) => {
    const imagePath = `images/${image.uid}/${image.name}`;

    const imageRef = ref(storage, imagePath);

    try {
      await deleteObject(imageRef);
      setImages(images.filter((item) => item.url !== image.url));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <HeaderDashboard />
      <Container>
        <div className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2 mt-4">
          <button className="border-2 w-48 rounded-lg flex items-center justify-center cursor-pointer border-gray-600 h-32">
            <div className="absolute cursor-pointer">
              <FiUpload size={30} color="#000" className="cursor-pointer" />
            </div>
            <div className="cursor-pointer">
              <input
                type="file"
                accept="image/*"
                className="opacity-0 cursor-pointer"
                onChange={handleFile}
              />
            </div>
          </button>
          {images.map((image) => (
            <div
              key={image.name}
              className="w-full h-32 flex items-center relative justify-center"
            >
              <button className="absolute">
                <FiTrash
                  size={28}
                  color="#fff"
                  onClick={() => handleDeleteImage(image)}
                />
              </button>
              <img
                src={image.previewUrl}
                alt=""
                className="rounded-lg w-full h-32 object-cover"
              />
            </div>
          ))}
        </div>
        <div className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2 mt-2">
          <form className="w-full" onSubmit={handleSubmit(handleDataSubmit)}>
            <div className="mb-3">
              <p className="mb-2 font-medium"> Product name</p>
              <Input
                type="text"
                register={register}
                name="name"
                error={errors.name?.message}
                placeholder="product Name"
              />
            </div>
            <div className="mb-3">
              <p className="mb-2 font-medium"> Product name Hebrew</p>
              <Input
                type="text"
                register={register}
                name="namehebrew"
                error={errors.namehebrew?.message}
                placeholder="שם מוצר בעברית"
              />
            </div>
            <div className="mb-3">
              <p className="mb-2 font-medium"> Ingredients</p>
              <Input
                type="text"
                register={register}
                name="ingredients"
                error={errors.ingredients?.message}
                placeholder="Ingredients"
              />
            </div>
            <div className="mb-3">
              <p className="mb-2 font-medium"> Price</p>
              <Input
                type="text"
                register={register}
                name="price"
                error={errors.price?.message}
                placeholder="Price"
              />
            </div>
            <div className="mb-3">
              <p className="mb-2 font-medium"> Weight</p>
              <Input
                type="text"
                register={register}
                name="weight"
                error={errors.weight?.message}
                placeholder="Weight"
              />
            </div>
            <div className="mb-3">
              <p className="mb-2 font-medium"> WhatsApp</p>
              <Input
                type="text"
                register={register}
                name="whatsapp"
                error={errors.whatsapp?.message}
                placeholder="Whatsapp"
              />
            </div>
            <div className="mb-3">
              <p className="mb-2 font-medium">Description</p>
              <textarea
                className="border-2 w-full rounded-md px-2 h-20 resize-none"
                {...register("description")}
                placeholder="Description about the product"
                name="description"
                id="description"
              />
              {errors.description && (
                <p className="mb-1 font-medium text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>
            <div className="mb-3">
              <p className="mb-2 font-medium">Description Hebrew</p>
              <textarea
                className="border-2 w-full rounded-md px-2 h-20 resize-none"
                {...register("descriptionHebrew")}
                placeholder="לגבי המוצר בעברית"
                name="descriptionHebrew"
                id="descriptionHebrew"
              />
              {errors.description && (
                <p className="mb-1 font-medium text-red-500">
                  {errors.descriptionHebrew?.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[#aa7bc3] text-white font-bold h-10 rounded-lg"
            >
              Register product
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default RegisterNew;
