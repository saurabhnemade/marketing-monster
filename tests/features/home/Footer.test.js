import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Footer } from 'src/features/home';

describe('home/Footer', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <Footer />
    );

    expect(
      renderedComponent.find('.home-footer').getElement()
    ).to.exist;
  });
});
