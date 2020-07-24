const combinations = {
    people: ["md_5", "Choco", "Aikar", "kashike", "electroniccat", "Z750", "LaxWasHere", "wizjany", "Me4502", "mbaxter", "Amaranth", "Tux", "andrewkm", "KHobbits", "ElgarL", "md678685", "Trent", "SupaHam", "pop4959", "JRoy", "zml", "Luck", "Proximyst", "Glare", "simpleauthority", "garbagemule", "DemonWav", "Songoda", "kangarko", "MiniDigger", "libraryaddict", "Puremin0rez", "Intelli", "KennyTV", "mikroskeem", "nossr50", "BtoBastian", "Proxymist", "Citymonstret", "Turbotailz", "Larry", "Phoenix616", "Spottedleaf", "stefvanschie", "Byteflux", "Camm", "BillyGalbreath", "vk2gpz", "bloodmc", "gabizou"],
    sites: ["SpigotMC Forums", "Minecraft Forums", "Reddit", "/r/admincraft", "PaperMC Discord", "GitHub", "SpigotMC JIRA", "IRC", "SpigotMC Resources", "Patreon", "wiki.vg/Protocol", "Twitch", "MCMarket", "Songoda.com", "MineAcademy", "Hangar", "BukkitDev", "Ore", "bStats", "SpigotMC IRC", "EsperNet", "MOSS Discord", "EssentialsX issue tracker", "Sponge Forums"],
    things: ["Paper", "Spigot", "Bungeecord", "CraftBukkit", "Fukkit", "Velocity", "EssentialsX", "GroupManager", "LuckPerms", "PermissionsEx v1", "Vault", "VanishNoPacket", "FactionsUUID", "Waterfall", "Tuinity", "Purpur", "LWC", "TreeAssist", "ChatControl", "ProtocolLib", "ViaVersion", "ViaRewind", "ViaBackwards", "ProtocolSupport", "Dynmap", "Fabric", "WorldEdit", "WorldGuard", "CraftBook", "Sponge", "SpongeForge", "SpongeVanilla", "Forge", "Mojang", "open-source plugins", "closed-source plugins", "CMI", "Genders", "EpicGenders", "MobArena", "Hangar", "the Bukkit API", "TruAntiLag", "MiniMessage", "MineDown", "mcMMO", "Lib's Disguises", "CoreProtect", "Prism", "LogBlock", "NuVotifier", "Votifier", "Ore", "bStats", "kyori/text", "kyori/adventure", "RotatoR", "LuckPerms Web Editor", "Chester", "EngineHub", "ChestShop", "Nucleus", "Skript", "Denizen", "Helper", "spark", "Towny", "FastAsyncWorldEdit", "PlotSquared", "Multiverse", "GriefPrevention", "GriefDefender", "Travertine", "ACF", "Brigadier", "Citizens", "Fabric mods", "Forge mods"],
    servers: ["Empire Minecraft", "Mineplex", "2b2t", "SpigotCraft", "EcoCityCraft", "Minehut", "Hypixel", "Dyescape", "Mineteria", "CubeCraft", "The Hive", "Realms"],
    function: ["1.8 support", "mod support", "1.7.10 support", "1.8 combat", "chat formatting", "Velocity support", "Bungeecord support", "Sponge support", "Forge compatibility", "async teleportation", "/kittycannon", "/beezooka", "Paper exclusivity", "PaperLib.suggestPaper()", "dupe fixes", "economy", "RGB support", "realism", "new player capes", "more drama", "less drama", "drama generation commands", "custom enchantments", "overpowered items", "underpowered items", "achievements", "quests", "more annoying worldgen", "legacy color codes", "spigot bugs", "datapacks", "automated wizjany pinging", "improved API", "GPL compliance", "overpowered commands", "underpowered commands", "anti-cheat", "mixins", "patches", "MCP mappings", "Yarn mappings", "Mojang mappings", "Brigadier support", "hover events", "click events", "the MIT license", "Fabric compatibility", "vanilla support"],
    adj: ["bad", "wrong", "illegal", "horrible", "nasty", "not in SpigotCraft", "noncompliant with Mojang's EULA", "a serious problem", "incompatible", "a waste of time", "wonderful", "amazing", "toxic", "too vanilla", "shameful", "disappointing", "bloated", "outdated", "incorrect", "full of drama", "too realistic", "terrible", "not GPL compliant"],
    badsoft: ["malware", "spyware", "adware", "DRM", "viruses", "trojans", "keyloggers", "stolen code", "easter eggs", "potential login stealers", "adf.ly links", "bad code", "stolen assets", "malicious code", "secret backdoors", "kangarko/Foundation", "obfuscation", "Songoda plugins", "ransomware", "remote code execution", "precompiled Spigot binaries", "force ops"],
    drama: ["bugs", "crashes", "drama", "lots of drama", "imbalance", "pain and suffering", "piracy", "bees", "adf.ly", "dupe glitches", "lighting bugs", "obfuscation", "hack clients", "premium plugins", "community feedback", "incompetence", "mass Discord pings", "damage control"],
    crash: ["crash", "explode", "break", "lag", "blow up", "corrupt chunks", "corrupt worlds", "rain hellfish", "spawn bees", "drop /nuke", "hold servers ransom"],
    ban: ["ban", "kick", "put a pumpkin of shame on", "add commands mocking", "blacklist", "whitelist", "give admin rights to", "shame", "destroy", "/nuke", "\"no u\""],
    code: ["code", "assets", "ideas", "concepts", "a single function", "5 lines of code", "a class", "a few files", "a ZIP file", "Gradle buildscripts", "a GitHub repository", "a pom.xml", "obfuscated class files", "precompiled binaries"],
    worse: ["worse", "better", "faster", "slower", "more stable", "less buggy", "more functional", "more vanilla", "less vanilla", "more buggy", "more broken", "less competent"],
    ac1: ["sue", "destroy the life of", "flame", "cause drama about", "complain about", "kick", "threaten to sue", "wave empty threats of lawsuits at", "DMCA", "yell in IRC about", "randomly ping", "decompile", "enforce the GPL against", "insult the code of", "rant about"],
    price: ["$100", "$200", "$250", "$300", "$350", "$400", "$450", "$500", "$600", "$1,000,000", "$15", "$5", "€100", "€250"],
    activates: ["activates", "works", "functions", "breaks", "disables", "extracts", "enhances", "corrupts", "deletes"],
    says: ["says", "tweets", "claims", "confirms", "denies", "announces", "agrees", "spams", "declares", "pings @everyone to announce", "rants", "locks the SpigotMC Discord for a two hour long monologue to state"],
    enormous: ["big", "large", "huge", "gigantic", "enormous", "colossal", "Hypixel-sized"],
    payment: ["PayPal", "Xsolla", "Mollie", "Stripe", "Patreon", "Open Collective", "Ko-fi", "Tebex"]
};

const sentences = [
    "[people] launched a DoS attack on the website of [things]",
    "[sites] urges everyone to stop using [things]",
    "After a [enormous] amount of requests, [servers] removes [things]",
    "After a [enormous] amount of requests, [servers] adds [things]",
    "After a [enormous] amount of requests, [servers] adds [function] to [things]",
    "[people] plays [things] on Twitch",
    "[people] fixes [function] in [things] to be unlike [things]",
    "[things] makes [things] [crash], [sites] users complain",
    "[people] complained about being in [things] on [sites]",
    "[people] releases [code] of [things] for [price]",
    "[sites] considers [things] worse than [things]",
    "[people] made [things] depend on [things]",
    "[people] bans [people] from using [things] on [servers]",
    "[people] complains that [things] discussion doesn't belong on [sites]",
    "[people] has a Patreon goal to add [function] to [things] for [price] a month",
    "[people] has a Patreon goal to add [things] compatibility to [things] for [price] a month",
    "[people] complains that [people] replaced [things] by [things]",
    "[people] complains that [people] replaced [things] by [things] on [servers]",
    "[people] complains that [people] removed [function] on [servers]",
    "[people] decided that [things] is too [adj] and replaced it with [things]",
    "[people] [says] [things] is [adj]",
    "[people] [says] [things] is literally [adj]",
    "[things] is not updated for the latest version of Minecraft",
    "[people] removes [things] from [servers]",
    "[people] adds [things] to [servers]",
    "[people] quits plugin development. Fans of [things] rage.",
    "[people] is found to secretly like [things]",
    "[people] openly hates [function] in [things]",
    "[people] threatens to [ac1] [people] until they remove [things] from [servers]",
    "[people] threatens to [ac1] [people] until they remove [function] from [things]",
    "[people] threatens to [ac1] [people] until they add [function] to [things]",
    "[people] came out in support of [things]",
    "[people] came out in support of [drama]",
    "[people] and [people] came out in support of [drama]",
    "[people] came out against [drama], [sites] rages",
    "[people] and [people] came out against [drama], [sites] rages",
    "[people] forks [things] causing [drama]",
    "[people] [says] to replace [things] with [things]",
    "[people] [says] [people] causes drama",
    "[things] fans claim that [things] should be more like [things]",
    "[things] fans claim that [things] should have better [function]",
    "[people] [says] that [things] should be more like [things]",
    "[people] [says] that [things] should be less like [things]",
    "[people] rebalances [things] for [servers]",
    "[people] adds [function] to [things] by request of [people]",
    "[people] removes [function] from [things] by request of [people]",
    "[people] removes compatibility between [things] and [things] by request of [people]",
    "[people] [says] [people]'s attitude is [adj]",
    "[people] [says] [sites]'s attitude is [adj]",
    "[people] quits the development team of [things]",
    "[people] [says] [things] is too much like [things]",
    "[people] [says] [things] is a ripoff of [things]",
    "[people] [says] [people] stole [code] from [people]",
    "[people] [says] [people] did not steal [code] from [people]",
    "[people] decides to [ban] [people] from [servers]",
    "[things] doesn't work with [things] since the latest update",
    "[people] sues [things]",
    "[people] [says] [things] is [adj] on [sites]",
    "[people] [says] [things] is full of [badsoft]",
    "[people] [says] [things] causes [drama]",
    "[people] [says] [things] causes [drama] when used with [things]",
    "[people] [says] using [things] and [things] together is [adj]",
    "[people] rants about [things] on [sites]",
    "[people] rants about [function] in plugins on [sites]",
    "[people] steals code from [things]",
    "[things] breaks [function]",
    "[people] sues [things] developers",
    "[people] reminds you that [things] is [adj]",
    "[people] and [people] get into a drama fight on [sites]",
    "Fans of [things] and [things] argue on [sites]",
    "[people] and [people] argue about [things]",
    "[people] puts [badsoft] in [things]",
    "[people] complains about [things] breaking [things]",
    "[people] complains about [things] breaking [function]",
    "[people] complains about [things] including [function]",
    "[things] breaks [function] in [things]",
    "[things] breaks [things] support in [things]",
    "[things] adds code to [ban] [people] automatically",
    "[things] adds code to [ban] people using [things]",
    "[things] removes compatibility with [things]",
    "[people] [says] not to use [things]",
    "[people] [says] not to use [things] with [things]",
    "[people] finds [badsoft] in [things]",
    "[people] drew a nasty graffiti about [people]",
    "[people] drew a nasty graffiti about [things]",
    "[things] makes [things] [crash] when used with [things]",
    "[things] makes [things] [crash] when used by [people]",
    "[things] makes [things] crash [things] when used by [people]",
    "[things] adds [badsoft] that only [activates] on [servers]",
    "[things] adds [badsoft] that only [activates] alongside [things]",
    "[things] makes [people] invincible from [things] on [servers]",
    "[people] decides to base their entire server on [things]",
    "[people] tweaks balance in [things] too much, annoying [sites]",
    "[people] tweaks balance in [things] too much, annoying [people]",
    "[people] [says] [people] is worse than [people]",
    "[people] [says] [things] is [worse] than [things]",
    "[people] bans [people] from [sites]",
    "[payment] suspends [people]'s account",
    "[payment] suspends [servers]'s account",
    "[payment] freezes [people]'s account",
    "[payment] freezes [servers]'s account",
    "[payment] suspends [people]'s account because of [drama]",
    "[payment] suspends [servers]'s account because of [drama]",
    "[payment] freezes [people]'s account because of [drama]",
    "[payment] freezes [servers]'s account because of [drama]",
    "[people] [says] [payment] is [adj]",
    "[people] [says] [payment] is [worse] than [payment]",
    "[people] decides to rewrite [things] to be more like [things]",
    "[people] decides to rewrite [things] to be less like [things]",
    "[people] ignores [people]'s complaints about [sites], causing more [drama]",
    "[people] ignores [sites]'s complaints about [sites], causing more [drama]",
    "[people] grows tired of [people] and quits [sites]",
    "[people] ignores [people]'s complaints about [things], causing more [drama]",
    "[people] ignores [sites]'s complaints about [things], causing more [drama]",
    "[people] deletes [people]'s posts on [sites] to protect their reputation",
    "[people] does nothing about [drama], as usual",
];

function randomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function renderDrama(message, share) {
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
        </style>
    </head>
    <body>
        <h3>Spigot Drama Generator</h3>
        <h1>${message}</h1>
        <h6><a href="/">Generate more drama!</a> <a href="${share}">(permalink)</a><br /><br />This website is made in jest - don't take it too seriously!<br />Developed by md678685; PRs welcome on <a href="https://github.com/md678685/spigot-drama-generator">GitHub</a>.<br />Inspired by (and heavily borrows from) <a href="https://github.com/asiekierka/MinecraftDramaGenerator/">asiekierka's Minecraft Drama Generator</a>.<br><a href="https://www.reddit.com/r/mbax/comments/hwhfua/a_letter_to_the_redditor/">RIP r/admincraft</a></h6>
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

    return handleDrama(new URL(`https://${host}/${dramaUrl}`));
}

function handleDrama(url) {
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

    return new Response(renderDrama(message, url.href), {
        headers: {
            "content-type": "text/html;charset=utf8"
        }
    });
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
