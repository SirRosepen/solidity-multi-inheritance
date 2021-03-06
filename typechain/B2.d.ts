/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface B2Interface extends ethers.utils.Interface {
  functions: {
    "numOpsA()": FunctionFragment;
    "numOpsB2()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "numOpsA", values?: undefined): string;
  encodeFunctionData(functionFragment: "numOpsB2", values?: undefined): string;

  decodeFunctionResult(functionFragment: "numOpsA", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "numOpsB2", data: BytesLike): Result;

  events: {};
}

export class B2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: B2Interface;

  functions: {
    numOpsA(overrides?: CallOverrides): Promise<[BigNumber]>;

    numOpsB2(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  numOpsA(overrides?: CallOverrides): Promise<BigNumber>;

  numOpsB2(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    numOpsA(overrides?: CallOverrides): Promise<BigNumber>;

    numOpsB2(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    numOpsA(overrides?: CallOverrides): Promise<BigNumber>;

    numOpsB2(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    numOpsA(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numOpsB2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
