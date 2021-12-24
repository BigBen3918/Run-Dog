import React, { useState, useEffect } from "react";
import { Grid, Paper, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NotificationManager } from "react-notifications";

import Header from "../components/header";

import tokennomic from "../components/assets/img/tokenomic.png";
import MARK from "../components/assets/img/coinLogo.png";
import { useBlockchainContext } from "../context";
import { useWallet } from "use-wallet";

export const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    background: "transparent",
    boxShadow: "none",
}));

export default function Presale(props) {
    const [state, { buy, deposit }] = useBlockchainContext();
    const [ETHamount, setETHamount] = useState(0);
    const [tokenAmount, settokenAmount] = useState(0);
    const [loading, setLoading] = useState(false);
    const wallet = useWallet();

    const buyHandle = async () => {
        setLoading(true);
        await buy(ETHamount);
        setLoading(false);
    };

    const onChangeETH = (e) => {
        if (e.target.value === "") {
            setETHamount(0);
            settokenAmount(0);
        } else {
            settokenAmount(e.target.value * 30000);
            setETHamount(e.target.value);
        }
    };

    const onChangeQE = (e) => {
        if (e.target.value === "") {
            setETHamount(0);
            settokenAmount(0);
        } else {
            setETHamount(e.target.value / 30000);
            settokenAmount(e.target.value);
        }
    };

    return (
        <>
            <div className="header_container back1">
                {/* -- header part */}
                <Header />

                {/* -- buy part */}
                <Container>
                    <div className="space-double"></div>
                    <div className="space-double"></div>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item lg={6} md={6} sm={12}>
                            <div className="saleBlock">
                                <div className="space-double"></div>
                                <Grid container>
                                    <Grid item lg={3} md={3} xs={12}>
                                        <div className="space-single"></div>
                                        <span className="x_font_w_4">ETH</span>
                                    </Grid>
                                    <Grid item lg={9} md={9} xs={12}>
                                        <Item>
                                            <div className="contactSet">
                                                <input
                                                    type="number"
                                                    onChange={onChangeETH}
                                                    value={Number(
                                                        Number(
                                                            ETHamount
                                                        ).toFixed(6)
                                                    )}
                                                    className="contactAddress"
                                                    placeholder="Enter ETH"
                                                />
                                            </div>
                                        </Item>
                                    </Grid>
                                </Grid>
                                <div className="space-double"></div>
                                <Grid container>
                                    <Grid item lg={3} md={3} xs={12}>
                                        <div className="space-single"></div>
                                        <span className="x_font_w_4">DG</span>
                                    </Grid>
                                    <Grid item lg={9} md={9} xs={12}>
                                        <Item>
                                            <div className="contactSet">
                                                <input
                                                    type="number"
                                                    onChange={onChangeQE}
                                                    value={tokenAmount}
                                                    className="contactAddress"
                                                    placeholder="Enter QE"
                                                />
                                            </div>
                                        </Item>
                                    </Grid>
                                </Grid>
                                <div className="space-double"></div>

                                <Item>
                                    <div
                                        className="buyButton noselect align_center"
                                        onClick={wallet.status==="connected"?buyHandle:""}
                                    >
                                        Buy Token
                                    </div>
                                </Item>
                            </div>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12}>
                            <Item>
                                <img
                                    src={MARK}
                                    alt="NoImg"
                                    className="coinlogo"
                                />
                            </Item>
                        </Grid>
                    </Grid>

                    <div className="space-double"></div>
                    <div className="space-double"></div>

                    {/* buy rule */}
                    <Item>
                        <img
                            src={tokennomic}
                            alt=""
                            style={{ width: "100%" }}
                        />
                    </Item>
                    <Grid container justifyContent="center" spacing={5}>
                        <Grid item xs={12} sm={12} md={3}>
                            <Item>
                                <div className="x_font_y_3">
                                    Comprehensive Token Distribution
                                </div>
                                <span className="x_font_w_4">
                                    BNBH Token distribution is designed for the
                                    long-term taking into acocunt: ecosystem
                                    development, major CEX listings and Binance
                                    listing in the future
                                </span>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <Item>
                                <div className="x_font_y_3">
                                    Buy & Sell Slippage
                                </div>
                                <span className="x_font_w_4">
                                    Buy Slippage – 12%
                                    <br />
                                    11% – BNB Rewards Pool
                                    <br />
                                    1% – Liquidity Pool
                                    <br />
                                    <div className="space-single"></div>
                                    Sell Slippage – 15%
                                    <br />
                                    13% – BNB Rewards Pool
                                    <br />
                                    2% – Liquidity Pool
                                </span>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <Item>
                                <div className="x_font_y_3">
                                    Anti - Whale Mechanism
                                </div>
                                <span className="x_font_w_4">
                                    Max buy and Max sell set at 200,000 BNBH
                                    <br />
                                    This is to protect from bot attack exploits
                                    and large whale move
                                </span>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <Item>
                                <div className="x_font_y_3">
                                    Audited and Safe:
                                </div>
                                <span className="x_font_w_4">
                                    BNBH Token and BNB Rewards Pool contracts
                                    are both audited By CERTIK and are 100% SAFU
                                </span>
                            </Item>
                        </Grid>
                    </Grid>
                    <div className="space-double"></div>
                </Container>
            </div>
        </>
    );
}
