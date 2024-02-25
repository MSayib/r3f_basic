import * as THREE from 'three';
import { useThree, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function ThreeElement() {
    /**
     * size adalah ukuran dari canvas (window browser)
     * gl adalah WebGLRenderer (renderer yang digunakan)
     * scene adalah Scene (tempat objek-objek berada)
     * camera adalah Camera (kamera yang mengambil gambar)
     */
    const { size, gl, scene, camera } = useThree();
    const boxRef = useRef<THREE.Mesh>(null); //Mirip getElementById di HTML DOM, tapi untuk Objek ThreeJs


    // Ini adalah cara membuat objek 3D dari ThreeJs
    // const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
    // const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
    // const cube = new THREE.Mesh( geometry, material ); 
    // scene.add( cube );


    // 60 fps
    useFrame((state, delta) => {
        // console.log('state', state);
        // console.log('delta', delta);
        // console.log("boxRef", boxRef);
        // boxRef.current.rotation.x += delta;
        // boxRef.current.position.y -= 0.01;
        // boxRef.current.scale.z += 0.01;
    })

    /**
     * useFrame adalah hook yang digunakan untuk membuat animasi
     * atau perubahan didalam scene
     */

    /**
     * Sebuah objek seperti mobil, pesawat, atau karakter
     * semuanya terbuat dari mesh.
     * Dan mesh ini terdiri dari geometry dan material
     */

    /**
     * geometry adalah bentuk dari objek (seperti HTML)
     * material adalah warna atau tekstur dari objek (seperti CSS )
     * gabungan geometry dan material adalah mesh
     * kita bisa membuat objek 3D dengan membuat mesh dan dimasukan ke dalam scene
     */


    // Ini adalah cara membuat objek 3D dari R3F (ReactThreeFiber)
   return(
    <>
        <directionalLight position={[5, 5, 5]} />
            <mesh 
            ref={boxRef} //Hook untuk mengakses objek 3D
            rotation={
                    [
                        THREE.MathUtils.degToRad(45),
                        THREE.MathUtils.degToRad(45),
                        0
                    ]
                }
            >
            <boxGeometry />
            <meshStandardMaterial color="red" />
        </mesh>
    </>
   ) 
}