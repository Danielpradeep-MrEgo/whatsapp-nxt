import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          height={200}
          style={{ marginBottom: 10 }}
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
        />
        <Circle color="#3CBC28" size={40} />
      </div>
    </center>
  );
}

export default Loading;
