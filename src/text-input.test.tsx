import { shallow } from 'enzyme';
import React from 'react';

import { TextInput } from './text-input';

describe('Input', () => {
  let cmp: any;
  const mockOnChange = jest.fn();
  const mockOnBlur = jest.fn();

  describe('component lifecycle', () => {
    beforeEach(() => {
      cmp = shallow(
        <TextInput
          type="text"
          label="Test Input"
          id="test-input-simple"
          onChange={mockOnChange}
        />
      );
    });

    it('shows on mount', () => {
      expect(cmp.find('.input-text-wrap').length).toBe(1);
    });

    it('has the correct label', () => {
      expect(cmp.find('.input-text-label').text()).toBe('Test Input');
    });
  });

  describe('text input change and focus', () => {
    beforeEach(() => {
      cmp = shallow(
        <TextInput
          type="text"
          label="Test Input"
          id="test-input-simple"
          onChange={mockOnChange}
          onBlur={mockOnBlur}
        />
      );
    });

    it('calls onChange when value changes', () => {
      const value = 'onBlur called';
      const event = { target: { value } };
      cmp.find('#test-input-simple').simulate('change', { target: { value } });
      expect(mockOnChange).toHaveBeenCalledWith(event, value);
    });

    it('calls onBlur on blur event with target', () => {
      const value = 'onBlur called';
      const event = { target: { value } };
      cmp.find('#test-input-simple').simulate('blur', event);
      expect(mockOnBlur).toHaveBeenCalledWith(event, value);
    });

    it('sets class on focus and removes on blur without blur event handler', () => {
      cmp.find('#test-input-simple').simulate('focus');
      expect(cmp.find('.is-focused').length).toBe(1);
      cmp.find('#test-input-simple').simulate('blur');
      expect(cmp.find('.is-focused').length).toBe(0);
    });
  });

  describe('number input change', () => {
    it('calls onChange when value changes', () => {
      const event = { target: { value: '123' } };
      const value = parseInt(event.target.value, 10);
      cmp = shallow(
        <TextInput
          type="number"
          label="Test Input"
          id="test-input-simple"
          onChange={mockOnChange}
          onBlur={mockOnBlur}
        />
      );
      cmp
        .find('#test-input-simple')
        .simulate('change', { target: { value: '123' } });
      expect(mockOnChange).toHaveBeenCalledWith(event, value);
    });
  });
});
