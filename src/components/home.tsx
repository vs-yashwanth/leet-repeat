import Questions from "./questions";

const Home = (): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "50px",
        flexDirection: "column",
        fontFamily: "monospace",
        fontSize: "16px",
      }}
    >
      <h3>Leet Repeat</h3>
      <Questions />
    </div>
  );
};

export default Home;
