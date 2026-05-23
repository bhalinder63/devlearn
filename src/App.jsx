import { useState } from "react";

const webFundamentalsData = [
  {
    id: "wf-1", module: "Module 1", title: "Internet & DNS Foundations", icon: "🌐", color: "#00D4FF",
    lessons: [
      {
        id: "wf-1-1", title: "The Internet & IP Addresses", duration: "10 min",
        content: {
          overview: "The internet is simply millions of computers connected to each other. Your phone, your laptop, Google's servers, Netflix's servers — all connected in one giant network. For these computers to communicate, each one needs a unique address — just like every house has an address so couriers know where to deliver. This address is called an IP address. Every device you own, every server you connect to, has one.",
          keyPoints: [
            "Every device on the internet needs a unique address called an IP Address — just like every house needs a postal address. Without it, data wouldn't know where to go.",
            "IPv4 is the old format: four numbers separated by dots (e.g. 142.250.77.46). The problem: only ~4 billion combinations exist. We ran out of them.",
            "IPv6 is the new format: much longer (e.g. 2404:6800:4002::1) with virtually unlimited addresses. Designed to solve IPv4 exhaustion.",
            "When you visit google.com, your browser doesn't know Google's IP address. It uses a system called DNS to convert that friendly name into an IP — transparently, in milliseconds.",
            "Both IPv4 and IPv6 exist simultaneously on the modern internet. Most devices support both (called dual-stack). Over time, IPv6 will fully replace IPv4.",
          ],
          concepts: [
            { term: "IP Address", def: "A unique numerical label assigned to every device connected to the internet. Functions as the device's postal address — data packets are sent to and from IP addresses." },
            { term: "IPv4", def: "Internet Protocol version 4 — the original addressing scheme using four numbers (0–255) separated by dots (e.g. 142.250.77.46). Limited to ~4.3 billion unique addresses." },
            { term: "IPv6", def: "Internet Protocol version 6 — the modern addressing scheme using hexadecimal notation (e.g. 2404:6800:4002::1). Supports 340 undecillion addresses — effectively unlimited." },
            { term: "Packet", def: "A small chunk of data sent over the internet. Large files are broken into many packets, each sent independently, then reassembled at the destination." },
          ],
          takeaway: "IPv4 = old format, IPv6 = new format. Both are just addresses computers use to find each other. DNS is what converts human-readable names (google.com) into these numbers automatically.",
        },
      },
      {
        id: "wf-1-2", title: "DNS — Domain Name System", duration: "12 min",
        content: {
          overview: "Imagine typing 142.250.77.46 every time you want Google. Impossible to memorize. DNS solves this by converting friendly names into IP numbers. It's essentially the internet's phone book — you look up 'google.com' and DNS returns '142.250.77.46'. DNS is organized as a hierarchy: at the top is the root, then top-level domains (.com, .in, .org), then second-level domains (google.com, vriseglobal.co.in). This hierarchy is what makes DNS fast and scalable across billions of domains.",
          keyPoints: [
            "DNS stands for Domain Name System. It converts human-readable domain names (google.com) into machine-readable IP addresses (142.250.77.46) — the internet's phone book.",
            "DNS is organized as a hierarchy: Root → TLD (.com, .in, .org) → Domain (google.com). Different organizations manage each level.",
            "The .com TLD is managed by Verisign. The .in TLD is managed by NIXI (India). Each registrar (GoDaddy, Namecheap) manages domains you purchase from them.",
            "Without DNS, the internet would still function — but you'd need to memorize the IP address of every single website you visit. DNS makes the internet usable for humans.",
            "DNS lookups happen invisibly every time you type a URL. The entire process — from typing to getting an IP — typically takes under 50 milliseconds.",
          ],
          concepts: [
            { term: "DNS", def: "Domain Name System — the distributed database that maps domain names to IP addresses. It's hierarchical, globally distributed, and runs invisibly behind every web request." },
            { term: "Domain Name", def: "A human-readable address for a website (e.g. google.com, vriseglobal.co.in). Consists of a name and a TLD (top-level domain), separated by dots." },
            { term: "TLD (Top-Level Domain)", def: "The last segment of a domain name (.com, .in, .org, .net, .io). Each TLD is managed by a designated registry organization." },
            { term: "Registrar", def: "A company accredited to sell domain names (GoDaddy, Namecheap, Google Domains). When you buy a domain, the registrar manages your DNS records." },
          ],
          takeaway: "DNS is the invisible translator between human language (google.com) and computer language (142.250.77.46). It runs on every single web request, thousands of times per day, completely transparently. Understanding DNS is foundational to understanding how the web works.",
        },
      },
      {
        id: "wf-1-3", title: "The DNS Resolver Chain", duration: "15 min",
        content: {
          overview: "When you type vriseglobal.co.in, DNS goes through exactly 4 stops — never more. Your browser checks its own memory first. If not found, it asks your ISP's resolver, which then contacts the Root server, then the TLD server (.in), then finally GoDaddy (the authoritative server) which holds the actual IP. The answer travels back the same chain. The key insight: this full 4-hop chain only happens once per domain. After that, the answer is cached and most lookups are instant.",
          keyPoints: [
            "Stop 1 — Recursive Resolver (ISP like Jio/Airtel): Does all the legwork on your behalf. Contacts root, TLD, and authoritative servers. Caches the result so subsequent lookups are instant.",
            "Stop 2 — Root Server: Knows where the TLD servers (.com, .in, .org) live. There are 13 root server clusters worldwide. Doesn't know IPs of domains — only knows who to ask next.",
            "Stop 3 — TLD Server: Knows which authoritative server handles each domain under that extension. The .in TLD server knows GoDaddy handles vriseglobal.co.in.",
            "Stop 4 — Authoritative Server (GoDaddy): Holds the actual DNS records. Returns the real IP address. This is the final authoritative answer.",
            "This full chain only runs ONCE per domain per resolver. After that, the ISP caches the answer for the duration of the TTL. Most real-world lookups are just 1 hop.",
            "Public DNS resolvers: 8.8.8.8 (Google DNS) and 1.1.1.1 (Cloudflare) are alternative Stop 1 resolvers — same 4-stop chain, typically faster and fresher cache than ISP resolvers.",
            "Real debug example: if your ISP cached an old IP (103.21.187.19), switching to 8.8.8.8 returns the correct current IP (216.198.79.1). Same authoritative server, different cached answers.",
          ],
          concepts: [
            { term: "Recursive Resolver", def: "The first DNS stop — usually run by your ISP (Jio, Airtel) or a public provider (8.8.8.8). Performs the full lookup chain on your behalf and caches results for future queries." },
            { term: "DNS Cache", def: "A saved copy of a previous DNS lookup result. Stored by the browser, OS, and ISP resolver. Eliminates the need to run the full 4-stop chain on every request. Expires after the TTL." },
            { term: "TTL (Time To Live)", def: "A number (in seconds) attached to every DNS record specifying how long resolvers should cache the answer. TTL 3600 = cache for 1 hour. Lower TTL = faster propagation of changes but more DNS queries." },
            { term: "Authoritative Name Server", def: "The final stop in DNS — the server that actually stores your DNS records (typically your registrar like GoDaddy). Its answer is the ground truth, not a cached copy." },
          ],
          takeaway: "Browser → ISP Resolver → Root → TLD → Authoritative. That's the complete DNS chain. Caching means this full 4-stop journey only runs once per unique domain per resolver. Real-world lesson: if a website isn't loading correctly, try switching DNS to 8.8.8.8 — your ISP may be serving a stale cached IP.",
        },
      },
    ],
  },
  {
    id: "wf-2", module: "Module 2", title: "DNS Records & Hosting Setup", icon: "📋", color: "#4ECDC4",
    lessons: [
      {
        id: "wf-2-1", title: "DNS Record Types", duration: "14 min",
        content: {
          overview: "When you log in to GoDaddy and configure your domain, you create DNS Records. Each record type has a specific job. An A record points your domain to an IPv4 address. A CNAME creates an alias pointing to another domain. MX records tell the internet which server handles your emails. TXT records store verification text. NS records specify which server holds all your DNS records. Understanding each type is essential for setting up any real website.",
          keyPoints: [
            "A Record (Address Record): Maps a domain directly to an IPv4 address. The most fundamental DNS record. Example: vriseglobal.co.in → 216.198.79.1",
            "AAAA Record: Same as A Record but for IPv6 addresses. The 4 A's represent IPv6 being approximately 4x longer than IPv4. Used alongside A records for dual-stack support.",
            "CNAME Record (Canonical Name): Points one domain to another domain as an alias. Used for www subdomain and third-party services. Cannot be used on the root/apex domain.",
            "MX Record (Mail Exchanger): Specifies which server handles incoming emails for your domain. Without MX records, email to your domain will fail. Always comes with a priority number.",
            "TXT Record: Stores plain text — used for domain verification (proving ownership to Google/Cloudflare), email security (SPF to prevent spoofing), and DKIM signatures.",
            "NS Record (Nameserver): Tells the internet which server stores all your DNS records. Always comes in pairs for redundancy. Changing NS records transfers DNS management to a different provider.",
            "SOA Record (Start of Authority): Auto-created metadata about your domain. Never edit manually — managed by your registrar automatically.",
          ],
          concepts: [
            { term: "A Record", def: "Address Record — maps a domain name directly to an IPv4 address. The most fundamental DNS record type. Every website needs at least one A record." },
            { term: "CNAME Record", def: "Canonical Name — an alias that points one domain to another domain (not to an IP). Used for subdomains and third-party service integrations. Cannot be used on the root apex domain." },
            { term: "MX Record", def: "Mail Exchanger — specifies which server handles incoming email for your domain. Multiple MX records with different priorities provide redundancy." },
            { term: "TXT Record", def: "Text Record — stores arbitrary text for domain verification, SPF email security, DKIM signatures, and ownership proofs for services like Google Search Console." },
            { term: "NS Record", def: "Nameserver Record — identifies which DNS servers are authoritative for your domain. Changing NS records delegates DNS management to a new provider." },
          ],
          takeaway: "Think of DNS records as different types of entries in the internet's phonebook: A = address (IPv4), AAAA = address (IPv6), CNAME = nickname/alias, MX = mailbox location, TXT = sticky notes for verification, NS = who's the authority. These 5 types cover 95% of all real-world setups.",
        },
      },
      {
        id: "wf-2-2", title: "Real World DNS Setup", duration: "12 min",
        content: {
          overview: "A complete real-world domain configuration for vriseglobal.co.in: website hosted on Vercel, emails on Gmail. This requires: A and AAAA records pointing to Vercel's IPs, a CNAME for the www subdomain, MX records pointing to Google's mail servers, a TXT record for SPF email security, and auto-generated NS and SOA records. Understanding this setup means you can configure any domain for any hosting + email combination.",
          keyPoints: [
            "Website on Vercel: Add A record (vriseglobal.co.in → 216.198.79.1) for IPv4, AAAA record for IPv6, and CNAME (www.vriseglobal.co.in → cname.vercel-dns.com) for the www subdomain.",
            "Gmail for your domain: Add MX record pointing to aspmx.l.google.com and a TXT record for SPF (v=spf1 include:google.com ~all) to prevent email spoofing.",
            "Vercel's dashboard shows 3 domain entries: root domain, www subdomain, and the vercel.app subdomain — all routing to the same deployed project.",
            "NS records are auto-created by your registrar. Keep GoDaddy NS if you manage DNS there. Switch to Vercel NS to manage everything inside Vercel. Warning: NS changes cause hours of downtime during propagation.",
            "DNS propagation after changes takes time — from minutes to 48 hours depending on TTL values and how long resolvers cache the old records.",
          ],
          concepts: [
            { term: "DNS Propagation", def: "The time it takes for a DNS record change to spread to all resolvers worldwide. Fast with low TTL (minutes), slow with high TTL (up to 48 hours). Not instant because cached copies expire gradually." },
            { term: "SPF Record", def: "Sender Policy Framework — a TXT record listing which mail servers are authorized to send email from your domain. Prevents spammers from forging your domain as the sender." },
            { term: "Apex Domain", def: "The root domain without any subdomain prefix (e.g. vriseglobal.co.in vs www.vriseglobal.co.in). Must use an A record (not CNAME). Also called the naked domain or zone apex." },
            { term: "Nameserver Delegation", def: "When you change NS records to point to a different DNS provider (e.g. from GoDaddy to Cloudflare), that provider becomes authoritative for all your DNS records." },
          ],
          takeaway: "Every real website needs this minimum DNS setup: A record for the domain, CNAME for www, MX for email, TXT for SPF. Vercel and similar platforms tell you exactly what records to add. Once you understand what each record does, following hosting provider instructions becomes trivial.",
        },
      },
      {
        id: "wf-2-3", title: "How Vercel Hosts Multiple Websites", duration: "10 min",
        content: {
          overview: "Both vriseglobal.co.in and rahul.com point to the same Vercel IP address 216.198.79.1. How does Vercel serve the right website to each visitor? The answer is the Host Header — a piece of metadata automatically included in every HTTP request your browser sends. When your browser connects to 216.198.79.1, it says: 'I want content for vriseglobal.co.in.' Vercel reads this and routes accordingly. This is called Virtual Hosting, and it's how the entire modern web works — millions of websites sharing relatively few IP addresses.",
          keyPoints: [
            "Multiple websites can share a single IP address. The server uses the Host Header in every HTTP request to know which website to serve.",
            "Every browser automatically includes the domain name in the Host Header. The web server reads this header to route the request to the correct site.",
            "Vercel maintains an internal routing table: domain → project files. Host Header is matched against this table on every incoming request.",
            "This is called Virtual Hosting — one physical server (or cluster) serving thousands of different websites based purely on the Host Header.",
            "The apartment building analogy: Vercel is the building (IP: 216.198.79.1). Each website is a flat. The Host Header is the flat number written on every delivery.",
          ],
          concepts: [
            { term: "Host Header", def: "An HTTP header automatically sent by browsers with every request, containing the requested domain name. Servers use this to serve the correct website when multiple domains share an IP address." },
            { term: "Virtual Hosting", def: "A method allowing multiple domain names and websites to be served from a single server or IP address, differentiated by the Host Header in each HTTP request." },
            { term: "Reverse Proxy", def: "A server that receives incoming requests and routes them to the appropriate backend. Vercel, Nginx, and Cloudflare all function as reverse proxies — they route based on Host Header and other rules." },
          ],
          takeaway: "One IP, many websites — this is standard across the entire modern internet. The Host Header is the key that makes it work. Every time you visit any website, your browser automatically sends this header. Understanding this eliminates the mystery of how hosting platforms serve thousands of sites from shared infrastructure.",
        },
      },
    ],
  },
  {
    id: "wf-3", module: "Module 3", title: "Security & HTTP", icon: "🔒", color: "#A855F7",
    lessons: [
      {
        id: "wf-3-1", title: "HTTPS & SSL Certificates", duration: "14 min",
        content: {
          overview: "Without HTTPS, data between your browser and a server travels like a postcard — anyone on the same WiFi network can read every word. With HTTPS, it travels in a sealed envelope — encrypted and unreadable to anyone who intercepts it. This encryption is called SSL/TLS (TLS is the modern version, SSL the older name). HTTPS requires an SSL Certificate issued by a trusted Certificate Authority. Vercel handles this automatically — when you add a custom domain, it obtains a free Let's Encrypt certificate by verifying domain ownership through a TXT record on GoDaddy.",
          keyPoints: [
            "HTTP sends all data as plain text. HTTPS encrypts everything using TLS. Anyone sniffing your WiFi sees gibberish instead of your passwords and private data.",
            "The SSL Handshake happens before any data is exchanged: browser asks the server to prove its identity, server presents its SSL certificate, both sides agree on encryption keys, then all communication is encrypted.",
            "SSL Certificates are issued by Certificate Authorities (CAs) — trusted organizations that verify you own the domain. Like a passport office issuing passports.",
            "Let's Encrypt is a free, automated CA used by Vercel. It issues certificates at no cost, renewed automatically every 90 days.",
            "How Vercel got your SSL: you added domain → Vercel gave you a TXT record to add on GoDaddy → adding it proved you own the domain → Let's Encrypt issued the certificate → padlock appeared automatically.",
            "Modern browsers show a warning for any HTTP site. HTTPS is now mandatory for e-commerce, login forms, and any site handling sensitive data — and also a Google ranking factor.",
          ],
          concepts: [
            { term: "HTTPS", def: "HyperText Transfer Protocol Secure — HTTP with TLS encryption. The padlock icon in your browser confirms the connection is encrypted and the server's identity is verified." },
            { term: "SSL/TLS", def: "Security protocols that encrypt data in transit. TLS (Transport Layer Security) is the current standard; SSL (Secure Sockets Layer) is its deprecated predecessor. Both terms are used interchangeably in practice." },
            { term: "Certificate Authority (CA)", def: "A trusted organization that issues SSL certificates after verifying domain ownership. Browsers maintain a built-in list of trusted CAs. Let's Encrypt, DigiCert, and Comodo are common examples." },
            { term: "SSL Handshake", def: "The initial negotiation between browser and server before encrypted communication begins. Server presents certificate, both sides verify identities and agree on encryption keys, then all data is encrypted." },
          ],
          takeaway: "Every website should use HTTPS. Vercel and most modern hosts automate this completely — zero configuration required. When you add a custom domain, the padlock appears automatically. The underlying mechanism (TXT record verification → certificate issuance → TLS encryption) explains how digital identity and trust work on the web.",
        },
      },
      {
        id: "wf-3-2", title: "HTTP — How Browsers Talk to Servers", duration: "12 min",
        content: {
          overview: "HTTP is the agreed set of rules (protocol) for how browsers and servers communicate. Every single web interaction follows a Request-Response pattern: the browser sends a request with a method (GET, POST, PUT, DELETE) and the server responds with a status code and content. HTTP is stateless — the server has no memory between requests, which is why cookie and JWT systems were invented. Understanding HTTP is the foundation for understanding APIs, authentication, and how every web application works under the hood.",
          keyPoints: [
            "Every web interaction is a Request-Response: browser sends request (GET / HTTP/1.1, Host: vriseglobal.co.in), server sends response (HTTP/1.1 200 OK, followed by the HTML content).",
            "GET: retrieve something (load a webpage, fetch an image). POST: send data to the server (submit a form, create a resource). PUT: update existing data. DELETE: remove a resource.",
            "Every HTTP request has Headers (metadata: Host, Content-Type, Authorization) and optionally a Body (data to send — used in POST and PUT).",
            "Every HTTP response has a Status Code (200 OK, 404 Not Found), Response Headers, and a Body (the HTML/JSON/CSS/image content).",
            "HTTP is stateless: the server treats every request as brand new with no memory of previous ones. This is why authentication systems (cookies, JWT) are necessary — they attach identity to every request.",
          ],
          concepts: [
            { term: "HTTP", def: "HyperText Transfer Protocol — the foundational communication protocol of the web. Every page load, API call, and form submission is an HTTP transaction." },
            { term: "HTTP Methods", def: "Verbs that indicate what action to perform: GET (retrieve), POST (create/send), PUT (update), DELETE (remove), PATCH (partial update). REST APIs use these methods semantically." },
            { term: "HTTP Headers", def: "Key-value metadata pairs sent with every request and response. Common headers: Host (which domain), Content-Type (what kind of data), Authorization (authentication token), Cache-Control (caching rules)." },
            { term: "Stateless Protocol", def: "HTTP treats every request independently — the server holds no memory of previous requests. Each request must carry all context it needs (via cookies, tokens, or query parameters)." },
          ],
          takeaway: "HTTP is the language of the web. Request → Response is the fundamental pattern behind every web interaction. Understanding methods (GET/POST/PUT/DELETE) and the stateless nature of HTTP gives you the mental model to understand APIs, forms, authentication, and how web apps work.",
        },
      },
      {
        id: "wf-3-3", title: "HTTP Status Codes", duration: "10 min",
        content: {
          overview: "Every HTTP response includes a 3-digit status code telling you exactly what happened. They're grouped by their first digit: 2xx = success, 3xx = redirect, 4xx = client error (you made a mistake), 5xx = server error (server made a mistake). Knowing these codes makes debugging any web issue dramatically faster — when something isn't working, the status code is often the first clue pointing you to the cause.",
          keyPoints: [
            "2xx = Success. 200 OK is the standard success response — everything worked. 201 Created is returned when a new resource was created (e.g. after a POST request).",
            "3xx = Redirect. 301 Moved Permanently: page moved forever, Google updates its search index. 302/307 Temporary Redirect: go here for now but original URL is still canonical.",
            "4xx = Client Error (your fault). 400 Bad Request: malformed request. 401 Unauthorized: not logged in. 403 Forbidden: logged in but not allowed. 404 Not Found: page doesn't exist.",
            "5xx = Server Error (server's fault). 500 Internal Server Error: generic server crash. 502 Bad Gateway: upstream server problem. 503 Service Unavailable: server overloaded or down.",
            "304 Not Modified: special efficiency code. Browser sent a cached version's timestamp; server confirmed nothing changed. Browser uses its local cache — no content transferred.",
            "Real example from vriseglobal.co.in: vriseglobal.co.in → 307 redirect → www.vriseglobal.co.in (Vercel automatically redirects the apex domain to the www version).",
          ],
          concepts: [
            { term: "200 OK", def: "Standard success response. The request was received, understood, and processed. Body contains the requested resource." },
            { term: "301 Moved Permanently", def: "The resource has permanently moved to a new URL (specified in the Location header). Browsers and search engines update cached links. Used for domain migrations and permanent URL changes." },
            { term: "404 Not Found", def: "The requested resource does not exist on this server. The URL is wrong or the page was deleted. The most famous HTTP status code." },
            { term: "304 Not Modified", def: "Conditional GET response — the cached version is still valid. No body returned. Browser uses its saved copy, saving bandwidth and load time." },
            { term: "500 Internal Server Error", def: "Generic server-side failure. The request was valid but the server's code crashed or encountered an unexpected condition while processing it." },
          ],
          takeaway: "2xx worked, 3xx moved, 4xx your fault, 5xx server's fault. These four groups cover every possible HTTP outcome. In practice, 200, 301, 304, 404, and 500 cover 95% of what you'll encounter. Knowing them turns web debugging from guesswork into a systematic process.",
        },
      },
      {
        id: "wf-3-4", title: "Reading the Network Tab", duration: "12 min",
        content: {
          overview: "The browser's Network Tab (DevTools → F12 → Network) shows every HTTP request made while loading a page. It's your X-ray vision into what a website is actually doing. You can see which files are downloaded, how long each takes, which are served from cache, which fail, and exactly what the server responded with. Any time a website is slow or broken, the Network Tab tells you which specific request is the problem — making it the most important browser tool for developers and technical professionals.",
          keyPoints: [
            "Open DevTools with F12 (or right-click → Inspect), click Network tab, then reload the page. Every request appears as a row.",
            "Columns: Name (file requested), Status (HTTP code), Type (document/css/js/font/img), Size (bytes downloaded), Time (milliseconds taken).",
            "200 (disk cache): file served from browser's hard drive — no network request made. 200 (memory cache): file served from RAM — 0ms, the fastest possible. 304 Not Modified: server confirmed cache is still valid.",
            "ERR_BLOCKED: a browser extension (AdBlock, uBlock) prevented the request from reaching the server entirely.",
            "Real example from vriseglobal.co.in: HTML → 304 (44ms from cache), hero image → 304 (41ms), fonts → 200 (0ms from memory cache — instant), AdBlock URL → ERR_BLOCKED.",
            "Use the Network Tab to: find the slowest resource (sort by Time), identify failed requests (filter by status), check what an API returns (click a request → Response tab), measure page size.",
          ],
          concepts: [
            { term: "Browser DevTools", def: "Built-in developer tools in all modern browsers (open with F12). Network tab: all HTTP requests. Console: JavaScript errors and logs. Sources: loaded files. Application: cookies, localStorage." },
            { term: "Cache Hit", def: "When a resource is served from the browser's cache (disk or memory) instead of downloading from the server. Shown as '(from disk cache)' or '(from memory cache)' — dramatically faster than network requests." },
            { term: "Waterfall Chart", def: "The visual timeline in the Network tab showing when each resource started loading and how long it took. Helps identify render-blocking resources and bottlenecks that delay page display." },
            { term: "Request / Response Headers", def: "Clicking any request in the Network tab shows the exact headers sent and received. Useful for debugging authentication, CORS errors, cache policies, and content type mismatches." },
          ],
          takeaway: "The Network Tab is your most powerful web debugging tool. Slow page? Sort by Time. Broken asset? Look for red rows. API not working? Click the request and read the Response. Cache working correctly? Check for (memory cache) and (disk cache). Master this tool and you can diagnose almost any web problem in under 60 seconds.",
        },
      },
    ],
  },
  {
    id: "wf-4", module: "Module 4", title: "Infrastructure & Performance", icon: "⚡", color: "#F59E0B",
    lessons: [
      {
        id: "wf-4-1", title: "CDN — Content Delivery Network", duration: "14 min",
        content: {
          overview: "Your website is hosted on Vercel's servers in a US data center. A user in Mumbai requests it — their data travels to the US and back. That round trip adds 200–300ms of latency. CDN solves this by storing copies of your website's static files on servers in cities worldwide. A Mumbai user gets content from a Mumbai CDN server, not San Francisco. Cloudflare, the CDN Vercel uses, has 300+ servers in every major city. The result: your website loads nearly instantly everywhere on Earth.",
          keyPoints: [
            "CDN stores cached copies of static files (HTML, CSS, JS, images, fonts) on servers worldwide. Users download from the nearest server, not the origin.",
            "Without CDN: Mumbai user → San Francisco → back → 200–300ms latency. With CDN: Mumbai user → Mumbai server → 10–20ms latency.",
            "Cloudflare has 300+ edge servers globally. Every major city has one. Vercel uses Cloudflare's network automatically — your deployed site is instantly on a global CDN.",
            "Origin Server: where your actual website files live. CDN servers (edge servers) fetch from the origin once, then cache and serve locally. Origin is only hit when the CDN doesn't have the file.",
            "Cache Invalidation: when you update your site, CDN servers worldwide still have old files until told to refresh. This refresh period is called propagation — same concept as DNS propagation.",
            "CDN benefits beyond speed: DDoS protection (Cloudflare blocks attack traffic at the edge before it reaches your server), free SSL, and massive bandwidth savings on your origin.",
          ],
          concepts: [
            { term: "CDN (Content Delivery Network)", def: "A geographically distributed network of servers that cache and deliver web content from locations physically close to each user, reducing latency and improving load times globally." },
            { term: "Origin Server", def: "The source server where your website's actual files live. CDN edge servers fetch from the origin and cache the files. Direct origin requests only happen on cache misses." },
            { term: "Edge Server", def: "A CDN server located close to end users geographically. Requests are routed to the nearest edge server to minimize round-trip latency. Also called a Point of Presence (PoP)." },
            { term: "Cache Invalidation", def: "Clearing old cached content from CDN edge servers so they fetch fresh content from the origin. Triggered manually or automatically when you deploy new files." },
          ],
          takeaway: "CDN is why fast websites feel instant worldwide. Vercel automatically puts your site on a global CDN — no configuration needed. A page deployed anywhere in the world loads in milliseconds for users in India because the files are already cached on a nearby edge server. Speed is a feature, and CDN is how it's delivered globally.",
        },
      },
      {
        id: "wf-4-2", title: "Web Hosting Types", duration: "12 min",
        content: {
          overview: "Why not host your website on your own laptop? It's not powerful enough for traffic spikes, must be on 24/7, and your home internet upload speed (~10Mbps) is far too slow compared to data center connections (10,000Mbps). Professional hosting comes in four types: Shared (cheapest, shared resources), VPS (virtualized private server, middle ground), Dedicated (own the entire physical machine), and Cloud (pay-per-use, scales instantly). Vercel is a specialized cloud host that pre-builds pages and serves them directly from CDN — eliminating server compute entirely.",
          keyPoints: [
            "Shared Hosting: many websites share one server's resources. Cheapest (₹99/month), but performance suffers when neighbors get traffic. Good for beginners and low-traffic sites.",
            "VPS (Virtual Private Server): one physical server sliced into isolated virtual machines. Each VPS has dedicated CPU/RAM. Middle ground in cost and performance. Like cutting a pizza into 8 slices.",
            "Dedicated Hosting: you own the entire physical server. Maximum performance, maximum cost (₹10,000+/month). For large enterprises with consistent high traffic.",
            "Cloud Hosting: virtual servers on-demand (AWS, GCP, Azure). Scale up or down instantly. Pay only for what you use. Most modern apps use cloud.",
            "Vercel = Cloud + CDN superpower: instead of running a server for each request, Vercel pre-builds all pages at deploy time and stores them on CDN. Requests are served directly from files — no server execution at all.",
          ],
          concepts: [
            { term: "Shared Hosting", def: "Multiple websites sharing a single server's CPU, RAM, and disk. Cheapest option but performance is affected by other tenants. Suitable for small, low-traffic sites." },
            { term: "VPS (Virtual Private Server)", def: "A physical server virtualized into isolated compartments. Each VPS has dedicated allocated resources and appears as a private server to its owner. Better performance than shared hosting." },
            { term: "Serverless / JAMstack", def: "Architecture where web pages are pre-built at deploy time (not at request time) and served from CDN. No servers to manage. Vercel and Netlify are the leading platforms. Instant scale, zero server management." },
            { term: "Scalability", def: "Ability to handle increasing traffic by adding resources. Vertical scaling = more power to one server. Horizontal scaling = more servers. Cloud hosting scales dynamically; dedicated servers require manual upgrades." },
          ],
          takeaway: "For modern projects: Vercel or Netlify for frontend/static sites, Railway or Render for backends, DigitalOcean or AWS for custom VPS setups. Dedicated servers are rarely needed unless you're at significant enterprise scale. Understanding hosting types helps you choose the right infrastructure at every stage of growth.",
        },
      },
    ],
  },
  {
    id: "wf-5", module: "Module 5", title: "Browsers & Authentication", icon: "🖥️", color: "#EF4444",
    lessons: [
      {
        id: "wf-5-1", title: "How Browsers Work", duration: "16 min",
        content: {
          overview: "The Critical Rendering Path is the browser's step-by-step process to convert HTML, CSS, and JavaScript into visible pixels on screen. HTML is the skeleton (structure), CSS is the appearance (styling), JS is the behavior (interactivity). The browser reads these files, builds tree structures in memory, combines them, calculates positions, and paints pixels. When JS changes something on the page, only the affected steps re-run — but Layout (Reflow) is expensive, and triggering it too frequently causes choppy, janky websites.",
          keyPoints: [
            "Step 1 — DOM: Browser reads HTML line by line and builds a tree structure in memory called the Document Object Model. When JS does document.getElementById(), 'document' IS this tree.",
            "Step 2 — CSSOM: Browser converts CSS into a similar tree called the CSS Object Model. Inheritance and specificity are resolved here.",
            "Step 3 — Render Tree: DOM + CSSOM combined. Only visible elements are included — elements with display:none are excluded from this tree entirely.",
            "Step 4 — Layout (Reflow): Browser calculates the exact x/y position and width/height of every element. Computationally expensive — this is the step that slows down poorly written JS.",
            "Step 5 — Paint: Browser converts layout calculations into actual pixels on screen, layer by layer.",
            "When JS changes the DOM (e.g. a button click adds a popup), the browser re-runs only the affected steps: Render Tree update → Layout recalculation → Repaint.",
            "Reflow is expensive: JS that triggers many DOM changes causing repeated reflows creates janky, choppy websites. Good developers batch DOM changes to minimize reflow frequency.",
          ],
          concepts: [
            { term: "DOM (Document Object Model)", def: "A tree-shaped in-memory representation of the HTML page structure. Every HTML element is a node. JavaScript interacts with the DOM to read and modify page content dynamically." },
            { term: "CSSOM (CSS Object Model)", def: "The CSS equivalent of the DOM — a tree of all CSS rules with inheritance resolved. Combined with DOM to create the Render Tree that the browser uses for layout and painting." },
            { term: "Reflow", def: "The process of recalculating the exact position and size of elements after a DOM or CSS change. The most expensive rendering step — triggering it excessively causes visible performance problems." },
            { term: "Critical Rendering Path", def: "The sequence of steps from receiving HTML/CSS/JS to displaying pixels: DOM → CSSOM → Render Tree → Layout → Paint. Optimizing this path reduces time-to-first-visible-content." },
          ],
          takeaway: "HTML = skeleton, CSS = appearance, JS = behavior. The browser converts these three file types into pixels through a 5-step process. Understanding the rendering pipeline explains why certain patterns are slow (frequent reflows), why render-blocking scripts delay page display, and how to build fast-loading pages that feel instant.",
        },
      },
      {
        id: "wf-5-2", title: "Authentication — Cookies, Sessions & JWT", duration: "18 min",
        content: {
          overview: "HTTP is stateless — the server has no memory between requests. It forgets who you are after every single response. Yet Gmail remembers you're logged in for weeks. How? The answer is cookies and sessions. After you log in, the server stores a session record and sends your browser a cookie with a session ID. Your browser attaches this cookie to every future request. The server reads it and knows who you are. The problem: this breaks at scale with multiple servers. JWT solves this by storing your identity in the token itself — cryptographically signed so any server can verify it without a central session database.",
          keyPoints: [
            "Cookie: small text stored in your browser by the server. Automatically sent with every future request to that domain. The hotel key card analogy — you show it to prove you checked in.",
            "Session: server-side record mapping session_id → user identity. Cookie = key in your wallet, Session = lock on the server. Session verified on every request.",
            "Problem at scale: if user logs in on Server 1 and next request hits Server 7, Server 7 has no session data. User appears logged out. Load-balanced apps break with naive session architecture.",
            "JWT (JSON Web Token): stores user data (name, role, expiry) directly in the token with a cryptographic signature. Any server with the public key can verify the token — no central database needed.",
            "JWT structure: Header.Payload.Signature. The payload is base64-encoded (readable by anyone), but the signature prevents tampering — any modification breaks the signature.",
            "Public Key Cryptography: Origin Server signs JWTs with Private Key. CDN/edge servers verify with Public Key. Like a passport — passport office issues it (private), border security verifies it (public).",
            "Cookie expiry = security: banks use 10-minute cookies (high financial risk), Gmail uses weeks (lower risk), Netflix months (no financial risk). Short expiry limits damage if your device is stolen.",
          ],
          concepts: [
            { term: "Cookie", def: "A small text file stored in the browser by a web server. Automatically attached to every request to that domain. Used for session tracking, authentication, and user preferences." },
            { term: "Session", def: "Server-side storage mapping a session_id to user identity and state. The browser holds the session_id in a cookie. Server looks up the session on each authenticated request." },
            { term: "JWT (JSON Web Token)", def: "A self-contained authentication token: Header.Payload.Signature. Payload carries user data. Signature prevents tampering. Any server with the public key can verify it — enables stateless authentication at scale." },
            { term: "Public Key Cryptography", def: "Asymmetric encryption: a private key creates signatures, a public key verifies them. Only the key holder can sign; anyone with the public key can verify. Foundation of JWT verification and HTTPS." },
          ],
          takeaway: "Cookie+Session = hotel key card (key in your wallet, record in hotel system). JWT = passport (complete identity document you carry everywhere). JWT wins for modern scaled applications because verification requires no central state — any server in any location can verify a JWT independently using the public key.",
        },
      },
      {
        id: "wf-5-3", title: "OAuth — Login with Google", duration: "12 min",
        content: {
          overview: "How does 'Login with Google' work when vriseglobal.co.in and google.com are completely separate websites? OAuth 2.0 is the answer — an authorization framework that lets users grant third-party apps limited access to their accounts without ever sharing their password. Google acts as the identity provider. The app never sees your password — only a limited, temporary access token that lets it fetch your name and email. Your browser is the intermediary, redirecting between Google and the app in a carefully choreographed handshake.",
          keyPoints: [
            "OAuth 2.0 flow: Click 'Login with Google' → redirect to Google → you log in and approve permissions → Google redirects back with a temporary code → app exchanges code for access token → app gets your profile data → app creates its own login session.",
            "Google never shares your password or cookies. It issues a limited access token — a visitor pass, not an employee ID. It expires quickly and has restricted scope.",
            "Scope: the specific permissions being requested. 'Read your name and email' is narrow. 'Access your Google Drive' is broad. Users see exactly what permissions an app is requesting and can reject them.",
            "The app registers with Google beforehand and gets a client_id and client_secret. These prove to Google which application is requesting access.",
            "After OAuth, the app creates its own JWT for the user's session. Google's token is used once to get user info; then the app manages authentication itself from that point.",
          ],
          concepts: [
            { term: "OAuth 2.0", def: "An authorization framework enabling apps to obtain limited access to user accounts on third-party services without handling passwords. The user consents to specific data sharing, and the provider issues a temporary access token." },
            { term: "Access Token", def: "A temporary credential issued after successful OAuth flow. The app presents this token to the provider's API to fetch allowed user data. Expires quickly and limited in scope." },
            { term: "Scope", def: "The specific permissions an OAuth application requests access to. Users see and must approve the requested scope. Apps should request minimum necessary scope." },
            { term: "Authorization Code Flow", def: "The standard OAuth 2.0 pattern: redirect user to provider → user authenticates → provider returns a one-time code → app exchanges code for access token via server-to-server call. The code is single-use for security." },
          ],
          takeaway: "OAuth is the trust layer between websites. 'Login with Google' is a precisely defined handshake where Google authenticates you, you consent to sharing specific data, and the app receives a temporary token — never your password. Your credentials stay on Google. The app gets only what you explicitly approved.",
        },
      },
    ],
  },
  {
    id: "wf-6", module: "Module 6", title: "APIs & Real-Time", icon: "🔌", color: "#10B981",
    lessons: [
      {
        id: "wf-6-1", title: "APIs & REST", duration: "16 min",
        content: {
          overview: "API stands for Application Programming Interface — the waiter between your app and the data it needs. Instead of apps talking directly to databases, they make HTTP requests to an API which enforces rules, checks permissions, and returns clean data. REST is a set of standard conventions for building APIs: use HTTP methods semantically (GET to read, POST to create, PUT to update, DELETE to remove), use meaningful URLs (/restaurants/5), and respond with JSON. This standardization means any app on any platform can communicate with any RESTful API — it's the universal language of web services.",
          keyPoints: [
            "APIs separate concerns: Zomato's Android app, iOS app, and website all use the same API. One source of truth. Change the API once and all clients benefit.",
            "Endpoint: a URL that accepts HTTP requests. GET /restaurants fetches all restaurants. GET /restaurants/5 fetches restaurant #5. POST /restaurants creates a new one.",
            "JSON (JavaScript Object Notation): the universal API response format. Pure data — no HTML, no styling. Any app on any platform can parse JSON. Human-readable and lightweight.",
            "REST rules: correct HTTP method for each action (CRUD: Create=POST, Read=GET, Update=PUT, Delete=DELETE), meaningful URLs that represent resources, JSON responses.",
            "JWT-protected endpoints: client sends JWT in Authorization header. API checks token before returning data. Admin-only endpoints reject requests without admin role in the JWT.",
            "Every app is just CRUD: Instagram post = Create. Feed = Read. Edit bio = Update. Delete photo = Delete. Gmail, Zomato, Netflix — all are fundamentally CRUD operations over HTTP.",
          ],
          concepts: [
            { term: "API", def: "Application Programming Interface — a defined contract for how software components communicate. Web APIs accept HTTP requests and return JSON responses, enabling any client to fetch or manipulate data." },
            { term: "REST", def: "Representational State Transfer — an architectural style for APIs using HTTP methods semantically, resource-based URLs, and JSON responses. Most web APIs are RESTful." },
            { term: "JSON", def: "JavaScript Object Notation — a lightweight, human-readable data format used by virtually all web APIs. Language-independent: any programming language can parse and generate JSON." },
            { term: "CRUD", def: "Create, Read, Update, Delete — the four fundamental data operations. Maps directly to HTTP methods: POST (Create), GET (Read), PUT (Update), DELETE (Delete). Every app feature reduces to CRUD." },
          ],
          takeaway: "APIs are what make the modern web modular and scalable. REST provides the shared language. JSON provides the shared data format. JWT provides secure authorization. Master these three concepts and you can integrate any third-party service, build any backend, and understand how every web application communicates with its data layer.",
        },
      },
      {
        id: "wf-6-2", title: "WebSockets", duration: "14 min",
        content: {
          overview: "REST requires the client to always speak first — the server can never initiate. For most web use cases that's fine. But for real-time apps like WhatsApp or live stock prices, it's a fatal limitation. Polling (asking every second 'any new messages?') wastes massive bandwidth and creates delays. WebSocket solves this by opening a persistent, two-way connection. Once connected, both browser and server can send messages at any time without waiting for a request. It's the difference between sending SMS (check each time) and being on a phone call (instant, both directions).",
          keyPoints: [
            "REST polling problem: app asks every second 'any new messages?' — wastes bandwidth, hammers the server, and still has up to 1-second delay for messages.",
            "WebSocket: a persistent open connection. Browser and server can both push messages instantly without waiting. Connection stays open until explicitly closed.",
            "WebSocket use cases: chat (WhatsApp, Slack), live prices (Zerodha, crypto), live sports scores, multiplayer games, collaborative editing (Google Docs), teacher announcements to students.",
            "REST use cases: loading a page, submitting a form, fetching a profile, any one-time data request. 90% of web features are REST. WebSocket is for the 10% that are genuinely real-time.",
            "WebSocket starts as an HTTP upgrade request: client asks to upgrade to WebSocket protocol. Server accepts. Connection switches to ws:// (or wss:// for secure). From there, it's bidirectional.",
            "vriseglobal.co.in example: student submits assignment = REST (one-time action). Teacher sends live announcement to 500 students = WebSocket (server pushes to many simultaneously).",
          ],
          concepts: [
            { term: "WebSocket", def: "A communication protocol providing full-duplex (two-way simultaneous) communication over a single persistent TCP connection. Both client and server can push messages at any time without a preceding request." },
            { term: "Polling", def: "A technique where the client repeatedly asks the server for updates at regular intervals (e.g., every second). Simple but inefficient — wastes bandwidth and CPU even when no data has changed." },
            { term: "Long Polling", def: "An improved polling technique: client makes a request, server holds it open until data is available (or timeout), then responds and client re-requests immediately. Simulates push but less efficient than WebSocket." },
            { term: "Real-Time", def: "Data delivered within milliseconds of an event. WebSocket enables true real-time by maintaining a persistent connection — no request-response cycle overhead for each message." },
          ],
          takeaway: "The decision rule: does the server ever need to push data to the client without being asked first? If yes → WebSocket. If no → REST. Most applications are mostly REST with WebSocket added for specific real-time features. Understanding when to use each is a core architectural decision in any connected application.",
        },
      },
    ],
  },
];

const COURSES = [
  {
    id: "web-fundamentals",
    title: "Web Fundamentals",
    subtitle: "How the Internet Works",
    description: "Understand DNS, HTTP, SSL, CDN, authentication, APIs, and how browsers render websites — built from real hands-on experience.",
    icon: "🌐",
    color: "#00D4FF",
    tags: ["DNS", "HTTP", "SSL", "CDN", "APIs", "Auth"],
    data: webFundamentalsData,
  },
];

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=IBM+Plex+Mono:wght@400;600&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,400&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #0A0A0F; } ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }
  .mod-btn:hover { background: rgba(255,255,255,0.06) !important; }
  .lesson-row:hover { background: rgba(255,255,255,0.04) !important; cursor: pointer; }
  .tab-btn:hover { opacity: 0.85; }
  .next-btn:hover { filter: brightness(1.15); }
  .concept-card { transition: transform 0.2s; }
  .concept-card:hover { transform: translateY(-2px); }
  .course-card { transition: transform 0.3s, box-shadow 0.3s; cursor: pointer; }
  .course-card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.5) !important; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
  .fade-in { animation: fadeIn 0.35s ease forwards; }
  .mobile-back-bar { display: none; }
  @media (max-width: 768px) {
    .mobile-back-bar { display: flex !important; }
    .main-layout { height: auto !important; overflow: visible !important; }
    .layout-sidebar, .layout-lessons, .layout-content { display: none !important; }
    .mobile-modules .layout-sidebar { display: block !important; width: 100% !important; border-right: none !important; min-height: calc(100vh - 120px); }
    .mobile-lessons .layout-lessons { display: block !important; width: 100% !important; border-right: none !important; min-height: calc(100vh - 120px); }
    .mobile-content .layout-content { display: block !important; width: 100% !important; padding: 20px 16px !important; min-height: calc(100vh - 120px); }
    .header-row { flex-wrap: wrap !important; gap: 10px !important; }
    .progress-section { width: 100% !important; text-align: left !important; }
    .progress-bar-track { width: 100% !important; }
    .lesson-title-text { font-size: 22px !important; }
    .module-hero-title { font-size: 24px !important; }
    .tab-btn { padding: 10px 12px !important; font-size: 10px !important; }
    .actions-row { flex-wrap: wrap !important; }
    .actions-row button { flex: 1 1 auto !important; }
    .home-grid { grid-template-columns: 1fr !important; }
    .home-hero-title { font-size: 28px !important; }
    .home-grid { gap: 16px !important; }
    .home-stats { flex-wrap: wrap !important; gap: 24px !important; }
  }
`;

function HomePage({ onSelectCourse }) {
  const totalModules = COURSES.reduce((s, c) => s + c.data.length, 0);
  const totalLessons = COURSES.reduce((s, c) => s + c.data.reduce((ms, m) => ms + m.lessons.length, 0), 0);
  return (
    <div style={{ fontFamily: "'Georgia','Times New Roman',serif", background: "#0A0A0F", height: "100vh", color: "#E8E4DC", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <style>{GLOBAL_STYLES}</style>

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#0A0A0F 0%,#111118 100%)", borderBottom: "1px solid #1E1E2E", padding: "14px 32px", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 32, height: 32, background: "linear-gradient(135deg,#FF6B35,#A855F7)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>⚡</div>
          <div>
            <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 9, color: "#6B6B8A", letterSpacing: "0.2em", textTransform: "uppercase" }}>DevLearn</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, fontWeight: 700, color: "#F5F0E8" }}>Complete Learning Portal</div>
          </div>
        </div>
      </div>

      {/* Body — centered, fills remaining height */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 32px", overflow: "auto" }}>
        <div className="fade-in" style={{ width: "100%", maxWidth: 1000 }}>

          {/* Hero — centered */}
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: "#6B6B8A", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Your Learning Portal</div>
            <div className="home-hero-title" style={{ fontFamily: "'Playfair Display',serif", fontSize: 44, fontWeight: 900, color: "#F5F0E8", lineHeight: 1.15, marginBottom: 14 }}>
              Learn the skills{" "}
              <span style={{ background: "linear-gradient(90deg,#00D4FF,#A855F7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>that actually matter</span>
            </div>
            <div style={{ fontFamily: "'Source Serif 4',serif", fontSize: 16, color: "#9A9ABB", lineHeight: 1.7, maxWidth: 520, margin: "0 auto" }}>
              Understand how the internet actually works — DNS, HTTP, SSL, CDN, APIs, and authentication. Clear explanations, real-world context, zero fluff.
            </div>
          </div>

          {/* Stats — centered */}
          <div className="home-stats" style={{ display: "flex", gap: 40, justifyContent: "center", marginBottom: 24 }}>
            {[{ num: COURSES.length, label: "Courses" }, { num: totalModules, label: "Modules" }, { num: totalLessons, label: "Lessons" }].map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 32, fontWeight: 900, color: "#F5F0E8", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: "#4A4A6A", textTransform: "uppercase", letterSpacing: "0.15em", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div style={{ borderTop: "1px solid #1E1E2E", marginBottom: 24 }} />

          {/* Course card — centered */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "100%", maxWidth: 480 }}>
              {COURSES.map(course => {
                const tl = course.data.reduce((s, m) => s + m.lessons.length, 0);
                return (
                  <div key={course.id} className="course-card" onClick={() => onSelectCourse(course.id)}
                    style={{ background: "#111118", border: "1px solid #1E1E2E", borderRadius: 14, padding: "24px 28px", borderTop: `3px solid ${course.color}` }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 14 }}>
                      <div style={{ fontSize: 32, lineHeight: 1, flexShrink: 0 }}>{course.icon}</div>
                      <div>
                        <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 9, color: course.color, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 4 }}>{course.subtitle}</div>
                        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, color: "#F5F0E8", lineHeight: 1.2 }}>{course.title}</div>
                      </div>
                    </div>
                    <div style={{ fontFamily: "'Source Serif 4',serif", fontSize: 13, color: "#8A8AAA", lineHeight: 1.65, marginBottom: 14 }}>{course.description}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>
                      {course.tags.map(tag => (
                        <span key={tag} style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 9, color: course.color, background: course.color + "18", border: `1px solid ${course.color}35`, padding: "2px 8px", borderRadius: 4 }}>{tag}</span>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: 20, marginBottom: 14 }}>
                      <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: "#4A4A6A" }}>{course.data.length} modules</div>
                      <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: "#4A4A6A" }}>{tl} lessons</div>
                    </div>
                    <button style={{ width: "100%", background: course.color, border: "none", color: "#fff", padding: "11px 0", borderRadius: 7, fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, letterSpacing: "0.1em", cursor: "pointer", textTransform: "uppercase" }}>
                      Start Learning →
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function CourseViewer({ courseConfig, completedLessons, setCompletedLessons, onBack }) {
  const [activeModule, setActiveModule] = useState(0);
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [mobileView, setMobileView] = useState("modules");

  const courseData = courseConfig.data;
  const currentModule = courseData[activeModule];
  const currentLesson = activeLesson !== null ? currentModule.lessons[activeLesson] : null;
  const totalLessons = courseData.reduce((sum, m) => sum + m.lessons.length, 0);
  const completedCount = completedLessons.size;
  const progressPct = Math.round((completedCount / totalLessons) * 100);

  const markComplete = (lessonId) => setCompletedLessons((prev) => new Set([...prev, lessonId]));

  const goToNextLesson = () => {
    if (activeLesson < currentModule.lessons.length - 1) {
      setActiveLesson((prev) => prev + 1); setActiveTab("overview");
    } else if (activeModule < courseData.length - 1) {
      setActiveModule((prev) => prev + 1); setActiveLesson(0); setActiveTab("overview");
    }
  };

  return (
    <div style={{ fontFamily: "'Georgia','Times New Roman',serif", background: "#0A0A0F", minHeight: "100vh", color: "#E8E4DC" }}>
      <style>{GLOBAL_STYLES}</style>
      <div style={{ background: "linear-gradient(135deg,#0A0A0F 0%,#111118 100%)", borderBottom: "1px solid #1E1E2E", padding: "16px 20px", position: "sticky", top: 0, zIndex: 100 }}>
        <div className="header-row" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button onClick={onBack} style={{ background: "none", border: "1px solid #2E2E3E", color: "#9A9ABB", fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, cursor: "pointer", padding: "7px 14px", borderRadius: 6, letterSpacing: "0.05em" }}>← Portal</button>
            <div>
              <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: courseConfig.color, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 2 }}>{courseConfig.subtitle}</div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: "#F5F0E8" }}>{courseConfig.icon} {courseConfig.title}</div>
            </div>
          </div>
          <div className="progress-section" style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: "#6B6B8A", marginBottom: 6 }}>{completedCount}/{totalLessons} lessons · {progressPct}%</div>
            <div className="progress-bar-track" style={{ width: 160, height: 4, background: "#1E1E2E", borderRadius: 2, overflow: "hidden" }}>
              <div style={{ width: `${progressPct}%`, height: "100%", background: `linear-gradient(90deg,${courseConfig.color},#A855F7)`, borderRadius: 2, transition: "width 0.5s ease" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-back-bar" style={{ background: "#111118", borderBottom: "1px solid #1E1E2E", padding: "10px 16px", alignItems: "center", gap: 10 }}>
        {mobileView !== "modules" && (
          <button onClick={() => setMobileView(mobileView === "content" ? "lessons" : "modules")} style={{ background: "none", border: "none", color: "#9A9ABB", fontFamily: "'IBM Plex Mono',monospace", fontSize: 12, cursor: "pointer", padding: 0, flexShrink: 0 }}>←</button>
        )}
        <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: "#6B6B8A", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {mobileView === "modules" ? "All Modules" : mobileView === "lessons" ? currentModule.title : currentLesson?.title}
        </span>
      </div>
      <div className={`main-layout mobile-${mobileView}`} style={{ display: "flex", height: "calc(100vh - 73px)" }}>
        <div className="layout-sidebar" style={{ width: 220, borderRight: "1px solid #1E1E2E", overflowY: "auto", flexShrink: 0, padding: "16px 0" }}>
          {courseData.map((mod, mi) => {
            const modCompleted = mod.lessons.filter((l) => completedLessons.has(l.id)).length;
            const isActive = mi === activeModule;
            return (
              <button key={mod.id} className="mod-btn" onClick={() => { setActiveModule(mi); setActiveLesson(null); setMobileView("lessons"); }}
                style={{ width: "100%", background: isActive ? "rgba(255,255,255,0.05)" : "transparent", border: "none", padding: "12px 16px", textAlign: "left", cursor: "pointer", borderLeft: isActive ? `3px solid ${mod.color}` : "3px solid transparent", transition: "all 0.2s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 16 }}>{mod.icon}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 9, color: isActive ? mod.color : "#4A4A6A", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 2 }}>{mod.module}</div>
                    <div style={{ fontFamily: "'Source Serif 4',serif", fontSize: 12, color: isActive ? "#F5F0E8" : "#8A8AAA", lineHeight: 1.3, fontWeight: isActive ? 600 : 400 }}>{mod.title}</div>
                    <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 9, color: "#4A4A6A", marginTop: 4 }}>{modCompleted}/{mod.lessons.length} done</div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
        <div className="layout-lessons" style={{ width: 260, borderRight: "1px solid #1E1E2E", overflowY: "auto", flexShrink: 0 }}>
          <div style={{ padding: "20px 16px 12px", borderBottom: "1px solid #1E1E2E" }}>
            <div style={{ fontSize: 22, marginBottom: 6 }}>{currentModule.icon}</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 700, color: "#F5F0E8", marginBottom: 4 }}>{currentModule.title}</div>
            <div style={{ display: "inline-block", background: currentModule.color + "22", border: `1px solid ${currentModule.color}44`, borderRadius: 4, padding: "2px 8px", fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: currentModule.color }}>{currentModule.lessons.length} lessons</div>
          </div>
          <div style={{ padding: "8px 0" }}>
            {currentModule.lessons.map((lesson, li) => {
              const isActive = li === activeLesson;
              const isDone = completedLessons.has(lesson.id);
              return (
                <div key={lesson.id} className="lesson-row" onClick={() => { setActiveLesson(li); setActiveTab("overview"); setMobileView("content"); }}
                  style={{ padding: "12px 16px", background: isActive ? "rgba(255,255,255,0.05)" : "transparent", borderLeft: isActive ? `3px solid ${currentModule.color}` : "3px solid transparent", transition: "all 0.15s" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: isDone ? currentModule.color : "#1E1E2E", border: `2px solid ${isDone ? currentModule.color : "#333"}`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
                      {isDone ? <span style={{ fontSize: 10, color: "#fff" }}>✓</span> : <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 8, color: "#4A4A6A" }}>{li + 1}</span>}
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Source Serif 4',serif", fontSize: 13, color: isActive ? "#F5F0E8" : "#9A9ABB", lineHeight: 1.4, marginBottom: 3 }}>{lesson.title}</div>
                      <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: "#4A4A6A" }}>⏱ {lesson.duration}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="layout-content" style={{ flex: 1, overflowY: "auto", padding: "28px 32px" }}>
          {!currentLesson ? (
            <div className="fade-in">
              <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: currentModule.color, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>{currentModule.module}</div>
              <div className="module-hero-title" style={{ fontFamily: "'Playfair Display',serif", fontSize: 32, fontWeight: 900, color: "#F5F0E8", lineHeight: 1.2, marginBottom: 20 }}>{currentModule.icon} {currentModule.title}</div>
              <div style={{ background: "#111118", border: "1px solid #1E1E2E", borderRadius: 12, padding: 24, marginBottom: 24 }}>
                <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: "#6B6B8A", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Lessons in this module</div>
                {currentModule.lessons.map((lesson, li) => (
                  <div key={lesson.id} onClick={() => { setActiveLesson(li); setActiveTab("overview"); setMobileView("content"); }}
                    style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 0", borderBottom: li < currentModule.lessons.length - 1 ? "1px solid #1E1E2E" : "none", cursor: "pointer" }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: completedLessons.has(lesson.id) ? currentModule.color + "22" : "#1E1E2E", border: `1px solid ${completedLessons.has(lesson.id) ? currentModule.color : "#333"}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'IBM Plex Mono',monospace", fontSize: 12, color: completedLessons.has(lesson.id) ? currentModule.color : "#4A4A6A", flexShrink: 0 }}>
                      {completedLessons.has(lesson.id) ? "✓" : li + 1}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "'Source Serif 4',serif", fontSize: 14, color: "#D0CCBE", marginBottom: 2 }}>{lesson.title}</div>
                      <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: "#4A4A6A" }}>{lesson.duration}</div>
                    </div>
                    <span style={{ color: "#4A4A6A", fontSize: 16 }}>→</span>
                  </div>
                ))}
              </div>
              <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: "#4A4A6A" }}>← Select a lesson from the list to begin</div>
            </div>
          ) : (
            <div className="fade-in">
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: currentModule.color, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>{currentModule.module} · Lesson {activeLesson + 1}</div>
                <div className="lesson-title-text" style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, fontWeight: 900, color: "#F5F0E8", lineHeight: 1.2, marginBottom: 10 }}>{currentLesson.title}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: "#4A4A6A" }}>⏱ {currentLesson.duration}</span>
                  {completedLessons.has(currentLesson.id) && (
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: currentModule.color, background: currentModule.color + "18", border: `1px solid ${currentModule.color}33`, padding: "2px 8px", borderRadius: 4 }}>✓ Completed</span>
                  )}
                </div>
              </div>
              <div style={{ display: "flex", gap: 0, marginBottom: 24, borderBottom: "1px solid #1E1E2E" }}>
                {["overview", "keypoints", "glossary"].map((tab) => (
                  <button key={tab} className="tab-btn" onClick={() => setActiveTab(tab)}
                    style={{ background: "none", border: "none", padding: "10px 20px", fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: activeTab === tab ? currentModule.color : "#4A4A6A", borderBottom: activeTab === tab ? `2px solid ${currentModule.color}` : "2px solid transparent", cursor: "pointer", transition: "color 0.2s" }}>
                    {tab === "overview" ? "Overview" : tab === "keypoints" ? "Key Points" : "Glossary"}
                  </button>
                ))}
              </div>
              {activeTab === "overview" && (
                <div className="fade-in">
                  <div style={{ fontFamily: "'Source Serif 4',serif", fontSize: 16, color: "#C8C4BC", lineHeight: 1.85, marginBottom: 28 }}>{currentLesson.content.overview}</div>
                  <div style={{ background: `linear-gradient(135deg,${currentModule.color}11,${currentModule.color}06)`, border: `1px solid ${currentModule.color}33`, borderRadius: 12, padding: 20 }}>
                    <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: currentModule.color, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>💡 Key Takeaway</div>
                    <div style={{ fontFamily: "'Source Serif 4',serif", fontSize: 15, fontStyle: "italic", color: "#E8E4DC", lineHeight: 1.7 }}>{currentLesson.content.takeaway}</div>
                  </div>
                </div>
              )}
              {activeTab === "keypoints" && (
                <div className="fade-in">
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {currentLesson.content.keyPoints.map((point, i) => (
                      <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 16px", background: "#111118", border: "1px solid #1E1E2E", borderRadius: 10 }}>
                        <div style={{ width: 24, height: 24, borderRadius: "50%", background: currentModule.color + "22", border: `1px solid ${currentModule.color}44`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: currentModule.color, flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                        <div style={{ fontFamily: "'Source Serif 4',serif", fontSize: 14, color: "#C8C4BC", lineHeight: 1.7 }}>{point}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === "glossary" && (
                <div className="fade-in">
                  <div style={{ display: "grid", gap: 12 }}>
                    {currentLesson.content.concepts.map((c, i) => (
                      <div key={i} className="concept-card" style={{ background: "#111118", border: "1px solid #1E1E2E", borderRadius: 10, padding: 16, borderLeft: `3px solid ${currentModule.color}` }}>
                        <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 12, color: currentModule.color, fontWeight: 600, marginBottom: 6 }}>{c.term}</div>
                        <div style={{ fontFamily: "'Source Serif 4',serif", fontSize: 14, color: "#9A9ABB", lineHeight: 1.65 }}>{c.def}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="actions-row" style={{ display: "flex", gap: 12, marginTop: 32, paddingTop: 24, borderTop: "1px solid #1E1E2E" }}>
                {!completedLessons.has(currentLesson.id) && (
                  <button onClick={() => markComplete(currentLesson.id)}
                    style={{ background: currentModule.color, border: "none", color: "#fff", padding: "12px 24px", borderRadius: 8, fontFamily: "'IBM Plex Mono',monospace", fontSize: 12, letterSpacing: "0.1em", cursor: "pointer", textTransform: "uppercase" }}>
                    ✓ Mark Complete
                  </button>
                )}
                <button className="next-btn" onClick={goToNextLesson}
                  style={{ background: "#1E1E2E", border: "1px solid #333", color: "#C8C4BC", padding: "12px 24px", borderRadius: 8, fontFamily: "'IBM Plex Mono',monospace", fontSize: 12, letterSpacing: "0.1em", cursor: "pointer", textTransform: "uppercase", transition: "filter 0.2s" }}>
                  Next Lesson →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeCourseId, setActiveCourseId] = useState(null);
  const [progressMap, setProgressMap] = useState({});
  const activeCourse = COURSES.find(c => c.id === activeCourseId);
  if (activeCourse) {
    return (
      <CourseViewer
        courseConfig={activeCourse}
        completedLessons={progressMap[activeCourseId] || new Set()}
        setCompletedLessons={(fn) => setProgressMap(prev => ({
          ...prev,
          [activeCourseId]: fn(prev[activeCourseId] || new Set()),
        }))}
        onBack={() => setActiveCourseId(null)}
      />
    );
  }
  return <HomePage onSelectCourse={setActiveCourseId} />;
}
