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
        <Ability />
      </Section>
      <Devider />

      {/* Subgraphs */}

      <Section>
        <Subgraphs />
      </Section>

      {/* Powered by subgraphs */}
      <Section isPaddingTop={true}>
        <PoweredSubgraphs />
      </Section>
      <Devider />

      {/* UsingSubgraph */}
      <Section >
        <UsingSubgraph />
      </Section>

      {/* Globally */}
      {/* <Section isPaddingTop={true}>
        <Ecosystem />
      </Section> */}

      {/* Ecosystem */}
      <Section isPaddingTop={true}>
        <Globally />
      </Section>

    </div>
  );
};

export default Home;
