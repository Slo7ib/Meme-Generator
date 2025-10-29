import { useState, useEffect } from "react";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  console.log(allMemes);

  function handleChange(event) {
    const { name, value } = event.currentTarget;

    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  }

  function changeMeme() {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    setMeme((prevMeme) => ({
      ...prevMeme,
      imageUrl: allMemes[randomIndex].url,
    }));
  }

  return (
    <main>
      <div>
        <div className="flex flex-col sm:flex-row justify-center sm:space-x-28 mt-3 space-y-4 sm:space-y-0">
          <label className="flex flex-col font-semibold leading-6 w-full sm:w-auto">
            Top Text
            <input
              className="border text-black p-1.5 mt-2 rounded-lg w-full"
              type="text"
              placeholder="One does not simply"
              name="topText"
              onChange={handleChange}
              value={meme.topText}
            />
          </label>

          <label className="flex flex-col font-semibold leading-6 w-full sm:w-auto">
            Bottom Text
            <input
              className="border text-black p-1.5 mt-2 rounded-lg w-full"
              type="text"
              placeholder="Walk into Mordor"
              name="bottomText"
              onChange={handleChange}
              value={meme.bottomText}
            />
          </label>
        </div>

        <button
          className="w-2/4 my-9 bg-violet-600 p-2.5 rounded-2xl flex mx-auto justify-center font-bold text-white cursor-pointer"
          onClick={changeMeme}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="relative justify-center flex">
        <img src={meme.imageUrl} />
        <span className="absolute top-0 flex justify-center mx-auto text-white font-black text-4xl ">
          {meme.topText}
        </span>
        <span className=" absolute bottom-0 text-white font-black text-4xl">
          {meme.bottomText}
        </span>
      </div>
    </main>
  );
}
