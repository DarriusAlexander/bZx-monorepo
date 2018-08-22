import { BigNumber } from "bignumber.js";

export const fromBigNumber = (num, scale = 1) =>
  BigNumber(num.toString())
    .div(scale)
    .toNumber();

export const toBigNumber = (num, scale = 1) => BigNumber(num).times(scale);

export const getInitialCollateralRequired = async (
  loanTokenAddress,
  collateralTokenAddress,
  oracleAddress,
  loanTokenAmountFilled,
  initialMarginAmount,
  bZx
) =>
  bZx.getInitialCollateralRequired(
    loanTokenAddress,
    collateralTokenAddress,
    oracleAddress,
    toBigNumber(loanTokenAmountFilled).toFixed(0),
    initialMarginAmount
  );

export const getTokenConversionAmount = async (
  sourceTokenAddress,
  destTokenAddress,
  sourceTokenAmount,
  oracleAddress,
  bZx
) =>
  bZx.getConversionData(
    sourceTokenAddress,
    destTokenAddress,
    toBigNumber(sourceTokenAmount).toFixed(0),
    oracleAddress
  ).amount;
