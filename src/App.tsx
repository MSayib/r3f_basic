import './App.css'
// import { Hello1 } from './Hello.tsx'
import { Canvas } from '@react-three/fiber'
import ThreeElement from './ThreeElement'

function App() {
  return (
    <>
    {/* <Hello1 from="ozi" to="yib"></Hello1> */}
      <Canvas
        // orthographic //2D Camera
        // camera={{
        //   // zoom: 150, //Harus pakai ini biar keliatan di 2D Camera, dan tidak ada FOV di Orthoraphic
        //   near: 1,
        //   far: 20,
        //   fov: 75,
        //   position: [5, 5, 0] //X, Y, Z
        // }}
      >
        <ThreeElement />
      </Canvas>
      {/* R3F Basic */}
    </>
  )
}

export default App
