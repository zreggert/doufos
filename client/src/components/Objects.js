// Header Backgound Changes Depending on Width
export const headerbackground = `
    @media only screen and (max-width: 650px)  {
        .backimage {
            background-image: url("images/header/abduction-Mobile.gif"),
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundRize: "cover",
            position: "relative",
        }
    }
    @media only screen and (min-width: 1024px) {
        .backimage {
            background-image: url("images/header/abduction-tablet.gif"),
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundRize: "cover",
            position: "relative",
        }
    }
    @media only screen and (min-width: 1920px) {
        .backimage {
            background-image: url("images/header/abduction1920-937.gif"),
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundRize: "cover",
            position: "relative",
        }
    }
    @media only screen and (min-width: 1920px) and (min-width: 1200px){
        .backimage {
            background-image: url("images/header/abduction-1920-1200.gif"),
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundRize: "cover",
            position: "relative",
        }
    }
`;
