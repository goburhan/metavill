import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@macist-m/robinia-uikit'
import bg1 from './bg1.svg'
import bg2 from './bg2.svg'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
font-family: 'Quicksand', sans-serif;;
  }
  body {
    background-image: url(${bg2}),  url(${bg1});
    background-attachment: scroll , fixed;
    background-repeat:no-repeat;
    background-size:auto,cover;
    background-position: 0% 100% , 0% 0%;

    img {
      height: auto;
      max-width: 100%;
    }
  }
  .rbs-bg {
    background: rgba(255, 255, 255, 0.45);
    backdrop-filter: blur(45px);
  }

  .solofarmcard {
    border:"20px solid transparent";
    borderImage: url(kartbg.svg) 30 stretch;
    borderImageWidth:"110px";
    borderImageOutset:"45px";
    borderImageSlice:"20%";
  }

  .pbg{
    background : #3B3172;
    padding-left:45px;
    padding-right:45px;
    background-size:cover;
    height:50px;
    border-radius:30px;
  }

  .stat-card{
    background: #f7f3e4;
    padding: 25px;
    border-radius:30px;

    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.05);
    margin-left: 6px;
    margin-right: 6px;
  }
  .footer-stats{
    background: rgba(158, 143, 205, 1);
    border-radius:30px;
    
    padding: 14px;
    justify-content: center;
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.05);

  }
  .socialbg {
    background: rgba(235, 226, 255, 0.39);
    height: 35px;
    min-width:30px;
    max-width:25px;
    margin-right:5px;
  }
  .selectasset {
    background: rgba(235, 226, 255, 0.39);
    height: 45px;
    width:100px;
    min-width:30px;
    margin-right:5px;
  }

  .footer-right{
    padding: 25px;
    margin-left: 6px;
    margin-right: 6px;
    background :none;
    
  }
  .dropdown:hover > .dropdown-content {
    display: block;
  }

  .farmingcard{
    background: rgba(212, 211, 255, 0.4);
    padding: 25px;

    border-style : solid;
    border-color: white;
    border-width: 1.5px;
    border-radius: 30px;

    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.05);
    margin-left: 6px;
    margin-right: 6px;
  }

  .calloption{
    background: #e0d9b8;
    padding: 55px;
    border-style : solid;
    border-color: rgba(200, 200, 200, 0.25);
    border-width: 2px;
    border-radius: 30px;
    backdrop-filter: blur(5px);

    
  }

  .partnercard{
    padding: 25px;

    border-style : solid;
    border-color: #e0d9b8;
    border-width: 1.5px;
    border-radius: 30px;

    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.05);
    margin-left: 6px;
    margin-right: 6px;
  }

  .rbs-card {
    background: #fdf5d3;
    padding: 25px;
    margin-bottom:30px;
    border-style : solid;
    border-color: white;
    border-width: 1.5px;
    border-radius: 30px;

    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.05);
    margin-left: 6px;
    margin-right: 6px;
    ${({ theme }) => theme.mediaQueries.sm} {
      margin: 0 auto;
    }
    ${({ theme }) => theme.mediaQueries.lg} {
      margin: 0 auto;
    }
  }

  .claim-card{
      background: rgba(212, 211, 255, 0.4);
      padding: 25px;
      border-width: 1.5px;
      border-radius: 30px;
  
      box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.05);
      margin-left: 6px;
      margin-right: 6px;
      ${({ theme }) => theme.mediaQueries.sm} {
        margin: 0 auto;
      }
      ${({ theme }) => theme.mediaQueries.lg} {
        margin: 0 auto;
    }
  }
  .noclaim-card{
    background: rgba(212, 211, 255, 0.4);
    padding:12px;
    border-radius: 30px;

    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.05);
    margin-left: 6px;
    margin-right: 6px;
    ${({ theme }) => theme.mediaQueries.sm} {
      margin: 0 auto;
    }
    ${({ theme }) => theme.mediaQueries.lg} {
      margin: 0 auto;
  }
}
  
  .slick-list> div {
    margin-left:0;
  }
`

export default GlobalStyle
