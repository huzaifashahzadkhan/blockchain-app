//https://eth-sepolia.g.alchemy.com/v2/poqjJBL_4KJFMlNs4FF0COlgVXkbwMBE

require('@nomiclabs/hardhat-waffle')

module.exports={
  solidity:'0.8.0',
  networks:{
    Sepolia:{
      url:'https://eth-sepolia.g.alchemy.com/v2/poqjJBL_4KJFMlNs4FF0COlgVXkbwMBE',
      accounts: ['9c5e2b223b3e020443268a1ce62d95deb4458224b75968dbc22127cf67933f32']
    }
  }
}