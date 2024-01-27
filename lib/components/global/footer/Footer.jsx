import { cn } from "@/lib/utils"
import { styles } from "@/lib/styles";

import FooterWrapper from "./FooterWrapper";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

const Footer = ({style}) => {
  return (
    <footer 
        className={cn(styles.footer.style, style)}
    >
      <FooterWrapper>
        <FooterTop>
          Footer Top
        </FooterTop>
        <FooterBottom>
          Footer Bottom
        </FooterBottom>
      </FooterWrapper>
    </footer>
  )
};

export default Footer
