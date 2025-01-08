import axios from 'axios'
import { ethers } from 'ethers'

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID

async function getContractABI(contractAddress, apiKey) {
  try {
    const url = `https://api-sepolia.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${apiKey}`
    const response = await axios.get(url)

    if (response.data.status !== '1') {
      throw new Error(`Failed to fetch ABI: ${response.data.message}`)
    }

    return JSON.parse(response.data.result)
  } catch (error) {
    console.error('Error fetching ABI:', error.message)
    throw error
  }
}

async function callContractFunction(contractAddress, abi, name, params) {
  try {
    const provider = new ethers.JsonRpcProvider(
      `https://sepolia.infura.io/v3/${INFURA_PROJECT_ID}`,
    )
    const contract = new ethers.Contract(contractAddress, abi, provider)

    const result = await contract[name](...params)
    return result
  } catch (error) {
    console.error('Error calling contract function:', error.message)
  }
}

async function retrieveExhibitionDataIpfsHash(contractAddress, tokenId) {
  const abi = await getContractABI(contractAddress, ETHERSCAN_API_KEY)
  const result = await callContractFunction(contractAddress, abi, 'exhibitionData', [tokenId])
  return result
}

async function fetchIpfsJson(ipfsHash) {
  try {
    // Validate the IPFS hash format
    if (!ipfsHash || typeof ipfsHash !== 'string') {
      throw new Error('Invalid IPFS hash provided.')
    }

    // Construct the URL for fetching the IPFS data
    const url = `https://ipfs.io/ipfs/${ipfsHash}`

    // Fetch the data from IPFS
    const response = await fetch(url)

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error(`Failed to fetch IPFS data: ${response.statusText}`)
    }

    // Parse the JSON content from the response
    const jsonData = await response.json()

    return jsonData
  } catch (error) {
    console.error('Error fetching or parsing IPFS JSON:', error)
    throw error // Re-throw the error for the caller to handle
  }
}

async function getExhibitionData(contractAddress, tokenId) {
  let result = await retrieveExhibitionDataIpfsHash(contractAddress, tokenId)
  result = await fetchIpfsJson(result.split('ipfs://')[1])
  return result
}

export async function GET(req, { params }) {
  const { CONTRACTADDRESS, TOKENID } = params
  try {
    if (!CONTRACTADDRESS || !TOKENID) {
      return new Response(
        JSON.stringify({
          error: 'Contract address and token ID are required.',
        }),
        { status: 400 },
      )
    }

    const data = await getExhibitionData(CONTRACTADDRESS, parseInt(TOKENID))
    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error) {
    console.error('API Route Error:', error.message)
    return new Response(
      JSON.stringify({
        error: 'An error occurred while processing your request.',
      }),
      { status: 500 },
    )
  }
}
