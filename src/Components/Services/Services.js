import data from "../../help.json";
import Arrow from "../../icons/Arrow";
import "./Services.css";

const Services = () => {
  return (
    <div className="mt-5 servicesContainer">
      <p className="servicesTitle">
        Hizmetlerimiz <div className="seperator" />
      </p>
      <p className="servicesDesc">
        Kaliteli, Güvenilir, Tam Zamanında, Çözüm Odaklı Hizmetler
      </p>
      <div className="container p-0">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 gy-5 gx-3 g-lg-5">
          {data.map((item) => (
            <div key={item.title} className="col p-3">
              <div className="card">
                {" "}
                <div className="">
                  {" "}
                  <div className="cardImageWrapper">
                    <img
                      src={item.image}
                      alt="placeholder"
                      className="cardImage"
                    />
                    <div className="overlay"></div>
                  </div>
                  <div className="cardHeader">{item.title}</div>
                  <div className="cardText">
                    <p>{item.text}</p>
                  </div>
                  <div className="cardArrow">
                    <Arrow width={45} />{" "}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
