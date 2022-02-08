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

import Card01 from "./img/CardVisa.svg";
import Card02 from "./img/CardVisa02.svg";

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
          alignItems="flex-end"
        >
          <Center
            w="100%"
            maxW={1697}
            h="89%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid w="100%" h="100%" templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem
                w="100%"
                h="100%"
                display="flex"
                justifyContent="center"
                ml={128}
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
                      alignItems="center"
                    >
                      <Button
                        w="200px"
                        h="60px"
                        borderRadius={10}
                        border="none"
                        bg="#DAD873"
                        color="#309975"
                      >
                        Download Now
                      </Button>
                    </GridItem>
                  </Grid>
                </Box>
              </GridItem>

              <GridItem
                w="100%"
                h="100%"
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Box
                  w="100%"
                  h="100%"
                  bgImage={Hero}
                  bgRepeat="no-repeat"
                  bgPos="center"
                />
              </GridItem>
            </Grid>
          </Center>
        </Container>
      </header>
      <main>
        <Container
          w="100%"
          h="150vh"
          bg="#fff"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Center
            w="90%"
            maxW={1697}
            h="80%"
            color="white"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDir="column"
          >
            <Box
              w="100%"
              h="140px"
              color="white"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                w="90%"
                maxW="583px"
                h="100%"
                display="flex"
                justifyContent="space-between"
                textAlign="center"
                flexDir="column"
              >
                <Text
                  fontStyle="normal"
                  fontWeight="bold"
                  fontSize="38px"
                  lineHeight="72px"
                  color="#309975"
                >
                  One Mission. Two Cards
                </Text>

                <Text
                  fontStyle="normal"
                  fontWeight="normal"
                  fontSize="17px"
                  lineHeight="30.04px"
                  color="#575757"
                >
                  We are providing our clients two cards for their one
                  <br />
                  mission and finance
                </Text>
              </Box>
            </Box>

            <Grid
              w="100%"
              h="90%"
              maxH={984}
              templateColumns="repeat(2, 1fr)"
              gap={6}
            >
              <GridItem
                w="100%"
                h="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  w="90%"
                  maxW={450}
                  h="100%"
                  color="white"
                  borderRadius={20}
                  bg="rgba(239, 238, 180, 0.2)"
                  boxShadow="0px 5px 10px rgba(0, 0, 0, 0.15)"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box 
                    w="90%" 
                    maxW={434} 
                    h="90%" 
                    maxH={854} >
                    
                    <Grid
                      w="100%"
                      h="100%"
                      templateColumns="repeat(1, 1fr)"
                      gap={6}
                    >
                      <GridItem
                        w="100%"
                        h="60px"
                        display="flex"
                        alignItems="center"
                      >
                        <Button
                          w="90%"
                          maxW="150px"
                          h="100%"
                          borderRadius={10}
                          bg="#DAD873"
                          border="none"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        >
                          Petal 1
                        </Button>
                      </GridItem>

                      <GridItem
                        w="100%"
                        h="108px"
                        display="flex"
                        alignItems="center"
                      >
                        <Text
                          fontStyle="normal"
                          fontWeight="500"
                          fontSize="36px"
                          lineHeight="54px"
                          color="#DAD873"
                        >
                          Expanding Access
                          <br />
                          Through Technology.
                        </Text>
                      </GridItem>

                      <GridItem
                        w="100%"
                        h="198px"
                        display="flex"
                        justifyContent="space-between"
                        flexDir="column"
                      >
                        <Text
                          fontStyle="normal"
                          fontWeight="normal"
                          fontSize="14px"
                          lineHeight="27px"
                          color="#575757"
                        >
                          No annual fee (Late and returned less apply )
                        </Text>
                        <Text
                          fontStyle="normal"
                          fontWeight="normal"
                          fontSize="14px"
                          lineHeight="27px"
                          color="#575757"
                        >
                          $500 - $5,000 limits
                        </Text>
                        <Text
                          fontStyle="normal"
                          fontWeight="normal"
                          fontSize="14px"
                          lineHeight="27px"
                          color="#575757"
                        >
                          APRs 19.99% - 29.49%
                        </Text>
                        <Text
                          fontStyle="normal"
                          fontWeight="normal"
                          fontSize="14px"
                          lineHeight="27px"
                          color="#575757"
                        >
                          2% -10% cash back at select merchants
                        </Text>
                      </GridItem>

                      <GridItem 
                        w="100%" 
                        h="60px" >
                        <Button
                          w="90%"
                          maxW="150px"
                          h="100%"
                          borderRadius={10}
                          bg="#F8BF88"
                          border="none"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        >
                          Learn More
                        </Button>
                      </GridItem>

                      <GridItem
                        w="100%"
                        h="205px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        bgImage={Card01}
                        bgRepeat="no-repeat"
                        bgPos="left"
                      />
                    </Grid>
                  </Box>
                </Box>
              </GridItem>

              <GridItem
                w="100%"
                h="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  w="90%"
                  maxW={450}
                  h="100%"
                  color="white"
                  borderRadius={20}
                  bg="rgba(239, 238, 180, 0.2)"
                  boxShadow="0px 5px 10px rgba(0, 0, 0, 0.15)"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box 
                    w="90%" 
                    maxW={434} 
                    h="90%" 
                    maxH={854} >
                    
                    <Grid
                      w="100%"
                      h="100%"
                      templateColumns="repeat(1, 1fr)"
                      gap={6}
                    >
                      <GridItem
                        w="100%"
                        h="60px"
                        display="flex"
                        alignItems="center"
                      >
                        <Button
                          w="90%"
                          maxW="150px"
                          h="100%"
                          borderRadius={10}
                          bg="#FFCDC2"
                          border="none"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        >
                          Petal 1
                        </Button>
                      </GridItem>

                      <GridItem
                        w="100%"
                        h="108px"
                        display="flex"
                        alignItems="center"
                      >
                        <Text
                          fontStyle="normal"
                          fontWeight="500"
                          fontSize="36px"
                          lineHeight="54px"
                          color="#DAD873"
                        >
                          Expanding Access
                          <br />
                          Through Technology.
                        </Text>
                      </GridItem>

                      <GridItem
                        w="100%"
                        h="198px"
                        display="flex"
                        justifyContent="space-between"
                        flexDir="column"
                      >
                        <Text
                          fontStyle="normal"
                          fontWeight="normal"
                          fontSize="14px"
                          lineHeight="27px"
                          color="#575757"
                        >
                          No annual fee (Late and returned less apply )
                        </Text>
                        <Text
                          fontStyle="normal"
                          fontWeight="normal"
                          fontSize="14px"
                          lineHeight="27px"
                          color="#575757"
                        >
                          $500 - $5,000 limits
                        </Text>
                        <Text
                          fontStyle="normal"
                          fontWeight="normal"
                          fontSize="14px"
                          lineHeight="27px"
                          color="#575757"
                        >
                          APRs 19.99% - 29.49%
                        </Text>
                        <Text
                          fontStyle="normal"
                          fontWeight="normal"
                          fontSize="14px"
                          lineHeight="27px"
                          color="#575757"
                        >
                          2% -10% cash back at select merchants
                        </Text>
                      </GridItem>

                      <GridItem 
                        w="100%" 
                        h="60px" >
                        <Button
                          w="90%"
                          maxW="150px"
                          h="100%"
                          borderRadius={10}
                          bg="#F8BF88"
                          border="none"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        >
                          Learn More
                        </Button>
                      </GridItem>

                      <GridItem
                        w="100%"
                        h="205px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        bgImage={Card02}
                        bgRepeat="no-repeat"
                        bgPos="left"
                      />
                    </Grid>
                  </Box>
                </Box>
              </GridItem>
            </Grid>
          </Center>
        </Container>
      </main>
    </>
  );
}
