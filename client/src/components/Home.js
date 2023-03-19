import React from "react";

const Home = () => {
  return (
    <>
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div
            class="col-md-6 left-section"
            style={{ backgroundColor: "#e8ecf8", height: "100vh" }}
          ></div>
          <div class="col-md-6 right-section"></div>
        </div>
      </div>

      <div
        class="centered"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <p style={{ color: "blue", fontWeight: "bold" }}>WELCOME</p>
        <h1 style={{ color: "black", fontWeight: "bold", fontSize: "2rem" }}>
          I Am Full Stack Dev
        </h1>
      </div>
    </>
  );
};

export default Home;
