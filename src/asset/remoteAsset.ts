// Remote Asset Configuration
// Centralized location for all Cloudinary assets

export const REMOTE_ASSETS = {
  // Logos
  logos: {
    navbar: 'https://res.cloudinary.com/dhipowibc/image/upload/v1774476816/logo_yozjyp.svg',
    footer: 'https://res.cloudinary.com/dhipowibc/image/upload/v1774476815/logo_white_spiuwx.svg',
    icon:'https://res.cloudinary.com/dhipowibc/image/upload/v1775772957/Gorro_App_Icon_zz3etd.png',
  },

  // Hero Section Images
  hero: {
    gorroCluster: 'https://res.cloudinary.com/dhipowibc/image/upload/v1774481339/gorro_cluter_bic859.svg',
    manSaving: 'https://res.cloudinary.com/dhipowibc/image/upload/v1774481350/man_phone_koouem.png',
    womanSaving: 'https://res.cloudinary.com/dhipowibc/image/upload/v1774481371/woman_phone_u7twa3.svg',
    aboveMan: 'https://res.cloudinary.com/dhipowibc/image/upload/v1774481336/highlight_12_kbhc2b.svg',
    belowWoman: 'https://res.cloudinary.com/dhipowibc/image/upload/v1774481335/claude_lyffyy.svg',
  },

  // Feature Icons
  features: {
    noPermanent: 'https://res.cloudinary.com/dhipowibc/image/upload/v1774481352/permanent-record_pyu7ni.svg',
    memberSee: 'https://res.cloudinary.com/dhipowibc/image/upload/v1774481351/menmber-can-see_ygbyku.svg',
    dispute: 'https://res.cloudinary.com/dhipowibc/image/upload/v1774481351/no-trails_vbwbo2.svg',
    onePerson: 'https://res.cloudinary.com/dhipowibc/image/upload/v1774481351/one-person_pj6ayh.svg',
    bank: 'https://res.cloudinary.com/dhipowibc/image/upload/v1774481335/bank_og1e2e.svg',
    secure: 'https://res.cloudinary.com/dhipowibc/image/upload/v1774481353/secure_tmlsz2.svg',
    fixedSaving: 'https://res.cloudinary.com/dhipowibc/image/upload/v1774481361/target-savings_mirtkr.svg',
    targetSaving: 'https://res.cloudinary.com/dhipowibc/image/upload/v1774481337/icon-savings_bha1zj.svg',
    gorroVault: 'https://res.cloudinary.com/dhipowibc/image/upload/v1774481336/gorro-vault_zkkuis.svg',
  },

  // UI Icons
  ui: {
    purpleCheck: 'https://res.cloudinary.com/dhipowibc/image/upload/v1774567903/purple_fgljq9.svg',
    greenCheck: 'https://res.cloudinary.com/dhipowibc/image/upload/v1774567902/greencheck_uwakxu.svg',
    arrowLeft: 'https://res.cloudinary.com/dhipowibc/image/upload/v1774565170/arrow-left_hdpmdc.svg',
    greenArrowLeft:'https://res.cloudinary.com/dhipowibc/image/upload/v1774570972/left-green_qlrp3v.svg',
    privacy: 'https://res.cloudinary.com/dhipowibc/image/upload/v1775259828/Privacy-policy-checklist_s0pi1i.png',
    termservice: 'https://res.cloudinary.com/dhipowibc/image/upload/v1775260759/term_fpkrrf.png',
    // appStore: 'https://res.cloudinary.com/dhipowibc/image/upload/v1775263388/download_ksx4fq.png',
    appStore: 'https://res.cloudinary.com/dhipowibc/image/upload/v1775301599/download-on-apple-store-image-dark_xcewvd.png',
    // playStore: 'https://res.cloudinary.com/dhipowibc/image/upload/v1775263387/google_play_sokhv4.png',
    playStore: 'https://res.cloudinary.com/dhipowibc/image/upload/v1775301600/download-on-google-play-image-dark_ixg8dd.png',
  },

  // Social Media Icons
  social: {
    facebook: 'https://res.cloudinary.com/dhipowibc/image/upload/v1774481336/FacebookLogo_b6t2ff.svg',
    linkedin: 'https://res.cloudinary.com/dhipowibc/image/upload/v1774481339/linkedin_skhuaq.svg',
    instagram: 'https://res.cloudinary.com/dhipowibc/image/upload/v1774481338/InstagramLogo_mofbip.svg',
    tiktok: 'https://res.cloudinary.com/dhipowibc/image/upload/v1774481362/TiktokLogo_bmrpux.svg',
    xTwitter: 'https://res.cloudinary.com/dhipowibc/image/upload/v1774481364/XLogo_kqs7vz.svg',
  },
} as const;

// Individual exports for easy importing
export const { logos, hero, features, social, ui } = REMOTE_ASSETS;

// Type definitions for better TypeScript support
export type RemoteAssetKeys = keyof typeof REMOTE_ASSETS;
export type LogoKeys = keyof typeof REMOTE_ASSETS.logos;
export type HeroKeys = keyof typeof REMOTE_ASSETS.hero;
export type FeatureKeys = keyof typeof REMOTE_ASSETS.features;
export type SocialKeys = keyof typeof REMOTE_ASSETS.social;
export type UiKeys = keyof typeof REMOTE_ASSETS.ui;

export default REMOTE_ASSETS;