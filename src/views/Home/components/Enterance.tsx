import React, { useMemo, useState } from 'react'
import BigNumber from 'bignumber.js'
import { Farm } from 'state/types'
import { QuoteToken } from 'config/constants/types'
import Slider from 'react-slick'
import { provider } from 'web3-core'
import { useFarms, usePriceBnbBusd, usePriceCakeBusd, useTotalValue } from 'state/hooks'
import CardValue from 'views/Home/components/CardValue'
import { getBalanceNumber } from 'utils/formatBalance'
import { useBurnedBalance, useTotalSupply } from 'hooks/useTokenBalance'
import { getCakeAddress } from 'utils/addressHelpers'
import styled from 'styled-components'

export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
}

interface FarmCardProps {
  farm: FarmWithStakedValue
}

const Enterance = () => {
  const totalValue = useTotalValue()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const eggPrice = usePriceCakeBusd()
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0)
  const marketCap = eggPrice.times(circSupply)
  const cakePriceUsd = usePriceCakeBusd()
  const farms = useFarms()
  const bnbPrice = usePriceBnbBusd()
  const cakeSupply = getBalanceNumber(circSupply)
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 750,
    autoplaySpeed: 5000,
    arrows: false,
  }
  const Container = styled.div`
   display:block;
  `
  const Welcome = styled.div`
    margin-left: auto;
    margin-right: auto;
    text-align:center;
    @media (max-width:766px) {
      background:rgba(255,255,255,0.65);
    }
  `
  const Flex = styled.div`
    display: flex;
  `
  const Text = styled.div`
  margin-bottom: ${(props) => props.property };
  margin-right: ${(props) => props.property };
  font-size:20px;
  color: ${(props) => props.color };
  `
  const Values = styled.div`
    background-color:  ${(props) => props.color }; 
    border:solid 1px transparent;
    border-radius:5px;
    text-align:center;
    text-color:white;
    min-width:150px;
    min-height:30px;
    margin: 10px 10px 10px 10px;
    `

  return (
    <Flex>
      <Welcome>
        <img src="/images/welcome.png" alt="welcome" className='ml-auto mr-auto' />

        <Text property='25px' color='#376c47' >2.0 (PVC) on BSC Network</Text>

    <Flex>
      <Container >
      <Text color='#376c47'>Total Value Locked</Text>

      
        <Values color='#376c47'>

          {totalValue.toNumber() > 0 ? (
            <CardValue
              value={totalValue.toNumber()}
              prefix="$"
              decimals={2}
              fontSize="18px"
              color='#fff'
            />
          ) : (
            <CardValue value={0} prefix="$" decimals={2} fontSize="18px" />
          )}
        </Values>
        </Container>
        <Container>
        <Text color='#2ca0b7'>SVT APY</Text>
          <Values  color='#2ca0b7'>
          
          {totalValue.toNumber() > 0 ? (
            <CardValue
              value={totalValue.toNumber()}
              prefix="$"
              decimals={2}
              fontSize="18px"
              color='#fff'
            />
          ) : (
            <CardValue value={0} prefix="$" decimals={2} fontSize="18px" />
          )}
        </Values>
        </Container>
        
        </Flex>
      </Welcome>
    </Flex>
  )
}

export default Enterance


