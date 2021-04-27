import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import {Helmet} from "react-helmet";

import TableContainer from '../tableContainer/table-container';
import HeaderContainer from '../headerContainer/header-container';
import InfoContainer from '../infoContainer/info-container';
import AdeleInfo from '../../components/adeleInfo/adele-info';
import SectionHeader from '../../components/sectionHeader/section-header';
import UXPinPromo from '../../components/uxpinPromo/uxpin-promo';
import Footer from '../../components/footer/footer';

import StyledTwoColumns from './app-container.styles';
import DetailsPage from '../detailsPage/details-page';

import prototyping from '../../assets/powerful-prototyping.png';
import deck from '../../assets/icon-board.png';
import { ScrollToTop } from './scroll-to-top';

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
    const { scroll } = this.state;

    return (
      <main>
        <ScrollToTop />
        <Switch>
          <Route path="/:id">
            <DetailsPage />
            <InfoContainer>
              <SectionHeader content="do you need help with your system?" id="uxpin-info" />
              <StyledTwoColumns>
                <UXPinPromo
                  alt="Slide Icon"
                  buttonLabel="Learn more &amp; download"
                  header="Evangelize Design System with a Free Template!"
                  image={deck}
                  link="https://www.uxpin.com/evangelizing-design-system-roi-template?utm_source=adele.uxpin.com&utm_medium=upartner&utm_campaign=Adele"
                  text="40+ Slides ready for action. Perfect for team and stakeholder presentation.
                    Available as a powerpoint and keynote deck."
                />
                <UXPinPromo
                  alt="Prototyping Icon"
                  buttonLabel="Start a free trial now!"
                  header="UXPin: Prototype and Manage Your Design System"
                  image={prototyping}
                  link="https://www.uxpin.com?utm_source=adele.uxpin.com&utm_medium=upartner&utm_campaign=Adele"
                  text="Join thousands of companies (including PayPal, Sapient and HBO)
                  and optimize your design process with UXPin."
                />
              </StyledTwoColumns>
            </InfoContainer>
          </Route>
          <Route exact path="/">
            <Helmet>
              <title>Adele – Design Systems and Pattern Libraries Repository</title>
              <link rel="canonical" href="https://adele.uxpin.com/" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:creator" content="@marcintreder" />
              <meta name="twitter:site" content="@uxpin"  />
              <meta name="twitter:image" content="https://adele.uxpin.com/build/twitter_image.jpg"/>
              <meta name="twitter:image:width" content="600" />
              <meta name="twitter:image:height" content="215" />
              <meta name="twitter:url" content="https://adele.uxpin.com" />
              <meta content="Adele – Design Systems and Pattern Libraries Repository" name="twitter:title"/>
              <meta content="Dozens of design systems and pattern libraries thoroughly analyzed. Learn, enjoy, contribute!" name="twitter:description"/>
              <meta content="Dozens of design systems and pattern libraries thoroughly analyzed. Learn, enjoy, contribute!" name="description"/>
              <meta property="og:title" content="Adele – Design Systems and Pattern Libraries Repository" />
              <meta property="og:description" content="Dozens of design systems and pattern libraries thoroughly analyzed. Learn, enjoy, contribute!" />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://adele.uxpin.com" />
              <meta property="og:image" content="<%- require('./assets/og_facebook.png') %>"/>
            </Helmet>
            <HeaderContainer scroll={scroll} />
            <TableContainer scroll={scroll} scrollUpdate={this.updateScroll} />
            <InfoContainer>
              <SectionHeader content="why adele?" id="adele-info" />
              <AdeleInfo />
              <SectionHeader content="do you need help with your system?" id="uxpin-info" />
              <StyledTwoColumns>
                <UXPinPromo
                  alt="Slide Icon"
                  buttonLabel="Learn more &amp; download"
                  header="Evangelize Design System with a Free Template!"
                  image={deck}
                  link="https://www.uxpin.com/evangelizing-design-system-roi-template?utm_source=adele.uxpin.com&utm_medium=upartner&utm_campaign=Adele"
                  text="40+ Slides ready for action. Perfect for team and stakeholder presentation.
                    Available as a powerpoint and keynote deck."
                />
                <UXPinPromo
                  alt="Prototyping Icon"
                  buttonLabel="Start a free trial now!"
                  header="UXPin: Prototype and Manage Your Design System"
                  image={prototyping}
                  link="https://www.uxpin.com?utm_source=adele.uxpin.com&utm_medium=upartner&utm_campaign=Adele"
                  text="Join thousands of companies (including PayPal, Sapient and HBO)
                  and optimize your design process with UXPin."
                />
              </StyledTwoColumns>
            </InfoContainer>
          </Route>
        </Switch>
        <Footer />
      </main>
    );
  }
}
