import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function Extensions() {
  return (
    <div className="bgimg-main">
      <div className="flex flex-row justify-end">
        <div className="flex justify-end flex-col items-start ml-[160px] sm:ml-[450px] xl:ml-[750px] mt-40">
          <h1 className="text-black text-xl w-[50%] my-4">
            ¡Nos encanta verte feliz, ten esta oferta para ti!
          </h1>
          <h1 className="text-black text-3xl xl:text-5xl font-bold w-10/12 my-4">
            Extensión para Facebook por tan solo $100
          </h1>
          <button className="bg-transparent hover:bg-black text-black hover:text-white border-black border-2 hover:border-black border-2 ease-in-out duration-500 px-2 md:px-8 py-3 my-2 rounded-md normal-case">
            <span className="flex flex-row justify-center items-center gap-2">
              <AddShoppingCartIcon />
              Comprar
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
