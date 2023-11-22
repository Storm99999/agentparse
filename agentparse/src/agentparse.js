//////////////////////////////// AGENTPARSE  ///////////////////////////////////
///                                                                        ///
///   AgentParse, written by newguy - 2023, 22th Nov.                     ///
///                                                                      ///
///   Free to use in any of your future projects!                       ///
/////////////////////////////////////////////////////////////////////////




const parseAgent = (useragent) => {
  const agent = (null, useragent).toString();
  // Operating System
  const os = agent.includes("windows") ? "Windows" : 
             agent.includes("mac os") ? "MacOS" :
             agent.includes("linux") ? "Linux" :
             agent.includes("android") ? "Android" :
             agent.includes("ios") ? "iOS" : "Unknown";

    // Browser
    const browser = agent.includes("chrome") ? "Google Chrome" :
                    agent.includes("firefox") ? "Mozilla Firefox" :
                    agent.includes("safari") ? "Apple Safari" :
                    agent.includes("edge") ? "Microsoft Edge" :
                    agent.includes("opera") ? "Opera" : "Unknown";

    // Rendering Engine
    const engine = agent.includes("webkit") ? "WebKit" :
                   agent.includes("gecko") ? "Gecko" :
                   agent.includes("trident") ? "Trident" :
                   agent.includes("blink") ? "Blink" : "Unknown";

  return { os, browser, engine, null}
};

const userInfo = parseAgent(navigator.userAgent)
const userInfoJSON = JSON.stringify(userInfo, null, 2);

console.log(userInfoJSON);
