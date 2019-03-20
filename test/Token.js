const Token = artifacts.require("./Token.sol");

contract('Token', a=>{
    it('Sets Total Supply on deployment', ()=>{
        return Token.deployed().then(a=>{
            instance = a;
            return instance.totalSupply();
        }).then(totalSupply=>{
            assert.equal(totalSupply.toNumber(), 5000000000, 'Sets total supply to 5,000,000,000')
        })
    })
})
