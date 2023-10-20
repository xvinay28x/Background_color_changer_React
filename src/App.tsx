import { useState } from 'react'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
      <div className="h-screen" style={{backgroundColor: color}}>
        <div className="h-20 w-full justify-center flex gap-3 bg-white">
          <button className="h-14 w-20 rounded-full mt-3 shadow-xl" style={{ backgroundColor: "darkorange" }} onClick={() => setColor("darkorange")}>Orange</button>
          <button className="h-14 w-20 rounded-full mt-3 shadow-xl" style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>Blue</button>
          <button className="h-14 w-20 rounded-full mt-3 shadow-xl" style={{backgroundColor: "green"}} onClick={() => setColor("green")}>Green</button>
          <button className="h-14 w-20 rounded-full mt-3 shadow-xl" style={{backgroundColor: "pink"}} onClick={() => setColor("pink")}>Pink</button>
          <button className="text-white h-14 w-20 rounded-full mt-3 shadow-xl" style={{backgroundColor: "black"}} onClick={() => setColor("black")}>Black</button>
          <button className="h-14 w-20 rounded-full mt-3 shadow-xl" style={{backgroundColor: "yellow"}} onClick={() => setColor("yellow")}>yellow</button>
          <button className="h-14 w-20 rounded-full mt-3 shadow-xl" style={{backgroundColor: "darkviolet"}} onClick={() => setColor("darkviolet")}>Violet</button>
          <button className="h-14 w-20 rounded-full mt-3 shadow-xl" style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
          <button className="h-14 w-20 rounded-full mt-3 shadow-xl" style={{backgroundColor: "gray"}} onClick={() => setColor("gray")}>Gray</button>
          <button className="h-14 w-20 rounded-full mt-3 shadow-xl" style={{backgroundColor: "cyan"}} onClick={() => setColor("cyan")}>Cyan</button>
          <button className="h-14 w-20 rounded-full mt-3 shadow-xl" style={{backgroundColor: "teal"}} onClick={() => setColor("teal")}>Teal</button>
          <button className="h-14 w-20 rounded-full mt-3 shadow-xl" style={{backgroundColor: "lime"}} onClick={() => setColor("lime")}>Lime</button>
          <button className="h-14 w-20 rounded-full mt-3 shadow-xl" style={{backgroundColor: "crimson"}} onClick={() => setColor("crimson")}>Crimson</button>
          <button className="h-14 w-20 rounded-full mt-3 shadow-xl" style={{backgroundColor: "darkgray"}} onClick={() => setColor("darkgray")}>Stone</button>
          <button className="h-14 w-20 rounded-full mt-3 shadow-xl" style={{backgroundColor: "purple"}} onClick={() => setColor("purple")}>Purple</button>
          <button className="h-14 w-20 rounded-full mt-3 shadow-xl" style={{backgroundColor: "brown"}} onClick={() => setColor("brown")}>Brown</button>
        </div>

        <h1 className="text-center mt-72 text-6xl text-slate-700 italic">Change The Background Color</h1>
      </div>
    </>
  )
}

export default App
