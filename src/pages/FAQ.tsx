import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqAccordion = styled(Accordion)({
  border: "1px solid #0D0D11",
  borderRadius: "10px",
  marginBottom: 16,
  padding: "12px 16px",
  backgroundColor: "initial",
});

const GradientText = styled(Typography)`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 8px;
  font-weight: 600;
  background: linear-gradient(to right, #9d7be9 0%, #6f57d1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  display: inline-block;
`;

const FAQ = function () {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const items = [
    {
      summary: "What is Palmswap about?",
      detail:
        "Palmswap is a decentralized trading platform based on Binance Smart Chain, Palmswap offers 100% on chain perpetuals futures. Users can open long positions (bet that the price of a coin goes up) or open short positions (bet that the price goes down), users can also leverage up (use borrowed funds to trade assets more than your wallet balances) without owning the underlying asset.",
    },
    {
      summary: "What are perpetual contracts?",
      detail:
        "The perpetual contract is a fairly new type of financial derivative. Unlike the futures and options markets, perpetual do not expire and do not have a settlement date, meaning you can hold your position forever. Unlike the spot markets, the underlying asset is never involved directly, so you can gain exposure to an asset’s price movements without having to actually hold or borrow the asset itself.",
    },
    {
      summary: "Why choose to trade perpetual contracts?",
      detail:
        "Perpetual contracts are an easy way for traders to hold leveraged positions without an expiration date in a given market. With perpetual contracts, you can trade cryptocurrencies with leverage, which means you can magnify small movements in price to potentially generate outsized profits like 10x, 50x or even 100x.",
    },
    {
      summary: "What is the maximum leverage at Palmswap?",
      detail:
        "Palmswap allow Traders to trade with up to 10x leverage long or short positions, have transparent fees and 24/7 guaranteed liquidity. After launch of V2 you will be able to trade up to 50x leverage.",
    },
    {
      summary: "How does Palmswap fit in the market?",
      detail:
        "For many traders, trading on the Ethereum network is nearly impossible especially for users from developing countries due to the high transaction fees. However, Palmswap is committed to solving this issue by providing users the lowest transaction fee rates by deploying on Binance smart chain, it aims to bring the best accessibility and usability of decentralized perpetual platforms to users globally with its V2.",
    },
    {
      summary: "Why trade on Palmswap over central derivatives exchanges?",
      detail:
        "Palmswap doesn’t require Registration or KYC requirements, users have full control over their own assets with lowest fees possible. Palmswap offer PALM token rewards for active traders on the DEX.",
    },
    {
      summary: "What are decentralized hedge funds?",
      detail:
        "Decentralized funds allow anyone, whether a fund manager or a private trader, to create and manage funds for their own clients. All administration is done on-chain and with an automated profit sharing option.",
    },
    {
      summary: "What can PALM token do?",
      detail:
        "PALM token is a governance token designed to facilitate and incentivize the decentralized governance of the protocol, users stake and farm it by providing liquidity. You get also incentiveized by trading on the protocol through Tradingcycles. 50% of the exchange revenue will be used to buyback & burn PALM.",
    },
    {
      summary: "Wich use cases does PALM token have?",
      detail:
        "Users have 4 ways to earn free PALM tokens: <br /><br />1. Trade to earn PALM tokens through Trading Cycles.<br />2. Stake in a Staking Pool to earn tokens and reduce tradingfees. <br />3. Use LP tokens in the farm to earn more tokens. <br />4. Vote on proposals (Governance).",
    },
    {
      summary: "What are tradingcycles?",
      detail:
        "Palmswap Trading Cycles are a series of rewards that are distributed in regular cycles, which distributes 35.7% of the total token supply (357 million PALM) to active traders on the protocol, based on a combination of fees paid and position size.",
    },
    {
      summary: "When will the first trading cycle start?",
      detail:
        "The first Trading Cycle will launch after the retroactive trading program (1month after protocol launches on mainnet).",
    },
    {
      summary: "How to participate trading cycle and earn PALM tokens?",
      detail:
        "All Palm Protocol traders are eligible to receive PALM as a reward. Users can track current Cycles and past Cycles under Portfolio - Trading Cycles. Earned PALM tokens in Trading Cycles will be transferred 7 days after the end of the cycle.",
    },
    {
      summary: "What is Retroactive Trading Program?",
      detail:
        "The Retroactive trading program intensifies early traders for trading on the protocol. It gives users the incentive to trade on the platform and is thus a powerful growth stimulant. Additionally to the Retroactive Trading Program, Trading Cycles are another tool designed to provide exactly this incentive in the long run.",
    },
    {
      summary: "Why Retroactive Trading Program?",
      detail:
        "The Palmswap protocol should be managed by its users, so we believe it is more compelling to reward early protocol adopters with a snapshot rather than selling PALM tokens to non-platform users through a Public Sale and giving them voting rights over the future of Palmswap.",
    },
    {
      summary: "What do users need to start trading on Palmswap?",
      detail:
        "1. A wallet that supports BSC, e.g: Metamask <br /> 2. USDT on BSC Step by Step <br /> <br /> Guide: <a style='color: inherit' href='https://docs.palmswap.org/get-started/create-a-wallet'>https://docs.palmswap.org/get-started/create-a-wallet</a>",
    },
    {
      summary: "How to connect to Palmswap testnet?",
      detail:
        "Follow steps: <a style='color: inherit' href='https://docs.palmswap.org/testnet/trade-on-testnet'>https://docs.palmswap.org/testnet/trade-on-testnet</a> <br /> Enter: testnet.palmswap.org",
    },
  ];

  const [expanded, setExpanded] = useState(null);

  const handleChange = (index: any) => (event: any, isExpanded: any) => {
    setExpanded(isExpanded ? index : false);
  };

  return (
    <Box maxWidth="1120px">
      <Box textAlign="center">
        <GradientText sx={{ pb: isSmallScreen ? "4px" : "24px" }}>
          DO YOU NEED HELP
        </GradientText>
        <Typography
          sx={{
            fontSize: isSmallScreen ? "27px" : isMediumScreen ? "72px" : "52px",
            lineHeight: isSmallScreen ? "45.3px" : "64px",
            letterSpacing: isSmallScreen ? "-0.27px" : "-0.5px",
            fontFamily: "MazzardH-ExtraBold",
            fontWeight: "700",
            textTransform: "uppercase",
            pb: isSmallScreen ? "4px" : "24px",
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          sx={{
            fontSize: isSmallScreen ? "13px" : "16px",
            lineHeight: "24px",
            color: "#787878",
            pb: "30px",
            width: isSmallScreen ? "100%" : "50%",
            margin: "0 auto",
          }}
        >
          Can't find the answer you're looking for?{" "}
          <a href="/contactus" style={{ color: "inherit" }}>
            Contact us
          </a>
          .
        </Typography>
      </Box>
      <Box mt={4}>
        {items.map(({ summary, detail }, i) => (
          <FaqAccordion
            key={i}
            expanded={expanded === i}
            onChange={handleChange(i)}
          >
            <AccordionSummary
              expandIcon={
                expanded === i ? (
                  <ExpandMoreIcon
                    fontSize={isSmallScreen ? "medium" : "large"}
                    style={{ fill: "#fff" }}
                  />
                ) : (
                  <ExpandMoreIcon
                    fontSize={isSmallScreen ? "medium" : "large"}
                    style={{ fill: "#fff" }}
                  />
                )
              }
            >
              <Box display="flex" alignItems="center">
                <Typography
                  style={{ fontSize: isSmallScreen ? "16px" : "20px" }}
                >
                  {summary}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                style={{ fontSize: isSmallScreen ? "13px" : "16px" }}
                align="left"
                color="#787878"
                dangerouslySetInnerHTML={{ __html: detail }}
              />
            </AccordionDetails>
          </FaqAccordion>
        ))}
      </Box>
    </Box>
  );
};
export default FAQ;
