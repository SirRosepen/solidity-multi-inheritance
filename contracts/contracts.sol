// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {console} from "hardhat/console.sol";

contract A {
    uint private ops;

    function run() internal virtual {
        console.log("A.run");
        ops++;
    }

    function numOpsA() external view returns(uint) {
        return ops;
    }
}

contract B1 is A {
    uint private ops;

    function run() override internal virtual {
        console.log("B1.run");
        ops++;
        super.run();
    }

    function numOpsB1() external view returns(uint) {
        return ops;
    }
}

contract B2 is A {
    uint private ops;

    function run() override internal virtual {
        console.log("B2.run");
        ops++;
        super.run();
    }

    function numOpsB2() external view returns(uint) {
        return ops;
    }
}

contract C is A, B1, B2 {
    function run() override(A, B1, B2) internal virtual {
        console.log("C.run");
        super.run();
    }

    function runAll() external { run(); }

    function runA() external { A.run(); }

    function runB1() external { B1.run(); }

    function runB2() external { B2.run(); }
}
