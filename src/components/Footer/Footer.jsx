import cl from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={cl.footerRow}>
      <div className={cl.dev}>
        <p>Powered By DevTeam</p>
      </div>
      <div className={cl.info}>
        <p className={cl.title}>Choko 2024</p>
        <a href="tel: +3(097)">+38(097)-XXX-XX-XX</a>
        <a href="tel: +3(097)">+38(097)-XXX-XX-XX</a>
      </div>
    </div>
  );
};

export default Footer;
