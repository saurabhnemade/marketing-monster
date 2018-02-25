import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Sidebar } from 'src/features/home';

describe('home/Sidebar', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <Sidebar />
    );

    expect(
      renderedComponent.find('.home-sidebar').getElement()
    ).to.exist;
  });
});
