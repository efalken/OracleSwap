import {D, F} from '../basics/Colors'
import {Box, Flex} from '@rebass/grid'
import React from 'react'
import Text from '../basics/Text'
import Triangle from '../basics/Triangle'
import Styled from 'styled-components'

const Field = Styled(Box)`
    cursor: pointer;
    user-select: none;
`

export default ({ order: [by, asc], setOrder }) => (
  <Flex
    pb="10px"
    style={{
      borderBottom: `thin solid ${D}`
    }}
  >
    <Box
      width="170px"
      justifyContent="flex-start"
      alignItems="flex-end"
      pt="20px"
      display="flex"
    >
      <Text size="14px">Liquidity Provider</Text>
    </Box>
    <Box width="100%">
      <Box>
        {/* <Text>Current Balance - Click to Sort - Balances in ETH (Sz), Rates in basis points of notional </Text> */}
        <Flex ml="25px">Click to Sort</Flex>
        <br />
        <Flex ml="25px">
          <Flex
            justifyContent="center"
            p="5px"
            width={5 / 8}
            style={{ border: "1px solid gray" }}
          >
            Units in Szabos (1e-6 Ether)
          </Flex>
          <Flex
            justifyContent="center"
            p="5px"
            width={3 / 8}
            style={{
              borderRight: "1px solid gray",
              borderTop: "1px solid gray",
              borderBottom: "1px solid gray"
            }}
          >
            Basis Point as % Notional
          </Flex>
        </Flex>
        <br />
        <Flex>
          <Flex
            justifyContent="center"
            width={1 / 4}
            style={{
              marginLeft: "25px"
            }}
          >
            <Flex
              width="95%"
              style={{ borderBottom: "1px solid gray" }}
              paddingBottom="5px"
              justifyContent="center"
            >
              Gross RM
            </Flex>
          </Flex>
          <Flex justifyContent="center" width={1 / 4}>
            <Flex
              width="95%"
              style={{ borderBottom: "1px solid gray" }}
              paddingBottom="5px"
              justifyContent="center"
            >
              Max Take
            </Flex>
          </Flex>
          <Flex justifyContent="center" width={1 / 8}>
            <Flex
              width="95%"
              style={{ borderBottom: "1px solid gray" }}
              paddingBottom="5px"
              justifyContent="center"
            >
              Minimum
            </Flex>
          </Flex>
          <Flex justifyContent="center" width={1 / 4}>
            <Flex
              width="95%"
              style={{ borderBottom: "1px solid gray" }}
              paddingBottom="5px"
              justifyContent="center"
            >
              Funding Rate
            </Flex>
          </Flex>
          <Flex justifyContent="center" width={1 / 8}>
            <Flex
              width="95%"
              style={{ borderBottom: "1px solid gray" }}
              paddingBottom="5px"
              justifyContent="center"
            >
              Close
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Flex
        alignItems="flex-end"
        mt="13px"
        className="offers-table-header"
        style={{
          textOverflow: "ellipsis",
          minWidth: "0",
          whiteSpace: "pre-wrap"
        }}
      >
        <Field
          display="flex"
          padding="1px"
          width={1 / 8}
          onClick={() => setOrder(1, !asc)}
          style={{
            borderLeft: "1px solid rgb(112, 180, 63)",
            borderRight: "1px solid rgb(213, 87, 87)",
            marginLeft: "25px",
            justifyContent: "center",
            display: "flex"
          }}
        >
          <Text size="14px">Long</Text>{" "}
          {by === 1 ? (
            <Triangle
              rotation={!asc ? "180deg" : ""}
              scale="0.8"
              fill
              color="white"
            />
          ) : null}
        </Field>
        <Field
          display="flex"
          justifyContent="center"
          padding="1px"
          width={1 / 8}
          style={{
            borderRight: "1px solid rgb(112, 180, 63)",
            justifyContent: "center",
            display: "flex"
          }}
          onClick={() => setOrder(2, !asc)}
        >
          <Text size="14px">Short</Text>{" "}
          {by === 2 ? (
            <Triangle
              rotation={!asc ? "180deg" : ""}
              scale="0.8"
              fill
              color="white"
            />
          ) : null}
        </Field>
        {/* <Field width={1 / 10} onClick={() => setOrder(3, !asc)}><Text size="14px">Gross RM</Text> {by === 3 ? <Triangle rotation={!asc ? "180deg" : ""} scale="0.8" fill color="white" /> : null}</Field> */}
        {/* <Field width={1 / 10} onClick={() => setOrder(4, !asc)}><Text size="14px">Excess</Text><br /><Text size="14px">Margin</Text> {by === 4 ? <Triangle rotation={!asc ? "180deg" : ""} scale="0.8" fill color="white" /> : null}</Field> */}
        {/* <Field width={1 / 8} onClick={() => setOrder(5, !asc)}><Text size="14px">Actual</Text><br /><Text size="14px">Margin</Text> {by === 5 ? <Triangle rotation={!asc ? "180deg" : ""} scale="0.8" fill color="white" /> : null}</Field> */}
        <Field
          display="flex"
          justifyContent="center"
          padding="1px"
          width={1 / 8}
          style={{
            borderRight: "1px solid rgb(213, 87, 87)",
            justifyContent: "center",
            display: "flex"
          }}
          onClick={() => setOrder(1, !asc)}
        >
          <Text size="14px">Long</Text>{" "}
          {by === 1 ? (
            <Triangle
              rotation={!asc ? "180deg" : ""}
              scale="0.8"
              fill
              color="white"
            />
          ) : null}
        </Field>
        <Field
          display="flex"
          justifyContent="center"
          padding="1px"
          width={1 / 8}
          style={{
            borderRight: "1px solid rgb(112, 180, 63)",
            justifyContent: "center",
            display: "flex"
          }}
          onClick={() => setOrder(2, !asc)}
        >
          <Text size="14px">Short</Text>{" "}
          {by === 2 ? (
            <Triangle
              rotation={!asc ? "180deg" : ""}
              scale="0.8"
              fill
              color="white"
            />
          ) : null}
        </Field>
        <Field
          display="flex"
          justifyContent="center"
          padding="1px"
          width={1 / 8}
          style={{
            borderRight: "1px solid rgb(112, 180, 63)",
            justifyContent: "center",
            display: "flex"
          }}
          onClick={() => setOrder(8, !asc)}
        >
          <Text size="14px">RM</Text>{" "}
          {by === 8 ? (
            <Triangle
              rotation={!asc ? "180deg" : ""}
              scale="0.8"
              fill
              color="white"
            />
          ) : null}
        </Field>
        <Field
          display="flex"
          justifyContent="center"
          padding="1px"
          width={1 / 8}
          style={{
            borderRight: "1px solid rgb(213, 87, 87)",
            justifyContent: "center",
            display: "flex"
          }}
          onClick={() => setOrder(1, !asc)}
        >
          <Text size="14px">Long</Text>
          {by === 1 ? (
            <Triangle
              rotation={!asc ? "180deg" : ""}
              scale="0.8"
              fill
              color="white"
            />
          ) : null}
        </Field>
        <Field
          display="flex"
          justifyContent="center"
          padding="1px"
          width={1 / 8}
          style={{
            borderRight: "1px solid rgb(112, 180, 63)",
            justifyContent: "center",
            display: "flex"
          }}
          onClick={() => setOrder(1, !asc)}
        >
          <Text size="14px">Short</Text>
          {by === 1 ? (
            <Triangle
              rotation={!asc ? "180deg" : ""}
              scale="0.8"
              fill
              color="white"
            />
          ) : null}
        </Field>
        <Field
          display="flex"
          justifyContent="center"
          padding="1px"
          width={1 / 8}
          style={{
            borderRight: "1px solid rgb(112, 180, 63)",
            justifyContent: "center",
            display: "flex"
          }}
          onClick={() => setOrder(1, !asc)}
        >
          <Text size="14px">Fee</Text>{" "}
          {by === 1 ? (
            <Triangle
              rotation={!asc ? "180deg" : ""}
              scale="0.8"
              fill
              color="white"
            />
          ) : null}
        </Field>
      </Flex>
    </Box>
  </Flex>
);
