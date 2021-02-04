import * as React from 'react';
import Links from './Links';

export interface IListProps {
  type: string;
  typeChange: (type: string) => void;
}

export class ComponentList extends React.Component<IListProps> {
  
  componentLinks = Links.map((link, i) => <li onClick={() => this.props.typeChange(link.id)} key={i}>{link.name}</li>);

  render() {
    return (
      <ul className={this.props.type}>
        {this.componentLinks}
      </ul>
    );
  }
}
