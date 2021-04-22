import React from "react";
import { Button } from "../../globalStyles";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiBrokenBottle } from "react-icons/gi";
import { GiWindTurbine, GiFruitTree } from "react-icons/gi";
import { GiFloatingCrystal } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.elements";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Support What We Do</PricingHeading>
          <PricingContainer>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiFruitTree />
                </PricingCardIcon>
                <PricingCardPlan>Tree Planting</PricingCardPlan>
                <PricingCardCost>£4.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>50 New Trees Planted</PricingCardFeature>
                  <PricingCardFeature>0 pollution created</PricingCardFeature>
                  <PricingCardFeature>in the proccess</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiBrokenBottle />
                </PricingCardIcon>
                <PricingCardPlan>Rubbish Collection</PricingCardPlan>
                <PricingCardCost>£9.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Fund Our Efforts</PricingCardFeature>
                  <PricingCardFeature>to collect as much</PricingCardFeature>
                  <PricingCardFeature>rubbish as possible</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiWindTurbine />
                </PricingCardIcon>
                <PricingCardPlan>Green Energy</PricingCardPlan>
                <PricingCardCost>£49.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Offer Green Solutions</PricingCardFeature>
                  <PricingCardFeature>for underprivileged</PricingCardFeature>
                  <PricingCardFeature>nations</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
