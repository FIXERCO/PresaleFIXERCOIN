// FixerPresale Contract ABI - Updated
const presaleAbi = [
    {
        "inputs": [
            {"internalType": "address", "name": "_fixerToken", "type": "address"},
            {"internalType": "address", "name": "_usdtToken", "type": "address"}
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {"internalType": "uint256", "name": "_usdtAmount", "type": "uint256"},
            {"internalType": "address", "name": "_referrer", "type": "address"}
        ],
        "name": "buyTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "claimTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "address", "name": "", "type": "address"}],
        "name": "userBalances",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawUSDT",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "enableClaim",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

// USDT Contract ABI (Standard ERC20)
const usdtAbi = [
    {
        "constant": false,
        "inputs": [
            {"name": "_spender", "type": "address"},
            {"name": "_value", "type": "uint256"}
        ],
        "name": "approve",
        "outputs": [{"name": "", "type": "bool"}],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{"name": "_owner", "type": "address"}, {"name": "_spender", "type": "address"}],
        "name": "allowance",
        "outputs": [{"name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }
];

// آدرس قراردادهای شما
const presaleAddress = "0xec703a2D2c46500B9932EB68db6Bd07F65d990cA";
const usdtAddress = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";