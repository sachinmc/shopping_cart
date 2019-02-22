import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Cart from '../components/Cart';

// test cart
// test onCheckoutClick

describe('Cart', () => {
  let wrapper;
  let checkoutButton;

  beforeEach(() => {
    wrapper = shallow(
      <Cart
        cart={[{
          id: 1,
          price: 79.99,
          quantity: 2,
          title: "Amazon Kindle E-reader",
        }]}
      />);
  });

  it('should display current contents', () => {
    let data = wrapper.find('td')
    expect(
      data.length
    ).toBe(3);
  });

  // it('should display the correct total', () => {
  // 
  // });
  //
  // it('should be empty after checkout', () => {
  //   checkoutButton;
  // })
});
