import React from 'react';
import Styles from './styles/slider.module.scss';

export interface SliderProps {
  value: number;
  id?: string;
  label?: boolean;
  onChange?: (event: any, value?: number) => void;
}

export const Slider: React.SFC<SliderProps> = ({
  value,
  id,
  label,
  onChange: handleChange,
}) => {
  return (
    <div className={Styles['input-range-wrap']}>
      <input
        id={id}
        max="100"
        min="0"
        onChange={handleChange}
        type="range"
        value={value}
      />
      {label && <div className={Styles['input-range-percent']}>{value}%</div>}
    </div>
  );
};

export class StatefulSlider extends React.Component<
  SliderProps,
  { value: number }
> {
  public state = {
    value: this.props.value,
  };

  public handleChange = (event: any) => {
    const value = event.target.value;
    this.setState({ value }, () => {
      this.props.onChange(event, value);
    });
  }

  public render() {
    const { onChange } = this.props;
    const { value } = this.state;
    return (
      <Slider {...this.props} value={value} onChange={this.handleChange} />
    );
  }
}

Slider.defaultProps = {
  label: true,
  value: 0,
};

export default Slider;
