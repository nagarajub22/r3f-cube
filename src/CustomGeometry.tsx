import React, { Component } from 'react';
import { Mesh } from 'three';

export class CustomGeometry extends Component<{}> {
  meshRef: React.MutableRefObject<Mesh> | undefined = {
    current: new Mesh(),
  };
  animateRequestId: number | undefined;

  componentDidMount() {
    const animate = () => {
      this.animateRequestId = requestAnimationFrame(animate);
      if (this.meshRef?.current) {
        this.meshRef.current.rotation.x += 0.01;
        this.meshRef.current.rotation.y += 0.01;
      }
    };
    animate();
  }

  componentWillUnmount() {
    if (this.animateRequestId) {
      cancelAnimationFrame(this.animateRequestId);
    }
  }

  render() {
    return (
      <mesh ref={this.meshRef} position={[-1.2, 0, 0]} scale={[1, 1, 1]}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>
    );
  }
}
