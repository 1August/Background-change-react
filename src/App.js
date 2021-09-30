import './App.css'

const App = () => {
    setTimeout(()=>{
        document.querySelector(".App").style.backgroundColor = localStorage.getItem('bgcolor')
    }, 0)

    const setRed = () => {
        localStorage.setItem("bgcolor", "red")
        document.querySelector(".App").style.backgroundColor = "red"
    }

    const setGreen = () => {
        localStorage.setItem("bgcolor", "green")
        document.querySelector(".App").style.backgroundColor = "green"
    }

    const setBlue = () => {
        localStorage.setItem("bgcolor", "blue")
        document.querySelector(".App").style.backgroundColor = "blue"
    }

    return (
    <div className="App">
      <button className={"red"} onMouseOver={setRed} value={"red"}>Red</button>
      <button className={"green"} onMouseOver={setGreen} value={"green"}>Green</button>
      <button className={"blue"} onMouseOver={setBlue} value={"blue"}>Blue</button>
    </div>
  )
}

export default App