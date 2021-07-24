// Header Backgound Changes Depending on Width
export const headerbackground = `
    .backimage {
        background-image: url("images/header/abduction-Mobile.gif")
    }
    @media only screen and (min-width: 650px)  {
        .backimage {
            background-image: url("images/header/abduction-tablet.gif")
        }
    }
    @media only screen and (min-width: 1024px) {
        .backimage {
            background-image: url("abduction1920-937.gif")
        }
    }
    @media only screen and (min-width: 1024px) and (min-width: 900px) {
        .backimage {
            background-image: url("images/header/abduction-1920-1200.gif")
        }
    }
    @media only screen and (min-width: 1920px) and (min-width: 1200px){
        .backimage {
            background-image: url("images/header/abduction-1920-1200.gif")
        }
    }
`;

// Resposive Nav
export const navOptions = {
  desktop: "topnav",
  mobile: "topnav responsive",
  none: "",
};
