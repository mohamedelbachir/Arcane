import Page from "../HOC/TrailerPageWrapper";
import Thumbmail from "../components/Thumbmail";
import imgTrailer from "./../assets/images/thumbmail1.jpg";
import imgTrailerII from "./../assets/images/thumbmail2.jpg";
export default function Trailer(): JSX.Element {
  return (
    <Page>
      <div className="absolute z-[3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4 w-[70%] items-center">
        <Thumbmail
          description="BANDE ANNONCE"
          title="TRAILER #1"
          img={imgTrailer}
        />
        <Thumbmail
          description="TRAILER FINAL"
          title="TRAILER #1"
          img={imgTrailerII}
        />
      </div>
    </Page>
  );
}
