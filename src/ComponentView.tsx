import * as React from 'react';

export class ComponentView extends React.Component<{type: string}> {
  render() {
    return (
        <div>
          {this.props.type}
        </div>
    );
  }
}
