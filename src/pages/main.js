import React, { useState, useEffect } from "react";
import { Grid, Paper, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

import Header from "../components/header";

import MARK from "../components/assets/img/mark.png";
import about from "../components/assets/img/about.png";
import howitwork from "../components/assets/img/howitwork.png";
import tokennomic from "../components/assets/img/tokenomic.png";

export const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    background: "transparent",
    boxShadow: "none",
}));

export default function Main() {
    return (
        <>
            {/* -- Part1 */}
            <div className="header_container back1">
                <Header />

                <Container>
                    {/* -- Title part */}
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        spacing={5}
                        style={{ marginTop: "10px" }}
                    >
                        <Grid item xs={12} sm={12} md={7} lg={6}>
                            <div item className="mainTitle">
                                <span className="title">
                                    FIRST{" "}
                                    <span style={{ color: "yellow" }}>
                                        PLAY-TO-EARN
                                    </span>{" "}
                                    <br />
                                    GAME WHICH REWARDS <br />
                                    PLAYERS IN BNB
                                </span>
                                <br />
                                <button className="markPlay">Play Now</button>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={5} lg={6}>
                            <Item>
                                <img
                                    src={MARK}
                                    alt="NoImg"
                                    className="center_container"
                                />
                            </Item>
                        </Grid>
                    </Grid>
                    <div className="space-double"></div>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Item>
                                <div className="x_font_w_2">ABOUT</div>
                                <div className="x_font_y_2">RUNDOG</div>
                                <div className="x_font_w_4 overflow_card align_left">
                                    This game is about Runner game which focuses
                                    on game economy, expansion and
                                    sustainability.
                                </div>
                                <div className="space-single"></div>
                                <div className="x_font_w_4 overflow_card align_left">
                                    We plan to make this game durable
                                    and-reliable for many players to earn BNB
                                    directly while playing.
                                </div>
                                <div className="space-single"></div>
                                <div className="x_font_w_4 overflow_card align_left">
                                    Our team is dedicated in delivering a
                                    simple, fun, accessible, sustainable and
                                    profitable game for all our gamers!
                                </div>
                                <div className="space-double"></div>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <img
                                src={about}
                                alt="NoImg"
                                style={{ width: "100%", height: "100%" }}
                            />
                        </Grid>
                    </Grid>
                </Container>
                <div className="space-double"></div>
            </div>

            {/* Part2 */}
            <div className="header_container back2">
                <Container>
                    <Item>
                        <div className="space-double"></div>
                        <div className="space-double"></div>
                        <div className="x_font_w_1">HOW IT</div>
                        <div className="x_font_y_2">WORKS</div>
                        <img src={howitwork} alt="" style={{ width: "100%" }} />
                        <div className="space-double"></div>
                        <div className="x_font_w_1">GAME</div>
                        <div className="x_font_y_2">TOKENOMICS</div>
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
                </Container>
            </div>
            <div className="space-double"></div>
        </>
    );
}
