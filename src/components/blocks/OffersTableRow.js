import {D} from '../basics/Colors'
import {Box, Flex} from '@rebass/grid'
import React from 'react'
import Text from '../basics/Text'
import Button from '../basics/Button'
import TruncatedAddress from '../basics/TruncatedAddress.js'
import Input from '../basics/Input.js'
import Form from '../basics/Form.js'

export default ({
  fields,
  onTakeFromThisLP,
  onOpenLP,
  handleEtherChange,
  handlePositionRMChange,
  radioLong,
  radioShort,
  listId
}) => (
  <Flex
    alignItems="center"
    pb="5px"
    pt="5px"
    style={{
      borderBottom: `thin solid ${D}`
    }}
  >
    <Box width="170px" display="flex" alignItems="flex-end">
      <Flex display="flex" flexDirection="column">
        <TruncatedAddress
          label="LP"
          addr={fields[0]}
          start="6"
          end="2"
          spacing="1px"
        />
        <Button style={{ marginTop: "5px" }} onClick={onOpenLP}>
          Open LP
        </Button>
      </Flex>
    </Box>
    <Flex justifyContent="space-between" width="100%">
      <Box
        width={1 / 8}
        display="flex"
        justifyContent="center"
        style={{
          borderLeft: "1px solid rgb(112, 180, 63)",
          borderRight: "1px solid rgb(213, 87, 87)",
          marginLeft: "25px",
          justifyContent: "center",
          display: "flex"
        }}
      >
        <Text size="14px">{fields[1].toFixed(0)} </Text>
      </Box>
      <Box
        width={1 / 8}
        display="flex"
        justifyContent="center"
        style={{
          borderRight: "1px solid rgb(112, 180, 63)",
          justifyContent: "center",
          display: "flex"
        }}
      >
        <Text size="14px">{fields[2].toFixed(0)}</Text>
      </Box>

      <Box
        width={1 / 8}
        display="flex"
        justifyContent="center"
        style={{
          borderRight: "1px solid rgb(213, 87, 87)",
          justifyContent: "center",
          display: "flex"
        }}
      >
        <Text size="14px">
          {fields[4] - fields[3] > 0 &&
          fields[4] / 2 + fields[2] - fields[1] > 0
            ? (fields[4] / 2 + fields[2] - fields[1] - 0.5).toFixed(0)
            : 0}
        </Text>
      </Box>
      <Box
        width={1 / 8}
        display="flex"
        justifyContent="center"
        style={{
          borderRight: "1px solid rgb(112, 180, 63)",
          justifyContent: "center",
          display: "flex"
        }}
      >
        <Text size="14px">
          {fields[4] - fields[3] > 0 &&
          fields[4] / 2 + fields[1] - fields[2] > 0
            ? (fields[4] / 2 + fields[1] - fields[2] - 0.5).toFixed(0)
            : 0}
        </Text>
      </Box>
      <Box
        width={1 / 8}
        display="flex"
        justifyContent="center"
        style={{
          borderRight: "1px solid rgb(112, 180, 63)",
          justifyContent: "center",
          display: "flex"
        }}
      >
        <Text size="14px">{fields[5]} </Text>
      </Box>
      <Box
        width={1 / 8}
        display="flex"
        justifyContent="center"
        style={{
          borderRight: "1px solid rgb(213, 87, 87)",
          justifyContent: "center",
          display: "flex"
        }}
      >
        <Text size="14px">{fields[6]} </Text>
      </Box>
      <Box
        width={1 / 8}
        display="flex"
        justifyContent="center"
        style={{
          borderRight: "1px solid rgb(112, 180, 63)",
          justifyContent: "center",
          display: "flex"
        }}
      >
        <Text size="14px">{fields[7]} </Text>
      </Box>
      <Box
        width={1 / 8}
        display="flex"
        justifyContent="center"
        style={{
          borderRight: "1px solid rgb(112, 180, 63)",
          justifyContent: "center",
          display: "flex"
        }}
      >
        <Text size="14px">{fields[8]} </Text>
      </Box>
    </Flex>
  </Flex>
);
