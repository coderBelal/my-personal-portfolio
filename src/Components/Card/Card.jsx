
import "./CardProject.css";
import crypto from "../../assets/crypto.png";
import spotify from "../../assets/spotify.png";
import tomato from "../../assets/tomato.png";
const Card = () => {
  return (
    <>
      <h1>
        My <span>Project</span>
      </h1>
      <div className="grid-container">
        <div className="card" data-aos="zoom-in">
          <img
            src="https://raw.githubusercontent.com/coderBelal/image/main/imdb.jpg"
            alt="Image 1"
          />
          <div className="card-desc">
            <h5>IMDB Clone</h5>
            <h6>
              Display a catalogue of movies with titles, posters, and maybe
              short descriptions.
            </h6>
          </div>
          <div className="card-tech">
            Technology: <p> React</p> <p> Vite</p> <p>Context Api</p>
          </div>
          <div className="btn">
            <a href="https://imdb-clone-xi-ten.vercel.app/">
              {" "}
              <button className="button live-button">Live</button>
            </a>
            <a href="https://github.com/coderBelal/IMDB-Clone.git">
              {" "}
              <button className="button github-button">Github</button>
            </a>
          </div>
        </div>
        <div className="card" data-aos="zoom-in">
          <img
            src="https://raw.githubusercontent.com/coderBelal/image/main/Screenshot%202024-05-16%20110528.jpg"
            alt="Image 2"
          />
          <div className="card-desc">
            <h5>Short Music</h5>
            <h6>
              Upbeat and energetic pop track perfect for a summer road
              tripHaunting melody with a driving rhythm, ideal for a suspenseful
              movie scene Relaxing piano piece with calming strings, great for
              unwinding after a long day
            </h6>
          </div>
          <div className="card-tech">
            Technology: <p> React</p> <p> Vite</p> <p>Context Api</p>
          </div>
          <div className="btn">
            <a href="https://react-shorts-music.vercel.app/">
              {" "}
              <button className="button live-button">Live</button>
            </a>
            <a href="https://github.com/coderBelal/React-Shorts-Music.git">
              {" "}
              <button className="button github-button">GitHub</button>
            </a>
          </div>
        </div>
        <div className="card" data-aos="zoom-in">
          <img src={spotify} alt="Image 1" />
          <div className="card-desc">
            <h5>Spotify Clone</h5>
            <h6>
              Stream your favorite music anytime, anywhere with our Spotify
              clone. Enjoy personalized playlists and seamless audio
              experiences.
            </h6>
          </div>
          <div className="card-tech">
            Technology: <p> React</p> <p> Vite</p> <p>Context Api</p>
          </div>
          <div className="btn">
            <a href="https://super-song.vercel.app/">
              <button className="button live-button">Live</button>
            </a>
            <a href="https://github.com/coderBelal/super-song.git">
              {" "}
              <button className="button github-button">GitHub</button>
            </a>
          </div>
        </div>
        <div className="card" data-aos="zoom-in">
          <img src={tomato} alt="Image 1" />
          <div className="card-desc">
            <h5>Food Web</h5>
            <h6>
              {" "}
              Savor exquisite flavors and impeccable service at our restaurant.
              Indulge in culinary delights and create unforgettable dining
              memories with us.
            </h6>
          </div>
          <div className="card-tech" data-aos="zoom-in">
            Technology: <p> Context Api</p> <p>React</p>
          </div>
          <div className="btn">
            <a href="https://tomato-app-opal.vercel.app/">
              {" "}
              <button className="button live-button">Live</button>
            </a>
            <a href="https://github.com/coderBelal/tomato-web.git">
              {" "}
              <button className="button github-button">GitHub</button>
            </a>
          </div>
        </div>
        <div className="card" data-aos="zoom-in">
          <img src={crypto} alt="Image 1" />
          <div className="card-desc">
            <h5>Crypto Web</h5>
            <h6>
              {" "}
              Join our cutting-edge crypto platform for secure trading, instant
              transactions, and real-time market insights. Start your crypto
              journey today!
            </h6>
          </div>
          <div className="card-tech">
            Technology: <p>Vite</p> <p> Context Api</p> <p>React</p>
          </div>
          <div className="btn">
            <a href="https://crypto-word-ruby.vercel.app/">
              {" "}
              <button className="button live-button">Live</button>
            </a>
            <a href="https://github.com/coderBelal/crypto-word.git">
              {" "}
              <button className="button github-button">GitHub</button>
            </a>
          </div>
        </div>

        <div className="card" data-aos="zoom-in">
          <img
            src="https://raw.githubusercontent.com/coderBelal/image/main/Screenshot%202024-05-16%20110850.jpg"
            alt="Image 1"
          />
          <div className="card-desc">
            <h5>Multiple Page E-Commerce</h5>
            <h6>
              {" "}
              A simple react app that shows the characters of the famous TV
              series Breaking Bad. It uses the Breaking Bad API to fetch the
              data. It also has a search bar to search for a particular
              character.
            </h6>
          </div>
          <div className="card-tech">
            Technology: <p> Html</p> <p> Css</p> <p>JavaScript</p>
          </div>
          <div className="btn">
            <a href="https://multi-page-e-commerce-site.vercel.app/">
              {" "}
              <button className="button live-button">Live</button>
            </a>
            <a href="https://github.com/coderBelal/-multi-page-e-commerce-site.git">
              {" "}
              <button className="button github-button">GitHub</button>
            </a>
          </div>
        </div>
        <div className="card" data-aos="zoom-in">
          <img
            src="https://raw.githubusercontent.com/coderBelal/image/main/Screenshot%202024-05-16%20111026.jpg"
            alt="Image 1"
          />
          <div className="card-desc">
            <h5>Gemini Clone</h5>
            <h6>
              This technology uses machine learning to mimic a specific persons
              voice. By analyzing voice recordings, AI can create synthetic
              speech that sounds remarkably similar to the original speaker.
              This is useful for various applications like creating audiobooks,
              generating voiceovers, or preserving the voices of historical
              figures.,
            </h6>
          </div>
          <div className="card-tech">
            Technology: <p> React</p> <p> Vite</p> <p>Context Api</p>
          </div>
          <div className="btn">
            <a href="https://gemini-ai-clone-nu.vercel.app/">
              {" "}
              <button className="button live-button">Live</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
