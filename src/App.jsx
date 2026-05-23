import { useState } from "react";

const digitalMarketingData = [
  {
    id: 1,
    module: "Module 1",
    title: "Foundations of Digital Marketing",
    icon: "🏗️",
    color: "#FF6B35",
    lessons: [
      {
        id: "1-1",
        title: "What is Digital Marketing?",
        duration: "12 min",
        content: {
          overview:
            "Imagine you own a bakery. In the old days, you'd put up a signboard, hand out flyers, or take out a newspaper ad. That's traditional marketing. Digital marketing is doing all of that — but on the internet, where billions of people spend their time every day. It includes everything from showing up on Google when someone searches 'best cake near me', to posting on Instagram, to sending an email to loyal customers. The real magic of digital marketing is that you can reach the exact right person, at the exact right moment, for a fraction of what a TV ad costs — and you can measure every single click, view, and sale in real time.",
          keyPoints: [
            "Digital vs. Traditional Marketing: A newspaper ad reaches everyone who buys that paper — most of whom don't care about your product. A Google ad only appears when someone is actively searching for what you sell. Digital marketing lets you be precise, not just loud. You stop wasting money reaching people who will never buy.",
            "The Customer Journey has 5 stages: Awareness (they discover you exist), Interest (they want to know more), Consideration (they're comparing you with alternatives), Purchase (they buy), and Loyalty (they come back and refer others). Digital marketing gives you tools to reach people at every single stage.",
            "Omnichannel means showing up wherever your customer already spends time — Google, Instagram, email, YouTube — with a consistent message. A customer might discover you on Instagram, research you on Google, and finally buy after receiving a promotional email. Each channel plays a role.",
            "Data is your superpower: Unlike a billboard, digital marketing tells you exactly how many people saw your ad, clicked it, and bought. You can test two versions of an ad headline and know in 24 hours which one performs better. This ability to measure everything and improve in real time is what makes digital marketing so powerful.",
            "The feedback loop is instant: Post content → measure results → learn what works → improve → repeat. This cycle, done consistently, is how brands grow 10x faster online than offline. Every campaign teaches you something that makes the next one better.",
          ],
          concepts: [
            {
              term: "Inbound Marketing",
              def: "Attracting customers by creating content they're already searching for — like blog posts, YouTube videos, or free tools. Instead of interrupting people with ads, you give them value first and earn their trust. Think of it as being the helpful teacher, not the pushy salesperson. People come to you because your content helped them.",
            },
            {
              term: "Outbound Marketing",
              def: "Pushing your message out to a broad audience whether they asked for it or not — TV ads, cold emails, pop-up ads, cold calls. It works, but it's more expensive and less targeted than inbound. The key difference: inbound pulls interested people in, outbound pushes messages out to everyone and hopes some are interested.",
            },
            {
              term: "Marketing Funnel",
              def: "Picture an upside-down triangle. At the top (widest part) are all the people who've heard of you. As you move down — interest, consideration, purchase — the number shrinks. Your job is to guide people from the top to the bottom by answering their questions and building trust at each stage. Most people drop out; your goal is to reduce that drop-off.",
            },
            {
              term: "KPI (Key Performance Indicator)",
              def: "A number that tells you whether your marketing is working. Examples: '500 new email subscribers this month' or '4% conversion rate on our ad campaign.' Without KPIs, you're guessing. With them, you're making decisions based on facts. Every marketing activity should have at least one KPI attached to it so you know if it's worth continuing.",
            },
          ],
          takeaway:
            "Digital marketing isn't one tool — it's an ecosystem of channels working together. The brands that win online aren't the ones with the biggest budgets. They're the ones who understand their audience, communicate clearly, and use data to improve every week. Start by learning one channel deeply before adding more.",
        },
      },
      {
        id: "1-2",
        title: "Understanding Your Target Audience",
        duration: "15 min",
        content: {
          overview:
            "Here's the most common beginner mistake: trying to market to 'everyone.' A product for everyone is a product for no one. If you open a premium yoga studio, your audience isn't 'all humans who have a body' — it's probably women aged 25–40, health-conscious, with disposable income, who value wellness and community. The more specifically you can describe your ideal customer, the better every marketing decision becomes — which platform to use, what to say, what images to show, even what price to charge. Audience research is the single most important thing you do before spending a rupee on marketing.",
          keyPoints: [
            "Demographics tell you WHO your customer is on paper — age, gender, location, income, education, and occupation. Example: a luxury car brand targets men aged 35–55 with high income in metro cities. This determines which platforms make sense (LinkedIn over TikTok) and what messaging resonates ('engineering excellence' vs. 'best deal').",
            "Psychographics tell you WHY they buy — their values, lifestyle, personality, fears, and aspirations. Two people with identical demographics (same age, same income) can buy completely different things based on their personality. One values status, the other values sustainability. Psychographics explain the difference and make your messaging feel personal.",
            "Behavioral data shows HOW they interact with products — what they search for, which sites they visit, what they buy, how often they return, and on which device. This data comes from tools like Google Analytics and helps you understand real purchasing patterns rather than assumptions.",
            "Pain Points and Aspirations: Every purchase either solves a problem or fulfills a desire. A gym membership is sold to someone unhappy with their body (pain point) who wants to feel confident and energetic (aspiration). Your marketing should speak to both — acknowledge the pain, then paint the picture of the life they want.",
            "A Buyer Persona is a detailed, fictional-but-realistic profile of your ideal customer. Give them a name, job, family situation, daily routine, biggest fears, and goals. 'Writing for Priya, a 34-year-old working mom in Pune who wants to learn digital marketing but only has 30 minutes a day' is infinitely more effective than writing for 'people interested in marketing.'",
          ],
          concepts: [
            {
              term: "Buyer Persona",
              def: "A research-based fictional character that represents your ideal customer — complete with name, age, job title, challenges, goals, and preferred communication channels. When you create any marketing content, imagine you're having a one-on-one conversation with this specific person. Personas prevent you from creating generic content that resonates with nobody.",
            },
            {
              term: "ICP (Ideal Customer Profile)",
              def: "Similar to a buyer persona but used in B2B (business-to-business) marketing. It defines the type of company — not just person — that gets maximum value from your product. Example: 'E-commerce companies in India with 10–50 employees, ₹2–10 crore annual revenue, and an active social media presence.' Every sales and marketing decision gets filtered through the ICP.",
            },
            {
              term: "Segmentation",
              def: "Dividing your total audience into smaller groups based on shared characteristics, then creating tailored messages for each group. Instead of one generic email to 10,000 subscribers, you send a relevant message to each segment. Research shows segmented campaigns get 760% more revenue than non-segmented ones — because relevance converts, generality doesn't.",
            },
            {
              term: "Voice of Customer (VoC)",
              def: "The actual words, phrases, and feelings your real customers use when talking about your product — from reviews, surveys, support tickets, and interviews. When you use their exact language in your marketing, it creates an uncanny feeling of 'they understand me.' VoC research is the shortcut to writing copy that converts without feeling like marketing.",
            },
          ],
          takeaway:
            "Before spending a rupee on marketing, invest time understanding who you're talking to. Read their reviews, join the communities they're part of, survey your existing customers, and build a detailed persona. When you truly know your audience, choosing platforms, writing headlines, and creating offers becomes obvious rather than guesswork.",
        },
      },
      {
        id: "1-3",
        title: "Building a Digital Marketing Strategy",
        duration: "18 min",
        content: {
          overview:
            "A strategy is your master plan — the bridge between where you are and where you want to go. Without it, you're doing random things online and hoping something sticks. Most businesses fall into the 'activity trap': posting on Instagram every day, running occasional ads, sending sporadic emails — but none of it connects, and they can't figure out why sales aren't growing. A real strategy starts with clear goals, maps out the path to achieve them, and creates a system you can measure and improve every week. Think of strategy like a GPS — you need to know your destination before you can plot the best route.",
          keyPoints: [
            "Set SMART Goals before doing anything else. 'Grow my business' is not a goal — it's a wish. 'Get 500 new email subscribers in 90 days through a free Instagram challenge' is a SMART goal: Specific (email subscribers), Measurable (500), Achievable (realistic with effort), Relevant (email list grows revenue), and Time-bound (90 days). SMART goals transform vague intentions into actionable plans.",
            "Audit your current digital presence first. Before building something new, understand what you already have. How does your website perform? Are your social profiles complete and active? What does your Google Search Console show? You can't improve what you don't measure — and audits often reveal quick wins hiding in plain sight.",
            "Competitor analysis reveals what's already working in your market. Study your top 3 competitors: what content do they post, which keywords do they rank for, where do they advertise, and most importantly — what are their customers complaining about in reviews? Those complaints are your opportunity. Don't copy competitors; find the gaps they're missing.",
            "Choose channels based on where your audience already spends time, not what you personally prefer or what's trending. B2B company? LinkedIn and email beat Instagram. Selling fashion to Gen Z? TikTok and Instagram beat Facebook. Match the channel to the audience, not to your comfort zone.",
            "Budget allocation rule: Put 70% into proven channels already showing results, 20% into testing new tactics you believe in, and 10% into experimental ideas. This balances stability with innovation and prevents you from gambling your entire budget on unproven strategies.",
            "A content calendar prevents the Monday morning panic of 'what do I post today?' Plan 4–8 weeks of content in advance, aligned with product launches, seasonal trends, and audience needs. Consistency compounds over time — a brand that posts 3 times a week for a year will always outperform one that posts daily for a month and then disappears.",
          ],
          concepts: [
            {
              term: "SWOT Analysis",
              def: "A strategic planning framework: Strengths (what you do better than anyone), Weaknesses (where you fall short), Opportunities (market trends or gaps you can exploit), Threats (competitors or external forces that could hurt you). Run a SWOT before writing any marketing strategy — it grounds your plan in reality and prevents you from building on faulty assumptions.",
            },
            {
              term: "SMART Goals",
              def: "A framework ensuring every goal is Specific (clearly defined), Measurable (trackable with a number), Achievable (realistic given resources), Relevant (connected to business outcomes), and Time-bound (has a deadline). A goal missing even one of these elements is just a wish. SMART goals are the difference between 'we want to grow on social media' and 'we will reach 5,000 Instagram followers by December 31st through daily Reels.'",
            },
            {
              term: "Content Calendar",
              def: "A planning document — often a spreadsheet or tool like Notion — that maps out exactly what content you'll publish, on which platform, on which date, and with which goal. It transforms content creation from reactive and stressful to proactive and strategic. A good content calendar aligns content with product launches, seasonal moments, and audience behavior patterns.",
            },
            {
              term: "Marketing Mix (4 Ps)",
              def: "The four fundamental levers every marketer controls: Product (what are you selling and what makes it valuable?), Price (what does it cost, and what does that price signal about quality?), Place (where and how do customers access it — online, in-store, direct?), Promotion (how do you communicate its value?). Changing any one of these changes your entire marketing strategy.",
            },
          ],
          takeaway:
            "Strategy separates businesses that grow intentionally from those that grow accidentally — or don't grow at all. Spend time upfront defining your goals, knowing your audience, studying your competitors, and choosing your channels wisely. A clear strategy means every piece of content, every ad, and every email has a purpose — and you always know if it's working.",
        },
      },
    ],
  },
  {
    id: 2,
    module: "Module 2",
    title: "Search Engine Optimization (SEO)",
    icon: "🔍",
    color: "#4ECDC4",
    lessons: [
      {
        id: "2-1",
        title: "How Search Engines Work",
        duration: "14 min",
        content: {
          overview:
            "Every day, people type questions into Google — 'best running shoes for flat feet', 'how to file GST return', 'digital marketing course online' — and expect a perfect answer within seconds. How does Google decide which of the billions of web pages to show first? The answer lies in three steps: crawling, indexing, and ranking. Understanding this process is the foundation of SEO. When you know how Google 'reads' the internet, you can make smarter decisions about how to build your website and write your content — so that Google rewards you with free, consistent traffic that keeps coming even while you sleep.",
          keyPoints: [
            "Crawling is how Google discovers new pages. Google sends automated robots called 'Googlebots' that follow links from page to page across the entire internet — like a spider moving along a web. If no other page links to yours, Googlebot may never find it. This is why getting other websites to link to you (called backlinks) is so important: they're the roads that lead Google to your content.",
            "Indexing is how Google stores and organizes what it finds. After crawling a page, Google analyzes its content and adds it to a massive database called 'the index.' Think of it like a library catalog — if your book isn't in the catalog, no one can find it. If your page isn't in Google's index, it literally doesn't exist in search results, no matter how good the content is.",
            "Ranking is the most complex step: Google decides which indexed pages to show for a specific search query, and in what order. It evaluates 200+ signals — content quality, relevance to the query, page speed, mobile-friendliness, and how many trusted sites link to yours. The top 3 results capture over 60% of all clicks. Position 1 gets about 28% of clicks alone.",
            "SERPs (Search Engine Results Pages) contain more than just blue links. They include Featured Snippets (a direct answer shown at the very top), the Local Map Pack (nearby businesses with ratings), People Also Ask boxes, image carousels, video results, and paid ads at the top and bottom. Understanding these different formats helps you target the right result type for your content.",
            "Google's core mission is to 'organize the world's information and make it universally accessible and useful.' Every algorithm update serves this mission. If your content genuinely helps people find the best answer to their question, Google will eventually reward it — that's not a trick or a hack, it's just alignment with what Google is trying to do.",
          ],
          concepts: [
            {
              term: "Googlebot",
              def: "Google's automated web-crawling software that continuously browses the internet to discover and re-examine web pages. It follows links, reads content, and reports findings back to Google's servers. You can control what Googlebot is allowed to crawl using a file on your website called robots.txt, and you can check whether your pages are indexed using Google Search Console.",
            },
            {
              term: "Search Index",
              def: "Google's enormous database containing analyzed copies of all web pages it has crawled. When you search on Google, you're not searching the live internet — you're searching this pre-built index, which is why results appear in milliseconds. Being included in the index is the prerequisite for appearing in any search results. Use Google Search Console to confirm your pages are indexed.",
            },
            {
              term: "Search Algorithm",
              def: "The complex, constantly updated set of rules Google uses to rank pages. It includes PageRank (counting links from other sites as 'votes of confidence'), RankBrain (AI that understands the intent behind unusual queries), BERT (understanding natural language and context), and the Helpful Content system (specifically rewarding content written for humans, not search engines). Google updates its algorithm thousands of times per year.",
            },
            {
              term: "SERP Features",
              def: "Special result types beyond standard blue links that appear in Google's search results. Featured Snippets show a direct answer at the top — often called 'position zero.' The Local 3-Pack shows nearby businesses on a map. Image Packs show relevant images. Knowledge Panels show structured information about brands or people. Winning these features can dramatically increase visibility, often generating more clicks than ranking #1 in regular results.",
            },
          ],
          takeaway:
            "SEO is a long-term investment, not a quick fix. But once you earn Google's trust — through genuinely helpful, well-structured content — the rewards compound over time. A single well-optimized article can bring thousands of visitors every month for years, completely free. Start by ensuring your site is crawlable, your pages are indexed, and your content truly answers what people are searching for.",
        },
      },
      {
        id: "2-2",
        title: "Keyword Research Mastery",
        duration: "20 min",
        content: {
          overview:
            "Keywords are the exact words and phrases people type into Google when looking for something. Keyword research is the process of discovering which searches are most valuable for your business — and then creating content around them. It's the single most important SEO skill because if you create content nobody is searching for, nobody will find it. But if you identify the right keywords — ones with real volume, realistic competition, and strong intent — you can build content that consistently attracts exactly the customers you want. Think of keyword research as listening to what your customers are already asking for, then answering those questions better than anyone else.",
          keyPoints: [
            "Search Intent is the most important concept in keyword research — it's the real goal behind a search. 'What is SEO' = informational intent (learning). 'Best SEO tool for beginners' = commercial intent (comparing options before buying). 'Buy Ahrefs subscription' = transactional intent (ready to pay now). Mismatching your content type to search intent is why pages fail to rank even with good content.",
            "Head terms are short, broad keywords like 'shoes' or 'marketing' — huge search volume but near-impossible competition for new sites. Long-tail keywords are specific phrases like 'best waterproof running shoes for women under ₹5000' — lower volume but far easier to rank for, and they convert better because the searcher knows exactly what they want.",
            "Essential keyword research tools: Google Keyword Planner (free, shows search volume and CPC), Ahrefs and SEMrush (show difficulty scores and competitor rankings — paid), Ubersuggest (affordable entry-level tool), and AnswerThePublic (shows questions people ask about a topic). Use multiple tools — no single tool has complete data.",
            "Three metrics that matter most: Search Volume (monthly searches — how big is the opportunity?), Keyword Difficulty (0–100 score — how hard is it to reach page 1?), and CPC — Cost Per Click in Google Ads (high CPC means advertisers pay a lot for this traffic, which signals strong commercial intent and valuable organic traffic too).",
            "Competitor gap analysis: Enter your top competitor's domain into Ahrefs or SEMrush and see every keyword they rank for that you don't. These are proven, real-demand opportunities. Someone is already searching for them, and your competitor is capturing that traffic. Study what content they created to rank and then create something more comprehensive.",
            "Group keywords into topic clusters rather than targeting individual keywords. Build one comprehensive 'pillar page' on a main topic (e.g., 'The Complete Guide to Email Marketing'), then create 'cluster pages' going deep on specific sub-topics (e.g., 'Best Email Subject Lines'). This tells Google you have genuine depth on a subject, which boosts rankings for all related pages.",
          ],
          concepts: [
            {
              term: "Search Intent",
              def: "The underlying reason behind a search query — what the person actually wants to find, do, or buy. The four types: Informational (learning — 'how to do X'), Navigational (finding a specific site — 'Facebook login'), Commercial (researching before buying — 'best X for Y'), Transactional (ready to act — 'buy X online'). Creating content that perfectly matches the intent behind a keyword is the #1 factor most people miss in SEO.",
            },
            {
              term: "Long-tail Keywords",
              def: "Specific, multi-word search phrases with lower individual search volume but much higher conversion rates. 'Digital marketing' gets millions of searches but is nearly impossible to rank for. 'Best free digital marketing course for beginners in Hindi' gets fewer searches but everyone searching it is a perfect prospect. Start with long-tail keywords to build authority and traffic, then gradually compete for broader, harder terms.",
            },
            {
              term: "Keyword Difficulty (KD)",
              def: "A score (0–100) estimating how hard it is to rank on page 1 of Google for a keyword, based primarily on how many quality backlinks competitor pages have. KD 0–20: achievable with good content alone. KD 20–50: need some backlinks and domain authority. KD 50+: need significant SEO investment. New websites should start with KD under 20 and build from there.",
            },
            {
              term: "Topic Cluster",
              def: "A content architecture strategy where a comprehensive 'pillar page' covers a broad topic, and multiple 'cluster pages' cover specific sub-topics in depth — all internally linked together. This structure signals to Google that your site has genuine expertise in an area. Sites using topic clusters consistently rank for more keywords and rank them higher than sites with disconnected, standalone articles.",
            },
          ],
          takeaway:
            "Don't chase high-volume keywords just because the numbers look impressive. A keyword with 300 monthly searches and strong buyer intent will bring more revenue than a keyword with 50,000 searches from people just browsing. Build your keyword strategy around intent and realistic competition, publish consistently, and let your authority grow over time. Patience is the most underrated SEO skill.",
        },
      },
      {
        id: "2-3",
        title: "On-Page SEO Techniques",
        duration: "22 min",
        content: {
          overview:
            "On-page SEO refers to everything you can optimize directly on your own web pages to improve their ranking. Unlike off-page SEO (which requires other websites to link to you), on-page SEO is entirely within your control. It signals to Google: 'This page is exactly what someone searching for [keyword] needs.' The good news is that most websites do on-page SEO poorly — which means doing it well gives you an immediate competitive edge. Think of on-page SEO as presenting your content in the clearest, most organized way possible so that Google can instantly understand what it's about, why it's authoritative, and who it's meant to help.",
          keyPoints: [
            "The Title Tag is the blue clickable headline in Google search results. It's the single most impactful on-page SEO element. Keep it 50–60 characters, place your primary keyword near the front, and write it to earn clicks — it's essentially a mini advertisement. Bad example: 'Home | MyWebsite.com.' Strong example: 'Digital Marketing Course for Beginners: Free 8-Module Guide (2025).'",
            "The Meta Description is the 2-line summary beneath your title in search results. Google doesn't use it as a direct ranking signal, but it heavily influences click-through rate — and more clicks signal to Google that your result is valuable. Write 150–160 characters that include your keyword naturally and give a compelling reason to click. Treat it as ad copy, not a technical formality.",
            "Use a logical heading structure: One H1 per page (your main title, include the primary keyword), then H2s for major sections, H3s for sub-points within those sections. This makes your content easy to navigate for both readers and Google crawlers. Think of headings as a table of contents — they should give a complete picture of what the page covers even if someone only reads the headings.",
            "Write naturally and cover the topic comprehensively. Keyword stuffing (repeating your keyword unnaturally many times) is penalized. Instead, write thoroughly about your topic and you'll naturally include related terms — 'running shoes' content will naturally include 'heel support,' 'arch,' and 'trail vs. road.' These related terms, called LSI keywords, reinforce your relevance.",
            "Content depth wins consistently: A comprehensive 2,000-word article that truly answers a question will outrank a thin 400-word article almost every time. Before writing, Google your target keyword and study the top 3 results — note the topics they cover, the questions they answer, and the format they use. Then create something that covers the topic more completely than any of them.",
            "Internal linking connects your pages together — it passes ranking power (link equity) from strong pages to weaker ones, helps Google discover all your content, and keeps visitors reading longer. Every time you publish something new, add links to it from 2–3 existing relevant pages. Every page on your site should be reachable within 3 clicks from your homepage.",
            "Image optimization impacts both rankings and speed: Save images with descriptive file names ('red-nike-running-shoes.jpg' not 'IMG_4521.jpg'), write alt text that describes the image in natural language (also important for accessibility), and compress images before uploading — large images are one of the most common causes of slow page load times.",
            "Core Web Vitals are Google's page experience signals: LCP (Largest Contentful Paint — how fast the main content loads, target under 2.5 seconds), INP (Interaction to Next Paint — how quickly the page responds to clicks), and CLS (Cumulative Layout Shift — do elements jump around as the page loads?). Poor scores here both hurt rankings and frustrate users who leave before converting.",
          ],
          concepts: [
            {
              term: "Title Tag",
              def: "The HTML <title> element that defines a page's title. It appears as the clickable blue headline in Google results and as the browser tab label. Write it for humans first — make it compelling to click — then optimize for search engines by including the target keyword naturally near the front. It's the highest-leverage on-page SEO element and directly influences both rankings and click-through rate.",
            },
            {
              term: "E-E-A-T",
              def: "Google's quality framework: Experience (has the author personally done or used what they're writing about?), Expertise (do they have deep knowledge of the subject?), Authoritativeness (is the site recognized as a leading source in its field?), Trustworthiness (is the site honest, secure, and transparent?). E-E-A-T is especially critical for health, finance, legal, and other topics where bad advice can seriously harm users.",
            },
            {
              term: "Core Web Vitals",
              def: "Three measurable user experience metrics Google uses as ranking signals: LCP (Largest Contentful Paint) measures how fast the main content loads — under 2.5 seconds is ideal. INP (Interaction to Next Paint) measures how quickly the page responds to user interactions. CLS (Cumulative Layout Shift) measures how much the page layout shifts while loading. Check your scores free at PageSpeed Insights (pagespeed.web.dev).",
            },
            {
              term: "LSI Keywords",
              def: "Latent Semantic Indexing keywords — semantically related terms that naturally appear in well-written content about a topic. If your page is about 'coffee brewing,' LSI keywords include 'grind size,' 'water temperature,' 'pour-over,' 'extraction,' and 'roast level.' Including them naturally signals to Google that your content is comprehensive and authoritative — not just stuffed with one repeated phrase.",
            },
          ],
          takeaway:
            "On-page SEO is the foundation everything else is built on. Most competitors are lazy about it — meaning thorough on-page optimization immediately puts you ahead of the majority before you've even thought about building backlinks. Master title tags, logical structure, comprehensive content, fast loading speed, and internal linking first. Then off-page and technical SEO multiply the effect.",
        },
      },
    ],
  },
  {
    id: 3,
    module: "Module 3",
    title: "Content Marketing",
    icon: "✍️",
    color: "#A855F7",
    lessons: [
      {
        id: "3-1",
        title: "Content Strategy & Planning",
        duration: "16 min",
        content: {
          overview:
            "Content marketing is creating genuinely valuable content that attracts and retains a clearly defined audience — and eventually converts them into customers. The critical word is 'genuinely.' Not content that screams 'buy from me,' but content that teaches, solves real problems, or entertains in a way your audience truly appreciates. When you do this consistently, something remarkable happens: people start seeking you out. HubSpot built a multi-billion dollar business almost entirely through content marketing — their blog attracts millions of visitors per month, all of whom are potential buyers of their software. Content marketing is a long-term asset, not a short-term tactic.",
          keyPoints: [
            "Start with a Content Mission Statement — a single sentence defining who your content helps, what topics you cover, and what outcome readers get. Example: 'We help small business owners understand digital marketing so they can grow their revenue online without relying on expensive agencies.' This filters every content decision. If an idea doesn't serve this mission, don't create it.",
            "Understand your content formats and choose the right one for your audience: Blog posts are great for SEO and detailed education. Videos build trust and perform on YouTube and social platforms. Podcasts capture attention during commutes. Infographics summarize complex data visually and get shared widely. Case studies build credibility with buyers. Choose the format your audience prefers to consume, not the one that's easiest for you to produce.",
            "The Content Pyramid keeps you organized and efficient. At the top: one comprehensive 'Cornerstone' piece (a 5,000-word guide). Below it: several supporting articles covering sub-topics in depth. At the bottom: micro-content — social posts, quote graphics, short videos — repurposed from the bigger pieces. One pillar piece can fuel 20+ pieces of micro-content across multiple platforms.",
            "Build an editorial calendar planned 4–8 weeks ahead. Align content with product launches, seasonal trends (tax content in March, New Year fitness content in January), and audience questions. A calendar transforms content creation from a reactive scramble into a predictable, professional operation that compounds results over time.",
            "Follow the 80/20 distribution rule: Spend 20% of your time creating content and 80% promoting and distributing it. Most creators do the opposite — pour all their energy into creating and then publish to crickets. Share content across every relevant channel, repurpose into different formats, and reach out to people who might share or link to it. Distribution is what turns content into traffic.",
            "Run a content audit before creating anything new. Take stock of everything you've already published: Is it still accurate? Is it getting traffic? Could it rank for a better keyword? Often, improving one old article that once ranked well is faster and more impactful than writing something from scratch.",
          ],
          concepts: [
            {
              term: "Pillar Content",
              def: "A long-form, comprehensive piece of content (typically 3,000–10,000 words) that thoroughly covers a core topic your audience cares about. It's designed to be the definitive resource on that subject — so useful that people bookmark it, share it, and link to it from other websites. It acts as the hub of your content cluster and typically earns the most backlinks and organic traffic of any content type.",
            },
            {
              term: "Content Repurposing",
              def: "Transforming one piece of content into multiple formats to reach different audiences on different platforms. A 2,000-word blog post becomes a YouTube video script → a podcast episode → 10 tweet-style social posts → an infographic → a short-form video. You invest time creating once and get 5–10x the distribution. This is how small teams compete with large content operations.",
            },
            {
              term: "Content Audit",
              def: "A systematic review of all published content — cataloging every piece, assessing its performance (traffic, rankings, shares, conversions), and deciding whether to keep it as-is, update and improve it, consolidate it with another piece, or delete it. Most websites have 20% of content driving 80% of results. A content audit finds that 20% and helps you double down on what's working.",
            },
            {
              term: "Editorial Calendar",
              def: "A planning tool — spreadsheet, Notion database, or dedicated tool like CoSchedule — that maps out what content you'll create, on which platform, on which date, with which keywords, and who is responsible. It makes content creation proactive rather than reactive, ensures consistency even during busy periods, and lets you plan strategically around important business and seasonal moments.",
            },
          ],
          takeaway:
            "The best content marketing feels like a gift — so useful or entertaining that people would pay for it, but you give it away free. This generosity builds trust, and trust converts strangers into customers. Start with one channel, publish consistently for 6 months before judging results, and always ask: 'Does this genuinely help my ideal customer?' If yes, publish it. If it's just self-promotion, rethink it.",
        },
      },
      {
        id: "3-2",
        title: "Writing for the Web & SEO",
        duration: "18 min",
        content: {
          overview:
            "Writing for the web is a fundamentally different skill than writing an essay, a report, or a novel. Web readers are impatient — research shows 79% of people scan rather than read web pages word for word. They're looking for the answer to their question as fast as possible. If they don't find it quickly, they hit the back button. Great web writing respects this reality: it puts the most important information first, uses short paragraphs and clear headings to make scanning easy, and writes at a reading level that doesn't require a dictionary. At the same time, you're writing for search engines — which means using the right keywords, answering questions clearly, and covering topics comprehensively. Fortunately, what's genuinely good for readers is almost always what's good for Google too.",
          keyPoints: [
            "The Inverted Pyramid: Lead with your most important point — the answer, the key insight, the main benefit — right at the beginning. Then add supporting details below. Newspaper journalists developed this technique because readers often stop reading after the first paragraph. Web users do the same. Don't build slowly toward your point — state it immediately, then back it up.",
            "Headlines determine 80% of your success: 80% of people read the headline; only 20% read the rest. Proven headline formulas: How-To ('How to Double Your Email Open Rate in 7 Days'), Specific Numbers ('11 SEO Mistakes That Are Killing Your Rankings'), Genuine Questions ('Why Is Your Website Not Showing Up on Google?'), and Curiosity Gaps ('The One Landing Page Change That Increased Conversions by 63%').",
            "Keep paragraphs short — 2 to 4 lines maximum. Every paragraph should contain one idea. If you can cut a paragraph without losing meaning, cut it. White space between paragraphs isn't wasted — it's what makes content feel readable rather than like a wall of text that exhausts the reader before they start.",
            "Write at a Grade 6–8 reading level. This doesn't mean writing for children — it means being clear and direct rather than using jargon to sound impressive. The best writers make complex ideas simple. Unclear, jargon-heavy writing makes simple ideas seem complex and drives readers away. Use the free Hemingway App (hemingwayapp.com) to check your readability score.",
            "Every piece of content needs one clear Call to Action — a specific next step for the reader. Download the guide. Subscribe to the newsletter. Book a free call. Without a CTA, readers finish your content and leave with no relationship formed. With a well-placed CTA, they take the next step toward becoming a customer. One CTA per page — multiple competing CTAs confuse and reduce action.",
            "Use internal links to connect related content (keeps readers on your site and distributes SEO value) and external links to authoritative sources when citing data or statistics (builds credibility and shows Google you're part of a broader knowledge ecosystem). Good external links show confidence in your content — you're not afraid to let readers verify your claims.",
            "Update old content regularly. A blog post from 2022 with outdated statistics that once ranked on page 1 may have slipped to page 3. Refreshing it with new data, improved structure, and better examples — then updating the publish date — can often restore and exceed its original rankings. Content refreshes frequently outperform brand-new articles in terms of time invested versus traffic gained.",
            "Ground your writing in specifics. 'Email marketing has a high ROI' is forgettable. 'Email marketing delivers an average return of ₹3,600 for every ₹100 spent — the highest ROI of any digital channel, according to Litmus research' is memorable, credible, and shareable. Numbers, specific examples, and named sources transform vague claims into compelling facts.",
          ],
          concepts: [
            {
              term: "Inverted Pyramid",
              def: "A writing structure from journalism: place the most critical information at the very top — the answer, the key insight, the main benefit — then add supporting details and context below. The premise is that readers who stop reading early still get the core message. On the web, where average time-on-page is under 2 minutes, this structure is essential for effective communication.",
            },
            {
              term: "CTA (Call to Action)",
              def: "A directive — usually a button, link, or imperative sentence — that tells the reader exactly what to do next. 'Download the Free Template,' 'Start Your Free 14-Day Trial,' 'Subscribe for Weekly Tips.' A strong CTA is specific (not just 'click here'), communicates value or benefit, and aligns with where the reader is in their journey. It's the bridge between a reader consuming your content and taking an action that benefits your business.",
            },
            {
              term: "Skimmability",
              def: "How easily a reader can extract the key points of your content without reading every word. High skimmability requires: a compelling headline that sets clear expectations, H2/H3 subheadings that summarize each section, short paragraphs, bold text for key phrases, bullet points for lists, and a clear conclusion. Design your content so someone who spends just 30 seconds skimming still gets real value.",
            },
            {
              term: "Content Refresh",
              def: "Updating an existing published article to improve its accuracy, depth, SEO optimization, and user experience — then re-publishing it. Add new statistics, rewrite weak sections, add more examples and case studies, improve the headline, update internal links to newer articles, and change the publish date. Refreshing content is often faster than writing from scratch and frequently delivers better ranking improvements.",
            },
          ],
          takeaway:
            "Nobody reads on the web — they scan, then decide if the content is worth their time. Your job is to make that decision instantly obvious: lead with your best insight, use short paragraphs and clear headings, write simply and specifically, and end with a clear next step. Study the articles you can't stop reading and reverse-engineer what makes them work. Great web writing is a craft you build over hundreds of published pieces.",
        },
      },
    ],
  },
  {
    id: 4,
    module: "Module 4",
    title: "Social Media Marketing",
    icon: "📱",
    color: "#F59E0B",
    lessons: [
      {
        id: "4-1",
        title: "Platform Strategy & Selection",
        duration: "15 min",
        content: {
          overview:
            "There are over 20 major social media platforms, and new ones emerge every year. Trying to maintain an active presence on all of them is one of the most common and costly mistakes in social media marketing — you spread yourself thin, produce mediocre content everywhere, and see results nowhere. The accounts that dominate social media pick 1–3 platforms where their specific audience spends time and go all-in: they study the platform's culture, master its content formats, and post consistently enough to build real momentum. Platform selection isn't a personal preference — it's a strategic decision based on where your customers already are and what type of content resonates there.",
          keyPoints: [
            "Instagram (2B+ users): Best for visual brands — fashion, food, fitness, travel, beauty, lifestyle. Primary audience: 18–34 year olds. Reels currently receive 3–5x more reach than static photos. If your product can be made to look beautiful or demonstrated visually, Instagram is powerful. Stories are ideal for behind-the-scenes content that builds personal connection without requiring production quality.",
            "LinkedIn (950M+ users): The essential platform for B2B marketing, professional services, and thought leadership. CEOs, decision-makers, HR managers, and ambitious professionals use it daily. Text posts with strong opinions or personal stories about career and business consistently get high engagement. If you're selling to businesses or positioning yourself as an industry expert, LinkedIn often has the highest ROI of any platform.",
            "YouTube (2B+ users): The world's second-largest search engine and the only social platform where old content keeps getting discovered — a tutorial posted today can attract viewers for 5+ years through search. It requires the most production investment but has unmatched longevity. If you can commit to regular, well-structured educational content in your niche, YouTube's long-term compounding rewards patience like no other platform.",
            "TikTok (1B+ users): Short-form video, entertainment-first culture, dominant among 16–30 year olds. The algorithm is uniquely democratic — a brand new account with zero followers can go viral overnight if the content is compelling. But it requires genuine entertainment value: pure promotional content fails completely here. Ideal for brand awareness and reaching younger audiences.",
            "Facebook (3B+ users): The largest platform by raw user count, skewing older (30–65). Organic reach for Pages is now very low, but Facebook Groups remain powerful for building engaged communities. Facebook is also the foundation of Meta's advertising platform — even if you don't post organically on Facebook, you'll likely use its Ads Manager to run campaigns on Instagram.",
            "Pinterest: Often overlooked, but exceptionally powerful for e-commerce in visual categories — home décor, DIY, recipes, fashion, weddings, fitness. Pinterest users are actively planning and shopping, not passively browsing. Pins have a 3–6 month content lifespan versus Instagram's 24–48 hours. If your product is visual and purchase-driven, Pinterest can drive substantial sustained traffic.",
            "WhatsApp/Telegram Communities: In India, WhatsApp is the primary communication tool for hundreds of millions. Building a WhatsApp Community or Telegram channel creates a direct, algorithm-free channel to your most loyal audience. Open rates exceed 90%, vastly higher than email or social media. It's personal, immediate, and deeply effective for Indian markets specifically.",
          ],
          concepts: [
            {
              term: "Platform Algorithm",
              def: "Each social platform's unique system for deciding which content gets shown to users and how widely it's distributed. Instagram rewards Reels that generate early shares and saves. LinkedIn rewards posts that receive comments in the first hour. YouTube rewards high click-through rate combined with strong watch time. TikTok rewards completion rate. Understanding each platform's algorithm — what it measures and rewards — is the key to organic reach without paying for ads.",
            },
            {
              term: "Organic Reach",
              def: "The number of people who see your content without paid promotion. Organic reach has declined significantly on most platforms over the past decade — particularly on Facebook — as platforms push creators toward advertising. However, certain content types (especially video that drives saves and shares) still earn strong organic distribution. Organic reach must be earned through quality; paid reach is simply purchased.",
            },
            {
              term: "Engagement Rate",
              def: "A measure of how actively your audience interacts with your content: (Total Engagements ÷ Total Followers) × 100. Engagements include likes, comments, shares, saves, and clicks. Typical rates: 1–3% is average, above 5% is excellent. Engagement rate is far more meaningful than follower count — 3,000 highly engaged followers generate more business than 100,000 passive ones who never interact.",
            },
            {
              term: "Social Proof",
              def: "The psychological principle that people look to others' behavior to determine the right action. In social media, it manifests as follower counts, post likes, positive comments, user-generated content (customers posting about your product), testimonials, and press mentions. Strong social proof reduces buyer hesitation — when thousands of others already trust you, new visitors assume there's a good reason and trust you too.",
            },
          ],
          takeaway:
            "Pick your platform based on where your audience actually spends time and what content format plays to your strengths. If you're great on camera, YouTube and TikTok will reward you. If you write compellingly, LinkedIn will amplify you. Master one platform completely before expanding. Every major social media account you admire started by being remarkable in one place — they expanded only after building a real foundation.",
        },
      },
      {
        id: "4-2",
        title: "Content Creation & Algorithms",
        duration: "20 min",
        content: {
          overview:
            "Every social media platform is a competition for attention — billions of pieces of content fighting for limited screen time every day. The platforms use sophisticated algorithms to decide what gets shown and what gets buried. Understanding these algorithms isn't about 'gaming the system' — it's about understanding what makes people genuinely stop scrolling, watch, engage, and share, because that's exactly what every algorithm is designed to reward. The platforms want users to stay on the app longer. Content that earns genuine engagement gets amplified. Content that people scroll past gets suppressed. Your strategy must start from this reality.",
          keyPoints: [
            "The Hook is the most critical element of any social content — the very first second of a video, the first line of a caption, the thumbnail of a YouTube video. If your hook doesn't stop the scroll immediately, nothing else in your content matters. Proven hook formulas: Create curiosity ('The one marketing mistake costing you 80% of your sales'), make a bold claim ('I gained 10,000 Instagram followers in 30 days — here's the exact method'), or speak directly to a pain point ('If your content gets fewer than 50 views, watch this').",
            "Instagram Reels algorithm measures: Watch Time (what percentage of the video do people complete?), Replay Rate (do people watch it again?), and Shares (do people send it to friends via DM?). The winning Reels formula: deliver the core value or payoff in under 30 seconds, hook in the very first second, end with something that makes people want to share it.",
            "LinkedIn algorithm uniquely weights Comments over Likes — a post with 40 thoughtful comments gets 5x more reach than a post with 300 likes. Always end LinkedIn posts with a genuine, specific question that invites responses. Also: avoid putting external links in the main post body (LinkedIn suppresses posts that take people off the platform) — put links in the first comment instead.",
            "YouTube's ranking formula centers on two metrics: CTR (Click-Through Rate — what percentage of people who see your thumbnail click on it?) and Watch Time (once they click, how long do they watch?). CTR × Watch Time is YouTube's primary growth signal. A mediocre video with a compelling thumbnail often outperforms a great video with a boring one. Invest serious effort in thumbnails — they're your most important growth lever on YouTube.",
            "TikTok's algorithm is the most democratic in social media — it doesn't care about your follower count. It tests every video with a small group first. If they watch it to the end and engage, it expands to a larger group, then larger still. Completion Rate is the dominant metric. Create videos people literally cannot stop watching — through storytelling with unresolved tension, surprising information reveals, or genuine humor.",
            "The universal short-form content formula that works across every platform: Hook (stop the scroll in 1–3 seconds) → Value Delivery (teach, entertain, or inspire — the core promise) → CTA (tell them what to do next: like, comment, save, follow, or click the link). Don't reverse this order. Earn the right to ask for action by delivering value first.",
            "Consistency always beats intensity. Posting 7 times in one week and then disappearing for 2 weeks resets any momentum you built. Algorithms reward accounts that post on a predictable cadence. Find a frequency you can maintain for months — even 3 posts per week done consistently for 6 months will outperform daily posting done for 3 weeks.",
            "Engage with every comment in the first 60 minutes after posting. Early comment volume signals to algorithms that your post is generating genuine conversation — which triggers wider distribution. On LinkedIn especially, a post that gets 10 comments in the first hour gets shown to 10x more people than one with the same content but zero early engagement.",
          ],
          concepts: [
            {
              term: "The Hook",
              def: "The first 1–3 seconds of a video or the opening line of a text post — the single element that determines whether someone stops scrolling or keeps going. A great hook creates an open loop (a question the brain needs answered), makes a surprising claim (disrupts expectations), or identifies a pain point so specifically that the target viewer feels personally addressed. Everything else in your content exists to fulfill the promise the hook made.",
            },
            {
              term: "Watch Time",
              def: "The total cumulative time viewers spend watching your video content. For YouTube, watch time is the single most important ranking factor — it directly signals that your content is keeping people engaged, which is exactly what the platform is optimized for. Even a short 3-minute video watched completely (100% retention) signals more value to YouTube than a 15-minute video people abandon after 2 minutes.",
            },
            {
              term: "Click-Through Rate (CTR)",
              def: "The percentage of people who see your content in a feed or search result and choose to click on it. On YouTube, 4–7% CTR is considered good for established channels. CTR is driven almost entirely by your thumbnail and title — two elements that most creators under-invest in. Improving CTR is often the single highest-leverage action for growing a YouTube channel.",
            },
            {
              term: "Viral Loop",
              def: "A content mechanism where existing viewers bring in new viewers organically, creating a self-reinforcing growth cycle. The trigger for sharing is almost always 'social currency' — people share content that makes them look smart, helpful, funny, or insightful to their own audience. Before posting anything, ask: 'Why would someone share this? What does sharing it say about them?' If you can't answer that, the content probably won't spread.",
            },
          ],
          takeaway:
            "The algorithm is not your enemy — it's a mirror of what your audience actually values. Create content so useful, entertaining, or emotionally resonant that people can't help but engage and share it, and every algorithm will work in your favor. Stop trying to hack the system. Start focusing entirely on earning genuine attention every single time you publish — that's the only strategy that compounds.",
        },
      },
    ],
  },
  {
    id: 5,
    module: "Module 5",
    title: "Paid Advertising (PPC & Social Ads)",
    icon: "💰",
    color: "#EF4444",
    lessons: [
      {
        id: "5-1",
        title: "Google Ads Fundamentals",
        duration: "25 min",
        content: {
          overview:
            "Google Ads is the fastest way to appear in front of people actively searching for what you sell. Unlike social media ads where you're interrupting someone's feed, a Google search ad appears at the exact moment someone types 'buy running shoes online' or 'chartered accountant in Mumbai.' You're not creating demand — you're capturing it at the precise second it exists. This is why Google Ads converts so well for commerce and service businesses. However, it's highly technical and easy to waste money on if you don't understand how the auction works, how Quality Score affects your costs, and how to block irrelevant searches from triggering your ads.",
          keyPoints: [
            "The Google Ads Auction happens in milliseconds every time someone searches. Google doesn't automatically give the top ad position to the highest bidder — it calculates Ad Rank = Bid × Quality Score × Expected Extension Impact. A small business with a relevant, high-quality ad can outrank a big brand with a poor one. This levels the playing field and rewards relevance over pure spending power.",
            "Quality Score (1–10) is Google's rating of how relevant and useful your ad and landing page are to the person searching. It's based on: Expected CTR (will people click your ad?), Ad Relevance (does your ad copy match the search intent?), and Landing Page Experience (when they click, do they find exactly what was promised?). Higher Quality Score = lower cost per click AND better ad position. It's the most important lever in Google Ads.",
            "Campaign types for different goals: Search campaigns show text ads in Google search results (best for capturing direct purchase intent). Display campaigns show banner ads across millions of websites (best for brand awareness and retargeting). Shopping campaigns show product images and prices directly in search results (essential for e-commerce). YouTube campaigns run video ads on YouTube. Performance Max uses AI to automatically serve ads across all Google channels.",
            "Keyword match types control which searches trigger your ads: Broad Match shows ads for any loosely related search — maximum reach but often wasted spend. Phrase Match shows ads when the search contains your keyword phrase in order — more controlled. Exact Match shows ads only for your precise keyword — maximum relevance and minimum wasted spend. Start with Phrase and Exact Match for better control while learning.",
            "Negative keywords are searches you explicitly block from triggering your ads. If you sell premium skincare, add 'cheap,' 'free,' and 'DIY' as negative keywords so your ad doesn't appear for irrelevant searches. Failing to use negative keywords is the #1 reason businesses waste money on Google Ads. Review your Search Terms Report weekly and add irrelevant searches as negatives consistently.",
            "Ad Extensions (now called 'Assets') add valuable information to your ads at no extra cost: Sitelink Assets add links to specific pages. Callout Assets highlight key benefits ('Free Shipping,' 'EMI Available'). Call Assets show your phone number. Location Assets display your address. Extensions increase the size and click-through rate of your ads — always use every relevant one.",
            "Conversion tracking is non-negotiable. Without it, you cannot know which keywords, ads, or campaigns are actually generating sales or leads — you're optimizing based on guesswork. Set up Google Ads conversion tracking (connected to GA4) before running a single rupee in ads. Track the actions that actually matter: purchases, form submissions, phone calls, and key page views.",
            "ROAS (Return on Ad Spend) = Revenue Generated ÷ Ad Spend. If you spend ₹10,000 on ads and generate ₹50,000 in revenue, your ROAS is 5x. A healthy ROAS target for most e-commerce businesses with 30–40% margins is 3–5x. Calculate your minimum viable ROAS before launching: if your gross margin is 25%, you need at least 4x ROAS just to break even on ad spend.",
          ],
          concepts: [
            {
              term: "CPC (Cost Per Click)",
              def: "The amount you pay each time someone clicks your Google Ad. CPC varies enormously by industry — legal and insurance keywords can cost ₹500–₹2,000+ per click in competitive markets, while niche informational keywords might cost ₹10–₹50. Your actual CPC depends on your bid, your Quality Score, and your competitors' bids. The best way to reduce CPC is by improving Quality Score — not by lowering bids.",
            },
            {
              term: "Quality Score",
              def: "Google's 1–10 rating for each keyword in your account, assessing how relevant and useful your ads and landing pages are to searchers. A Quality Score of 7–10 means you pay less per click and earn higher ad positions than competitors with lower scores. Improve it by tightly matching your ad copy to the search query, and ensuring your landing page delivers exactly what the ad promises without friction.",
            },
            {
              term: "Ad Rank",
              def: "The score that determines your ad's position in each auction. Ad Rank = Maximum Bid × Quality Score × Expected Impact of Ad Extensions. The highest Ad Rank wins the top position. This is why Quality Score matters so much — a business with a lower bid but significantly higher Quality Score can rank above a competitor who bids twice as much. Improving your Quality Score is essentially buying better ad positions for less money.",
            },
            {
              term: "ROAS (Return on Ad Spend)",
              def: "The revenue generated for every rupee spent on advertising. ROAS = Revenue ÷ Ad Spend. A 4x ROAS means every ₹1 in ads returns ₹4 in revenue. ROAS is the primary profitability metric for paid campaigns. Your minimum viable ROAS depends on your margins — a business with a 25% margin needs at least 4x ROAS to break even, and should target 6–8x to be genuinely profitable after accounting for COGS and operating costs.",
            },
          ],
          takeaway:
            "Google Ads is renting intent — paying to be present when someone is actively searching for what you offer. Done well, it's the most reliable and scalable way to drive qualified traffic and revenue. But it requires careful setup: conversion tracking first, then tight keyword targeting, compelling ad copy written for the searcher's intent, and a landing page that converts. Start small, optimize obsessively, and scale only what's demonstrably profitable.",
        },
      },
      {
        id: "5-2",
        title: "Meta Ads (Facebook & Instagram)",
        duration: "22 min",
        content: {
          overview:
            "While Google Ads captures existing demand, Meta Ads create demand — they put your product in front of people before they even knew they wanted it. Meta has built the most sophisticated behavioral and demographic targeting system in history. They know their users' ages, interests, recent life events (just got engaged, just had a baby, just started a business), purchasing behaviors, job titles, and online habits. This lets you reach incredibly specific audiences — for example, 'women aged 28–38 in Mumbai who are interested in sustainable fashion, follow eco-lifestyle influencers, and have made an online purchase in the past 30 days.' The challenge: you're interrupting their feed, so your creative must earn their attention within 2 seconds.",
          keyPoints: [
            "Meta's campaign structure has three levels, each controlling different things. Campaign level: choose your objective (awareness, traffic, leads, or sales — always choose the one matching your actual business goal). Ad Set level: define your audience, budget, schedule, and placements. Ad level: create the visual and copy. Understanding which decisions belong at each level is fundamental to running efficient campaigns.",
            "Always choose the campaign objective matching your actual business goal. If you want purchases, choose 'Sales' — Meta will show your ad to people most likely to buy, not just click. If you choose 'Traffic' when you want sales, Meta optimizes for clicks from people with no purchase intent and you pay for traffic that doesn't convert. Wrong objective = expensive traffic that doesn't convert.",
            "Audience targeting options are Meta's superpower: Demographics (age, gender, location, language), Interests (people who engage with specific topics, pages, or activities), and Behaviors (online shoppers, frequent travelers, specific device users). Counterintuitively, broader targeting often works better now — Meta's AI needs large audiences to find the right buyers. Over-narrowing can starve the algorithm of data it needs to optimize.",
            "Custom Audiences target people who already know you: upload your customer email list to reach existing buyers, install the Meta Pixel to retarget everyone who visited your website or specific product pages, create audiences of people who have engaged with your Instagram profile or watched your videos. These warm audiences typically convert at 3–5x the rate of cold audiences.",
            "Lookalike Audiences are one of Meta's most powerful tools: give Meta a 'seed' audience (your best 500–2,000 customers or highest-value email subscribers) and Meta finds new users who share the same behavioral patterns, demographics, and interests. A 1% Lookalike Audience of your best customers consistently outperforms interest-based targeting for most businesses.",
            "Creative is the #1 campaign variable: industry research shows 70% of Meta campaign performance is determined by the creative — not the targeting, not the budget, not the audience. The winning creative stops the scroll in under 2 seconds, communicates the value proposition clearly even without sound (many users watch with sound off), and feels native to the platform rather than like a traditional advertisement. Test multiple creatives simultaneously.",
            "A/B test systematically — one variable at a time. Test two images with identical copy. Take the winner and test two headlines. Test the winning combination against a different format (video vs. image). This methodical approach means after 3 months of weekly testing, you have data-backed insights about exactly what resonates with your specific audience.",
            "Monitor Frequency closely — the average number of times each person sees your ad. When frequency exceeds 3–4, performance almost always drops as audiences develop ad fatigue. Refresh your creative before frequency rises too high. A new creative restarts the engagement cycle and often outperforms the original.",
          ],
          concepts: [
            {
              term: "Meta Pixel",
              def: "A small piece of JavaScript code installed on your website that tracks what visitors do after clicking your Meta ad — product views, add-to-cart events, purchases, form submissions, and more. The Pixel is what enables retargeting website visitors, measuring conversions accurately, creating Custom Audiences from website traffic, and allowing Meta's algorithm to optimize for purchase events. Without the Pixel installed correctly, Meta campaigns cannot be properly optimized.",
            },
            {
              term: "Lookalike Audience",
              def: "A targeting method where Meta analyzes your 'seed' audience (existing customers, email subscribers, or high-value website visitors) and identifies new users who share the same behavioral patterns and characteristics. A 1% Lookalike selects the top 1% most similar to your seed from the total Meta user population in your chosen country — typically a few million people. This is usually the best-performing cold audience type because it's built on your actual customer data, not assumptions.",
            },
            {
              term: "CPM (Cost Per Mille)",
              def: "Cost per 1,000 impressions — what you pay for your ad to be shown 1,000 times, regardless of clicks. CPM varies by target audience competition, time of year (Q4 — Diwali and Christmas season — is most expensive), placement (Stories vs. Feed vs. Reels), and ad quality. CPM is the base metric that determines the cost of everything else. Lower CPM = more reach for the same budget.",
            },
            {
              term: "Ad Frequency",
              def: "The average number of times each unique person in your target audience has seen your ad. Frequency of 1–2 means people have barely been exposed. Frequency above 4–5 typically triggers ad fatigue — people have seen it enough that they actively ignore it or hide it, which damages your ad's performance and your brand perception. Monitor frequency weekly and refresh creative before it climbs too high.",
            },
          ],
          takeaway:
            "Meta Ads reward creative excellence above everything else. Perfect targeting and a generous budget won't save a boring creative. Invest serious time and resources into creative testing — images, videos, headlines, and formats. Find what stops the scroll for your specific audience. The winning creative does all the heavy lifting; your targeting and budget simply determine how many people it reaches.",
        },
      },
    ],
  },
  {
    id: 6,
    module: "Module 6",
    title: "Email Marketing & Automation",
    icon: "📧",
    color: "#10B981",
    lessons: [
      {
        id: "6-1",
        title: "Building & Growing an Email List",
        duration: "16 min",
        content: {
          overview:
            "Email marketing delivers an average ROI of ₹3,600 for every ₹100 spent — the highest of any digital marketing channel. But beyond ROI, email has a strategic advantage nothing else offers: your email list is the only audience you truly own. Your Instagram account can be banned overnight. Your Facebook organic reach can vanish with an algorithm change. Your Google rankings can drop after a Core Update. But your email list? That's yours forever. Every subscriber voluntarily raised their hand and said 'yes, I want to hear from you' — making them dramatically more engaged and valuable than a passive social media follower who may never see your posts.",
          keyPoints: [
            "A Lead Magnet is something genuinely valuable you offer in exchange for someone's email address. The critical word is 'genuinely' — it should be something your ideal customer would seriously consider paying for. Effective lead magnets: specific guides ('The 30-Day Instagram Growth Playbook for Indian Businesses'), templates ('Free Monthly P&L Spreadsheet'), checklists ('12-Point Website SEO Audit Checklist'), mini email courses, exclusive discounts, or free tools and calculators. The more specific and immediately useful, the higher the conversion rate.",
            "Opt-in form placement dramatically affects your sign-up rate. Exit-intent pop-ups (appear when someone moves to close the tab) consistently have the highest conversion rate — often 2–5% of otherwise-leaving visitors subscribe. Sticky header bars give constant low-pressure visibility. Inline forms placed within blog content after a particularly valuable paragraph convert well because the reader is already engaged. Test multiple placements.",
            "Double opt-in vs. single opt-in: Single opt-in adds subscribers immediately — maximum list growth speed but more fake emails, spam complaints, and deliverability problems. Double opt-in requires confirming via a separate email — 20–30% fewer subscribers but dramatically higher email quality, better deliverability, and more engaged readers. For most businesses, the quality trade-off of double opt-in is worth it.",
            "Choosing your Email Service Provider (ESP) matters more than beginners realize, because migrating your list later is painful. Mailchimp: beginner-friendly, generous free tier (up to 500 contacts). ConvertKit: designed for creators and educators, excellent automation. Klaviyo: the gold standard for e-commerce, deep Shopify integration. ActiveCampaign: most advanced automation, best for complex customer journeys. Choose based on your business type, not just what's cheapest.",
            "Segment your list from day 1 — tag subscribers based on which lead magnet brought them in, what topics they engage with (indicated by which links they click), and their behavior (purchasers vs. never-purchased, active openers vs. dormant). Research consistently shows segmented campaigns generate 760% more revenue than unsegmented ones. Relevance converts; mass messaging doesn't.",
            "List hygiene protects your deliverability. Remove subscribers who haven't opened any email in your last 10–15 sends. An actively engaged list of 3,000 people consistently outperforms a bloated, largely inactive list of 30,000. Gmail, Outlook, and other email providers monitor your engagement rates — if too many people ignore your emails, your messages start landing in spam folders for everyone, even your active subscribers.",
          ],
          concepts: [
            {
              term: "Lead Magnet",
              def: "A free, high-value resource offered in exchange for a visitor's email address. The best lead magnets solve one specific, immediate problem that your ideal customer already knows they have. 'Free Marketing eBook' is too vague. '7-Day Email Marketing Challenge: How to Get Your First 100 Subscribers Without Paid Ads' is specific, outcome-focused, and appeals precisely to the person you want on your list. Specificity is what makes lead magnets convert.",
            },
            {
              term: "Email Open Rate",
              def: "The percentage of delivered emails that recipients open. Industry average is 20–25%, but varies significantly by industry — newsletters often achieve 30–40%, while promotional emails average 15–20%. The subject line is the primary driver of open rate. An open rate below 15% signals either weak subject lines or a disengaged list that needs re-engagement or cleaning. Above 35% means your subject lines and sender reputation are excellent.",
            },
            {
              term: "Click-Through Rate (CTR)",
              def: "The percentage of people who received your email and clicked at least one link inside it. Average CTR is 2–5%. It measures how compelling your email content and CTAs are after people open it. Low open rate + low CTR = subject line and content both need improvement. Good open rate + low CTR = the email is opened but the content or offer isn't compelling enough to drive action. These two metrics diagnose different problems.",
            },
            {
              term: "Email Deliverability",
              def: "The ability of your emails to land in the inbox rather than the spam folder. Deliverability is determined by: sender reputation (history of spam complaints and bounce rates), list quality (fake or inactive emails hurt your score), email authentication (SPF, DKIM, and DMARC records that verify you're legitimate), and content factors (spam trigger words, excessive images, and deceptive subject lines all hurt deliverability). Protect it like your most valuable asset — once damaged, it takes months to rebuild.",
            },
          ],
          takeaway:
            "Start building your email list today, even if you have only 10 subscribers. Email is the only channel where you have a direct, unmediated relationship with your audience — no algorithm deciding whether your content gets seen. Create a genuinely useful lead magnet, set up a professional opt-in form, choose a reliable ESP, and start delivering value before you ever ask for a purchase. Your list will become your most valuable and resilient business asset.",
        },
      },
      {
        id: "6-2",
        title: "Email Sequences & Automation",
        duration: "20 min",
        content: {
          overview:
            "Email automation means sending the right message to the right person at the right time — automatically, without you manually pressing 'send' each time. You build sequences once and they run indefinitely. Think of it as having a personal sales representative who works 24 hours a day, 365 days a year, sending perfectly timed and personalized messages to every subscriber based on their specific behavior. A well-built welcome sequence, abandoned cart series, and post-purchase flow can account for 30–40% of a business's total email revenue — all without any ongoing manual effort after the initial setup.",
          keyPoints: [
            "The Welcome Sequence is the most important email series you'll ever write. Most businesses either don't have one, or they send a single forgettable 'Thanks for subscribing!' email. A great welcome sequence (5–7 emails over 7–10 days) accomplishes several things: delivers your lead magnet immediately, introduces your brand story and values, shares your 2–3 most useful pieces of content to demonstrate expertise, addresses the most common objections to buying from you, and naturally introduces your products or services without feeling like a sales pitch.",
            "The Nurture Sequence educates subscribers and builds deep trust over 2–4 weeks. These are not sales emails — they're teaching emails. Share your most valuable insights, client success stories, frameworks, and honest perspectives on your industry. Each email should make the reader think 'this is so valuable I can't imagine unsubscribing.' By the time you make an offer at the end of the nurture sequence, the reader already trusts you as an authority.",
            "Abandoned Cart emails are the highest immediate-ROI emails in e-commerce. When someone adds a product to their cart but doesn't complete the purchase, a well-timed 3-email recovery sequence can win back 15–25% of those sales. Email 1 (1 hour after abandonment): gentle reminder, 'You left something in your cart.' Email 2 (24 hours): address common objections, include customer reviews. Email 3 (72 hours): add a time-limited incentive — 10% off or free shipping.",
            "Post-purchase sequences dramatically increase customer lifetime value. After a purchase: a thank-you email with order confirmation, an onboarding email (how to get the most value from the product), a Day 7 check-in (how is it going? offer to help), a review request at Day 14 (when satisfaction is highest), and a cross-sell recommendation at Day 30 based on what they purchased ('Customers who bought X typically also love Y').",
            "Re-engagement campaigns target subscribers who haven't opened an email in 90+ days. A short 3-email series with subject lines like 'Is this goodbye?' or 'We've missed you — still interested?' with a genuine incentive can reactivate 5–15% of dormant subscribers. Those who still don't engage after the re-engagement sequence should be removed — they're actively hurting your deliverability for everyone else.",
            "Trigger-based emails respond automatically to specific subscriber actions rather than fixed time intervals. Someone clicks a link about 'pricing' in your email? Trigger a sequence about your product and ROI. Someone visits your checkout page 3 times without buying? Trigger a personal-feeling outreach email. Behavioral triggers make your marketing feel genuinely responsive and human rather than scheduled and robotic.",
            "Subject line formula that consistently works: Curiosity + Specific Benefit, under 50 characters. 'The 3-word subject line that doubled our open rate' works. 'Monthly Newsletter — Issue 47' does not. Preview text is the line of text appearing after the subject in most email apps — treat it as a second subject line with additional intrigue, not 'You are receiving this email because you subscribed to our list.'",
          ],
          concepts: [
            {
              term: "Email Sequence",
              def: "A predetermined series of emails sent automatically over time, triggered by a subscriber's action or enrollment date. Unlike a broadcast email sent to everyone simultaneously, a sequence delivers different messages to different people based on exactly where they are in their journey with your brand. Well-designed sequences feel personal and timely even though they're completely automated.",
            },
            {
              term: "Automation Trigger",
              def: "The specific event that initiates an automated email sequence. Common triggers: someone subscribes to your list (starts the welcome sequence), someone makes a purchase (starts the onboarding sequence), someone abandons their cart (starts the recovery sequence), someone clicks a specific link (starts a topic-targeted nurture sequence), or someone has been inactive for 90 days (starts the re-engagement sequence). The trigger ensures the right person gets the right message at the most relevant moment.",
            },
            {
              term: "Unsubscribe Rate",
              def: "The percentage of email recipients who opt out after each send. A healthy rate is below 0.5% per email. Rates above 1% signal a serious problem: you're emailing too frequently, your content doesn't match what people signed up for, or your email quality has declined. A small trickle of unsubscribes after every email is actually healthy — it's natural list self-selection. Worry only when it spikes or stays consistently high.",
            },
            {
              term: "A/B Testing in Email",
              def: "Sending two different versions of an email to a small, randomly split portion of your list (e.g., 15% gets Version A, 15% gets Version B), measuring which performs better, then automatically sending the winner to the remaining 70%. You can test subject lines (the highest-impact variable), send times, email length, CTA button text and color, personalization, and offer framing. Systematic testing compounds — after 6 months of weekly tests, your emails can perform 2–3x better than when you started.",
            },
          ],
          takeaway:
            "The best email marketers aren't the ones who send the most emails — they're the ones whose emails people actually look forward to receiving. Build automation that feels personal rather than mass-produced. Write each email as if addressing one specific person with one specific problem you can solve today. Set up your core sequences once, measure them quarterly, improve what's underperforming, and watch them generate consistent revenue while you focus on growing other parts of your business.",
        },
      },
    ],
  },
  {
    id: 7,
    module: "Module 7",
    title: "Analytics & Performance Measurement",
    icon: "📊",
    color: "#3B82F6",
    lessons: [
      {
        id: "7-1",
        title: "Google Analytics 4 (GA4) Mastery",
        duration: "24 min",
        content: {
          overview:
            "Google Analytics 4 (GA4) is the free tool that transforms your website from a guessing game into a data-driven operation. It answers the questions every marketer needs answered: Where are my visitors coming from? Which pages make people want to buy? Where exactly do people leave without converting? Which marketing channel actually drives the most revenue? Which device do my best customers use? Without analytics, you're navigating in the dark — spending money on channels you think are working without ever verifying whether they are. GA4 is Google's current analytics platform — event-based, AI-powered, and capable of connecting your web and app data in one place. Learning it is one of the highest-leverage skills in all of digital marketing.",
          keyPoints: [
            "GA4's event-based model: The old Google Analytics (Universal Analytics) tracked sessions and pageviews as the primary units of measurement. GA4 tracks individual events — every scroll, click, video play, form start, form submission, and purchase is a separate event with its own properties and data. This gives you dramatically richer, more granular data about exactly how people interact with every element of your site.",
            "The four key report categories in GA4: Acquisition (where did your traffic come from — organic search, Instagram, email, direct, paid ads?), Engagement (what did people do after arriving — which pages, how long, which actions?), Monetization (how much revenue was generated and from which products or pages?), and Retention (how many users returned within 1 day, 7 days, 28 days?). These four categories answer 80% of your marketing questions.",
            "Dimensions vs. Metrics — the foundational concept in GA4: A Dimension is a qualitative attribute describing what something is (country, device type, traffic channel, page title, campaign name). A Metric is a quantitative measurement — a number (sessions, revenue, conversion rate, bounce rate). Every report combines dimensions and metrics. Example: 'Show me [Metric: Conversion Rate] broken down by [Dimension: Traffic Source].' Master this pairing and GA4 becomes genuinely powerful.",
            "Setting up Conversions is critical — without them, GA4 can't tell you which marketing efforts produce actual business results. Mark your most important user actions as conversions: completed purchases, form submissions, phone number clicks, newsletter signups, and key page visits. Once configured, you can see exactly which channels, campaigns, pages, and audience segments are driving these outcomes.",
            "UTM parameters are tags added to URLs that tell GA4 precisely where traffic came from. When you share a link in your email newsletter, append '?utm_source=email&utm_medium=newsletter&utm_campaign=july_sale' to the URL. In GA4, you'll see exactly how many users came from that specific campaign, how long they stayed, and whether they converted. Without UTM tags, GA4 often categorizes traffic as 'Direct,' losing the attribution data you need.",
            "Funnel Exploration lets you visualize the exact path people take toward a conversion — and identify precisely where they drop off. Example funnel: Product Page → Add to Cart → Checkout Started → Purchase Completed. If 1,000 people view a product but only 8 purchase, a funnel report shows you exactly which step loses the most people, so you know where to focus optimization efforts for maximum revenue impact.",
            "Audiences in GA4 let you create behavioral segments (people who visited your pricing page but didn't sign up, purchasers from a specific country, users who watched 75% of a product video) and export them directly to Google Ads for remarketing. This creates a powerful bridge between analytics insights and advertising action — your data becomes your targeting.",
          ],
          concepts: [
            {
              term: "GA4 Session",
              def: "A group of user interactions on your website within a single visit. A session starts when someone arrives and ends after 30 minutes of inactivity or when they close the browser. GA4 tracks both sessions (individual visits) and users (unique people across multiple visits). The distinction matters: a user with 5 sessions is a repeat visitor, which signals higher intent than a user with 1 session. Both metrics tell different parts of the story.",
            },
            {
              term: "Engagement Rate (GA4)",
              def: "The percentage of sessions that were 'engaged' — defined by GA4 as lasting longer than 10 seconds, resulting in a conversion event, or including at least 2 pageviews. This replaced the old 'Bounce Rate' (which simply measured single-page sessions). An Engagement Rate of 50–70% is healthy for most content sites. Low engagement rate means visitors are leaving quickly without interacting — a signal to improve content relevance or page experience.",
            },
            {
              term: "UTM Parameters",
              def: "Tags appended to URLs to track traffic sources in GA4. The five key parameters: utm_source (which platform — 'instagram', 'google', 'newsletter'), utm_medium (channel type — 'social', 'cpc', 'email'), utm_campaign (specific campaign — 'diwali_sale_2025'), utm_content (which ad variation), utm_term (which keyword). Always tag every link you share in campaigns — it's the only reliable way to measure which specific marketing efforts drive results.",
            },
            {
              term: "Conversion Rate",
              def: "The percentage of visitors (or sessions) that complete a desired action — purchase, signup, download, or any other defined conversion. If 1,000 people visit your landing page and 30 complete the signup form, your conversion rate is 3%. Conversion rate is typically the most impactful metric to optimize — improving it from 2% to 4% doubles your revenue from existing traffic, with no additional acquisition cost.",
            },
          ],
          takeaway:
            "Data without action is just trivia. Use GA4 to ask specific questions — 'Why is my checkout page dropping 70% of visitors?' — then let the data tell you where to focus. Set up conversion tracking before launching any campaign, use UTM parameters on every link you distribute, and spend 30 minutes weekly reviewing your analytics and identifying the most impactful thing you can change. The marketers who consistently win are the ones who let data lead their decisions.",
        },
      },
      {
        id: "7-2",
        title: "Marketing Metrics That Matter",
        duration: "18 min",
        content: {
          overview:
            "Vanity metrics are the enemy of sound marketing decisions. Follower counts, page views, impressions, and likes feel satisfying but rarely connect to revenue. A business owner who celebrates '100,000 Instagram followers' while losing money on every customer is making a strategic mistake. The metrics that actually matter — CAC, LTV, ROAS, Conversion Rate by channel — directly connect your marketing activities to business outcomes. Learning to track and optimize these numbers separates amateur marketers who chase attention from professionals who build profitable, scalable growth. This lesson teaches which numbers to track, what they reveal, and how to improve them systematically.",
          keyPoints: [
            "CAC (Customer Acquisition Cost) = Total Marketing & Sales Spend ÷ Number of New Customers. If you spent ₹1,00,000 on marketing last month and gained 50 new customers, your CAC is ₹2,000. Track CAC by channel — your SEO CAC might be ₹600 while Facebook Ads CAC is ₹4,000. This channel-level view tells you exactly where to reallocate budget for the biggest impact on profitable growth.",
            "LTV (Customer Lifetime Value) = Average Order Value × Purchase Frequency Per Year × Average Customer Lifespan in Years. If a customer buys twice a year at ₹3,000 each time and stays for 3 years, their LTV is ₹18,000. Knowing LTV transforms how you think about acquisition costs — you can afford to spend more acquiring customers if you know their long-term value to your business.",
            "The LTV:CAC ratio is the fundamental health check for your marketing economics. A ratio of 3:1 (LTV is 3x CAC) is considered healthy — you're generating ₹3 of lifetime value for every ₹1 spent acquiring a customer. Below 1:1 means you're losing money on every customer. Above 5:1 often signals you're underinvesting in acquisition and leaving significant growth on the table.",
            "ROAS (Return on Ad Spend) = Revenue from Ads ÷ Total Ad Spend. A 4x ROAS means every ₹1 in ads generates ₹4 in revenue. Your minimum viable ROAS depends entirely on your margins — a business with 25% gross margin needs at least 4x ROAS just to break even on ad spend after product costs. Calculate your break-even ROAS before launching any campaign, then set your target 30–50% above that.",
            "Conversion Rate by channel reveals the true quality of different traffic sources. Your organic search traffic might convert at 4% while display ad traffic converts at 0.2% — even if display sends more total visitors. This tells you that search traffic carries far higher purchase intent. Always analyze conversion rate alongside traffic volume; volume without conversion quality is expensive noise.",
            "Email Marketing Metrics: Open Rate (are your subject lines compelling enough to get opened?), CTR (is your content driving readers to take action?), and Revenue Per Email — calculated by dividing total email revenue by emails sent. If 10,000 subscribers generate ₹1,00,000 per email sent, each email is worth ₹10 per subscriber. Revenue Per Email is the ultimate email KPI because it synthesizes all other email metrics into one business-impact number.",
            "Attribution Models determine which touchpoints in the customer journey receive credit for a conversion. Last Click gives 100% credit to the final interaction before purchase. First Click gives credit to the channel that first introduced the customer. Linear splits credit equally across all touchpoints. Data-Driven (requires significant conversion volume) uses machine learning to assign credit based on each touchpoint's actual measured impact. The model you choose significantly affects budget allocation decisions.",
          ],
          concepts: [
            {
              term: "CAC (Customer Acquisition Cost)",
              def: "The total average cost to acquire one new paying customer, including all marketing and sales expenses in the period. CAC must always be measured against LTV to determine whether your growth is economically sustainable. Rising CAC without rising LTV is an early warning that your marketing is becoming less efficient — you're paying more to acquire customers who generate the same or less revenue. Track CAC monthly by channel to identify which acquisition methods are becoming more or less efficient over time.",
            },
            {
              term: "LTV (Customer Lifetime Value)",
              def: "The total net revenue a single customer generates across their entire relationship with your business. LTV = Average Order Value × Purchase Frequency × Customer Lifespan. The single most powerful way to increase profitability without spending more on ads is to increase LTV — through better products, subscription models, loyalty programs, upsells, and cross-sells. Higher LTV lets you outbid competitors for customers while remaining profitable.",
            },
            {
              term: "Attribution",
              def: "The process of assigning credit to the right marketing touchpoints in a customer's journey. A customer might discover you through a blog post, then see a retargeting ad, then open a promotional email before finally purchasing. Attribution answers: which touchpoint 'caused' the sale? Different models give radically different answers — and the model you choose determines which channels get budget. Most businesses over-credit the last touchpoint and under-invest in the awareness channels that started the journey.",
            },
            {
              term: "North Star Metric",
              def: "The single metric that most accurately reflects the core value your business delivers to customers. For Airbnb, it's 'nights booked.' For Spotify, it's 'time spent listening.' For an online course platform, it might be 'lessons completed per week.' Every team, campaign, and initiative should be evaluated based on whether it moves this one metric. It prevents the common problem of optimizing local metrics that look good on dashboards but don't move the overall business forward.",
            },
          ],
          takeaway:
            "Build a simple marketing dashboard with 5–10 metrics that directly connect to business outcomes: CAC, LTV, ROAS, Conversion Rate by channel, and Revenue per Email. Review it weekly. When a metric moves unexpectedly — in either direction — investigate why before it becomes a problem or an opportunity missed. The businesses that grow fastest are rarely the most creative; they're almost always the most data-literate.",
        },
      },
    ],
  },
  {
    id: 8,
    module: "Module 8",
    title: "Growth Marketing & CRO",
    icon: "🚀",
    color: "#EC4899",
    lessons: [
      {
        id: "8-1",
        title: "Conversion Rate Optimization (CRO)",
        duration: "22 min",
        content: {
          overview:
            "Here's an insight most business owners miss: doubling your traffic doubles your revenue, but doubling your conversion rate also doubles your revenue — without spending an extra rupee on ads. CRO is the practice of improving the percentage of website visitors who take the action you want — buy, sign up, call, or download. Most websites convert between 1–3% of visitors. A well-optimized site converts 5–10%. That difference, applied to your existing traffic, can be the gap between a business that struggles and one that thrives. CRO is frequently the highest-leverage activity in all of digital marketing — and most businesses do almost none of it.",
          keyPoints: [
            "The CRO process is scientific, not intuitive guesswork. Step 1: Research — use heatmaps, session recordings, surveys, and GA4 to understand why people aren't converting (what confuses them, what creates friction, what makes them leave). Step 2: Hypothesis — form a specific, testable hypothesis like 'Changing the CTA from Submit to Get My Free Guide will increase form completions by 20% because it communicates the benefit more clearly.' Step 3: Test. Step 4: Analyze with statistical significance. Step 5: Implement and repeat continuously.",
            "Heatmaps (tools: Hotjar, Microsoft Clarity — both have free tiers) show where users click, how far they scroll, and what they ignore. You'll often discover visitors aren't scrolling far enough to see your best offer, or they're repeatedly clicking on something that isn't a clickable link (a major frustration signal). Session recordings let you watch real visitor journeys — patterns of confusion, hesitation, and premature exit become obvious quickly.",
            "A/B testing is the backbone of CRO: show Version A (original) to 50% of visitors and Version B (your hypothesis) to the other 50%, then measure which achieves more conversions. The cardinal rule: test only one variable at a time. If you change headline, image, and CTA button simultaneously, you cannot know which element caused the improvement. Wait until you reach 95% statistical significance — typically 100–1,000+ conversions per variant — before declaring a winner.",
            "The 'above the fold' zone — what visitors see without scrolling — must communicate your complete value proposition in under 5 seconds: What exactly is this? Who is it specifically for? Why should I care right now? Your headline, subheadline, and primary CTA must answer all three instantly. If visitors must scroll or read extensively to understand your offer, the overwhelming majority will leave without converting.",
            "Landing page fundamentals that consistently lift conversion rates: One specific headline promising a clear benefit. A single primary CTA (not 3–4 competing options that create decision paralysis). Social proof directly adjacent to the CTA (testimonials, ratings, client logos). Clear explanation of what happens next when they click. Remove the navigation menu — it creates exits from your conversion funnel. Every link that isn't the primary CTA is a potential distraction.",
            "Form optimization: Every additional field reduces completion rates by 5–10%. Ask only for what you absolutely need at this stage of the relationship. For newsletter signup: just email. For a discovery call: name + email + one qualifying question. Progressive profiling — collecting information over multiple interactions — is far more effective than front-loading an 8-field form that overwhelms first-time visitors.",
            "Trust signals reduce conversion friction by answering the unspoken question every visitor asks: 'Is this safe and legitimate?' The most powerful trust signals: specific testimonials with real names, photos, and measurable results ('Increased my leads by 340% in 60 days — Rahul S., Marketing Director'). Verified star ratings. Security badges and payment processor logos. Media mentions and press logos. Accurate customer counts. Place these signals as close to your CTA as possible.",
            "Page speed is a silent conversion killer most businesses overlook. A 1-second delay in page load time reduces conversions by 7%, according to research by Akamai. A page taking 5 seconds to load loses 38% of visitors before they see a single word of your content. Test your speed free at PageSpeed Insights. The most impactful fixes: compress and properly size images, reduce JavaScript load, enable browser caching, and use a content delivery network (CDN).",
          ],
          concepts: [
            {
              term: "A/B Test",
              def: "A controlled experiment splitting website traffic between two versions of a page — Version A (the original control) and Version B (the variant with one specific change) — to determine which version achieves a higher conversion rate. Results must reach statistical significance (95% confidence) before drawing conclusions. A/B testing removes guesswork and replaces assumptions with evidence about what actually drives your specific audience to convert.",
            },
            {
              term: "Statistical Significance",
              def: "The confidence level that your A/B test results reflect a real difference between versions rather than random variation. At 95% significance, there's only a 5% chance the result is a coincidence. The most common CRO mistake is declaring a winner after just 2–3 days with minimal conversions — too little data to be meaningful. Use a free A/B test significance calculator and require at least 100 conversions per variant before trusting results.",
            },
            {
              term: "Heatmap",
              def: "A data visualization showing where users click, move their mouse, and how far they scroll on a web page — displayed using a color gradient from cold (blue = low activity) to hot (red = high activity). Heatmaps reveal what visitors actually pay attention to versus what you intended them to see, often uncovering large gaps between designer assumptions and real user behavior. Essential for identifying why important content or CTAs aren't getting noticed.",
            },
            {
              term: "Social Proof",
              def: "Evidence that other people — especially people similar to your target customer — have already trusted and benefited from your product or service. The most persuasive forms: specific testimonials with measurable outcomes and real identities, video testimonials, case studies with before/after data, aggregate review scores with count, and user-generated content. Social proof works because humans are neurologically wired to look to others' choices when uncertain — if many similar people trusted you, it dramatically reduces the perceived risk of doing the same.",
            },
          ],
          takeaway:
            "CRO is the most consistently underinvested discipline in digital marketing. Most businesses spend 95% of their marketing budget on traffic acquisition and nearly nothing improving what happens when traffic arrives. Flip this ratio: invest in understanding why visitors don't convert, form hypotheses, test them rigorously, and implement winners. A single successful CRO experiment can improve revenue by 20–100% with zero additional ad spend.",
        },
      },
      {
        id: "8-2",
        title: "Growth Hacking Frameworks",
        duration: "20 min",
        content: {
          overview:
            "Growth hacking was born in Silicon Valley when cash-strapped startups needed to grow as fast as incumbents with 100x their budget. The term was coined by Sean Ellis in 2010, and the original growth hackers at Dropbox, Airbnb, and Hotmail found unconventional, scalable strategies that didn't require massive advertising budgets. Dropbox's referral program — 'give a friend 500MB of free storage, get 500MB yourself' — grew their user base by 60% in a single month. Airbnb's engineers built a tool to automatically cross-post Airbnb listings to Craigslist, tapping into millions of users overnight without paying for a single ad. Growth hacking isn't tricks — it's a systematic, experiment-driven mindset for finding the fastest path to scalable growth at any budget level.",
          keyPoints: [
            "The AARRR Pirate Metrics framework (by Dave McClure) gives you a complete map of your growth engine and shows exactly where it's leaking: Acquisition (how do new users find you?), Activation (do they experience the core value immediately?), Retention (do they come back?), Referral (do they tell others?), Revenue (do they pay you?). Most businesses over-invest in Acquisition while starving Retention — but retaining an existing customer costs 5–7x less than acquiring a new one and has no upper limit on ROI.",
            "Activation is the most overlooked and highest-impact stage: it's the moment a new user first experiences the core value your product promises. For Spotify, it's discovering a song you immediately love. For Slack, it's when your entire team is actively messaging. For this course, it's the moment a lesson gives you a genuinely useful insight you can apply today. Measure your activation rate — the percentage of new users who reach this moment — and optimize your onboarding around getting every user there as fast as possible.",
            "Retention is the engine of growth: a business that retains customers compounds. A business that constantly churns them is filling a leaking bucket. If you're losing 10% of customers each month, you must acquire 10% new ones just to stay flat — an exhausting, expensive treadmill. Reducing monthly churn from 10% to 5% effectively doubles your growth rate with zero additional acquisition spend. Fix retention before optimizing acquisition.",
            "Referral programs are the growth channel with the highest potential ROI — acquired customers who cost you nothing or come with built-in trust. The key is making the referral valuable to both parties. Dropbox: extra storage for both referrer and referee. Uber: ride credit for both. Tesla: referral credits toward vehicle upgrades. The referral incentive must align with the product's core value. Build the referral mechanism into the product itself, not bolted on as an afterthought in settings.",
            "The Viral Coefficient (K) measures organic growth multipliers. K = (Average invitations sent per user) × (Invitation acceptance rate). If each user invites 4 people and 30% accept, K = 1.2 — meaning the product grows by 1.2x with each generation of users, without any advertising. K > 1 = exponential viral growth. Even K = 0.3 significantly reduces your effective CAC. Build sharing and invitation mechanics into core product workflows, not just as optional features.",
            "Product-Led Growth (PLG) makes the product itself the primary acquisition and expansion channel. Slack spread virally through workplaces — one early adopter brought an entire company of paying users. Calendly spreads because every scheduling link recipient discovers the product. Zoom's generous free tier brought in enterprise accounts who paid for premium features. With PLG, satisfied users do your marketing, sales, and customer success simultaneously.",
            "The 10x Experiment Mindset: Rather than seeking 10% improvements through optimization, systematically search for opportunities that could 10x your results. What if you changed your pricing model entirely? What if you served a completely different customer segment? What if your product was free with a compelling premium tier? 10x thinking forces you to question fundamental assumptions — something no amount of A/B testing on button colors will ever achieve.",
          ],
          concepts: [
            {
              term: "AARRR Funnel",
              def: "Dave McClure's five-stage growth framework: Acquisition (users discover you), Activation (users have a great first experience and reach 'aha moment'), Retention (users return and develop a habit), Referral (users recommend you to others), Revenue (users pay you). The power is diagnostic — it shows precisely where your growth is leaking. High acquisition + low activation means your onboarding needs fixing, not your marketing spend. Each stage requires completely different strategies to improve.",
            },
            {
              term: "Viral Coefficient (K)",
              def: "A mathematical measurement of how many new users each existing user generates through organic referral. K = (Average invites per user) × (Invitation conversion rate). K > 1 means the product grows exponentially on its own without any paid acquisition. K < 1 means you need external acquisition to grow. Even a K of 0.2–0.5 meaningfully reduces CAC and extends the life of your marketing budget. Measure it quarterly and look for product and process changes that increase it.",
            },
            {
              term: "Churn Rate",
              def: "The percentage of customers or users who stop using your product or service in a given time period (typically monthly or annually). Monthly churn of 5% sounds manageable but means you lose nearly half your customer base annually — requiring constant, expensive acquisition just to maintain revenue. Churn is the most important metric for subscription-based businesses. The highest-ROI activity for most subscription businesses is not acquiring new customers but identifying why existing ones leave and eliminating those reasons.",
            },
            {
              term: "Product-Market Fit",
              def: "The state where your product solves a problem so effectively that customers actively seek it out, use it enthusiastically, and recommend it without being asked. Marc Andreessen called it 'being in a good market with a product that can satisfy that market.' A reliable measure: ask users 'How would you feel if you could no longer use this product?' If 40%+ answer 'Very disappointed,' you have product-market fit. Below 40%, keep iterating on the product — no amount of marketing will compensate for a product that doesn't genuinely solve a meaningful problem.",
            },
          ],
          takeaway:
            "Growth hacking isn't a bag of tricks — it's a rigorous scientific process of forming hypotheses and running experiments across every stage of the customer journey. The biggest wins come not from individual tactics but from identifying the single most broken part of your growth engine and fixing it decisively. Run experiments constantly, measure everything, cut what doesn't work fast, and double down on what does. Every great growth story is built on hundreds of failed experiments and a handful of transformative wins.",
        },
      },
    ],
  },
];

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
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "Complete Course",
    description: "Master SEO, content strategy, social media, email marketing, paid advertising, and growth frameworks — from zero to confident practitioner.",
    icon: "📈",
    color: "#FF6B35",
    tags: ["SEO", "Content", "Social Media", "Email", "Paid Ads", "Analytics"],
    data: digitalMarketingData,
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

function HomePage({ onSelectCourse, progressMap }) {
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
              Self-paced courses on web fundamentals and digital marketing — clear explanations, real-world context, zero fluff.
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

          <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: "#6B6B8A", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16, textAlign: "center" }}>Choose a Course</div>

          {/* Course cards */}
          <div className="home-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {COURSES.map(course => {
              const cp = progressMap[course.id] || new Set();
              const tl = course.data.reduce((s, m) => s + m.lessons.length, 0);
              const pct = tl > 0 ? Math.round((cp.size / tl) * 100) : 0;
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
                  <div style={{ display: "flex", gap: 20, marginBottom: cp.size > 0 ? 12 : 14 }}>
                    <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: "#4A4A6A" }}>{course.data.length} modules</div>
                    <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: "#4A4A6A" }}>{tl} lessons</div>
                  </div>
                  {cp.size > 0 && (
                    <div style={{ marginBottom: 14 }}>
                      <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 9, color: "#6B6B8A", marginBottom: 6 }}>{pct}% complete · {cp.size}/{tl} done</div>
                      <div style={{ height: 3, background: "#1E1E2E", borderRadius: 2, overflow: "hidden" }}>
                        <div style={{ width: `${pct}%`, height: "100%", background: `linear-gradient(90deg,${course.color},${course.color}88)`, borderRadius: 2 }} />
                      </div>
                    </div>
                  )}
                  <button style={{ width: "100%", background: course.color, border: "none", color: "#fff", padding: "11px 0", borderRadius: 7, fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, letterSpacing: "0.1em", cursor: "pointer", textTransform: "uppercase" }}>
                    {cp.size > 0 ? "Continue →" : "Start Learning →"}
                  </button>
                </div>
              );
            })}
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
  return <HomePage onSelectCourse={setActiveCourseId} progressMap={progressMap} />;
}
