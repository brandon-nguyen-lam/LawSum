// import { NextPage } from "next";
// import { useSession } from "next-auth/react";
import { Box, Button, Heading, HStack, VStack, Text } from "@chakra-ui/react";

import React from "react";
// import PageLayout from "../components/Layout/PageLayout";

const NavBar = (): JSX.Element => {
  return (
    <Box color={"#2C344C"} py={7} position={"sticky"} top={"0"}>
      <HStack px={"5%"} justifyContent={"space-between"}>
        <Heading fontSize={"45px"}>LegaSum</Heading>
        <HStack>
          <Button
            fontSize={"18px"}
            colorScheme={"white"}
            color={"#2C344C"}
            onClick={() => window.open("http://localhost:3000/AboutUs")}
          >
            Home
          </Button>
          <Button
            fontSize={"18px"}
            colorScheme={"white"}
            color={"#2C344C"}
            onClick={() => window.open("http://localhost:3000/MailingList")}
          >
            About Us
          </Button>
          <Button
            fontSize={"18px"}
            borderRadius={"25px"}
            backgroundColor={"#EECC6E"}
            color={"#2C344C"}
          >
            Mailing List
          </Button>
        </HStack>
      </HStack>
      <HStack justifyContent={"space-between"} paddingLeft={"5%"} mt={20}>
        <VStack alignItems={"flex-start"} spacing={0}>
          <Heading fontSize={"60px"}>Simplifying</Heading>
          <Heading fontSize={"60px"}>Complex Legislation</Heading>
          <Text
              fontSize={"20px"}
              paddingTop={"10px"}
              paddingBottom={"40px"}
          >
            “Making sense of the legal jargon, one summary at a time.”
          </Text>
          <Button
              py={"25px"}
              px={"40px"}
            fontSize={"20px"}
            borderRadius={"25px"}
            backgroundColor={"#EECC6E"}
            color={"#2C344C"}
            >
            Upload
          </Button>
        </VStack>
        <VStack justifyContent={"center"}>
          <svg
            width={"684"}
            height={"597.6"}
            viewBox={"0 0 760 664"}
            fill={"none"}
            xmlns={"http://www.w3.org/2000/svg"}
          >
            <g clipPath={"url(#clip0_19_35)"}>
              <path
                d={
                  "M269 32C269 18.1929 280.193 7 294 7H768C781.807 7 793 18.1929 793 32V138C793 151.807 781.807 163 768 163H294C280.193 163 269 151.807 269 138V32Z"
                }
                fill={"#EECC6E"}
              />
              <path
                d={
                  "M205 217C205 203.193 216.193 192 230 192H704C717.807 192 729 203.193 729 217V323C729 336.807 717.807 348 704 348H230C216.193 348 205 336.807 205 323V217Z"
                }
                fill={"#EECC6E"}
              />
              <path
                d={
                  "M332 664C515.359 664 664 515.359 664 332C664 148.641 515.359 0 332 0C148.641 0 0 148.641 0 332C0 515.359 148.641 664 332 664Z"
                }
                fill={"#2C344C"}
              />
              <path
                d={
                  "M332 615C488.297 615 615 488.297 615 332C615 175.703 488.297 49 332 49C175.703 49 49 175.703 49 332C49 488.297 175.703 615 332 615Z"
                }
                fill={"#EECC6E"}
              />
              <g filter={"url(#filter0_d_19_35)"}>
                <path
                  d={
                    "M578 332C578 468.414 467.414 579 331 579C194.586 579 84 468.414 84 332C84 195.586 194.586 85 331 85C467.414 85 578 195.586 578 332Z"
                  }
                  fill={"#2C344C"}
                />
                <path
                  d={
                    "M577.5 332C577.5 468.138 467.138 578.5 331 578.5C194.862 578.5 84.5 468.138 84.5 332C84.5 195.862 194.862 85.5 331 85.5C467.138 85.5 577.5 195.862 577.5 332Z"
                  }
                  stroke={"black"}
                />
              </g>
            </g>
            <defs>
              <filter
                id={"filter0_d_19_35"}
                x={"80"}
                y={"85"}
                width={"502"}
                height={"502"}
                filterUnits={"userSpaceOnUse"}
                colorInterpolationFilters={"sRGB"}
              >
                <feFlood floodOpacity={"0"} result={"BackgroundImageFix"} />
                <feColorMatrix
                  in={"SourceAlpha"}
                  type={"matrix"}
                  values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
                  result={"hardAlpha"}
                />
                <feOffset dy={"4"} />
                <feGaussianBlur stdDeviation={"2"} />
                <feComposite in2={"hardAlpha"} operator={"out"} />
                <feColorMatrix
                  type={"matrix"}
                  values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}
                />
                <feBlend
                  mode={"normal"}
                  in2={"BackgroundImageFix"}
                  result={"effect1_dropShadow_19_35"}
                />
                <feBlend
                  mode={"normal"}
                  in={"SourceGraphic"}
                  in2={"effect1_dropShadow_19_35"}
                  result={"shape"}
                />
              </filter>
              <clipPath id={"clip0_19_35"}>
                <rect width={"760"} height={"664"} fill={"white"} />
              </clipPath>
            </defs>
          </svg>
        </VStack>
      </HStack>
    </Box>
  );
};

export default NavBar;
