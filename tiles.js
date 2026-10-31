// The whole site's content. Tiles appear in the order listed.
//
// Tile fields (all optional):
//   kicker    small caps line above the title
//   title     the heading (simple HTML allowed)
//   url       makes the title a link; with an image, or with no title,
//             the whole tile is clickable
//   linkLabel what screen readers announce for a tile with no title
//   image     path like "images/fieldwork.jpg" (put the file in images/)
//   imageAlt  description of the image for screen readers
//   imagePosition  which part of the photo to keep when it's cropped,
//             e.g. "50% 75%" (centered across, lower down)
//   text      list of paragraphs (simple HTML allowed: <a>, <em>, <cite>)
//   verse     preformatted text, line breaks kept (a poem, a code snippet)
//   quote     { text: "...", cite: "..." }  boxed quotation with attribution
//   list      [{ label, url, note }]  a bulleted list of links
//   added     date the tile was first made (YYYY-MM-DD), shown at the bottom
//   hidden    true to keep a tile in the file without showing it

window.SITE = {
  links: [
    { label: "GitHub", icon: "github", url: "https://github.com/gpfeil" },
    { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/gpfeil" },
    { label: "Website", icon: "web", url: "https://gretchenpfeil.com" },
    { label: "Email", icon: "mail", url: "mailto:gpfeil@protonmail.com" }
  ],

  tiles: [
    {
      added: "2026-10-29",
      kicker: "Book in progress",
      title: "Mass Intelligence",
      text: [
        "A book about AI as the commodification of human intellectual labor: what large language models are a model <em>of</em>, whose language they are built from, and what gets withheld along the way.",
        "It grows out of my dissertation work on fungibility and discretion, and out of fifteen years of watching people work with complex data systems."
      ]
    },
    {
      added: "2026-10-31",
      title: "i think so much about containers."
    },
    {
      added: "2026-10-29",
      title: "Language as the mass mind",
      quote: {
        text: "Language thus represents the mass mind.",
        cite: "Benjamin Lee Whorf, <cite>Language, Thought, and Reality</cite> (1956), p. 156"
      }
    },
    {
      added: "2026-10-29",
      kicker: "JPMorgan Chase, 2021–2025",
      title: "Research on the workplace, at the scale of a firm",
      text: [
        "I built and led JPMC's employee-experience workspace technology research team: hired a team of 10, with practices adopted by 50+ researchers firmwide.",
        "A diary study, passive sensing, and ethnography program for the new global headquarters helped secure a multimillion-dollar infrastructure investment. Research with Deaf and Hard-of-Hearing employees drove global changes to caption display and firmwide accessibility standards that exceed the ADA."
      ]
    },
    {
      added: "2026-10-29",
      kicker: "Dakar, Senegal",
      title: "Sarax and Sutura",
      text: [
        "My dissertation, <em>Sarax and Sutura: Alms and the Value of Discretion in Dakar, Senegal</em> (University of Chicago, Saller Prize for best dissertation), is about almsgiving, anonymity, and the work it takes to keep some things from being known.",
        "Fieldwork in English, French, and Wolof."
      ]
    },
    {
      added: "2026-10-31",
      title: "On the privatization of infrastructure",
      text: [
        "One thread I've been following for about 15 years now is the consequences of the privatization (and at times mystification) of infrastructure. <a href=\"https://docs.google.com/document/d/1hgLJojU9h8x-zuj4P_p_TcqxUq0zmcsLsufXwVq7lHo/edit?usp=sharing\">My dissertation treats this as a semiotic question by examining secret infrastructures of mutual aid in Dakar, Senegal.</a> <a href=\"https://docs.google.com/document/d/1csd2fSHomwdyd57dVpNNszFTx-uoWLIkcn3BvkQS-IA/edit\">Right now I'm thinking through the role of contemporary finance capital.</a>"
      ]
    },
    {
      added: "2026-10-31",
      // No title: the whole tile links to the dissertation chapter.
      url: "https://docs.google.com/document/d/1hgLJojU9h8x-zuj4P_p_TcqxUq0zmcsLsufXwVq7lHo/edit?usp=sharing",
      linkLabel: "Dissertation chapter",
      quote: {
        text: "For something to be disclosed (properly speaking)...requires a mode of enclosure that permits it to move along certain paths, and be opened by certain addressees; and, simultaneously, a mode of enclosure that prohibits it from moving along other paths, or being opened by other addressees. In short, the task of a channel is to protect secrets….",
        cite: "— Kockelman (2017, 71)"
      }
    },
    {
      added: "2026-10-29",
      image: "images/everything-not-saved.jpg",
      imageAlt: "A printed page reading “Everything not saved will be lost.” — Nintendo “Quit Screen” message",
      kicker: "February 21, 2024",
      title: "Quit screen"
    },
    {
      added: "2026-10-29",
      image: "images/summer-dog.jpg",
      imageAlt: "A tan dog in a blue collar drinking from fans of spray coming off a fire hydrant, beside a parked car",
      imagePosition: "50% 75%",
      title: "one of my dogs in the summertime"
    },
    {
      added: "2026-10-29",
      kicker: "Barnard College, 2021",
      title: "The Phi Beta Kappa address",
      text: [
        "In 2021 I gave Barnard's Phi Beta Kappa induction address, the first one delivered over Zoom. I'm revising it into a standalone essay, <em>Ethnography of Constraint</em>. A link will go here when it's posted."
      ]
    },
    {
      added: "2026-10-29",
      title: "Some things I've written",
      list: [
        { label: "“Bottlenecks and Other Current Problems of Circulation”", note: "— review of Caroline Melly, <cite>Bottleneck</cite>. <cite>Current Anthropology</cite> 60(2), 2019." },
        { label: "“Sarax and the City: Almsgiving and Anonymous Objects in Dakar, Senegal”", note: "— in <cite>The Anthropology of Ignorance</cite>, Palgrave Macmillan, 2012." },
        { label: "“Imperfect Vessels”", note: "— in <cite>Practicing the Faith</cite>, ed. Lindhardt, 2011." }
      ]
    },
    {
      added: "2026-10-29",
      kicker: "2025–present",
      title: "Semiotomatic Research",
      url: "https://gretchenpfeil.com",
      text: [
        "My research consultancy: qualitative and mixed-methods research on how people work with complex data flows, from fintech to workplace technology."
      ]
    }
  ]
};
