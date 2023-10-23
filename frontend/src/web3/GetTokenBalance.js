import { ethers } from "ethers";
import { useState } from "react";
import axios from "axios";

export function useGetBalance() {
    const [userBalance, setUserBalance] = useState();

    async function getBalance(walletAddress) {
        await axios.get(`/get_balance?address=${walletAddress}`).then((res) => {
            const balance = res.data[0].balance
            const decimals = 18
            const balanceInRED = ethers.utils.formatUnits(balance, decimals);
            setUserBalance(balanceInRED)

        }).catch((err) => console.log(err))
    }

    return { userBalance, getBalance }
}