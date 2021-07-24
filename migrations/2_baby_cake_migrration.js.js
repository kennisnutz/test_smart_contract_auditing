const BABYCAKE = artifacts.require("BABYCAKE");

//const IterableMapping = artifacts.require("IterableMapping");



module.exports = async function (deployer) {
  await deployer.deploy(BABYCAKE);
  //deployer.deploy(IterableMapping);
};
