import Slider from 'react-slick'
import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../../style/slider-dots.css'
import styled from 'styled-components'

const Text = styled.text`
  font-size:"22px";
  line-height: 24px;
 
  color: ${(props) => props.color || '#fff'};
  
  }
`


const PartnerSection = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;
`
const Partner = styled.div`
  text-align: center;

  `

const Title = styled(Text)`
  font-size: 52px;
  line-height: 42px;
  color: #8d694a;
`


export default function Partners() {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 250,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1561,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const partners = [
    { name: 'partner1' },
    { name: 'partner2' },
    { name: 'partner3' },
    { name: 'partner4' },
  ]
  return (
    <Partner>
      <section id="partners" />
      <Title>Partners</Title>
      <br />
      <br />
      <PartnerSection>
        
          
          <div className='partnercard sm:mb-2'>
            <img src="/images/partner1.png" width='230' alt='1'  />
          </div>

          <div className='partnercard sm:mb-2'>
            <img src="/images/partner2.png"  width='230' alt='1' />
          </div>

          <div className='partnercard sm:mb-2'>
            <img src="/images/partner3.png"  width='230' alt='1' />
          </div>

          <div className='partnercard sm:mb-2'>
            <img src="/images/partner4.png"   width='230' alt='1' />
          </div>

      </PartnerSection>
    </Partner>
  )
}
