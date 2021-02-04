import { Component } from 'react';
import { Canvas } from 'react-three-fiber';
import { CustomBufferGeometry } from './CustomBufferGeometry';
import { CustomGeometry } from './CustomGeometry';

export class ComponentView extends Component<{ type: string }> {
  render() {
    let view = null;

    if (this.props.type === 'c_geometry') {
      view = <CustomGeometry/>;
    }
    if (this.props.type === 'c_buffer_geometry') {
      view = <CustomBufferGeometry />;
    }

    return (
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {view}
      </Canvas>
    );
  }
}
