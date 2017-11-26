import React from 'react';
import 'jest-styled-components';
import UXPinPromo from '../uxpin-promo';
import prototyping from '../../assets/powerful-prototyping.png';
import deck from '../../assets/icon-board.png';

it('renders UXPin promo with image on the left correctly', () => {
  const wrapper = mount(<UXPinPromo
    layout="left"
    image={prototyping}
    header="Evangelize Design System with a Free Template!"
    text="40+ Slides ready for action. Perfect for team and stakeholder presentation.
    Available as a powerpoint and keynote deck."
    buttonLabel="Learn more & download"
    alt="UXPin Desgin System Evangelization Free Presentation Template"
    link="https://www.uxpin.com"
  />);
  expect(wrapper).toMatchSnapshot();
});

it('renders UXPin promo with image on the right correctly', () => {
  const wrapper = mount(<UXPinPromo
    layout="right"
    image={deck}
    header="Use One Platform to Build System, Prototype and Collaborate!"
    text="Join thousands of companies (including PayPal, Sapient and HBO)
    and optimize your design process with UXPin."
    buttonLabel="Start a free trial now!"
    shadow
    alt="UXPin - The Design System Platform"
    link="https://www.uxpin.com"
  />);
  expect(wrapper).toMatchSnapshot();
});
