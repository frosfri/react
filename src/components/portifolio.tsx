import icon from "../assets/imgs/oculos-juliete.jpg";
import icon2 from "../assets/imgs/oculos-vovo.png";

function Portifolio() {
  const items = [
    { title: "Juliete", category: "oculos de malandro", img: icon },
    { title: "Tartaruga", category: "oculos de vovo", img: icon2 }
  ];

  return (
    <section className="portfolio">
      <div className="grid">
        {items.map((item, index) => (
          <div key={index} className="card">
            <img src={item.img} alt={item.title} />
            <p className="category">{item.category}</p>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portifolio;