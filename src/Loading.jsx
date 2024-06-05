import React from "react";

const Loading = () => {
  const name = "Belal Uddin";
  return (
    <div style={styles.loadingContainer}>
      <p style={styles.text}>
        {name.split("").map((char, index) => (
          <span
            key={index}
            style={{
              ...styles.char,
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {char}
          </span>
        ))}
      </p>
    </div>
  );
};

const styles = {
  loadingContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    zIndex: 1000,
  },
  text: {
    fontSize: "40px",
    color: "#3498db",
    fontWeight: "bold",
    display: "flex",
  },
  char: {
    display: "inline-block",
    animation: "wave 1.5s infinite",
  },
};

const stylesKeyframes = `
@keyframes wave {
    0%, 60%, 100% {
        transform: initial;
    }
    30% {
        transform: translateY(-10px);
    }
}

@media (max-width: 1024px) {
  .text {
    font-size: 30px;
  }
}

@media (max-width: 768px) {
  .text {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .text {
    font-size: 20px;
  }
}
`;

const GlobalStyle = () => <style>{stylesKeyframes}</style>;

const App = () => (
  <>
    <GlobalStyle />
    <Loading />
  </>
);

export default App;
