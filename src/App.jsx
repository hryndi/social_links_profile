import avatar from "../assets/images/avatar-jessica.jpeg";

function App() {
  return (
    <main className="card-wrapper">
      <img src={avatar} alt="" />
      <h1>Dmytro Hrynov</h1>
      <p className="country">Germany, Baden-Württemberg</p>
      <p className="bio"> "Front-end enthusiast developer" </p>
      <div className="button-wrapper">
        <a href="https://github.com/hryndi">
          <button>GitHub</button>
        </a>
        <a href="https://www.frontendmentor.io/profile/hryndi">
          <button>Frontend Mentor</button>
        </a>
        <a href="https://www.linkedin.com/in/dmytro-hrynov-2701522ba/">
          <button>LinkedIn</button>
        </a>
        <button>Twitter</button>
        <button>Instagram</button>
      </div>
    </main>
  );
}

export default App;
