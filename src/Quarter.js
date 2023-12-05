import {
  Box,
  SimpleGrid,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

const Quarter = () => {
  const [quarter, setQuarter] = useState("December 2023");

  const [metrics, setMetrics] = useState({
    revenue: "",
    netIncome: "",
    netProfit: "",
    operatingIncome: "",
  });

  useEffect(() => {
    const apiUrl = `http://localhost:5000/api/metrics/${quarter}`;
    console.log("API URL:", apiUrl);

    axios.get(apiUrl).then((response) => {
      console.log("API Response:", response.data);
      setMetrics(response.data);
    });
  }, [quarter]);

  return (
    <Box margin={10}>
      <Box
        backgroundColor={"black"}
        border={"1px solid teal"}
        borderRadius={10}
        color={"white"}
        maxWidth={"fit-content"}
        marginLeft={"auto"}
        marginRight={"auto"}
        marginBottom={5}
        padding={3}
        display={"flex"}
        placeContent={"center"}
        verticalAlign={"middle"}
        alignContent={"center"}
      >
        <Text
          fontWeight={500}
          fontSize={20}
          marginRight={5}
          verticalAlign={"middle"}
          marginTop={"auto"}
          marginBottom={"auto"}
          backgroundColor={"black"}
        >
          Select Quarter
        </Text>
        <Menu>
          <MenuButton
            _hover={{ bg: "teal" }}
            _expanded={{ bg: "teal" }}
            as={Button}
            backgroundColor={"teal"}
            rightIcon={<ChevronDownIcon backgroundColor={"teal"} />}
          >
            <Text backgroundColor={"teal"} color={"white"}>
              {quarter}
            </Text>
          </MenuButton>
          <MenuList color={"black"}>
            <MenuItem onClick={() => setQuarter("December 2023")}>
              December 2023
            </MenuItem>
            <MenuItem onClick={() => setQuarter("March 2023")}>
              March 2023
            </MenuItem>
            <MenuItem onClick={() => setQuarter("June 2023")}>
              June 2023
            </MenuItem>
            <MenuItem onClick={() => setQuarter("September 2023")}>
              September 2023
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <SimpleGrid
        maxWidth={"80%"}
        marginLeft={"auto"}
        marginRight={"auto"}
        spacing={10}
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
        }}
      >
        <Card border={"2px solid #1f1f1f"}>
          <CardHeader>
            <Heading size="md" color={"#c4fff9"}>
              Revenue
            </Heading>
          </CardHeader>
          <CardBody>
            <Text fontSize={45} color={"#00f7df"}>
              {metrics.revenue}
            </Text>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
        <Card border={"2px solid #1f1f1f"}>
          <CardHeader>
            <Heading size="md" color={"#c4fff9"}>
              Net Income
            </Heading>
          </CardHeader>
          <CardBody>
            <Text fontSize={45} color={"#00f7df"}>
              {metrics.netIncome}
            </Text>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
        <Card border={"2px solid #1f1f1f"}>
          <CardHeader>
            <Heading size="md" color={"#c4fff9"}>
              Net Profit
            </Heading>
          </CardHeader>
          <CardBody>
            <Text fontSize={45} color={"#00f7df"}>
              {metrics.netProfit}
            </Text>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
        <Card border={"2px solid #1f1f1f"}>
          <CardHeader>
            <Heading size="md" color={"#c4fff9"}>
              Operating Income{" "}
            </Heading>
          </CardHeader>
          <CardBody>
            <Text fontSize={45} color={"#00f7df"}>
              {metrics.operatingIncome}
            </Text>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </SimpleGrid>
    </Box>
  );
};

export default Quarter;
