import { Component } from 'react';
export interface SearchableSelectState {
    isOpen: boolean;
}
declare class SearchableSelect extends Component<any> {
    state: {
        isOpen: boolean;
    };
    componentDidUpdate(prevProps: any): void;
    toggleOpen(): void;
    onSelectChange(selectedOption: any): void;
    render(): JSX.Element;
}
export default SearchableSelect;
export { SearchableSelect };
