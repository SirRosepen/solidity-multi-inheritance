/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { B1, B1Interface } from "../B1";

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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060e48061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806391ae9b6e1460375780639f613de9146051575b600080fd5b603d606b565b60405160489190608b565b60405180910390f35b60576074565b60405160629190608b565b60405180910390f35b60008054905090565b6000600154905090565b60858160a4565b82525050565b6000602082019050609e6000830184607e565b92915050565b600081905091905056fea2646970667358221220bded2b4e60ac56208cd12c48d9b82f64ff74ce587d15bdcd1148bd62098fe17e64736f6c63430008040033";

export class B1__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<B1> {
    return super.deploy(overrides || {}) as Promise<B1>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): B1 {
    return super.attach(address) as B1;
  }
  connect(signer: Signer): B1__factory {
    return super.connect(signer) as B1__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): B1Interface {
    return new utils.Interface(_abi) as B1Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): B1 {
    return new Contract(address, _abi, signerOrProvider) as B1;
  }
}