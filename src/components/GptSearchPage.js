import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearchPage = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_URL})` }} // Apply background image here
      />
      <div className="relative z-10 p-4">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GPTSearchPage;