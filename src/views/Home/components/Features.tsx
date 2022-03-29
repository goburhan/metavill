import React, { useEffect, useCallback, useState } from 'react'
import styled from 'styled-components'
import bg from './bgcard.svg'

export interface FarmsProps {
  tokenMode?: boolean
}

const Text = styled.text`
  font-size: ${(props) => props.fontSize};
  color: #8d694a;
  opacity: ${(props) => props.opacity};
`
const Title = styled.text`
  font-size: ${(props) => props.fontSize};
  color: #8d694a;
`
const Box = styled.div`
  background-image: url(${bg});
  background-color: #fdf5d3;
  background-repeat: no-repeat;
  background-size: contain;
  color: #8d694a;
  min-height: 285px;
  padding: 60px;
  width: 600px;
  border: 1px solid white;
  border-radius: 25px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  flex-wrap: no-wrap;
`
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  justify-content: center;
  margin-top: 40px;
`
const Container = styled.div``
const FeaturesBoxes = styled.div`
  text-align: center;
`

const News: React.FC<FarmsProps> = (farmsProps) => {
  return (
    <FeaturesBoxes>
      <Text fontSize="36px">Features</Text>

      <Flex>
        <Box>
          <Container>
            <Title fontSize="30px">Auto Metavill</Title>
            <Text opacity="0.6" fontSize="20px">
              <br />
              <br />
              Metavill provides the best APY to users through Auto-Compounding system.
            </Text>
          </Container>

          <img src="images/feature1.png" alt="features" className='sm:hidden md:block'/>
        </Box>

        <Box>
          <Container>
            <Text fontSize="30px"> Treasury Fund</Text>

            <Text opacity="0.6" fontSize="20px">
              <br />
              <br />
              Treasury Fund designed to maintain the value of SWT. It activates the
              Buy-Burn system using the Treasury Fund when the SWT value
            </Text>
          </Container>
          <img src="images/feature2.png" alt="features" className='sm:hidden md:block'/>
        </Box>
      </Flex>
    </FeaturesBoxes>
  )
}

export default News
