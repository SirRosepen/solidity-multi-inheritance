import { expect } from 'chai';
import { ethers } from 'hardhat';
import type { C__factory } from '../typechain';

describe('MyContract', function () {
    it('should call all base functions', async function () {
        // GIVEN
        const C = (await ethers.getContractFactory('C')) as C__factory;
        const c = await C.deploy();
        await c.deployed();

        // WHEN
        const tx = await c.runAll();
        await tx.wait();

        // THEN
        expect(await c.numOpsA()).to.equal(1);
        expect(await c.numOpsB1()).to.equal(1);
        expect(await c.numOpsB2()).to.equal(1);
    });

    it('should call base function of A', async function () {
        // GIVEN
        const C = (await ethers.getContractFactory('C')) as C__factory;
        const c = await C.deploy();
        await c.deployed();

        // WHEN
        const tx = await c.runA();
        await tx.wait();

        // THEN
        expect(await c.numOpsA()).to.equal(1);
        expect(await c.numOpsB1()).to.equal(0);
        expect(await c.numOpsB2()).to.equal(0);
    });

    it('should call base function of B1 and A', async function () {
        // GIVEN
        const C = (await ethers.getContractFactory('C')) as C__factory;
        const c = await C.deploy();
        await c.deployed();

        // WHEN
        const tx = await c.runB1();
        await tx.wait();

        // THEN
        expect(await c.numOpsA()).to.equal(1);
        expect(await c.numOpsB1()).to.equal(1);
        expect(await c.numOpsB2()).to.equal(0);
    });

    it('should call base function of B2 and A', async function () {
        // GIVEN
        const C = (await ethers.getContractFactory('C')) as C__factory;
        const c = await C.deploy();
        await c.deployed();

        // WHEN
        const tx = await c.runB2();
        await tx.wait();

        // THEN
        expect(await c.numOpsA()).to.equal(1);
        expect(await c.numOpsB1()).to.equal(0); // <--------- here it gets interesting
        expect(await c.numOpsB2()).to.equal(1);
    });
});
