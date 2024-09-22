import Footer from "./components/footer";


export default function Home() {
  return (
    <div className="parent">
      <div className="header"> HAPPY BIRTHDAY TO HAMID RAZA</div>

      <div className="mainflex">
      <div className="card">
        <div className="balloons">
          <div className="balloon" style={{ backgroundColor: "#ff9ff3" }}></div>
          <div className="balloon" style={{ backgroundColor: "#feca57" }}></div>
          <div className="balloon" style={{ backgroundColor: "#ff6b6b" }}></div>
          <div className="balloon" style={{ backgroundColor: "#48dbfb" }}></div>
          <div className="balloon" style={{ backgroundColor: "#1dd1a1" }}></div>
        </div>
        <div className="message">
          <h1>
            Happy Birthday,
            <br /> <span className="nam">Hamid Raza!</span>
          </h1>
          <p>
            Wishing you a wonderful day filled with love, joy, and happiness!
          </p>
        </div>
      </div>
    
      <div className="pic"></div>

      </div>
      <div className="footer">  <Footer />
    </div >
      
      </div>
  );
}
