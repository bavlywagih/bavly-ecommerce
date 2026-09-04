import BtmHeader from "@/component/header/BtmHeader";
import TopHeader from "@/component/header/TopHeader";


export default function Home() {
  return (
    <>
    <header style={{position: "fixed",top: 0,left: 0,right: 0,width: "100%",zIndex: 10000,background: "var(--white_color)",}}>
      <TopHeader />
      <BtmHeader />
    </header>
    </>
  );
}
