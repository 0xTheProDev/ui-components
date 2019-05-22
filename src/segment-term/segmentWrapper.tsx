import React, { RefObject } from 'react';

export interface SegmentWrapperProps {
  children?: any;
  editing?: boolean;
  onSubmit?: () => boolean;
}
export default class SegmentWrapper extends React.Component<
  SegmentWrapperProps,
  { editing: boolean }
> {
  public static defaultProps = {
    editing: false,
  };
  public state = { editing: this.props.editing };

  private self: RefObject<HTMLDivElement> = React.createRef();

  public render() {
    return (
      <div ref={this.self}>
        {this.props.children(this.state.editing, this.onEdit, this.self)}
      </div>
    );
  }
  public componentWillUnmount() {
    document.removeEventListener('click', this.submit);
  }
  public componentDidMount() {
    if (this.props.editing) {
      document.addEventListener('click', this.submit);
    }
  }
  public onEdit = () => {
    this.setState(prev => {
      const editing = !prev.editing;
      if (editing) {
        document.addEventListener('click', this.submit);
      }

      return { editing };
    });
  };
  public submit = (event: MouseEvent) => {
    const target = event.target as Element;
    const className = target.getAttribute('class');
    const segmentTerm =
      this.self.current.querySelector('.segment-term') || this.self.current;

    const finishSubmit = () => {
      this.setState({ editing: false });
      document.removeEventListener('click', this.submit);
    };

    if (
      !(
        segmentTerm.contains(target) ||
        (className && className.includes('__option'))
      )
    ) {
      if (this.props.onSubmit) {
        const isValid = this.props.onSubmit();
        if (isValid) {
          finishSubmit();
        }
      } else {
        finishSubmit();
      }
    }
  };
}
