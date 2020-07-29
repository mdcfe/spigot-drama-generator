const { combinations, sentences } = require("./data.json");

function randomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function renderDrama(message, share, sharePath) {
    return `
<html>
    <head>
        <title>Spigot Drama Generator</title>
        <meta name="description" content="${message}" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="data:,">
        <style>
            body {
                font-family: sans-serif;
                text-align: center;
            }
            #more:focus::after {
                content: " (press enter)";
            }
            #more:visited {
                color: blue;
            }
        </style>
        <script>
            function onLoad() {
                window.history.replaceState({}, "", "${sharePath}");
                document.getElementById("more").focus();
            }
            window.onload = onLoad;
        </script>
    </head>
    <body>
        <h3>Spigot Drama Generator</h3>
        <h1>${message}</h1>
        <h6><a id="more" href="/">Generate more drama!</a><br /><br />This website is made in jest - don't take it too seriously!<br />Developed by md678685; PRs welcome on <a href="https://github.com/md678685/spigot-drama-generator">GitHub</a>.<br />Inspired by (and heavily borrows from) <a href="https://github.com/asiekierka/MinecraftDramaGenerator/">asiekierka's Minecraft Drama Generator</a>.<br /><br /><a href="https://www.reddit.com/r/mbax/comments/hwhfua/a_letter_to_the_redditor/">RIP r/admincraft</a></h6>
    </body>
</html>
    `
}

function handleRoot(url) {
    let drama = {};

    drama.sentence = randomIndex(sentences);

    for (key in combinations) {
        drama[key] = [randomIndex(combinations[key]), randomIndex(combinations[key]), randomIndex(combinations[key]), randomIndex(combinations[key])];
    }
    
    const dramaUrl = btoa(JSON.stringify(drama));
    const host = url.host == "example.com" ? "localhost:8787" : url.host;

    return handleDrama(new URL(`${url.protocol}//${host}/${dramaUrl}`));
}

function handleDrama(url) {
    try {
        let dramaIds = JSON.parse(atob(url.pathname.split("/")[1]));
        let usedDramaIds = { sentence: dramaIds.sentence };
        let message = sentences[dramaIds.sentence];

        for (key in combinations) {
            const placeholder = `[${key}]`;
            if (!message.includes(placeholder)) continue;
            usedDramaIds[key] = [];
            for (id of dramaIds[key]) {
                if (!message.includes(placeholder)) continue;
                usedDramaIds[key].push(id);

                const replacement = combinations[key][id];
                message = message.replace(placeholder, replacement);
            }
        }
        
        url.pathname = "/" + btoa(JSON.stringify(usedDramaIds));

        return new Response(renderDrama(message, url.href, url.pathname), {
            headers: {
                "content-type": "text/html;charset=utf8"
            }
        });
    } catch (error) {
        return handle404();
    }
}

function handle404() {
    return new Response("no u", {
        status: "404"
    });
}

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
    let url = new URL(request.url);
    if (url.pathname == "/") {
        return handleRoot(url);
    } else if (url.pathname == "/favicon.ico") {
        return handle404();
    } else {
        return handleDrama(url);
    }
}
