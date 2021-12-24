import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, Paper, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NotificationManager } from "react-notifications";
import { useWallet } from "use-wallet";
import { Wallet } from "ethers";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    background: "transparent",
    boxShadow: "none",
}));

export default function Header() {
    const wallet = useWallet();
    useEffect(() => {
        if (wallet.status === "error") {
            NotificationManager.error("please connect to correct chain", "", 3000);
        }
    }, [wallet.status]);

    return (
        <Container>
            <br />
            <Grid
                contanier
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12} sm={12}>
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        spacing={5}
                    >
                        <Grid item xs={12} sm={6} md={6}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <span className="Logo">RUNDOG</span>
                            </Link>
                        </Grid>
                        <Grid item xs={6} sm={3} md={2}>
                            <Link to="/buy" style={{ textDecoration: "none" }}>
                                <span className="x_font_w_4">
                                    BUY RUNDOG
                                </span>
                            </Link>
                        </Grid>
                        <Grid item xs={6} sm={3} md={2}>
                            <Link to="/game" style={{ textDecoration: "none" }}>
                                <span className="x_font_w_4">
                                    Play Game
                                </span>
                            </Link>
                        </Grid>
                        <Grid item xs={6} sm={3} md={2}>
                            <Item>
                                <button
                                    className="PlayButton"
                                    onClick={() => wallet.connect()}
                                    disabled = {wallet.status === "connected"}
                                >
                                    {wallet.status=== "connected"?wallet.account?wallet.account.slice(0,4)+"..."+wallet.account.slice(-4):"":"Connect"}
                                </button>
                            </Item>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
