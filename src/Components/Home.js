import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      {/* <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundimg="model-s.jpg"
        leftbtntext="Custom Order"
        rightbtntext="Existing inventory"
        />
        <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundimg="model-s.jpg"
        leftbtntext="Custom Order"
        rightbtntext="Existing inventory"
        /> */}
      <Section
        title="Kia EV6"
        description="Order Online for Touchless Delivery"
        backgroundImg="kia_ev6.jpg"
        leftBtnTxt="Custom order"
        rightBtnTxt="Existing inventory"
      />
      <Section
        title="Hyundai Kona"
        description="Order Online for Touchless Delivery"
        backgroundImg="h_kona.jpg"
        leftBtnTxt="Custom order"
        rightBtnTxt="Existing inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnTxt="Custom order"
        rightBtnTxt="Existing inventory"
      />
      <Section
        title="BMW i7"
        description="Order Online for Touchless Delivery"
        backgroundImg="bmw_i7.jpg"
        leftBtnTxt="Custom order"
        rightBtnTxt="Existing inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnTxt="Custom order"
        rightBtnTxt="Existing inventory"
      />

      <Section
        title="Tata Tiago"
        description="Order Online for Touchless Delivery"
        backgroundImg="t_tiago.webp"
        leftBtnTxt="Custom order"
        rightBtnTxt="Existing inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnTxt="Custom order"
        rightBtnTxt="Existing inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnTxt="Order now"
        rightBtnTxt="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftBtnTxt="Order now"
        rightBtnTxt="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnTxt="Shop now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
