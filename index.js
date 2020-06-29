const combinations = {
    people: ["md_5", "Choco", "Aikar", "kashike", "electroniccat", "Z750", "LaxWasHere", "wizjany", "Me4502", "mbaxter", "Amaranth", "Tux", "andrewkm", "KHobbits", "ElgarL", "md678685", "Trent", "SupaHam", "pop4959", "JRoy", "zml", "Luck", "Proximyst", "Glare", "simpleauthority", "garbagemule", "DemonWav", "Songoda", "kangarko", "MiniDigger", "libraryaddict", "Puremin0rez", "Intelli", "KennyTV"],
    sites: ["SpigotMC Forums", "Minecraft Forums", "Reddit", "/r/admincraft", "PaperMC Discord", "GitHub", "SpigotMC JIRA", "IRC", "SpigotMC Resources", "Patreon", "wiki.vg/Protocol", "Twitch", "MCMarket", "Songoda.com", "MineAcademy", "Hangar", "BukkitDev"],
    things: ["Paper", "Spigot", "Bungeecord", "CraftBukkit", "Fukkit", "Velocity", "EssentialsX", "GroupManager", "LuckPerms", "PermissionsEx v1", "Vault", "VanishNoPacket", "FactionsUUID", "Waterfall", "Tuinity", "Purpur", "LWC", "TreeAssist", "ChatControl", "ProtocolLib", "ViaVersion", "ViaRewind", "ViaBackwards", "ProtocolSupport", "Dynmap", "Fabric", "WorldEdit", "WorldGuard", "CraftBook", "Sponge", "SpongeForge", "SpongeVanilla", "Forge", "Mojang", "open-source plugins", "closed-source plugins", "CMI", "Genders", "EpicGenders", "MobArena", "Hangar", "the Bukkit API", "TruAntiLag", "MiniMessage", "MineDown", "mcMMO", "Lib's Disguises", "CoreProtect", "Prism", "LogBlock", "Chester"],
    servers: ["Empire Minecraft", "Mineplex", "2b2t", "SpigotCraft", "EcoCityCraft", "Minehut", "Hypixel", "Dyescape", "Mineteria"],
    function: ["1.8 support", "mod support", "1.7.10 support", "1.8 combat", "chat formatting", "Velocity support", "Bungeecord support", "Sponge support", "Forge compatibility", "async teleportation", "/kittycannon", "/beezooka", "Paper exclusivity", "PaperLib.suggestPaper()", "dupe fixes", "economy", "RGB support", "realism", "new player capes", "more drama", "less drama", "drama generation commands", "custom enchantments", "overpowered items", "underpowered items", "achievements", "quests", "more annoying worldgen"],
    adj: ["bad", "wrong", "illegal", "horrible", "nasty", "not in ForgeCraft", "noncompliant with Mojang's EULA", "a serious problem", "incompatible", "a waste of time", "wonderful", "amazing", "toxic", "too vanilla", "shameful", "disappointing", "bloated", "outdated", "incorrect", "full of drama", "too realistic"],
    badsoft: ["malware", "spyware", "adware", "DRM", "viruses", "trojans", "keyloggers", "stolen code", "easter eggs", "potential login stealers", "adf.ly links", "bad code", "stolen assets", "malicious code", "secret backdoors", "kangarko/Foundation", "obfuscation"],
    drama: ["bugs", "crashes", "drama", "lots of drama", "imbalance", "pain and suffering", "piracy", "bees", "adf.ly", "dupe glitches", "lighting bugs"],
    crash: ["crash", "explode", "break", "lag", "blow up", "corrupt chunks", "corrupt worlds", "rain hellfish", "spawn bees", "drop /nuke"],
    ban: ["ban", "kick", "put a pumpkin of shame on", "add commands mocking", "blacklist", "whitelist", "give admin rights to", "shame", "destroy"],
    code: ["code", "assets", "ideas", "concepts", "a single function", "5 lines of code", "a class", "a few files", "a ZIP file", "Gradle buildscripts", "a GitHub repository"],
    worse: ["worse", "better", "faster", "slower", "more stable", "less buggy"],
    ac1: ["sue", "destroy the life of", "flame", "cause drama about", "complain about", "kick", "threaten to sue", "wave empty threats of lawsuits at", "DMCA", "yell about in IRC", "randomly pings"],
    price: ["$100", "$200", "$250", "$300", "$350", "$400", "$450", "$500", "$600"],
    activates: ["activates", "works", "functions", "breaks"],
    says: ["says", "tweets", "claims", "confirms", "denies", "announces"],
    enormous: ["big", "large", "huge", "gigantic", "enormous"]
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
	"[people] [says] [things] is [adj].",
	"[people] [says] [things] is literally [adj].",
	"[things] is not updated for the latest version of Minecraft.",
	"[people] removes [things] from [servers].",
	"[people] adds [things] to [servers].",
	"[people] quits modding. Fans of [things] rage.",
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
	"[people] rants about [function] in mods on [sites]",
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
	"[people] bans [people] from [sites]"
];

function randomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function renderDrama(message, share) {
    return `
<html>
    <head>
        <title>Spigot Drama Generator</title>
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
        <h6>This website is made in jest - don't take it too seriously!<br />Inspired by (and heavily borrows from) <a href="https://github.com/asiekierka/MinecraftDramaGenerator/">asiekierka's Minecraft Drama Generator</a>.<br /><a href="/">Generate more drama!</a> <a href="${share}">(permalink)</a></h6>
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
    let message = sentences[dramaIds.sentence];

    let index = 0;
    for (key in combinations) {
        const placeholder = `[${key}]`;
        for (id of dramaIds[key]) {
            console.log(key, id);
            const replacement = combinations[key][id];
            console.log(id);
            message = message.replace(placeholder, replacement);
        }
    }

    return new Response(renderDrama(message, url.href), {
        headers: {
            "content-type": "text/html;charset=utf8"
        }
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
    } else {
        return handleDrama(url);
    }

    return new Response('Hello worker!', {
        headers: { 'content-type': 'text/plain' },
    });
}
