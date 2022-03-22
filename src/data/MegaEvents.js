const imageBasePath = `${process.env.PUBLIC_URL}/assets/images/MegaEvents/`;

export const MEGA_EVENTS = [
  // Insta Bazaar
  {
    isReg: false,
    title: "Insta Bazaar",
    url: "insta-bazaar",
    img: imageBasePath + "insta-bazaar/logo.png",
    oneLiner: "An exhibition for small-scale Instagram businesses",
    description:
      "Enantra 2022 is hosting INSTA BAZAAR, an exhibition for small-scale Instagram businesses to showcase and sell their amazing products. Held on March 31st and conducted by Anna University Student Entrepreneurship Club (AUSEC), Insta Bazaar is the place to be.",
    time: "All Day",
    date: "31/3/2022",
    venue: "Vivek Auditorium",
    regFee: "Free",
    contact: [
      {
        // name: "Name needed",
        mobile: "+91 95000 75337",
      },
      {
        // name: "Name needed",
        mobile: "+91 95518 28333",
      },
    ],
  },

  // Auction House
  {
    isReg: true,
    title: "Auction House",
    url: "auction-house",
    img: imageBasePath + "auction-house/logo.png",
    oneLiner: "For the auction maniacs. Put your bidding skills to the test",
    description:
      "Are you a fellow auction maniac??? Do you also want to put your bidding skills to the test? Well, the chance to participate in this incredible event is up for bidding. Going once, going twice…",
    time: "",
    date: "1/4/2022",
    venue: "Raman Auditorium",
    regFee: "Rs. 200",
    contact: [
      {
        // name: "Name needed",
        mobile: "+91 91369 72614",
      },
    ],
  },

  // Idea Crunch
  {
    isReg: false,
    title: "Idea Crunch",
    url: "idea-crunch",
    img: imageBasePath + "idea-crunch/logo.png",
    oneLiner: "An event organized by the Start-up Committee",
    description:
      "This event is organized by the Start-up Committee. Our mission and vision is to help students with entrepreneurial minds, promote their ideas and take it up as a career during their time in college. We work in collaboration with various organizations and help students to channelize their visions. We work alongside Center for Entrepreneurship Development (CED), which is the largest entrepreneurial development organisation of Anna University, with who’s partnership and support, we the Start-up Committee can help you pursue your dream.",
    time: "4pm-6pm",
    date: "31/3/2022",
    venue: "Civil Engineering Department ",
    contact: [
      {
        // name: "Name needed",
        mobile: "+91 63836 13060",
      },
    ],
  },
];
