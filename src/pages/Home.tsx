import { useNavigate } from "react-router-dom";
import Page from "../HOC/HomepageWrapper";

export default function Home(): JSX.Element {
  const navigate = useNavigate();
  return (
    <Page title="Home">
      <h2 className="textgit a git -[20vw] leading-none text-primary font-primary ">
        Arcane
      </h2>
      <p className="w-1/2 relative z-[2]">
        Championnes de leurs villes jumelles et rivales (la huppée Piltover et
        la sous-terraine Zaun), deux sœurs Vi et Powder se battent dans une
        guerre où font rage des technologies magiques et des perspectives
        diamétralement opposée.
      </p>
      <button
        className="relative z-[2] border-2 border-white px-3 py-2 mt-5 hover:border-primary hover:text-primary"
        onClick={() => navigate("/trailer")}
      >
        Voir les trailers
      </button>
    </Page>
  );
}
