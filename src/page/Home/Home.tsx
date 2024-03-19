import React from "react";
import HerroBanner from "./_components/HerroBanner/HerroBanner";
import Ability from "./_components/Ability/Ability";
import { Devider, Section } from "../../components";
import Subgraphs from "./_components/Subgraphs/Subgraphs";
import PoweredSubgraphs from "./_components/PoweredSubgraphs/PoweredSubgraphs";
import UsingSubgraph from "./_components/UsingSubgraph/UsingSubgraph";

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
      <Devider />

    </div>
  );
};

export default Home;
