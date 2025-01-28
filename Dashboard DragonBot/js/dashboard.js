// Configurer les variables OAuth2
const CLIENT_ID = "1329879513273729148";
const REDIRECT_URI = "https://discord.com/oauth2/authorize?client_id=1329879513273729148&response_type=token&redirect_uri=https%3A%2F%2Flocalhost%3A53134%2Fdiscord&scope=identify+guilds";
const API_ENDPOINT = "https://discord.com/api";

const loginButton = document.querySelector("#login-btn");
const userName = document.querySelector("#user-name");
const userAvatar = document.querySelector("#user-avatar");

// Rediriger l'utilisateur vers Discord pour l'authentification
function login() {
  const scope = "identify";
  const discordLoginURL = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=${scope}`;
  window.location.href = discordLoginURL;
}

// Récupérer les données de l'utilisateur depuis Discord
async function fetchUserData(token) {
  const response = await fetch(`${API_ENDPOINT}/users/@me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}

// Gérer le callback OAuth2
function handleCallback() {
  const hash = window.location.hash;
  if (hash) {
    const token = new URLSearchParams(hash.substring(1)).get("access_token");
    if (token) {
      fetchUserData(token).then((userData) => {
        userName.textContent = `${userData.username}#${userData.discriminator}`;
        userAvatar.src = `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`;
      });
    }
  }
}

// Lancer la gestion du callback
handleCallback();
