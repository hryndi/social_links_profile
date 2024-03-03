import avatar from "../assets/images/avatar-jessica.jpeg";

function App() {
  return (
    <main className="card-wrapper">
      <img src={avatar} alt="" />
      <h1>Dmytro Hrynov</h1>
      <p className="country">Germany, Baden-Württemberg</p>
      <p className="bio"> "Front-end enthusiast developer" </p>
      <div className="button-wrapper">
        <button>GitHub</button>
        <button>Frontend Mentor</button>
        <button>LinkedIn</button>
        <button>Twitter</button>
        <button>Instagram</button>
      </div>
    </main>
  );
}

export default App;
