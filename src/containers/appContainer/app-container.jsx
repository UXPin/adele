import React, { Component } from 'react';
import TableContainer from '../tableContainer/table-container';
import HeaderContainer from '../headerContainer/header-container';
import InfoContainer from '../infoContainer/info-container';
import AdeleInfo from '../../components/adeleInfo/adele-info';
import SectionHeader from '../../components/sectionHeader/section-header';
import UXPinPromo from '../../components/uxpinPromo/uxpin-promo';
import Footer from '../../components/footer/footer';

import StyledTwoColumns from './app-container.styles';

import prototyping from '../../assets/powerful-prototyping.png';
import deck from '../../assets/icon-board.png';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      scroll: false,
    };
    this.updateScroll = this.updateScroll.bind(this);
  }

  updateScroll(e) {
    /* This function updates the state representing
    ** position of the scroll which triggers changes in layout
    ** Function is passed to the table container which holds
    ** all the methods and event listeners.
    */
    this.setState({ scroll: e });
  }

  render() {
    return (
      <main>
        <HeaderContainer scroll={this.state.scroll} />
        <TableContainer scroll={this.state.scroll} scrollUpdate={this.updateScroll} />
        <InfoContainer>
          <SectionHeader content="why adele?" id="adele-info" />
          <AdeleInfo />
          <SectionHeader content="do you need help with your system?" id="uxpin-info" />
          <StyledTwoColumns>
            <UXPinPromo
              header="Evangelize Design System with a Free Template!"
              text="40+ Slides ready for action. Perfect for team and stakeholder presentation.
                Available as a powerpoint and keynote deck."
              buttonLabel="Learn more & download"
              alt="Slide Icon"
              image={deck}
              link="https://www.uxpin.com/evangelizing-design-system-roi-template?utm_source=adele.uxpin.com&utm_medium=upartner&utm_campaign=Adele"
            />
            <UXPinPromo
              header="UXPin: Prototype and Manage Your Design System"
              text="Join thousands of companies (including PayPal, Sapient and HBO)
              and optimize your design process with UXPin."
              buttonLabel="Start a free trial now!"
              alt="Prototyping Icon"
              image={prototyping}
              link="https://www.uxpin.com?utm_source=adele.uxpin.com&utm_medium=upartner&utm_campaign=Adele"
            />
          </StyledTwoColumns>
        </InfoContainer>
        <Footer />
      </main>
    );
  }
}
