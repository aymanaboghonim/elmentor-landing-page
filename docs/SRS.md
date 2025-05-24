## Header Requirements

### Detailed Description
The header section serves as the primary navigation and branding area of the landing page. It will be persistently visible or become visible upon scrolling up, providing easy access to key sections and language selection.

### Specific Content & Assets Required
* Elmentor Program Logo (Asset: `src/assets/images/elmentor-logo.png` - **Asset is present in the project**).
* Navigation Links: Home (links to Hero section), About, Activities, Circles, Founder, Blog, Contact Us.
* Language Switcher: Buttons or dropdown for "English" and "العربية".

### Functional Requirements (if any)
* Navigation links should scroll smoothly to their respective sections on the page (for single-page navigation) or navigate to separate pages if applicable.
* Language switcher should toggle the displayed language of the page content between English and Arabic.
* The header should be responsive and adapt its layout for different screen sizes (e.g., hamburger menu for mobile).

### Acceptance Criteria
* The Elmentor logo is correctly displayed and positioned.
* All navigation links are present, correctly labeled, and functional.
* The language switcher is functional and correctly changes the page language.
* The header is responsive across common device breakpoints (desktop, tablet, mobile).

---

## Hero Section Requirements

### Detailed Description
The Hero Section is the first and most prominent part of the landing page that visitors will see. Its primary purpose is to immediately capture attention, convey the core message and value of the Elmentor community, and encourage further exploration. It should create a strong, positive first impression and clearly state what Elmentor is about, incorporating key community slogans.

### Specific Content & Assets Required
* **Main Headline:** "Join Elmentor: A Global Community for Continuous Learning and Professional Growth. Empower through mentorship."
* **Sub-headline/Introductory Text:** "Connect, collaborate, and elevate your skills with a diverse network of tech enthusiasts and experts. As we believe, 'If you want to go fast, go alone. If you want to go far, go together.'"
* **Background Image/Graphic (Optional - TBD):** Consideration for a subtle, professional background image or graphic that aligns with the Elmentor theme. (If decided, path would be e.g., `src/assets/images/hero-background.jpg`). For now, a clean background is assumed unless specified otherwise.
* **Primary Call to Action (CTA) Button:**
    * **Text:** "Explore Our Community"
    * **Action:** Scrolls smoothly to the "Our Activities" or "About Elmentor Program" section on the page.

### Functional Requirements (if any)
* The CTA button must be clearly visible and interactive.
* Upon clicking the CTA button, the page should smoothly scroll to the designated target section.
* The section must be fully responsive, adapting its layout and typography gracefully across all device sizes (desktop, tablet, mobile) to maintain readability and visual appeal.
* Any text or imagery used should load efficiently.

### Acceptance Criteria
* The main headline and sub-headline are prominently displayed with the agreed-upon text and slogans.
* The primary CTA button is present, correctly labeled, and functional, directing the user to the correct section upon click.
* The Hero Section is visually engaging and sets a professional tone for the rest of the page.
* The section is fully responsive and displays correctly on major browsers and device breakpoints.
* All text content is easily readable with sufficient contrast.

---

## About Elmentor Program Requirements

### Detailed Description
This section provides a comprehensive overview of the Elmentor Program, detailing its foundational mission and values, the key offerings and benefits for its members, and the collaborative tools and platforms that underpin its operations. The information will be presented in a structured, card-like format for clarity and easy digestion.

#### Specific Content & Assets Required (Mission & Core Values):
* **Headline:** "Mission & Core Values"
* **Content Points (bulleted list):**
    * "Empowering tech professionals through dedicated mentorship and collaborative knowledge sharing."
    * "Fostering a transparent, inclusive, and supportive community environment."
    * "Encouraging continuous learning, professional growth, and the pursuit of excellence."
    * "Providing genuine value and unwavering support for every member's journey."
* **(Optional) Icon:** A relevant icon representing mission/values (e.g., a target, a group of people, a growing plant).

#### Specific Content & Assets Required (What We Offer):
* **Headline:** "What We Offer"
* **Content Points (bulleted list):**
    * "Mentorship from experienced industry leaders and Microsoft MVPs."
    * "Access to curated knowledge, learning resources, and exclusive content."
    * "Networking opportunities with a diverse global community of tech professionals."
    * "Opportunities for hands-on experience through real-world community projects and open-source contributions."
    * "Comprehensive career development support (CV reviews, referrals, job offers)."

#### Specific Content & Assets Required (How We Work):
* **Headline:** "How We Work: Our Platforms"
* **Content Points (bulleted list with icons):
    * **GitHub:** (Use GitHub Octocat icon from `react-icons` if possible) "Our central knowledge base for structured documentation, collaborative project development, and transparent information sharing." (Link to Elmentor Program GitHub Org: https://github.com/ElmentorProgram)
    * **Microsoft Teams:** (Use Microsoft Teams icon from `react-icons` if possible) "Our primary platform for daily communication, real-time discussions, group collaboration, and community announcements."

### Functional Requirements (if any)
Content should be clearly organized, ideally within a 3-column responsive card layout on wider screens, stacking gracefully on smaller screens. Each card/sub-section should be visually distinct yet harmonious with the overall page design. Links within this section (e.g., to GitHub) should open in a new tab.

### Acceptance Criteria
The 'About Elmentor Program' section clearly presents information under 'Mission & Core Values,' 'What We Offer,' and 'How We Work.' Content is accurate and uses official terminology. Links are functional. The card-based or structured layout is responsive and visually appealing.

---

## Elmentor Circles Requirements

### Detailed Description
The Elmentor Circles section transparently explains the official internal structure and engagement model of the Elmentor community. It illustrates the different levels of participation, responsibility, and leadership, from outer engagement (Audience) to inner core leadership (Executives). This model clarifies pathways for growth and contribution within the community and helps in structuring engagement, learning, and decision-making in a scalable way.

### Specific Content & Assets Required
* **Elmentor Circles Diagram (Visual Asset):**
    * Asset Name: `elmentor-circles.png`
    * Path: `src/assets/images/elmentor-circles.png`
    * This diagram visually represents the layered structure of the community (Outer to Inner).
* **List of Circles with Official Descriptions (Text Content - to be displayed alongside or near the diagram, not as part of the image):**
    * **Audience:** "External followers to our community who engage with us from the outside."
    * **Guests:** "Individuals who have shown interest and are exploring the community, but are not yet full members."
    * **Members:** "Active participants who contribute to and benefit from the community’s activities and resources."
    * **GAs (General Associates):** "Members who have taken on additional responsibilities and contribute to the community’s growth and operations."
    * **LGAs (Lead General Associates):** "Senior members who lead initiatives, mentor others, and help shape the community’s direction."
    * **Executives:** "Responsible for all levels, ensuring the overall direction and success of the community."
* **(Optional but Recommended for UX):** The section might also visually highlight "Key Elements That Determine Which Circle an Individual is In" (e.g., Genuine & True Value, Technical & Professional Skills, etc.) as separate text points if space and design allow, to complement the understanding of the circles. (For now, focus on displaying the diagram and the 6 circle descriptions).

### Functional Requirements (if any)
* The `elmentor-circles.png` diagram should be displayed clearly and prominently.
* The official descriptions for each of the six circles must be displayed as readable HTML text, associated visually with their respective layers in the diagram if possible, or listed clearly.
* The layout of the diagram and its accompanying textual descriptions must be fully responsive. On smaller screens, the diagram should scale appropriately, and the text should remain legible and well-formatted (e.g., text might wrap or appear below diagram elements).
* Consideration for accessibility: Ensure text alternatives for the diagram if it conveys critical information not present in the text, and ensure text descriptions are programmatically associated with their respective circle names if an interactive design is chosen later.

### Acceptance Criteria
* The `elmentor-circles.png` image is correctly and clearly displayed.
* All six defined Elmentor Circles (Audience, Guests, Members, GAs, LGAs, Executives) are listed with their exact official descriptions as provided.
* The textual descriptions are separate from the image and are rendered as HTML text.
* The content accurately and officially reflects the Elmentor community structure.
* The section is visually coherent, easy to understand, and responsive across common device breakpoints.

---

## Our Activities Requirements

### Detailed Description
This section showcases the diverse activities offered by the Elmentor Program, highlighting benefits for skill enhancement, career growth, and networking. Activities will be presented in a visually appealing and responsive card-based format, ideally with indicative icons for each, and the design should adhere to modern UI/UX best practices.

### Specific Content & Assets Required
* **Activity Presentation:** Card-based layout. Each card *may* feature an indicative icon and a concise title. Descriptions can be brief or expandable later.
* **Activity List (Derived from mind map - use these exact titles or very close variations):**
    * **Technical Skills & Projects:** "DevOps Public Sessions," "Community Projects (Real-world practice)."
    * **Soft Skills Development:** "Communication Skills," "Negotiation Skills," "Understanding Corporate Dynamics," "Self-Management (Time, Motivation)."
    * **Networking & Resources:** "Professional Networking," "Resource Sharing."
    * **Career Development:** "CV Reviews," "Job Referrals," "Career Guidance."
    * **Growth & Support:** "Peer Support Groups," "Personal Growth Workshops."
    * **Mentorship Services:** "One-on-One Mentorship," "Mentor-For-All Sessions."
* **Visuals for Cards (Icons - Agent to suggest/use if feasible):** Suggest simple, indicative icons for categories or individual activities (e.g., a document icon for "CV Review", a calendar/people icon for "Meetings/Meetups").

### Functional Requirements (if any)
* Responsive grid of cards. Design should be flexible for future content expansion per card.

### Acceptance Criteria
* All key activities are listed in a card layout. Cards are visually appealing and consistent. Section is responsive.

---

## About the Founder (Microsoft MVP - Mohamed) Requirements

### Detailed Description
This section is dedicated to introducing Mohamed Radwan, the Founder and an Executive of the Elmentor Program. Its purpose is to build trust and credibility by showcasing his 24 years of experience, Microsoft MVP status, and the expertise he brings to the community. It also aims to provide direct links to his professional and community presence, reinforcing his active role and contributions.

### Specific Content & Assets Required
* **Founder's Name & Primary Title:** "Mohamed Radwan - Microsoft DevOps MVP, Founder & Executive, Elmentor Program (24+ years experience)."
* **Professional Photograph:**
    * Asset Name: `mohamed-radwan.png`
    * Path: `src/assets/images/mohamed-radwan.png` (Asset is present in the project).
* **Detailed Biography (Bio):**
    * Content will be based on the official detailed bio previously provided by the project owner (highlighting 24+ years of experience, work with 60+ global enterprise companies, specializations in DevOps, Azure, Agile, GitHub, passion for automation, community contributions, and speaking engagements at major tech conferences).
* **Key Personal & Professional Links:**
    * LinkedIn Profile: Link to `https://www.linkedin.com/in/mohamedahmedradwan/` (Anchor: "View LinkedIn Profile").
    * Personal GitHub: Link to `https://github.com/MohamedRadwan-DevOps/devops-step-by-step` (Anchor: "GitHub Portfolio").
    * Personal Blog: Link to `https://mohamedradwan-devops.github.io/` (Anchor: "Personal Blog").
    * Radwan's Personal YouTube Channel: Link to `https://www.youtube.com/@MRadwanMSF` (Anchor: "Watch Mohamed on YouTube").

### Functional Requirements (if any)
* All external links must open in a new browser tab/window.
* The founder's photograph should be displayed clearly and be responsive.
* The layout should be professional and easy to read.
* The section must be fully responsive.

### Acceptance Criteria
* Founder's name, title (24 years experience), and MVP status are correctly displayed.
* The `mohamed-radwan.png` photograph is displayed correctly.
* The biography is accurate.
* All specified personal/professional links are present, correctly labeled, functional, and open in new tabs.
* The section is visually appealing, professional, and responsive.

---

## Why Join Us / Benefits Requirements

### Detailed Description
This section articulates the value proposition of the Elmentor Program, convincing potential members of the tangible benefits of joining.

### Specific Content & Assets Required
* **Headline (Example):** "Unlock Your Potential with Elmentor."
* **Key Benefits (list with potential icons):**
    * Global network access
    * Exclusive knowledge sessions
    * Mentorship
    * Project collaboration
    * Career acceleration
    * Support for growth
    * Organized knowledge base (GitHub-based)
    * Dynamic communication channels (Teams-based)
* **(Optional) Testimonials Snippets.**

### Functional Requirements (if any)
* Easily scannable and visually appealing format. Responsive.

### Acceptance Criteria
* Benefits are clearly and persuasively listed. Engaging format. Section is responsive.

---

## Introductory Video Section Requirements

### Detailed Description
Features the official Elmentor Program introductory video for a dynamic understanding of the community.

### Specific Content & Assets Required
* **Embedded YouTube Video:**
    * Title (English, for context/metadata): "What is the Elmentor Program and How Can It Help You?"
    * URL: `https://www.youtube.com/watch?v=hZ2oxrJg2Cc&t=5s`
* **(Optional) Brief contextual text.**

### Functional Requirements (if any)
* Video embed must be playable, responsive, with standard controls.

### Acceptance Criteria
* Video embeds and plays correctly. Responsive.

---

## News & Updates Requirements

### Detailed Description
The 'News & Updates' section aims to keep visitors informed about the latest happenings, significant events, achievements, and important announcements from the Elmentor Program and its community. It serves to showcase the dynamism and ongoing activities of the program. The design will prioritize recent news (e.g., for 2025), with a flexible structure to accommodate past years (e.g., 2024, 2023 as placeholders or links to an archive) and allow for easy future expansion. The content will be static for the MVP.

### Specific Content & Assets Required
* **Section Headline (Example):** "Latest News & Updates" or "Elmentor Community News."
* **Structure for News Items:**
    * Focus on displaying key news items for "2025 News."
    * Each displayed news item should include: Title, Date, Brief Description/Key Takeaways, Link (if applicable), Recorded/Not Recorded status.
* **Example News Items for "2025 News" (based on provided example data - include these):**
    * Title: "Quality Before Quantity: How to Scale Your Work Strategically", Date: "Wed, 5 Feb 2025", Status: "Recorded".
    * Title: "Public Speaking : Small Beginnings , Steady Steps", Date: "Mon, 13 Jan 2025", Presenter: "Rehab Ragab", Status: "Recorded".
* **Presentation Format:** News items in a clear, scannable format (e.g., list or content-rich cards). Consider simple icons.

### Functional Requirements (if any)
* If links for news items are provided, they must open in a new tab.
* Section designed for easy manual updates in code for future news. Responsive.

### Acceptance Criteria
* "News & Updates" section present. Recent 2025 news items displayed. Placeholders for past years visible. Clear, responsive presentation. Design allows future expansion.

---

## "Contact Us" Section / Form Requirements

### Detailed Description
Provides a direct way for visitors to contact the Elmentor Program. Frontend-only form for MVP.

### Specific Content & Assets Required
* **Headline (Example):** "Get In Touch."
* **Form Fields:** Name, Email, Message.
* **Submit Button:** "Send Message."
* **Success Message (Frontend Only).**
* **(Optional) Email List Sign-up Checkbox.**

### Functional Requirements (if any)
* Client-side validation. Displays success message on "submit." Responsive.

### Acceptance Criteria
* Form present with fields. Validation works. Success message displays. Responsive.

---

## Community Presence / Engage With Us (Call to Action - CTA) Requirements

### Detailed Description
Central hub to connect with the Elmentor Program and its broader ecosystem across official online platforms.

### Specific Content & Assets Required
* **Headline (Example):** "Stay Connected & Engage."
* **Elmentor Program Official Channels (with clear icons if possible):**
    * Elmentor Community Blog: `https://devopsvisions.github.io/`
    * Elmentor Program GitHub Org: `https://github.com/ElmentorProgram`
    * Elmentor Community YouTube: `https://www.youtube.com/@MRadwanArabic`
    * Facebook (using Mohamed Radwan's primary page URL as the program's contact point): `[MOHAMED_RADWAN_FACEBOOK_URL_HERE]`
* **Broader DevOps Visions Ecosystem:**
    * DevOps Visions Public Community GitHub: `https://github.com/DevOpsVisions`
    * DevOps Visions Logo: `src/assets/images/DevOps-Visions.png`

### Functional Requirements (if any)
* All links must open in a new tab.
* Icons should be used where possible for each platform.
* Section must be visually engaging and responsive.

### Acceptance Criteria
* All official channels and ecosystem links are present, correctly labeled, and functional. Icons are used where possible. Section is visually engaging and responsive.

---

## Footer Requirements

### Detailed Description
The footer provides essential information, legal links, and attribution, reinforcing the Elmentor and DevOps Visions brands.

### Specific Content & Assets Required
* **Copyright:** "© [Current Year] Elmentor Community. All rights reserved."
* **Attribution:** "Crafted with ❤️ and code by the Elmentor Community, supercharged by GitHub Copilot. Empowering growth through mentorship."
* **DevOps Visions Logo:** `src/assets/images/DevOps-Visions.png`
* **Key Links:** Code of Conduct, Privacy, Contact Us (repeat from header for accessibility).

### Functional Requirements (if any)
* Footer must be present on all pages/sections.
* All links must be functional and open in a new tab if external.
* Layout must be compact, visually distinct, and responsive.

### Acceptance Criteria
* Footer is present, visually distinct, and contains all required information and links. Responsive across devices.
