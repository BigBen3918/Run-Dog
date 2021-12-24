import React, { useState, useEffect, useCallback } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Header from "../components/header";
import { useBlockchainContext } from "../context";
import { useWallet } from "use-wallet";
import { NotificationManager } from "react-notifications";

const unityContext = new UnityContext({
    loaderUrl: "build/Build/build.loader.js",
    dataUrl: "build/Build/build.data",
    frameworkUrl: "build/Build/build.framework.js",
    codeUrl: "build/Build/build.wasm",
    streamingAssetsUrl: "build/StreamingAssets",
});

function Home() {

    // unity layout
    const screen1 = useFullScreenHandle();
    const [height, setHeight] = useState(80);
    const reportChange = useCallback((state, handle) => {
        console.log('Screen 1 went to', state, handle);
        if (state)
            setHeight(100);
        else
            setHeight(80);
    }, [screen1]);

    // datas
    const wallet = useWallet();
    const [state, { signMessage, deposit }] = useBlockchainContext();

    useEffect(() => {
        unityContext.on("Connect", function () {
            console.log("Connection require");
        });
    }, []);

    useEffect(function () {
        unityContext.on("GameReady", function (message) {
            console.log("message", message);
            if (message == "Ready") {
                try {
                } catch (err) {
                    console.log("error", err);
                }
            }
            else console.log("error");
        });
    }, []);

    useEffect(() => {
        unityContext.on("ConnectRequest", () => {
            console.log("WalletConnect request");
            handleSign()
        }
        );
        unityContext.on("DepositRequest", deposit);
    })

    // action
    const handleSign = async () => {

        console.log("WalletConnect request", wallet.status);
        try {
            if (wallet.status !== "connected") {
                await wallet.connect();
            }
            var hash = await signMessage("welcome to run dog game!");
            console.log(hash);
            unityContext.send("StartSceneManager", "ReceiveSign", JSON.stringify({hash:hash}));
        } catch (err) {
            NotificationManager.error(err.message)
        }
    }

    return (
        <div>
            <Header />
            <div className="center">
                <FullScreen handle={screen1} onChange={reportChange}>
                    <Unity
                        unityContext={unityContext}
                        matchWebGLToCanvasSize={true}
                        style={{ height: height + "vh" }}
                    />
                </FullScreen>
                <button
                    onClick={() => {
                        // handleSign()
                        console.log("handle");
                        screen1.enter();
                    }}
                    className="fullButton"
                >
                    Enter fullscreen
                </button>
            </div>
        </div>
    );
}

export default Home