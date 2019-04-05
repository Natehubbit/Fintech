
const Token = artifacts.require("./Token.sol");
const signaturies = {
  treasurer:'0x37b806cF4f6eFFF4f452De0B4042340eC13aBDF7',
  financeOfficer: '0x93AE41b57887f9B3abd58fdaFF80C6fc36E2Ffb5',
  president: '0x6825539c4A7CE4F05Af3Be9959d6715F5C0A51CC',

}
module.exports = function(deployer) {
  deployer.deploy(Token,5000000000,signaturies.treasurer,signaturies.financeOfficer,signaturies.president);
};
