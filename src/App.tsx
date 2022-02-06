import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";

import "./App.css";

import LogoPayWISE from "./img/LogoPayWISE.svg";
import Hero from "./img/hero.svg";

export default function App() {
  return (
    <>
      <nav>
        <Container
          w="100%"
          h="10vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid w="90%" maxW={1529} h="100%" display="flex" gap={50}>
            <GridItem w="100%" h="100%" display="flex" alignItems="center">
              <img src={LogoPayWISE} />

              <Text
                fontStyle="normal"
                fontWeight="bold"
                fontSize="20px"
                lineHeight="42px"
                textTransform="uppercase"
                color="#FFFFFF"
                cursor="Pointer"
                ml={14}
              >
                PayWISE
              </Text>
            </GridItem>

            <GridItem w="100%" h="100%">
              <Grid w="100%" h="100%" display="flex" gap={10}>
                <GridItem
                  w="100%"
                  h="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text
                    fontStyle="normal"
                    fontWeight="500"
                    fontSize="18px"
                    lineHeight="27px"
                    textTransform="capitalize"
                    color="#FFFFFF"
                    cursor="Pointer"
                  >
                    Home
                  </Text>
                </GridItem>

                <GridItem
                  w="100%"
                  h="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="18px"
                    lineHeight="27px"
                    textTransform="capitalize"
                    color="#FFFFFF"
                    cursor="Pointer"
                  >
                    Features
                  </Text>
                </GridItem>

                <GridItem
                  w="100%"
                  h="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="18px"
                    lineHeight="27px"
                    textTransform="capitalize"
                    color="#FFFFFF"
                    cursor="Pointer"
                  >
                    cards
                  </Text>
                </GridItem>

                <GridItem
                  w="100%"
                  h="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="18px"
                    lineHeight="27px"
                    textTransform="capitalize"
                    color="#FFFFFF"
                    cursor="Pointer"
                  >
                    contact
                  </Text>
                </GridItem>
              </Grid>
            </GridItem>

            <GridItem w="100%" h="100%">
              <Grid w="100%" h="100%" display="flex" gap={10}>
                <GridItem
                  w="100%"
                  h="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Button
                    w="150px"
                    h="50px"
                    background="none"
                    borderRadius="5px"
                    border="none"
                    cursor="Pointer"
                    fontStyle="normal"
                    fontWeight="600"
                    fontSize="18px"
                    lineHeight="27px"
                    color="#fff"
                  >
                    Log in
                  </Button>
                </GridItem>

                <GridItem
                  w="100%"
                  h="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Button
                    w="150px"
                    h="50px"
                    background="#DAD873"
                    borderRadius="5px"
                    border="none"
                    cursor="Pointer"
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="18px"
                    lineHeight="27px"
                    color="#309975"
                  >
                    Sign Up
                  </Button>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </Container>
      </nav>
      <header>
        <Container
          w="100%"
          h="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Center
            w="90%"
            maxW={1697}
            h="90%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid w="100%" h="100%" templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem
                w="100%"
                h="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Box w="100%" h="90%" maxH={474}>
                  <Grid
                    w="100%"
                    h="100%"
                    templateColumns="repeat(1, 1fr)"
                    gap={6}
                  >
                    <GridItem w="100%" h="170px">
                      <Text
                        fontStyle="normal"
                        fontWeight="bold"
                        fontSize="75px"
                        lineHeight="110.5%"
                        textTransform="capitalize"
                        color="#FFFFFF"
                      >
                        Your next online bank.
                      </Text>
                      <Box w="100%" h="5px" bg="#fff" />
                    </GridItem>
                    <GridItem w="100%" h="108px">
                      <Grid
                        w="100%"
                        h="100%"
                        templateColumns="repeat(3, 1fr)"
                        gap={6}
                      >
                        <GridItem
                          w="100%"
                          h="100%"
                          display="flex"
                          justifyContent="space-between"
                          flexDir="column"
                        >
                          <Text
                            fontStyle="normal"
                            fontWeight="bold"
                            fontSize="38px"
                            lineHeight="110.5%"
                            textTransform="capitalize"
                            color="#FFFFFF"
                          >
                            6X
                          </Text>
                          <Text
                            fontStyle="normal"
                            fontWeight="bold"
                            fontSize="15px"
                            lineHeight="22px"
                            textTransform="capitalize"
                            color="#FFFFFF"
                          >
                            Lorem ipsum dolor sit amet,
                          </Text>
                        </GridItem>

                        <GridItem
                          w="100%"
                          h="100%"
                          display="flex"
                          justifyContent="space-between"
                          flexDir="column"
                        >
                          <Text
                            fontStyle="normal"
                            fontWeight="bold"
                            fontSize="38px"
                            lineHeight="110.5%"
                            textTransform="capitalize"
                            color="#FFFFFF"
                          >
                            -15%
                          </Text>
                          <Text
                            fontStyle="normal"
                            fontWeight="bold"
                            fontSize="15px"
                            lineHeight="22px"
                            textTransform="capitalize"
                            color="#FFFFFF"
                          >
                            Lorem ipsum dolor sit amet,
                          </Text>
                        </GridItem>

                        <GridItem
                          w="100%"
                          h="100%"
                          display="flex"
                          justifyContent="space-between"
                          flexDir="column"
                        >
                          <Text
                            fontStyle="normal"
                            fontWeight="bold"
                            fontSize="38px"
                            lineHeight="110.5%"
                            textTransform="capitalize"
                            color="#FFFFFF"
                          >
                            3M+
                          </Text>
                          <Text
                            fontStyle="normal"
                            fontWeight="bold"
                            fontSize="15px"
                            lineHeight="22px"
                            textTransform="capitalize"
                            color="#FFFFFF"
                          >
                            Lorem ipsum dolor sit amet,
                          </Text>
                        </GridItem>
                      </Grid>
                    </GridItem>

                    <GridItem 
                      w="100%" 
                      h="80px" 
                      display="flex"
                      alignItems="center">

                      <Button
                        w="200px"
                        h="60px"
                        borderRadius={10}
                        border="none"
                        bg="#DAD873"
                        color="#309975">
                        Download Now
                      </Button>
                    </GridItem>
                  </Grid>
                </Box>
              </GridItem>

              <GridItem 
                bgImage={Hero} 
                bgSize="800px" 
                bgRepeat="no-repeat" 
                bgPos="right" 
                w="100%" 
                h="100%" />

            </Grid>
          </Center>
        </Container>
      </header>
    </>
  );
}
