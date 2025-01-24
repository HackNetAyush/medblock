import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0xfe934479cc811ec26651e4384bd7b23c3735b2cf";
const ABI = [
  {
    inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
    name: "closetrial",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "id", type: "uint256" },
      { internalType: "string", name: "description", type: "string" },
    ],
    name: "createLog",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "title", type: "string" },
      { internalType: "string", name: "description", type: "string" },
      { internalType: "string", name: "category", type: "string" },
    ],
    name: "createTrial",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "parent_trial_record",
    outputs: [
      { internalType: "uint256", name: "id", type: "uint256" },
      { internalType: "bool", name: "exists", type: "bool" },
      { internalType: "address", name: "author_address", type: "address" },
      { internalType: "string", name: "title", type: "string" },
      { internalType: "string", name: "description", type: "string" },
      { internalType: "string", name: "category", type: "string" },
      { internalType: "bool", name: "status", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "total_trials_count",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "trials",
    outputs: [
      { internalType: "uint256", name: "id", type: "uint256" },
      { internalType: "bool", name: "exists", type: "bool" },
      { internalType: "address", name: "author_address", type: "address" },
      { internalType: "string", name: "title", type: "string" },
      { internalType: "string", name: "description", type: "string" },
      { internalType: "string", name: "category", type: "string" },
      { internalType: "bool", name: "status", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const RPC_PROVIDER = "https://ethereum-sepolia-rpc.publicnode.com";

export const createTrial = async (
  title: string,
  deescription: string,
  category: string,
  private_key: string
) => {
  const provider = new ethers.JsonRpcProvider(RPC_PROVIDER);
  const signer = new ethers.Wallet(private_key, provider);

  const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
  const res = await contract.createTrial(title, deescription, category);
  console.log("Tril created on blockchain");
};

export const getTrials = async () => {
  const provider = new ethers.JsonRpcProvider(RPC_PROVIDER);
  const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
  console.log("called");
  let total_trials_count = await contract.total_trials_count();
  //@ts-ignore
  total_trials_count = ethers.formatEther(total_trials_count) * 10 ** 18;
  console.log(total_trials_count);
  const _return_arr = [];
  for (let i = 0; i < total_trials_count; i++) {
    const res = await contract.trials(i);
    const trial_object = {
      title: res[3],
      description: res[4],
      category: res[5],
      //@ts-ignore
      id: ethers.formatEther(res[0]) * 10 ** 18,
    };
    console.log(trial_object);
    _return_arr.push(trial_object);
  }
  return _return_arr;
};
