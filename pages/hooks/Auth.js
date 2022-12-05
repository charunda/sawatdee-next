export const authen = ({ ...args }) => {
  const authenHost = "https://api-internal-sit.dohome.technology";
  const authRequest = fetch(`${authenHost}/authen-gm/oauth2/login`, {
    method: "POST",
    body: {
      ...args,
      moduleId: {
        name: "DoHome Public Company Limited",
        website: "https://www.dohome.co.th/",
        trademarks:
          "All trademarks or registered trademarks are property of their respective owners.",
      },
    },
    // headers: { Authorization: `Bearer ${did}` },
  }).then((res) => {
    console.log("res", res);
  });
  return authRequest;
};
