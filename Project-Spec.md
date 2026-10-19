# **ROAD TO THE FIRST TEAM**

## **Website Project Specification**

**Document type:** Design and development specification  
**Project status:** Ready for implementation planning  
**Project name:** ROAD TO THE FIRST TEAM  
**Primary objective:** Present real software development work professionally and support the pursuit of a first software engineering role.

---

## **1\. Project Overview**

### **1.1 Concept**

ROAD TO THE FIRST TEAM is a personal developer portfolio inspired by EA SPORTS FC and FIFA Player Career Mode.

The website uses football career progression as a visual and narrative framework for presenting the developer, their projects, technical skills, learning journey, and contact information.

The visual direction should evoke the atmosphere of a football career-mode interface through dark tactical surfaces, pitch-inspired lime accents, condensed sports-style typography, structured player-card-inspired panels, and subtle stadium or pitch references.

The football theme must support the portfolio rather than overwhelm it. The website must still feel like a credible, modern software developer portfolio that recruiters, hiring managers, and potential collaborators can navigate easily.

### **1.2 Primary objective**

The primary objective is to help the developer secure their first professional software engineering opportunity by presenting credible evidence of their abilities.

The website should make it easy for visitors to:

* Understand who the developer is.  
* Understand what they can build and how they approach software development.  
* Explore real projects and inspect their technical implementation.  
* Understand the developer's current skills and development journey.  
* Download a CV.  
* Make contact.

### **1.3 Target audience**

The main audiences are:

1. **Recruiters and hiring managers** evaluating the developer for junior software engineering opportunities.  
2. **Technical interviewers and developers** who want to inspect projects, code quality, architectural decisions, and problem-solving.  
3. **Potential clients or collaborators** who want to understand the developer's capabilities and previous work.

The website should balance visual personality with clarity, usability, credibility, and technical substance.

### **1.4 Guiding principle**

The portfolio should communicate ambition through its design and credibility through its evidence.

The career-mode concept represents the developer's journey toward a first-team opportunity. It must not imply that the developer has already achieved professional milestones, qualifications, experience, or performance metrics that they cannot substantiate.

---

## **2\. Scope and Information Architecture**

### **2.1 Primary pages**

The initial website consists of four main pages.

| Page | Route | Purpose |
| ----- | ----- | ----- |
| Home | / | Introduce the developer, establish the visual identity, highlight selected work, and guide visitors through the portfolio. |
| Profile | /profile | Explain the developer's background, approach, technical skills, and current development journey. |
| Projects | /projects | Present real software projects in a clear, browsable format. |
| Contact | /contact | Allow visitors to contact the developer through a functional contact method. |

### **2.2 Nested project case studies**

Individual project case studies are part of the Projects section, not additional top-level navigation items.

Proposed route pattern:

/projects/:id

Each project detail page should provide a deeper explanation of the corresponding project, including its purpose, implementation, technical decisions, challenges, and verified outcomes.

The case-study layout does not have a dedicated approved mockup in the initial reference set. It will be defined during implementation planning using the established design system and the actual requirements of each project.

### **2.3 Global navigation**

The primary navigation should use straightforward, recruiter-friendly labels:

* Home  
* Profile  
* Projects  
* Contact  
* Download CV

The CV action should be visually distinguishable from the standard navigation links without competing with the main page content.

The navigation should be consistent across all pages and adapt appropriately to mobile layouts.

### **2.4 Removed standalone pages**

The following pages are outside the initial scope:

* Standalone Development page  
* Standalone Résumé page

Relevant development progress and learning information can be incorporated into the Profile page where it adds value.

The CV remains accessible from both the Profile page and the global navigation. It does not require a dedicated page.

### **2.5 Future expansion**

Additional pages or functionality may be considered later, but should not be introduced into the initial build without a clear purpose.

The initial scope should remain focused on delivering the four main pages and the associated project case-study routes to a high standard.

---

## **3\. Design Direction**

### **3.1 Overall visual identity**

The website should resemble a refined football career-mode interface adapted for a developer portfolio.

Key visual characteristics:

* Dark, tactical interface.  
* Pitch-lime accent colour.  
* High-contrast typography.  
* Condensed, bold display headings.  
* Technical metadata presented in a restrained monospaced style.  
* Structured panels with subtle chamfered corners.  
* Fine borders inspired by sports-interface overlays.  
* Clear content hierarchy.  
* Restrained transitions and interaction feedback.  
* Generous enough spacing to maintain readability despite the information-dense visual direction.

The design should not look like a generic dashboard template or a literal football fan site.

### **3.2 Design hierarchy**

The design must prioritise, in order:

1. Clear communication of the developer's identity and purpose.  
2. Easy discovery and evaluation of real projects.  
3. Readable, well-organised content.  
4. Clear navigation and contact actions.  
5. The football-inspired visual identity.

Decorative elements must never compromise the first four priorities.

### **3.3 Use of football terminology**

Football terminology may be used for page headings, section names, metadata labels, and supporting copy where it feels natural.

However, important navigation labels and actions should remain understandable to visitors who are unfamiliar with football games.

Do not force football terminology into every heading or interface element.

### **3.4 Content integrity**

All visual and written elements must reflect the developer's actual background and work.

Do not invent or imply:

* Professional employment history.  
* Qualifications or certifications.  
* Client relationships.  
* Testimonials.  
* Project usage statistics.  
* Business results.  
* Project performance metrics.  
* Technical expertise that has not been demonstrated.  
* Player ratings, OVR values, XP totals, or achievement levels presented as real measurements.

If a fictional interface element is purely decorative, it must not be mistaken for a factual claim. Prefer real, useful information over invented statistics.

---

## **4\. Design System**

### **4.1 Colour palette**

Use the following palette as the initial source of truth.

| Token | Hex value | Intended use |
| ----- | ----- | ----- |
| Tunnel Black | \#151719 | Main page background and deepest interface surfaces. |
| Deep Interface | \#202522 | Panels, cards, navigation surfaces, and elevated sections. |
| Pitch Lime | \#C7F36B | Primary accent, active states, key actions, and selected interface details. |
| Muted Turf | \#3C493C | Subtle borders, dividers, and secondary football-inspired details. |
| Concrete Grey | \#A4A8A5 | Secondary text, supporting information, and metadata. |
| Soft White | \#F1F1E9 | Primary text and high-priority interface content. |

These tokens should be implemented centrally rather than repeatedly hardcoded throughout components.

The palette may be refined during implementation if required to meet contrast, readability, or visual-consistency requirements. Any refinements should be documented.

**Accessibility requirement:** Test the actual foreground/background combinations used for body text, small text, buttons, links, focus indicators, and disabled states. Do not assume that every combination of the supplied colours meets WCAG contrast requirements.

### **4.2 Typography**

Use three typefaces with distinct roles.

| Typeface | Role | Typical use |
| ----- | ----- | ----- |
| Barlow Condensed | Display typography | Hero headings, page titles, section headings, prominent labels. |
| DM Sans | General interface typography | Paragraphs, navigation, buttons, descriptions, forms, and general UI. |
| JetBrains Mono | Technical typography | Technology labels, code, technical metadata, and selected system-style labels. |

Typography rules:

* Display headings should be bold, confident, and often uppercase.  
* Body text should remain comfortable to read at normal viewing distances.  
* Monospaced text should be used selectively, not for long body paragraphs.  
* Line lengths, line heights, letter spacing, and responsive scaling must be defined consistently.  
* Text should not be made unnecessarily small to imitate a game interface.  
* The design must remain usable at browser zoom levels up to 200%.

Exact font weights and sizes should be defined in the implementation's typography tokens and verified against the four supplied mockups.

### **4.3 Layout and grid**

Use a consistent responsive layout system.

Initial desktop guidance:

* Maximum content width: approximately 1440px.  
* Twelve-column grid.  
* Outer margins: approximately 32px.  
* Grid gutters: approximately 24px.  
* Panel padding: approximately 24px.

These are starting values rather than rigid requirements. They should adapt to the actual mockups and screen dimensions.

Spacing should follow a documented scale rather than arbitrary one-off values.

The layout must work across desktop, tablet, and mobile screens without horizontal overflow or unreadable compressed panels.

### **4.4 Panels and chamfered corners**

Panels should use the established visual language of squared or chamfered corners, fine borders, and layered dark surfaces.

Implementation may use CSS clip-path, pseudo-elements, borders, or other suitable techniques.

Requirements:

* Keep the geometry consistent across related components.  
* Preserve visible focus indicators and usable hit areas.  
* Avoid excessive decorative borders.  
* Ensure panel shapes do not clip important text or interactive controls.  
* Provide an appropriate fallback where advanced styling causes compatibility issues.

### **4.5 Buttons and links**

Define reusable primary, secondary, and text-link styles.

Primary actions should use Pitch Lime where contrast and legibility are sufficient. Secondary actions should remain visually distinct without competing with primary actions.

Interactive elements must have:

* Clear hover states.  
* Visible keyboard-focus states.  
* Appropriate active and disabled states.  
* Sufficiently large touch targets.  
* Clear labels that describe their purpose.

Hover styling must not be the only way to communicate interactivity.

### **4.6 Motion and transitions**

Use restrained transitions for navigation, panel interactions, button feedback, and other purposeful interface changes.

Avoid animations that interfere with reading, navigation, or accessibility.

Respect the user's reduced-motion preference. Essential content and functionality must remain available when motion is reduced or disabled.

---

## **5\. Page Specifications**

The supplied page mockups are the primary visual references for the four main pages. The descriptions below define the intended function and content requirements; they do not authorise inventing missing personal or project information.

### **5.1 Home — /**

**Purpose:** Establish the developer's identity, communicate their professional goal, and direct visitors toward the most relevant evidence of their abilities.

Expected content areas:

* Global navigation.  
* Hero section using the approved career-mode visual direction.  
* Primary headline: **CAREER MODE: JUNIOR FULL-STACK DEVELOPER**.  
* Brief introduction based on verified personal information.  
* Clear route into the Projects section.  
* Selected or featured project content, once real projects have been reviewed.  
* Secondary route to the Profile page.  
* Clear contact or collaboration action.  
* Appropriate footer or supporting navigation.

The homepage must communicate the developer's ambition without suggesting that a first-team opportunity or professional appointment has already been secured.

The featured-project selection remains undecided until the existing projects can be reviewed.

### **5.2 Profile — /profile**

**Purpose:** Present the person behind the portfolio and explain their approach to software development.

Expected content areas:

* Profile introduction.  
* Background and current professional objective.  
* Development philosophy or approach to problem-solving.  
* Technical skills supported by real experience or project evidence.  
* Relevant learning and development journey.  
* CV download action.  
* Route into the Projects section.  
* Contact action.

Personal claims and skill descriptions must be truthful and proportionate to the available evidence.

Avoid arbitrary skill percentages, invented ability ratings, or visual proficiency bars that imply a level of measurement that does not exist.

A portrait may be included if a suitable image is available, but it is optional and must not block implementation.

### **5.3 Projects — /projects**

**Purpose:** Make the developer's actual software work easy to discover and evaluate.

Expected content areas:

* Page introduction.  
* Project cards or equivalent structured project previews.  
* Clear project names and concise descriptions.  
* Relevant technology information.  
* Project imagery or screenshots where available.  
* Links to live demonstrations and source repositories when available.  
* Links to individual case studies where applicable.

The layout must support projects with different types of evidence. For example, a project may have a source repository but no public deployment, while another may have a live demo.

Do not show non-functional buttons or invent repository and demo links to fill empty space.

Project selection, order, descriptions, technologies, imagery, and featured status will be decided after reviewing the real projects.

### **5.4 Project case studies — /projects/:id**

**Purpose:** Explain individual projects in enough depth for technical reviewers to understand the work.

Case studies are nested within the Projects section. They are not a fifth main navigation item, but they are part of the intended website.

A reusable case-study template should accommodate, where applicable:

* Project overview.  
* Problem or objective.  
* Intended users and requirements.  
* Main features.  
* Technology stack.  
* Implementation and architectural decisions.  
* Challenges and how they were addressed.  
* Relevant screenshots or interface examples.  
* Testing and quality considerations.  
* Lessons learned and possible future improvements.  
* Source repository and live demonstration links, where available.

Only include sections supported by the actual project. Do not fabricate results, usage numbers, client outcomes, or technical details.

The case-study page layout will be designed later. There is no approved case-study mockup in the initial four-image reference set.

The layout should follow the existing design system and adapt to the evidence available for each project, rather than forcing every project into identical content.

### **5.5 Contact — /contact**

**Purpose:** Make it straightforward for recruiters, hiring managers, and other relevant visitors to get in touch.

Expected content areas:

* Clear invitation to make contact.  
* Contact form if appropriate.  
* Relevant professional contact information or links, where provided.  
* Form validation and useful error feedback.  
* Clear submission status.  
* Alternative contact method if available.

The final contact mechanism has not yet been selected.

During implementation planning, determine whether to use a hosted form service or a custom backend, based on the project's actual requirements, costs, security, and maintenance needs.

Regardless of the implementation, the completed form must genuinely deliver messages to the intended destination. A success message must only appear after successful submission.

The interface must explain validation errors and submission failures clearly and must not silently discard messages.

---

## **6\. Content and Project Data**

### **6.1 Source of truth**

Personal information and project details must come from verified information supplied by the developer or confirmed through inspection of the actual projects.

The AI-generated mockups are visual references, not authoritative sources for factual content.

### **6.2 Project content deferred**

The following decisions are intentionally postponed until the actual projects can be reviewed:

* Which projects to include.  
* Which project should be featured.  
* Project descriptions and problem statements.  
* Technologies used by each project.  
* Project screenshots.  
* Repository links.  
* Live deployment links.  
* Technical challenges and implementation decisions.  
* Case-study content and supporting evidence.

Do not populate the production site with fabricated project content while waiting for these decisions.

Where development requires temporary data, use clearly identified development fixtures that cannot be mistaken for real published portfolio content.

### **6.3 Reusable project data model**

Project information should be structured so that project cards and case-study pages can share a consistent source of data.

A suitable starting model may include:

* id  
* title  
* summary  
* description  
* technologies  
* thumbnail  
* screenshots  
* repositoryUrl  
* liveUrl  
* featured  
* caseStudySections

Fields should be optional where appropriate. The implementation must not require every project to have a live URL, repository, or extensive case study.

This model is a starting point and should be refined after inspecting the real projects. Avoid unnecessary abstraction before the actual content requirements are known.

### **6.4 Missing information**

Do not fill content gaps with invented facts.

If information is unavailable, either omit the relevant element, use an appropriate neutral presentation, or mark the content as awaiting confirmation during development.

Before launch, remove internal placeholders and ensure every published claim is accurate.

---

## **7\. Technology Stack and Architecture**

### **7.1 Selected stack**

The agreed initial stack is:

* **React** for the component-based UI.  
* **Vite** for development tooling and production builds.  
* **TypeScript** for static typing.  
* **Tailwind CSS** for utility-based styling.  
* **Custom CSS** where needed for the chamfered panels, distinctive layout details, transitions, and other visual requirements.

This stack is selected for the project's needs and the developer's learning objectives. It is not a claim that this combination is universally superior to other frameworks or styling approaches.

Do not switch frameworks or replace the agreed stack without a concrete technical reason and explicit approval.

### **7.2 Architecture principles**

The implementation should be:

* Component-based and easy to maintain.  
* Strongly typed where practical.  
* Consistent in its use of shared design tokens.  
* Structured around reusable page and UI components.  
* Easy to update as real project content becomes available.  
* Free of unnecessary dependencies and premature abstraction.

Keep content separate from presentation when that makes the site easier to maintain, especially for project cards and case studies.

Use semantic HTML and React components rather than creating a single oversized component for the entire website.

### **7.3 Styling approach**

Use Tailwind CSS for routine layout, spacing, responsive behaviour, and common styling.

Use custom CSS where it improves clarity or is better suited to the design, including:

* Chamfered panel shapes.  
* Reusable visual effects.  
* Custom layout patterns.  
* Design-specific animations.  
* Complex decorative treatments.

Avoid mixing multiple competing approaches without a clear reason.

Centralise the core palette, typography, spacing, and other recurring design values. Avoid duplicating the same design values across unrelated components.

### **7.4 Routing**

Use a routing approach appropriate for the selected React/Vite stack.

The application must support the four primary routes and individual project routes.

Ensure direct navigation and page refreshes work correctly on the deployed hosting platform, including nested project URLs. Hosting configuration must account for client-side routing where required.

---

## **8\. Reusable Component Inventory**

Build reusable components where repetition or consistency justifies them.

Potential shared components include:

* SiteLayout  
* SiteNavigation  
* MobileNavigation  
* SiteFooter  
* PageHeader  
* SectionHeading  
* ChamferedPanel  
* PrimaryButton  
* SecondaryButton  
* ProjectCard  
* ProjectGrid  
* TechnologyTag  
* ProjectLinks  
* CaseStudySection  
* CVDownloadLink  
* ContactForm  
* FormField  
* FormStatus  
* LoadingState  
* ErrorState  
* EmptyState

This is a candidate inventory, not a requirement to create every component in advance.

Components should be extracted when they have a clear purpose, are reused, or make the implementation meaningfully easier to understand and test.

Avoid overengineering a relatively small portfolio website.

---

## **9\. Responsive Design**

The website must provide a coherent experience across desktop, tablet, and mobile devices.

### **9.1 Desktop**

Preserve the strong grid, panel composition, clear hierarchy, and visual density of the supplied mockups.

Do not sacrifice readability to reproduce a desktop layout literally.

### **9.2 Tablet**

Adapt multi-column sections and panel arrangements to the available width.

Navigation, buttons, project cards, and text must remain comfortable to use without awkward compression.

### **9.3 Mobile**

Prioritise content order, readable typography, accessible navigation, and practical touch interactions.

Requirements:

* No unintended horizontal page overflow.  
* No clipped essential text.  
* No overlapping navigation or controls.  
* Project cards must remain readable.  
* Primary actions must remain easy to find.  
* Decorative elements may be simplified where necessary.  
* Chamfered panels must not make interactive controls difficult to use.  
* Contact forms must work with touch input and mobile keyboards.

The mobile layout should be designed intentionally rather than being treated as a reduced desktop screenshot.

### **9.4 Testing**

Test the actual layouts at representative viewport sizes and adjust the design based on observed problems rather than relying on a single breakpoint.

---

## **10\. Accessibility**

Accessibility is a core implementation requirement.

At minimum:

* Use semantic HTML.  
* Maintain logical heading order.  
* Make navigation and interactive controls keyboard accessible.  
* Provide clearly visible focus indicators.  
* Label form fields correctly.  
* Associate validation errors with the relevant fields.  
* Provide appropriate alternative text for meaningful images.  
* Use empty alternative text for purely decorative images where appropriate.  
* Do not communicate state through colour alone.  
* Respect reduced-motion preferences.  
* Maintain usable text sizing and contrast.  
* Ensure interactive targets are practical on touch devices.  
* Avoid keyboard traps.  
* Verify that mobile navigation can be opened, used, and closed with keyboard and touch input.

Target WCAG 2.2 Level AA as the accessibility standard.

Use automated accessibility checks to identify problems, but also perform manual keyboard and usability checks. Passing an automated scan alone does not establish accessibility.

---

## **11\. Performance, SEO and Quality**

### **11.1 Performance**

Keep the website lightweight and responsive.

* Optimise image dimensions and file sizes.  
* Use suitable image formats.  
* Avoid unnecessarily large dependencies.  
* Load assets efficiently.  
* Avoid excessive animation or expensive visual effects.  
* Prevent avoidable layout shifts.  
* Use lazy loading for appropriate below-the-fold images.  
* Do not lazy-load the main above-the-fold image if doing so would harm the initial experience.

### **11.2 SEO and sharing**

Provide appropriate:

* Page titles.  
* Meta descriptions.  
* Canonical URLs where appropriate.  
* Open Graph metadata.  
* Favicon and related browser assets.  
* Semantic page structure.  
* Descriptive link text.

Ensure each main page has an appropriate title and description.

The public website should be configured so that search engines can access the intended pages. Consider how client-side routing affects indexing and link previews.

### **11.3 Quality checks**

Before launch, verify:

* The production build succeeds.  
* There are no avoidable runtime errors.  
* Internal links resolve correctly.  
* External links point to the intended destinations.  
* Project routes work when loaded directly.  
* Forms behave correctly for valid and invalid input.  
* The contact submission mechanism genuinely delivers messages.  
* CV downloads work.  
* Keyboard navigation is usable.  
* Mobile layouts work at representative widths.  
* There is no unintended overflow.  
* The site's published claims are accurate.  
* No development placeholders remain visible.

Use automated tests where they provide value, especially for reusable components, routing, form behaviour, and critical interactions.

---

## **12\. Mockups and Visual References**

### **12.1 Approved initial reference set**

Only the four mockups corresponding to the pages being built in the initial scope will be included.

Store them in:

docs/design-references/

Use these filenames unless a different naming convention is agreed:

* 01-homepage.png  
* 02-profile.png  
* 03-projects.png  
* 04-contact.png

Each file should correspond to its respective page.

These four mockups form the initial visual reference set. They do not override requirements for factual accuracy, accessibility, responsive behaviour, or functional correctness.

### **12.2 Project case-study design**

No dedicated case-study mockup is included in the initial reference set.

Case-study pages remain in scope as nested routes under Projects. Their layout will be established later, using the existing design system and the requirements of the real projects.

Do not create a fifth main page or add a standalone case-study item to the primary navigation simply because project details have their own routes.

### **12.3 Interpreting mockups**

Treat mockups as guidance for:

* Visual hierarchy.  
* Page composition.  
* Spacing.  
* Typography.  
* Colour usage.  
* Panel shapes.  
* Component relationships.  
* Intended interaction patterns where these are evident.

Do not copy inaccurate personal details, fictional metrics, incorrect technologies, fake links, or other unverified content from generated imagery.

If a mockup conflicts with this specification, prioritise the specification and flag meaningful visual deviations for review.

### **12.4 Implementation review**

Review the finished pages against their corresponding mockups at comparable viewport sizes.

Evaluate:

* Overall composition.  
* Spacing and alignment.  
* Typography and line breaks.  
* Panel proportions.  
* Colour consistency.  
* Image cropping.  
* Responsive adaptation.  
* Interaction states.  
* Content accuracy.

Aim for a faithful implementation of the intended design, while making necessary improvements for responsiveness, accessibility, and real-world functionality.

---

## **13\. Content Integrity and Prohibited Shortcuts**

The website must represent actual work and actual capabilities.

Do not:

* Invent project descriptions, results, or technologies.  
* Create fake testimonials.  
* Display fictional user counts or performance improvements as real results.  
* Add fabricated employment history or qualifications.  
* Use fake repositories or live-demo links.  
* Present decorative player ratings as measured technical ability.  
* Display skill percentages without a defensible measurement basis.  
* Make the contact form show a success message without successful delivery.  
* Leave prominent buttons without working actions.  
* Use placeholder content that could be mistaken for finished content.  
* Claim that accessibility, security, testing, or performance requirements have been met without checking them.

When a feature cannot yet be implemented, make the limitation clear during development rather than disguising it as a working feature.

---

## **14\. Implementation Workflow**

Work incrementally. Review each meaningful stage before expanding the implementation.

### **Phase 1 — Repository and project setup**

* Inspect the existing repository before changing anything.  
* Confirm whether a project already exists and identify its current structure.  
* Preserve useful existing work.  
* Set up or verify React, Vite, TypeScript, and Tailwind CSS.  
* Establish the routing approach.  
* Create the initial design tokens and global styles.  
* Configure linting, formatting, and basic quality checks where appropriate.

Do not replace an existing project structure without first understanding it.

### **Phase 2 — Shared layout and design foundations**

* Implement global navigation.  
* Establish page containers and responsive grid behaviour.  
* Build the typography system.  
* Implement core buttons and panel styles.  
* Establish reusable interaction and focus states.  
* Verify the foundations against the mockups before building every page.

### **Phase 3 — Primary pages**

Implement the four main pages:

1. Home.  
2. Profile.  
3. Projects.  
4. Contact.

Prioritise accurate structure, reusable components, responsive behaviour, and the supplied visual references.

If project content is not yet finalised, use clearly identified development fixtures rather than invented published content.

### **Phase 4 — Project case studies**

* Review the actual projects.  
* Determine which projects merit individual case studies.  
* Define the case-study content structure.  
* Implement the shared case-study layout.  
* Connect project cards to their corresponding routes.  
* Verify direct navigation and refresh behaviour.

### **Phase 5 — Functional integrations**

* Connect the CV download to the correct file.  
* Configure real repository and demo links.  
* Choose and implement the contact form delivery mechanism.  
* Verify validation, error handling, and submission feedback.  
* Confirm that each advertised action works.

### **Phase 6 — Testing and refinement**

* Compare the pages with the mockups.  
* Test responsive layouts.  
* Check keyboard accessibility.  
* Run automated checks and the production build.  
* Fix errors and visible inconsistencies.  
* Check metadata, routes, assets, and links.  
* Verify that no unapproved placeholder content remains.

### **Phase 7 — Deployment**

Choose a suitable hosting provider once deployment requirements are clear.

Verify the deployed website rather than assuming that a successful local build guarantees a working production site.

Test routing, asset loading, CV download, external links, and contact form delivery in the deployed environment.

---

## **15\. Acceptance Criteria**

The initial website is ready for launch when all applicable criteria below have been met.

### **Scope and navigation**

* Four main pages are implemented: Home, Profile, Projects, and Contact.  
* Navigation uses clear, recruiter-friendly labels.  
* The CV is accessible from the Profile page and global navigation.  
* Individual project case studies work under /projects/:id.  
* No standalone Development or Résumé page has been introduced without approval.

### **Design**

* The implementation follows the agreed visual direction and colour palette.  
* Typography roles are applied consistently.  
* Panels, buttons, and other repeated elements use a coherent design system.  
* The four main pages have been reviewed against their corresponding mockups.  
* Responsive layouts have been tested and refined.  
* Interactive elements have visible and usable focus states.

### **Content**

* Published personal information is accurate.  
* Project descriptions and technologies reflect actual projects.  
* No fictional achievements, statistics, testimonials, or qualifications are presented as real.  
* All visible links and calls to action have valid destinations or working behaviour.  
* Temporary development content has been removed or replaced before launch.

### **Functionality**

* Navigation works across all pages.  
* Project cards link to the intended details.  
* Project routes work when opened directly.  
* CV download works.  
* Contact form validation behaves correctly.  
* Successful form submissions genuinely deliver messages.  
* Errors are communicated clearly.

### **Quality**

* Production build succeeds.  
* No known critical runtime errors remain.  
* The site is usable on desktop, tablet, and mobile.  
* No unintended horizontal overflow remains.  
* Accessibility checks and manual keyboard checks have been completed.  
* Page metadata and sharing information are configured.  
* The deployed website has been tested.

---

## **16\. Outstanding Decisions**

The following items are intentionally deferred and must be resolved at the appropriate stage.

| Decision | Status | When to resolve |
| ----- | ----- | ----- |
| Final project selection | Deferred | After inspecting actual projects. |
| Featured homepage project | Deferred | After evaluating project quality and evidence. |
| Project descriptions and technologies | Deferred | During project review and content preparation. |
| Project screenshots and imagery | Deferred | Once the real projects have been inspected. |
| Repository and live-demo links | Deferred | During project content preparation. |
| Case-study content and final layout | Deferred | When implementing the Projects section. |
| Contact form service or backend | Deferred | Before implementing the functional contact form. |
| Hosting provider | Undecided | Before deployment. |
| Optional profile portrait | Optional | When suitable imagery is available. |

Deferring these decisions does not permit the implementation to invent answers. Build the reusable foundations first, then integrate verified content and services when the necessary information is available.

---

## **17\. Rules for the AI Coding Agent**

Any AI coding agent working on this project must follow these rules.

1. **Inspect before changing.** Review the repository, existing code, dependencies, and project conventions before editing files.  
2. **Respect the agreed stack.** Use React, Vite, TypeScript, and Tailwind CSS unless a concrete issue requires a proposed change and the developer approves it.  
3. **Treat the specification as the source of truth.** The approved mockups inform the visual design but do not override functional, accessibility, or content-integrity requirements.  
4. **Build incrementally.** Make focused changes, test them, and explain meaningful decisions.  
5. **Reuse components appropriately.** Avoid both duplicated UI and unnecessary abstraction.  
6. **Do not invent content.** Never fabricate personal information, project details, metrics, technologies, or credentials.  
7. **Do not invent functionality.** A visible control must perform its advertised action.  
8. **Keep the scope controlled.** Implement the four primary pages and project case-study routes. Do not introduce standalone Development or Résumé pages without approval.  
9. **Use real integrations.** Do not simulate successful contact submissions or pretend that a download or external integration works when it does not.  
10. **Protect existing work.** Avoid destructive rewrites and unnecessary dependency changes.  
11. **Verify before claiming completion.** Report which checks were actually performed and identify anything still unverified.  
12. **Raise material conflicts.** If a mockup, technical constraint, or new requirement conflicts with this specification, explain the conflict and recommend a solution rather than silently changing scope.  
13. **Respect deferred decisions.** Do not prematurely invent project content, select a featured project, choose a contact service, or select a hosting provider.  
14. **Prioritise the visitor.** The football-inspired design should make the portfolio memorable without making it difficult for recruiters or technical reviewers to understand and evaluate the work.

---

## **Final Direction**

ROAD TO THE FIRST TEAM should feel like a distinctive football career-mode experience built around a serious software engineering portfolio.

Its visual identity should create the first impression. Its real projects, thoughtful technical explanations, accurate content, and reliable functionality should earn the visitor's confidence.

The objective is not to simulate an established professional career. It is to present the developer's actual work convincingly and make the next career opportunity easier to reach.

