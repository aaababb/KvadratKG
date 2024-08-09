import { replaceUrlPart } from "../../../utils";

function Banner({ heading }) {
  const { title, image } = heading;

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(#0001, #000), url(${replaceUrlPart(image)})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <h1 className="absolute bottom-[250px] w-full md:w-3/4 text-4xl md:text-5xl font-semibold text-white ml-4 md:ml-[40px] lg:ml-[100px]">
        {title}
      </h1>
    </div>
  );
}

export default Banner;
