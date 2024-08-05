import "./App.css";

function App() {
  const name = "Anton";
  const imageUrl =
    "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg";
  const favoriteSite = {
    name: "Google",
    url: "https://www.google.com/",
  };
  const num1 = 5;
  const num2 = 10;
  const colors = ["Червоний", "Синій", "Зелений"];
  return (
    <div className="App">
      <header className="App-header">
        <h1>{name}</h1>
        <p>Ласкаво просимо до нашого сайту</p>
        <img src={imageUrl} alt="Bird" />
        <a href={favoriteSite.url}>{favoriteSite.name}</a>
        <p>Сума чисел: {num1 + num2}</p>
        <ul>
          {colors.map((color) => (
            <li key={color}>{color}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
