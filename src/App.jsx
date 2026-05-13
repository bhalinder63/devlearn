import { useState } from "react";

const courseData = [
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

export default function DigitalMarketingCourse() {
  const [activeModule, setActiveModule] = useState(0);
  const [activeLesson, setActiveLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState(new Set());
  const [activeTab, setActiveTab] = useState("overview");
  const [mobileView, setMobileView] = useState("modules");

  const currentModule = courseData[activeModule];
  const currentLesson =
    activeLesson !== null ? currentModule.lessons[activeLesson] : null;
  const totalLessons = courseData.reduce((sum, m) => sum + m.lessons.length, 0);
  const completedCount = completedLessons.size;
  const progressPct = Math.round((completedCount / totalLessons) * 100);

  const markComplete = (lessonId) => {
    setCompletedLessons((prev) => new Set([...prev, lessonId]));
  };

  const goToNextLesson = () => {
    if (activeLesson < currentModule.lessons.length - 1) {
      setActiveLesson((prev) => prev + 1);
      setActiveTab("overview");
    } else if (activeModule < courseData.length - 1) {
      setActiveModule((prev) => prev + 1);
      setActiveLesson(0);
      setActiveTab("overview");
    }
  };

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#0A0A0F", minHeight: "100vh", color: "#E8E4DC" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=IBM+Plex+Mono:wght@400;600&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #0A0A0F; } ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }
        .mod-btn:hover { background: rgba(255,255,255,0.06) !important; }
        .lesson-row:hover { background: rgba(255,255,255,0.04) !important; cursor: pointer; }
        .tab-btn:hover { opacity: 0.85; }
        .next-btn:hover { filter: brightness(1.15); }
        .concept-card { transition: transform 0.2s; }
        .concept-card:hover { transform: translateY(-2px); }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fadeIn 0.35s ease forwards; }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.5; } }
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
        }
      `}</style>

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0A0A0F 0%, #111118 100%)", borderBottom: "1px solid #1E1E2E", padding: "16px 20px", position: "sticky", top: 0, zIndex: 100 }}>
        <div className="header-row" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#6B6B8A", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 4 }}>Digital Marketing</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#F5F0E8" }}>Complete Course</div>
          </div>
          <div className="progress-section" style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "#6B6B8A", marginBottom: 6 }}>{completedCount}/{totalLessons} lessons · {progressPct}%</div>
            <div className="progress-bar-track" style={{ width: 160, height: 4, background: "#1E1E2E", borderRadius: 2, overflow: "hidden" }}>
              <div style={{ width: `${progressPct}%`, height: "100%", background: "linear-gradient(90deg, #FF6B35, #A855F7)", borderRadius: 2, transition: "width 0.5s ease" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile back bar */}
      <div className="mobile-back-bar" style={{ background: "#111118", borderBottom: "1px solid #1E1E2E", padding: "10px 16px", alignItems: "center", gap: 10 }}>
        {mobileView !== "modules" && (
          <button onClick={() => setMobileView(mobileView === "content" ? "lessons" : "modules")} style={{ background: "none", border: "none", color: "#9A9ABB", fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, cursor: "pointer", padding: 0, flexShrink: 0 }}>←</button>
        )}
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "#6B6B8A", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {mobileView === "modules" ? "All Modules" : mobileView === "lessons" ? currentModule.title : currentLesson?.title}
        </span>
      </div>

      <div className={`main-layout mobile-${mobileView}`} style={{ display: "flex", height: "calc(100vh - 73px)" }}>
        {/* Sidebar — Modules */}
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
                    <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: isActive ? mod.color : "#4A4A6A", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 2 }}>{mod.module}</div>
                    <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 12, color: isActive ? "#F5F0E8" : "#8A8AAA", lineHeight: 1.3, fontWeight: isActive ? 600 : 400 }}>{mod.title}</div>
                    <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#4A4A6A", marginTop: 4 }}>{modCompleted}/{mod.lessons.length} done</div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Middle — Lesson List */}
        <div className="layout-lessons" style={{ width: 260, borderRight: "1px solid #1E1E2E", overflowY: "auto", flexShrink: 0 }}>
          <div style={{ padding: "20px 16px 12px", borderBottom: "1px solid #1E1E2E" }}>
            <div style={{ fontSize: 22, marginBottom: 6 }}>{currentModule.icon}</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: "#F5F0E8", marginBottom: 4 }}>{currentModule.title}</div>
            <div style={{ display: "inline-block", background: currentModule.color + "22", border: `1px solid ${currentModule.color}44`, borderRadius: 4, padding: "2px 8px", fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: currentModule.color }}>{currentModule.lessons.length} lessons</div>
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
                      {isDone ? <span style={{ fontSize: 10, color: "#fff" }}>✓</span> : <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 8, color: "#4A4A6A" }}>{li + 1}</span>}
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 13, color: isActive ? "#F5F0E8" : "#9A9ABB", lineHeight: 1.4, marginBottom: 3 }}>{lesson.title}</div>
                      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#4A4A6A" }}>⏱ {lesson.duration}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right — Content */}
        <div className="layout-content" style={{ flex: 1, overflowY: "auto", padding: "28px 32px" }}>
          {!currentLesson ? (
            <div className="fade-in" style={{ maxWidth: "100%" }}>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: currentModule.color, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>{currentModule.module}</div>
              <div className="module-hero-title" style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 900, color: "#F5F0E8", lineHeight: 1.2, marginBottom: 20 }}>{currentModule.icon} {currentModule.title}</div>
              <div style={{ background: "#111118", border: "1px solid #1E1E2E", borderRadius: 12, padding: 24, marginBottom: 24 }}>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#6B6B8A", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Lessons in this module</div>
                {currentModule.lessons.map((lesson, li) => (
                  <div key={lesson.id} onClick={() => { setActiveLesson(li); setActiveTab("overview"); setMobileView("content"); }}
                    style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 0", borderBottom: li < currentModule.lessons.length - 1 ? "1px solid #1E1E2E" : "none", cursor: "pointer" }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: completedLessons.has(lesson.id) ? currentModule.color + "22" : "#1E1E2E", border: `1px solid ${completedLessons.has(lesson.id) ? currentModule.color : "#333"}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: completedLessons.has(lesson.id) ? currentModule.color : "#4A4A6A", flexShrink: 0 }}>
                      {completedLessons.has(lesson.id) ? "✓" : li + 1}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 14, color: "#D0CCBE", marginBottom: 2 }}>{lesson.title}</div>
                      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#4A4A6A" }}>{lesson.duration}</div>
                    </div>
                    <span style={{ color: "#4A4A6A", fontSize: 16 }}>→</span>
                  </div>
                ))}
              </div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "#4A4A6A" }}>← Select a lesson from the list to begin</div>
            </div>
          ) : (
            <div className="fade-in" style={{ maxWidth: "100%" }}>
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: currentModule.color, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>{currentModule.module} · Lesson {activeLesson + 1}</div>
                <div className="lesson-title-text" style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 900, color: "#F5F0E8", lineHeight: 1.2, marginBottom: 10 }}>{currentLesson.title}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "#4A4A6A" }}>⏱ {currentLesson.duration}</span>
                  {completedLessons.has(currentLesson.id) && (
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: currentModule.color, background: currentModule.color + "18", border: `1px solid ${currentModule.color}33`, padding: "2px 8px", borderRadius: 4 }}>✓ Completed</span>
                  )}
                </div>
              </div>

              {/* Tabs */}
              <div style={{ display: "flex", gap: 0, marginBottom: 24, borderBottom: "1px solid #1E1E2E" }}>
                {["overview", "keypoints", "glossary"].map((tab) => (
                  <button key={tab} className="tab-btn" onClick={() => setActiveTab(tab)}
                    style={{ background: "none", border: "none", padding: "10px 20px", fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: activeTab === tab ? currentModule.color : "#4A4A6A", borderBottom: activeTab === tab ? `2px solid ${currentModule.color}` : "2px solid transparent", cursor: "pointer", transition: "color 0.2s" }}>
                    {tab === "overview" ? "Overview" : tab === "keypoints" ? "Key Points" : "Glossary"}
                  </button>
                ))}
              </div>

              {activeTab === "overview" && (
                <div className="fade-in">
                  <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 16, color: "#C8C4BC", lineHeight: 1.85, marginBottom: 28 }}>{currentLesson.content.overview}</div>
                  <div style={{ background: `linear-gradient(135deg, ${currentModule.color}11, ${currentModule.color}06)`, border: `1px solid ${currentModule.color}33`, borderRadius: 12, padding: 20 }}>
                    <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: currentModule.color, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>💡 Key Takeaway</div>
                    <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 15, fontStyle: "italic", color: "#E8E4DC", lineHeight: 1.7 }}>{currentLesson.content.takeaway}</div>
                  </div>
                </div>
              )}

              {activeTab === "keypoints" && (
                <div className="fade-in">
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {currentLesson.content.keyPoints.map((point, i) => (
                      <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 16px", background: "#111118", border: "1px solid #1E1E2E", borderRadius: 10 }}>
                        <div style={{ width: 24, height: 24, borderRadius: "50%", background: currentModule.color + "22", border: `1px solid ${currentModule.color}44`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: currentModule.color, flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                        <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 14, color: "#C8C4BC", lineHeight: 1.7 }}>{point}</div>
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
                        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: currentModule.color, fontWeight: 600, marginBottom: 6 }}>{c.term}</div>
                        <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 14, color: "#9A9ABB", lineHeight: 1.65 }}>{c.def}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="actions-row" style={{ display: "flex", gap: 12, marginTop: 32, paddingTop: 24, borderTop: "1px solid #1E1E2E" }}>
                {!completedLessons.has(currentLesson.id) && (
                  <button onClick={() => markComplete(currentLesson.id)}
                    style={{ background: currentModule.color, border: "none", color: "#fff", padding: "12px 24px", borderRadius: 8, fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: "0.1em", cursor: "pointer", textTransform: "uppercase" }}>
                    ✓ Mark Complete
                  </button>
                )}
                <button className="next-btn" onClick={goToNextLesson}
                  style={{ background: "#1E1E2E", border: "1px solid #333", color: "#C8C4BC", padding: "12px 24px", borderRadius: 8, fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: "0.1em", cursor: "pointer", textTransform: "uppercase", transition: "filter 0.2s" }}>
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
