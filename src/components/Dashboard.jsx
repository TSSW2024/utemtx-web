// Dashboard.jsx
import React from "react";
import ProfileResume from "./ProfileResume.jsx";
import Wallet from "./Wallet.jsx";
import Markets from "./Markets.jsx";


const Dashboard = ({ user }) => {
    const displayName = user?.displayName ?? "";
    const uid = user?.uid ?? "default-uid";
    const verified = user?.verified ?? false;
    const photoURL = user?.photoURL ?? "";
    const role = user?.role ?? "guest";
    const followers = user?.followers ?? 0;
    const following = user?.following ?? 0;
    const name = displayName || `Anonymus-User-${uid.slice(0, 6)}`;

    const fakeWallet = {
        ETH: "0.000002",
        BTC: "0.000001",
        USDT: "0.000003",
        balance: "0.000006",
        history: [
            { date: '2024-06-01', balance: "0.000006" },
            { date: '2024-06-02', balance: "0.000007" },
            { date: '2024-06-03', balance: "0.000005" },
            { date: '2024-06-04', balance: "0.000006" },
            { date: '2024-06-05', balance: "0.000006" },
            { date: '2024-06-06', balance: "0.000006" },
            { date: '2024-06-07', balance: "0.000008" },
            { date: '2024-06-08', balance: "0.000007" },
            { date: '2024-06-09', balance: "0.000009" },
            { date: '2024-06-10', balance: "0.000008" },
            { date: '2024-06-11', balance: "0.000008" },
            { date: '2024-06-12', balance: "0.000010" },
            { date: '2024-06-13', balance: "0.000009" },
            { date: '2024-06-14', balance: "0.000011" },
            { date: '2024-06-15', balance: "0.000011" },
            { date: '2024-06-16', balance: "0.000011" },
            { date: '2024-06-17', balance: "0.000006" },
            { date: '2024-06-18', balance: "0.000006" },
            { date: '2024-06-19', balance: "0.000006" },
            { date: '2024-06-20', balance: "0.000006" },
            { date: '2024-06-21', balance: "0.000008" },
            { date: '2024-06-22', balance: "0.000008" },
            { date: '2024-06-23', balance: "0.000008" },
            { date: '2024-06-24', balance: "0.000009" },
            { date: '2024-06-25', balance: "0.000009" },
            { date: '2024-06-26', balance: "0.000011" },
            { date: '2024-06-27', balance: "0.000011" },
            { date: '2024-06-28', balance: "0.000011" },
            { date: '2024-06-29', balance: "0.000011" },
            { date: '2024-06-30', balance: "0.000011" },
        ]
    };


    return (
        <div className="p-4 flex flex-col gap-4 flex-grow max-w-screen-xl mx-auto" >
            <ProfileResume user={user} />
            <Wallet wallet={fakeWallet} />
            <Markets />
        </div >
    );
};

export default Dashboard;
