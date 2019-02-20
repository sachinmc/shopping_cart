import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ProductAction from '../components/ProductAction';


describe('User Input', () => {
  let wrapper;
  let mockSubmit = jest.fn();
  let addButton;

  beforeEach(() => {
    wrapper = shallow(
      <ProductAction
        addProductToCart={mockSubmit}
      />);

    addButton = wrapper.find('a').first();
  });

  it('Should call add product callback', () => {
    addButton.simulate('click', {
      preventDefault: () => {}
    });

    expect(
      mockSubmit.mock.calls.length
    ).toBe(1);
  });

  it('Should disable add button if out of stock', () => {
    wrapper = shallow(
      <ProductAction
        quantity={0}
      />
    );

    expect(
      wrapper.find('a.disabled').length
    ).toBe(1)
  });
})
