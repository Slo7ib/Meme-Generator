import trollFace from "../assets/troll-face.png";

export default function Header() {
  return (
    <header className=" bg-purple-700 flex items-center space-x-5 p-5">
      <img className="size-16 ml-6" src={trollFace} />
      <h1 className="font-bold text-2xl text-white">Meme Generator</h1>
    </header>
  );
}
