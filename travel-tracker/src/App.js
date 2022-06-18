import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Card";
import Data from "./Components/data";

function App() {
  const Total = Array.isArray(Data)
    ? Data.map((datas) => {
        return (
          <Card
            title={datas.title}
            location={datas.location}
            googleMapsUrl={datas.googleMapsUrl}
            startDate={datas.startDate}
            endDate={datas.endDate}
            description={datas.description}
            imageUrl={datas.imageUrl}
          />
        );
      })
    : null;
  return (
    <>
      <Header />
      {Total}
    </>
  );
}

export default App;
