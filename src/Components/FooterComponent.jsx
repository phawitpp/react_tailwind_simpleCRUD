import { Footer } from "flowbite-react";
const FooterComponent = () => {
  return (
    <>
      <Footer className="bottom-0">
        <Footer.Copyright href="#" by="Phawit Monchaising" year={2022} />
        <Footer.LinkGroup className="mt-3 flex-wrap items-center text-sm sm:mt-0">
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </>
  );
};
export default FooterComponent;
