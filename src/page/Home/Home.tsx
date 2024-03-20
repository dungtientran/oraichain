import React from "react";
import HerroBanner from "./_components/HerroBanner/HerroBanner";
import Ability from "./_components/Ability/Ability";
import { Devider, Section } from "../../components";
import Subgraphs from "./_components/Subgraphs/Subgraphs";
import PoweredSubgraphs from "./_components/PoweredSubgraphs/PoweredSubgraphs";
import UsingSubgraph from "./_components/UsingSubgraph/UsingSubgraph";
import Globally from "./_components/Globally/Globally";
import Ecosystem from "./_components/Ecosystem/Ecosystem";
import FooterBanner from "./_components/FooterBanner/FooterBanner";
import LearnMore from "./_components/LearnMore/LearnMore";

const Home = () => {
  return (
    <div>

      {/* Banner */}
      <HerroBanner />

      {/* Ability */}
      <Section>
        {isVisible => <Ability isVisible={isVisible} />}
      </Section>
      <Devider />

      {/* Subgraphs */}
      <Section>
        {isVisible => <Subgraphs isVisible={isVisible} />}
      </Section>

      {/* Powered by subgraphs */}
      <Section isPaddingTop={true}>
        {isVisible => <PoweredSubgraphs isVisible={isVisible} />}
      </Section>
      <Devider />

      {/* UsingSubgraph */}
      <Section>
        {isVisible => <UsingSubgraph isVisible={isVisible} />}
      </Section>

      {/* Globally */}
      {/* <Section isPaddingTop={true}>
        {isVisible => <Ecosystem isVisible={isVisible} />}
      </Section>
      <Devider /> */}

      {/* Ecosystem */}
      <Section isPaddingTop={true}>
        {isVisible => <Globally isVisible={isVisible} />}
      </Section>

      {/* LearnMore */}
      <Section isPaddingTop={true}>
        {isVisible => <LearnMore isVisible={isVisible} />}
      </Section>

      {/* FooterBanner */}
      {/* <FooterBanner /> */}
    </div>
  );
};

export default Home;
