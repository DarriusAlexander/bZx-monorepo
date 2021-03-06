
pragma solidity 0.5.3;

import "../BaseToken.sol";


// 1 billion tokens (18 decimal places)
contract TestToken0 is BaseToken( // solhint-disable-line no-empty-blocks
    10**(50+18),
    "TestToken0", 
    18,
    "TEST0"
) {}
