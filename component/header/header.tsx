import BtmHeader from "./btmheader/BtmHeader";
import TopHeader from "./topheader/TopHeader";

function Header() {
  return (
    <>
    <header style={{position: "fixed",top: 0,left: 0,right: 0,width: "100%",zIndex: 10000,background: "var(--white_color)",}}>
        <TopHeader />
        <BtmHeader />
    </header>
    </>
  );
}
export default Header;