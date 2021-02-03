import * as React from 'react';
import { ComponentList } from './ComponentList';
import { ComponentView } from './ComponentView';
export class App extends React.Component<{}, { type: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      type: 'cube',
    };
  }

  render() {
    return (
      <div id="wrapper">
        <div className="panel panel-left">
          <h2>Components</h2>
          <ComponentList
            type={this.state.type}
            typeChange={(type) => this.setState({ type: type })}
          />
        </div>
        <div className="panel panel-right">
          <ComponentView type={this.state.type} />
        </div>
      </div>
    );
  }
}
