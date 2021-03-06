/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { C, CInterface } from "../C";

const _abi = [
  {
    inputs: [],
    name: "numOpsA",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numOpsB1",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numOpsB2",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "runA",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "runAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "runB1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "runB2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610507806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806391ae9b6e1161005b57806391ae9b6e146100a057806395f53632146100be5780639f613de9146100dc578063d989eaa7146100fa5761007d565b80630d18002a1461008257806334ba89a61461008c57806363d8336014610096575b600080fd5b61008a610104565b005b61009461010e565b005b61009e610118565b005b6100a8610122565b6040516100b591906103d4565b60405180910390f35b6100c661012b565b6040516100d391906103d4565b60405180910390f35b6100e4610135565b6040516100f191906103d4565b60405180910390f35b61010261013f565b005b61010c610149565b565b6101166101a9565b565b6101206101f1565b565b60008054905090565b6000600254905090565b6000600154905090565b610147610251565b565b6101876040518060400160405280600681526020017f42312e72756e00000000000000000000000000000000000000000000000000008152506102a8565b6001600081548092919061019a90610448565b91905055506101a7610251565b565b6101e76040518060400160405280600581526020017f432e72756e0000000000000000000000000000000000000000000000000000008152506102a8565b6101ef6101f1565b565b61022f6040518060400160405280600681526020017f42322e72756e00000000000000000000000000000000000000000000000000008152506102a8565b6002600081548092919061024290610448565b919050555061024f610149565b565b61028f6040518060400160405280600581526020017f412e72756e0000000000000000000000000000000000000000000000000000008152506102a8565b6000808154809291906102a190610448565b9190505550565b61033e816040516024016102bc91906103b2565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610341565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000610375826103ef565b61037f81856103fa565b935061038f818560208601610415565b610398816104c0565b840191505092915050565b6103ac8161040b565b82525050565b600060208201905081810360008301526103cc818461036a565b905092915050565b60006020820190506103e960008301846103a3565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050919050565b60005b83811015610433578082015181840152602081019050610418565b83811115610442576000848401525b50505050565b60006104538261040b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561048657610485610491565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f830116905091905056fea2646970667358221220e4b90d9e20dc23abcc06949818d8cf012f97c8182e2c6327f775d349db08d45964736f6c63430008040033";

export class C__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<C> {
    return super.deploy(overrides || {}) as Promise<C>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): C {
    return super.attach(address) as C;
  }
  connect(signer: Signer): C__factory {
    return super.connect(signer) as C__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CInterface {
    return new utils.Interface(_abi) as CInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): C {
    return new Contract(address, _abi, signerOrProvider) as C;
  }
}
