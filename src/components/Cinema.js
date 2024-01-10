import React from "react";
import gifCinema from "../img/cinema.gif";

const Cinema = () => {
  return (
    <section className="cinema">
      <h2>Примеры работ</h2>
      <div className="cinema-container">
        <div>
          <div className="container-of-gif">
            <img src={gifCinema} className="gif-screen" />
          </div>
          <div>
            <span>
              "Идем в кино" - сайт кинотеатра, состоящий из клиентской и
              административной части. В клиентской части можно просматривать все
              сеансы, бронировать билеты. В административной части можно
              настраивать залы, фильмы, сеансы, открывать/закрывать продажи.
              Более подробно cо всем функционалом можно ознакомиться{" "}
              <a
                href="https://github.com/MarinaNogovitsyna/-inema/tree/main"
                target="_blank"
              >
                здесь
              </a>
              .
            </span>
            <button className="btn-visit">
              <a
                target="_blank"
                href="https://marinanogovitsyna.github.io/-inema/"
              >
                Visit Site
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cinema;
