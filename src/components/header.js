import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, Paper, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    background: "transparent",
    boxShadow: "none",
}));

export default function Header() {
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
                        <Grid item xs={12} sm={6} md={8}>
                            <Item>
                                <Link to="/" style={{ textDecoration: "none" }}>
                                    <span className="Logo">RUNDOG</span>
                                </Link>
                            </Item>
                        </Grid>
                        <Grid item xs={6} sm={3} md={2}>
                            <Item>
                                <Link to="/buy" style={{ textDecoration: "none" }}>
                                    <span className="x_font_w_4">
                                        BUY RUNDOG
                                    </span>
                                </Link>
                            </Item>
                        </Grid>
                        <Grid item xs={6} sm={3} md={2}>
                            <Item>
                                <Link to="/" style={{ textDecoration: "none" }}>
                                    <button className="PlayButton">
                                        Play Now
                                    </button>
                                </Link>
                            </Item>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
