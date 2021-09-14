import React, { Suspense, Component, useEffect, useState } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, Environment, Loader, useTexture } from "@react-three/drei";
import { LUTPass } from "three/examples/jsm/postprocessing/LUTPass";
import texture1Pic from "../../../../resources/texture1.jpg";
import texture2Pic from "../../../../resources/texture2.jpg";
import texture3Pic from "../../../../resources/texture3.jpg";
import texture4Pic from "../../../../resources/texture4.jpg";
import "./topIntro.css";

extend({ LUTPass })

function Icosahedron(props) {
    const [hovered, sethovered] = useState(false)
    const textureList = useTexture([texture1Pic, texture2Pic, texture3Pic, texture4Pic]);
    function handleClick() {
        props.changeSkin((props.textureIndex + 1) % textureList.length);
    }
    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])
    return (
        <mesh onClick={handleClick} onPointerOver={() => sethovered(true)} onPointerOut={() => sethovered(false)}>
            <icosahedronGeometry />
            <meshPhysicalMaterial map={textureList[props.textureIndex]} envMapIntensity={0.4} clearcoat={0.8} clearcoatRoughness={0} roughness={1} metalness={0.9} />
        </mesh>
    );
}
export default class TopIntro extends Component {
    constructor() {
        super();
        this.state = {
            randomIndex: 0,
        }
    }
    changeSkin(newIndex) {
        this.setState({
            randomIndex: newIndex,
        });
    }
    render() {
        const bgUrl = require(`../../../../resources/top_intro_bg${this.state.randomIndex + 1}.jpg`).default;
        return (
            <div className="top-intro-container" style={{ backgroundImage: `url('${bgUrl}')` }}>
                <Canvas frameloop="demand" dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }} onClick={this.changeSkin.bind(this)}>
                    <spotLight intensity={0.5} penumbra={1} position={[5, 15, 10]} />
                    <pointLight position={[-20, -5, -10]} color="white" intensity={0.8} />
                    <Suspense fallback={null} >
                        <Icosahedron textureIndex={this.state.randomIndex} changeSkin={(newIndex) => { this.changeSkin(newIndex) }} />
                        <Environment preset="warehouse" />
                    </Suspense>
                    <OrbitControls autoRotate={true} enableZoom={false} />
                </Canvas>
                <Loader />
            </div>
        )
    }
}


