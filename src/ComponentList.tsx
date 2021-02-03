import * as React from 'react';

export interface IListProps {
  type: string;
  typeChange: (type: string) => void;
}

export class ComponentList extends React.Component<IListProps> {
  render() {
    return (
      <ul className={this.props.type}>
        <li onClick={() => this.props.typeChange('cube')}>Cube</li>
        <li onClick={() => this.props.typeChange('sphere')}>Sphere</li>
      </ul>
    );
  }
}
