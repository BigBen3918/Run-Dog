import React, { useState, useEffect } from "react";
import { Grid, Paper, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
export const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    background: "transparent",
    boxShadow: "none",
}));
function Footer() {
    return (
        <div className="footer_Container">
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={6}>
                    <Item>
                        <span className="Logo">RUNDOG</span>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Item>
                        <label style={{ color: "white" }}>
                            Copyright &copy; 2021 rundog S.L. All rights
                            reserved.
                        </label>
                    </Item>
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;
