import React from 'react';

export interface Param {
  id: number;
  name: string;
  type: 'string';
}

export interface ParamValue {
  paramId: number;
  value: string;
}

export interface Model {
  paramValues: ParamValue[];
  colors: any[];
}

export interface Props {
  params: Param[];
  model: Model;
}

interface State {
  paramValuesMap: Record<number, string>;
}

export class ParamEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const paramValuesMap: Record<number, string> = {};
    for (const { paramId, value } of props.model.paramValues) {
      paramValuesMap[paramId] = value;
    }
    this.state = { paramValuesMap };
  }

  handleChange = (paramId: number, newValue: string) => {
    this.setState((prevState) => ({
      paramValuesMap: {
        ...prevState.paramValuesMap,
        [paramId]: newValue,
      },
    }));
  };

  public getModel(): Model {
    const paramValues: ParamValue[] = this.props.params.map((param) => ({
      paramId: param.id,
      value: this.state.paramValuesMap[param.id] ?? '',
    }));

    return {
      paramValues,
      colors: this.props.model.colors,
    };
  }

  render() {
    const { params } = this.props;
    const { paramValuesMap } = this.state;

    return (
      <div>
        {params.map((param) => (
          <div key={param.id} style={{ marginBottom: '10px' }}>
            <label style={{ display: 'inline-block', width: '150px', fontWeight: 'bold' }}>
              {param.name}
            </label>
            <input
              type="text"
              value={paramValuesMap[param.id] ?? ''}
              onChange={(e) => this.handleChange(param.id, e.target.value)}
            />
          </div>
        ))}
      </div>
    );
  }
}
