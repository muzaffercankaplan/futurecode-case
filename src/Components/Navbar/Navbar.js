import { useEffect, useRef, useState } from "react";
import Arrow from "../../icons/Arrow";
import Leaflet from "../../icons/Leaflet";
import MegaMenuItem from "./MegaMenuItem";
import "./Navbar.css";

const Navbar = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const hoverRef = useRef();
  const megaMenuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        hoverRef.current &&
        !hoverRef.current.contains(e.target) &&
        !megaMenuRef.current.contains(e.target)
      ) {
        setShowMegaMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navContainer border-bottom d-flex align-items-center justify-content-between">
      <img className="navBarImage" src="/BRAND.svg" />
      <div className="d-none d-sm-block d-md-block d-lg-none">
        <button className="navbarMiddleButton">Teklif Al</button>
      </div>
      <button
        onClick={() => {
          setOpenNav((prev) => !prev);
        }}
        className="navbar-toggler"
        type="button"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navLink">
        <div className="me-3">
          <button
            onMouseEnter={() => setShowMegaMenu(false)}
            className="navbarMiddleButton"
          >
            Teklif Al
          </button>
        </div>
        <ul className="d-flex align-items-center m-0 gap-3">
          <li
            onMouseEnter={() => {
              setShowMegaMenu(true);
            }}
            ref={hoverRef}
          >
            Kurumsal
          </li>
          <li onMouseEnter={() => setShowMegaMenu(false)}>
            Lojistik Hizmetlerimiz
          </li>
          <li onMouseEnter={() => setShowMegaMenu(false)}>Kariyer</li>
          <li onMouseEnter={() => setShowMegaMenu(false)}>İletişim</li>
          <li onMouseEnter={() => setShowMegaMenu(false)}>Blog</li>
          <li onMouseEnter={() => setShowMegaMenu(false)}>TR</li>
        </ul>
      </div>
      <div
        ref={hoverRef}
        className={`mobileNav ${openNav ? "openMobileNav" : ""}`}
      >
        <div className="mobileNavContent">
          <div className="me-3 d-block d-sm-none d-md-none d-lg-none">
            <button className="navbarMiddleButton">Teklif Al</button>
          </div>
          <ul className="d-block d-sm-flex flex-row flex-sm-row flex-md-row gap-1 gap-md-5 m-0">
            <li
              onMouseEnter={() => {
                setShowMegaMenu(true);
              }}
              ref={hoverRef}
            >
              Kurumsal
            </li>
            <li>Lojistik Hizmetlerimiz</li>
            <li>Kariyer</li>
            <li>İletişim</li>
            <li>Blog</li>
            <li>TR</li>
          </ul>
        </div>
      </div>
      <div
        ref={megaMenuRef}
        className={`megaMenu ${showMegaMenu ? "show" : ""}`}
        onMouseEnter={() => setShowMegaMenu(true)}
        onMouseLeave={() => setShowMegaMenu(false)}
      >
        <div className="megaMenuContainer d-flex justify-content-between">
          <div className="d-flex flex-column justify-content-between w-100 me-5">
            <div className="d-flex justify-content-between w-100 flex-wrap gap-1 gap-sm-3">
              <div>
                <MegaMenuItem
                  title="Kurumsal"
                  menu={[
                    "Hakkımızda",
                    "Tarihçemiz",
                    "Sponsorluklar",
                    "İş Ortaklığı",
                  ]}
                />
              </div>
              <div>
                <MegaMenuItem
                  title="İnsan Kaynakları"
                  menu={["İnsan Kaynakları", "Politikamız Kariyer"]}
                />
              </div>
              <div style={{ maxWidth: "180px" }}>
                <MegaMenuItem
                  title="Yönetim Sistemleri"
                  menu={[
                    "Sertifikalarımız",
                    "Politikalar",
                    "Veri Gizliliği ve Güvenlik (KVKK)",
                  ]}
                />
              </div>
              <div>
                <MegaMenuItem
                  title="Lojistik Rehberi"
                  menu={[" Lojistik Terimler Sözlüğü"]}
                />
              </div>
            </div>
            <div>
              {" "}
              <MegaMenuItem
                icon
                color=" #31A40F"
                title="Sürdürülebilirlik"
                menu={["Yeşil Lojistik"]}
              />
            </div>
          </div>{" "}
          <div className="megaMenuImageContainer position-relative ms-5">
            <img
              className="menuImage"
              src="/mega-menu-image.png"
              width={270}
              height={355}
            />
            <span className="menuImageHover" />
            <p className="megaMenuImageText position-absolute">
              Yeşil Lojistik{" "}
              <span className="ms-1">
                {" "}
                <Leaflet light />{" "}
              </span>
            </p>
            <span className="megaMenuImageArrow position-absolute">
              <Arrow />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
