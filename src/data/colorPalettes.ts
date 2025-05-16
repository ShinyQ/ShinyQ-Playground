// Common color properties type
type ColorProperties = {
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
    popover: string;
    popoverForeground: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    destructive: string;
    destructiveForeground: string;
    border: string;
    input: string;
    ring: string;
};

export type ColorPalette = {
    name: string;
    dark: ColorProperties;
    light: ColorProperties;
};

// Common color values
const commonColors = {
    pureWhite: "0 0% 100%",
    lightText: "0 0% 90%",
    darkText: "0 0% 10%",
};

export const colorPalettes: Record<string, ColorPalette> = {
    default: {
        name: "Bakugo",
        dark: {
            background: "22 15% 10%",                       // deep explosive charcoal
            foreground: "30 20% 90%",                       // bright ash-white text
            card: "22 15% 12%",                             // slightly lighter charcoal
            cardForeground: "30 20% 90%",
            popover: "22 15% 12%",
            popoverForeground: "30 20% 90%",
            primary: "32 100% 50%",                         // explosive orange (his quirk)
            primaryForeground: commonColors.pureWhite,
            secondary: "20 10% 20%",                        // dark ash gray
            secondaryForeground: "30 20% 90%",
            muted: "22 10% 25%",                            // smoky gray
            mutedForeground: "35 10% 60%",
            accent: "38 85% 55%",                           // golden explosion
            accentForeground: commonColors.pureWhite,
            destructive: "0 85% 60%",                       // intense red (his rage)
            destructiveForeground: commonColors.pureWhite,
            border: "20 10% 25%",
            input: "20 10% 20%",
            ring: "32 100% 50%"                             // explosive highlight
        },
        light: {
            background: "38 50% 97%",                       // warm cream (his determination)
            foreground: "20 25% 10%",                       // rich dark brown
            card: "37 70% 95%",                             // soft warm card
            cardForeground: "20 25% 10%",
            popover: "38 60% 98%",
            popoverForeground: "20 20% 15%",
            primary: "32 100% 50%",                         // explosive orange (unchanged)
            primaryForeground: commonColors.pureWhite,
            secondary: "36 30% 88%",                        // warm beige
            secondaryForeground: "20 20% 20%",
            muted: "36 20% 85%",                            // soft warm gray
            mutedForeground: "22 10% 35%",
            accent: "38 85% 55%",                           // golden explosion
            accentForeground: commonColors.pureWhite,
            destructive: "0 80% 55%",                       // controlled rage
            destructiveForeground: commonColors.pureWhite,
            border: "36 25% 85%",
            input: "36 25% 95%",
            ring: "32 100% 50%"                             // explosive highlight
        }
    },
    killua: {
        name: "Killua",
        dark: {
            background: "235 30% 6%",                       // deep cold indigo-black
            foreground: "220 20% 90%",                      // icy blue-white text
            card: "235 25% 8%",
            cardForeground: "220 20% 90%",
            popover: "235 25% 10%",
            popoverForeground: "220 20% 90%",
            primary: "240 100% 70%",                        // godspeed electric indigo
            primaryForeground: commonColors.pureWhite,
            secondary: "230 15% 20%",                       // muted lavender-gray
            secondaryForeground: "220 25% 80%",
            muted: "235 10% 20%",                           // soft shadow gray
            mutedForeground: "220 10% 60%",
            accent: "255 100% 75%",                         // chaos spark pink-lilac
            accentForeground: commonColors.pureWhite,
            destructive: "0 85% 60%",                       // bloody red for danger
            destructiveForeground: commonColors.pureWhite,
            border: "230 10% 25%",
            input: "230 15% 15%",
            ring: "240 100% 70%"                            // electric ring
        },
        light: {
            background: "220 60% 98%",                      // frosty pale blue
            foreground: "235 50% 10%",                      // dark cold indigo
            card: "220 60% 96%",
            cardForeground: "235 50% 10%",
            popover: "220 60% 98%",
            popoverForeground: "235 50% 10%",
            primary: "240 100% 65%",                        // cool electric blue
            primaryForeground: commonColors.pureWhite,
            secondary: "220 30% 90%",                       // light lavender
            secondaryForeground: "235 50% 15%",
            muted: "220 25% 85%",
            mutedForeground: "230 20% 40%",
            accent: "255 100% 75%",                         // soft pink shock
            accentForeground: commonColors.pureWhite,
            destructive: "0 70% 55%",
            destructiveForeground: commonColors.pureWhite,
            border: "220 20% 80%",
            input: "220 20% 90%",
            ring: "240 100% 65%"                            // godspeed flash
        }
    },
    karma: {
        name: "Karma",
        dark: {
            background: "345 30% 8%",                       // dark blood-maroon
            foreground: commonColors.lightText,             // light text, clean contrast
            card: "345 25% 10%",                            // slightly lighter maroon
            cardForeground: commonColors.lightText,
            popover: "345 25% 12%",
            popoverForeground: commonColors.lightText,
            primary: "0 85% 60%",                           // vivid red (dominance)
            primaryForeground: commonColors.pureWhite,
            secondary: "0 20% 20%",                         // charcoal red
            secondaryForeground: "0 0% 85%",
            muted: "0 10% 25%",                             // dull ash red
            mutedForeground: "0 5% 55%",
            accent: "40 100% 55%",                          // golden spark (his intellect, mischief)
            accentForeground: commonColors.pureWhite,
            destructive: "345 100% 45%",                    // bloody red (intimidation mode)
            destructiveForeground: commonColors.pureWhite,
            border: "0 15% 25%",
            input: "0 15% 20%",
            ring: "0 90% 55%"
        },
        light: {
            background: "0 50% 98%",                        // pale pink-white (fake innocence)
            foreground: "345 60% 10%",                      // dark red-brown text
            card: "0 50% 96%",                              // calm pink hue
            cardForeground: "345 60% 10%",
            popover: "0 50% 98%",
            popoverForeground: "345 60% 10%",
            primary: "0 85% 55%",                           // Karma's hair red
            primaryForeground: commonColors.pureWhite,
            secondary: "0 30% 92%",                         // pink-tinted soft background
            secondaryForeground: "345 60% 15%",
            muted: "0 20% 85%",
            mutedForeground: "0 10% 50%",
            accent: "40 100% 50%",                          // intelligent spark (his cunning side)
            accentForeground: commonColors.pureWhite,
            destructive: "345 80% 50%",
            destructiveForeground: commonColors.pureWhite,
            border: "0 20% 80%",
            input: "0 20% 90%",
            ring: "0 85% 55%"
        }
    }
}; 