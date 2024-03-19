import React from "react";
import HerroBanner from "./_components/HerroBanner/HerroBanner";
import Ability from "./_components/Ability/Ability";
import { Devider, Section } from "../../components";
import Subgraphs from "./_components/Subgraphs/Subgraphs";
import PoweredSubgraphs from "./_components/PoweredSubgraphs/PoweredSubgraphs";
import UsingSubgraph from "./_components/UsingSubgraph/UsingSubgraph";
import Globally from "./_components/Globally/Globally";
import Ecosystem from "./_components/Ecosystem/Ecosystem";

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
      {/* <Section>
        {isVisible => <UsingSubgraph isVisible={isVisible} />}
      </Section>
      <Devider /> */}

      {/* Globally */}
      {/* <Section isPaddingTop={true}>
        {isVisible => <Ecosystem isVisible={isVisible} />}
      </Section>
      <Devider /> */}

      {/* Ecosystem */}
      {/* <Section isPaddingTop={true}>
        {isVisible => <Globally isVisible={isVisible} />}
      </Section> */}

    </div>
  );
};

export default Home;
