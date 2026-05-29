// Detailed, premium services data for Amrutha Salon
// Categorized by Women, Men, and dedicated standalone Nail Studio

// Import newly optimized and compressed WebP nail assets
import gelPolishImg from '../assets/gel-polish.webp';
import catEyeNailsImg from '../assets/cat-eye-nails.webp';
import gelFrenchPolishImg from '../assets/gel-french-polish.webp';
import gelOmbreImg from '../assets/gel-ombre.webp';
import gelNailsImg from '../assets/gel-nails.webp';
import simpleGelNailsImg from '../assets/simple-gel-nails.webp';
import acrylicNailsImg from '../assets/acrylic-nails.webp';
import frenchNailsImg from '../assets/french-nails.webp';
import ombreNailArtImg from '../assets/ombre-nail-art.webp';
import nailExtensionsImg from '../assets/nail-extentions.webp';
import nailExtentionImg from '../assets/nail-extention.webp';
import extensionAndGelImg from '../assets/extention-and-gel.webp';
import marbleAndOmbreImg from '../assets/marble-and-ombre.webp';
import handPaintingImg from '../assets/hand-painting.webp';
import threeDNailArtImg from '../assets/3d-nail-art.webp';
import threeDNailArt2Img from '../assets/3d-nail-art-2.webp';
import nailArtttImg from '../assets/nail-arttt.webp';
import bridalNailsImg from '../assets/bridal-nails.webp';
import nailArt2NewImg from '../assets/nailart2.webp';
import nailArt3NewImg from '../assets/nailart3.webp';
import gelNailartImg from '../assets/gel-nailart.webp';
import nailstudioImg from '../assets/nailstudio.webp';
import nailstudioStaffImg from '../assets/nailstudio-with-staff.webp';

// Other salon assets
import bridalMakeover from '../assets/bridal-makeover.webp';
import brows from '../assets/brows.webp';
import salonOverview from '../assets/salon-overview.webp';
import salonMirrors from '../assets/salon-mirrors.webp';
import pedicureSeats from '../assets/pedicure-seats.webp';
import counter2 from '../assets/counter-2.webp';
import counterAmrutha from '../assets/counter-amrutha.webp';
import hairHighlights from '../assets/hair-highlights.webp';
import salonInterior from '../assets/salon-interior.webp';
import fruitNailart from '../assets/fruit-nailart.webp';
import permanentBrows from '../assets/permanent-brows.webp';
import stoneArtImg from '../assets/stone-art.webp';

export const WHATSAPP_NUMBER = "918885087999";

// ==================== STANDALONE NAIL STUDIO DATA ====================
export const nailServices = {
  category: "Nail Studio",
  description: "Autoclave sterilized equipment, premium European non-toxic gels, and custom-sculpted acrylic art.",
  isFeatured: true,
  items: [
    // GEL POLISH SERVICES
    {
      id: "wn-1",
      title: "Gel Polish",
      description: "Full set rich professional long-lasting solid gel polish application.",
      price: "999",
      duration: "40 Mins",
      rating: 4.8,
      image: gelPolishImg,
      subCategory: "Gel Polish",
      tag: "Classic"
    },
    {
      id: "wn-2",
      title: "Gel Glitter / Chrome / Cat’s Eye",
      description: "Full set featuring high-shine metallic chrome, fine glitters, or magnetic cat-eye light play on gel polish.",
      price: "1999",
      duration: "50 Mins",
      rating: 4.9,
      image: catEyeNailsImg,
      subCategory: "Gel Polish",
      tag: "Trending"
    },
    {
      id: "wn-3",
      title: "Gel French Polish",
      description: "Classic French manicure styling done with long-lasting premium gel lacquer.",
      price: "1499",
      duration: "50 Mins",
      rating: 4.9,
      image: gelFrenchPolishImg,
      subCategory: "Gel Polish"
    },
    {
      id: "wn-4",
      title: "Gel Ombre Polish",
      description: "Smooth dual-shade airbrushed or blended ombre gel polish on natural nails.",
      price: "1499",
      duration: "50 Mins",
      rating: 4.8,
      image: gelOmbreImg,
      subCategory: "Gel Polish"
    },
    {
      id: "wn-5",
      title: "Gel Overlays (2 Hands)",
      description: "Protective overlay gel applied directly on natural nails to prevent chipping and splitting.",
      price: "1500",
      duration: "45 Mins",
      rating: 4.7,
      image: gelNailsImg,
      subCategory: "Gel Polish"
    },
    {
      id: "wn-6",
      title: "Gel Removal",
      description: "Safe, non-destructive removal of gel overlays with deep nourishing cuticle oil care.",
      price: "299",
      duration: "20 Mins",
      rating: 4.8,
      image: simpleGelNailsImg,
      subCategory: "Gel Polish"
    },

    // ACRYLIC EXTENSIONS
    {
      id: "wn-7",
      title: "Acrylic Extensions + Plain Gel Polish",
      description: "Full set high-durability acrylic extensions with plain gel polish overlay.",
      price: "2499",
      duration: "90 Mins",
      rating: 5.0,
      image: acrylicNailsImg,
      subCategory: "Acrylic Extensions",
      tag: "Bestseller"
    },
    {
      id: "wn-8",
      title: "Acrylic Extensions + French Polish",
      description: "Premium acrylic extensions sculpted and finished with a clean, classic luxury French tip.",
      price: "3499",
      duration: "100 Mins",
      rating: 5.0,
      image: frenchNailsImg,
      subCategory: "Acrylic Extensions",
      tag: "Premium"
    },
    {
      id: "wn-9",
      title: "Acrylic Extensions + Ombre Polish",
      description: "Custom acrylic extensions styled with a smooth, luxury dual-tone ombre color melt.",
      price: "3499",
      duration: "100 Mins",
      rating: 4.9,
      image: ombreNailArtImg,
      subCategory: "Acrylic Extensions"
    },
    {
      id: "wn-10",
      title: "Acrylic Refills",
      description: "Routine maintenance and growth-fill service for existing acrylic nail extensions.",
      price: "1000",
      duration: "50 Mins",
      rating: 4.7,
      image: nailExtensionsImg,
      subCategory: "Acrylic Extensions"
    },
    {
      id: "wn-11",
      title: "Acrylic Extensions Removal",
      description: "Safe, non-destructive filing and dissolving of acrylic extensions with deep cuticle oil care.",
      price: "699",
      duration: "30 Mins",
      rating: 4.8,
      image: nailExtentionImg,
      subCategory: "Acrylic Extensions"
    },
    {
      id: "wn-12",
      title: "Extensions Per Finger",
      description: "Single sculpted acrylic nail extension replacement for individual broken or chipped nails.",
      price: "300",
      duration: "15 Mins",
      rating: 4.9,
      image: extensionAndGelImg,
      subCategory: "Acrylic Extensions"
    },

    // NAIL ART
    {
      id: "wn-13",
      title: "Glitter / Marble / Chrome / French Art",
      description: "Bespoke custom nail styling options including metallic chrome rubs, custom glitters, or marble veins (price per nail).",
      price: "100",
      duration: "10 Mins",
      rating: 4.9,
      image: marbleAndOmbreImg,
      subCategory: "Nail Art"
    },
    {
      id: "wn-14",
      title: "Hand-Painted Nail Art",
      description: "Intricate, custom hand-painted minimal linear art, detailed micro florals, or branding details (price per nail).",
      price: "150",
      duration: "15 Mins",
      rating: 4.9,
      image: handPaintingImg,
      subCategory: "Nail Art"
    },
    {
      id: "wn-15",
      title: "Stone & 3D Artistry",
      description: "Luxury application of dimensional studs, sparkling Swarovski crystals, or 3D gel floral sculpting (price per nail).",
      price: "200",
      duration: "15 Mins",
      rating: 5.0,
      image: threeDNailArtImg,
      subCategory: "Nail Art",
      tag: "Luxury Accent"
    },

    // PREMIUM NAIL DESIGNS
    {
      id: "wn-16",
      title: "Aurora Chrome Masterpiece",
      description: "Full luxury sculpted extensions burnished with ultra-fine Aurora color-shifting chrome powder for a glossy glazed finish.",
      price: "2499",
      duration: "90 Mins",
      rating: 5.0,
      image: threeDNailArt2Img,
      subCategory: "Premium Nail Designs",
      tag: "Retina Shimmer"
    },
    {
      id: "wn-17",
      title: "Velvet French Dream Set",
      description: "Elegant velvet cat-eye shifts layered over flawless hand-sculpted French acrylic extensions with high-gloss topcoat.",
      price: "3499",
      duration: "100 Mins",
      rating: 5.0,
      image: nailArtttImg,
      subCategory: "Premium Nail Designs",
      tag: "Artisan Craft"
    },
    {
      id: "wn-18",
      title: "Bridal Luxury Ombre Extensions",
      description: "Custom sculpted extensions with pink-to-white ombre gradient, luxury crystals, and minimal gold foil inserts.",
      price: "3999",
      duration: "120 Mins",
      rating: 5.0,
      image: bridalNailsImg,
      subCategory: "Premium Nail Designs",
      tag: "Bride Highlight"
    },
    {
      id: "wn-19",
      title: "Amrutha Signature Hand-Painted Set",
      description: "Our ultimate lookbook set featuring bespoke hand-painted botanical linear art, 3D gel framing, and high-shine glazed overlays.",
      price: "4499",
      duration: "130 Mins",
      rating: 5.0,
      image: gelNailartImg,
      subCategory: "Premium Nail Designs",
      tag: "Masterpiece"
    }
  ]
};

// ==================== WOMEN SERVICES DATA ====================
export const womenServices = [
  {
    category: "Hair",
    description: "Sartorial haircuts, blow dry, and custom event styling.",
    items: [
      { id: "wh-1", title: "Basic Hair Cut", description: "Precision trim and split ends alignment.", price: "349", duration: "30 Mins", rating: 4.7 },
      { id: "wh-2", title: "Shoulder Length Hair Cut", description: "Clean layering or straight blunt haircut adapted for shoulder length.", price: "499", duration: "40 Mins", rating: 4.8 },
      { id: "wh-3", title: "Advanced Cut & Restyle", description: "Complete creative hair transformation, professional texture profile, and styling.", price: "799", duration: "50 Mins", rating: 4.9, tag: "Popular" },
      { id: "wh-4", title: "Creative Cut", description: "Signature styling cuts (bobs, pixies, shag) crafted by senior stylists.", price: "899", duration: "60 Mins", rating: 5.0, tag: "Elite Only" },
      { id: "wh-5", title: "Kids Hair Cut", description: "Gentle styling haircut for children.", price: "349", duration: "25 Mins", rating: 4.8 },
      { id: "wh-6", title: "Straight Blow Dry", description: "Sleek, smooth, flat blow dry styling.", price: "499", duration: "30 Mins", rating: 4.8 },
      { id: "wh-7", title: "Curl Blow With Wash", description: "Professional wash followed by bouncy, high-volume curling styling.", price: "599", duration: "45 Mins", rating: 4.9, tag: "Great Value" },
      { id: "wh-8", title: "Crimping With Blow Dry", description: "Volume-boosting crimp styling for long-lasting body and texture.", price: "1500", duration: "50 Mins", rating: 4.7 },
      { id: "wh-9", title: "Ironing With Wash", description: "Shampoo wash followed by sleek, thermal flat-iron straightening (depends on length).", price: "1200 - 2000", duration: "60 Mins", rating: 4.8 }
    ]
  },
  {
    category: "Hair Colour",
    description: "Ammonia-free vibrant hues, dimensional highlights, and rich texturizing permanent smoothing.",
    items: [
      { id: "hc-1", title: "Root Touch-Up (Ammonia)", description: "Quick, durable coverage for grey roots.", price: "1199", duration: "45 Mins", rating: 4.7 },
      { id: "hc-2", title: "Ammonia Free Colour (Loreal)", description: "Scalp-friendly premium Loreal root touch-up.", price: "1399", duration: "45 Mins", rating: 4.9, tag: "Best Seller" },
      { id: "hc-3", title: "Ammonia Free Colour (Schwarzkopf)", description: "Scalp-gentle root touch-up with Schwarzkopf formulas.", price: "1499", duration: "45 Mins", rating: 4.9 },
      { id: "hc-4", title: "Global Hair Colour", description: "Full-length deep global hair color (depends on length).", price: "1999 onwards", duration: "90 Mins", rating: 4.8 },
      { id: "hc-5", title: "Pre Lightening Streaks", description: "Crown pre-lightening bleach streaks.", price: "199", duration: "45 Mins", rating: 4.8 },
      { id: "hc-6", title: "Creative Colour Streaks", description: "Vibrant global fashion streaks.", price: "349", duration: "45 Mins", rating: 4.9 },
      { id: "hc-7", title: "Highlights (4 Sections)", description: "Dimensional accents to frame face contours.", price: "999", duration: "60 Mins", rating: 4.8 },
      { id: "hc-8", title: "Global Highlighting", description: "Multi-dimensional luxury full highlights (depends on length).", price: "2999 - 4999", duration: "120 Mins", rating: 4.9 },
      { id: "hc-9", title: "Global Highlighting With Fusion Colour", description: "Artistic full highlights blended with custom fusion tones.", price: "3499 - 5999", duration: "150 Mins", rating: 5.0, tag: "Premium" },
      { id: "hc-10", title: "Keratin Treatment", description: "Deep protein smoothing therapy to eliminate frizz (depends on length).", price: "5499 onwards", duration: "120 Mins", rating: 4.9 },
      { id: "hc-11", title: "Kera Straight", description: "Hybrid deep keratin smoothing and thermal straight alignment (depends on length).", price: "6499 onwards", duration: "150 Mins", rating: 5.0 },
      { id: "hc-12", title: "Permanent Perming", description: "Creates bouncy, long-lasting curls or beachy waves (depends on length).", price: "11999 onwards", duration: "120 Mins", rating: 4.7 },
      { id: "hc-13", title: "Hair Botox", description: "Filler therapy to rebuild broken hair cuticles and elasticity (depends on length).", price: "5499 onwards", duration: "150 Mins", rating: 5.0, tag: "Luxury Care" },
      { id: "hc-14", title: "Permanent Rebonding", description: "Straight rebonding alignment (depends on length).", price: "4999 onwards", duration: "180 Mins", rating: 4.8 }
    ]
  },
  {
    category: "Facials",
    description: "Anti-aging skincare, de-tan correction, and advanced Korean Hydra facials.",
    items: [
      { id: "wf-1", title: "Detan Facial", description: "Botanical tan-lifting massage, soothing pack, and brightening serum.", price: "1299", duration: "50 Mins", rating: 4.7 },
      { id: "wf-2", title: "Vitamin C Facial", description: "Active Vitamin C antioxidants to clear hyper-pigmentation and boost glow.", price: "2199", duration: "60 Mins", rating: 4.9, tag: "Best Seller" },
      { id: "wf-3", title: "Skin Rejuvenating Facial", description: "Peptide-rich lifting massage and hydration mask.", price: "2499", duration: "60 Mins", rating: 4.8 },
      { id: "wf-4", title: "Seaweed Facial", description: "Mineral-packed seaweed extracts to purify pores and control sebum.", price: "2999", duration: "60 Mins", rating: 4.9 },
      { id: "wf-5", title: "Gold Sheen Facial", description: "Luxurious 24K gold foil gel massage for ultimate skin luminosity.", price: "3499", duration: "70 Mins", rating: 4.9 },
      { id: "wf-6", title: "Korean Hydra Facial", description: "Multi-stage vacuum dermabrasion, peptide peel, and ultrasonic serum infusion.", price: "4499", duration: "80 Mins", rating: 5.0, tag: "Premium Korean" },
      { id: "wf-7", title: "Rice Korean Bridal Facial", description: "Traditional rice bran brightening pack and ampoule skin infusion.", price: "5499", duration: "80 Mins", rating: 5.0, tag: "Bridal Special" },
      { id: "wf-8", title: "Anti Aging Facial (Vita Lift)", description: "Muscular massage, firming mask, and collagen serums to lift fine lines.", price: "3499", duration: "75 Mins", rating: 4.9 },
      { id: "wf-9", title: "Anti Acne Facial", description: "Targeted Salicylic acid and clay mask facial to soothe active breakouts.", price: "2999", duration: "60 Mins", rating: 4.8 }
    ]
  },
  {
    category: "Cleanup",
    description: "Deep-pore exfoliation and targeted quick cleanup therapies.",
    items: [
      { id: "wcl-1", title: "Basic Clean Up", description: "Mild scrub and soothing cream massage.", price: "500", duration: "30 Mins", rating: 4.5 },
      { id: "wcl-2", title: "Detan Clean Up", description: "Melanin-clearing scrub and active detan pack.", price: "750", duration: "35 Mins", rating: 4.7 },
      { id: "wcl-3", title: "Insta Glow Clean Up", description: "Fruit enzyme scrub and glowing pack for quick radiance.", price: "1000", duration: "40 Mins", rating: 4.8, tag: "Event Ready" },
      { id: "wcl-4", title: "O3 Clean Up", description: "Premium oxygenating cleanup to purify skin layers.", price: "1250", duration: "40 Mins", rating: 4.9 },
      { id: "wcl-5", title: "Hydra Clean Up", description: "Hyaluronic hydro-jet vacuum extraction cleanup.", price: "1499", duration: "45 Mins", rating: 5.0, tag: "Highly Popular" }
    ]
  },
  {
    category: "Waxing",
    description: "Painless Rica or organic honey waxing for ultimate smooth touch.",
    items: [
      { id: "ww-1", title: "Honey Wax - Hands", description: "Shaping and clean honey waxing for hands.", price: "200", duration: "25 Mins", rating: 4.6 },
      { id: "ww-2", title: "Honey Wax - U.Arms", description: "Quick, clean underarm honey waxing.", price: "120", duration: "15 Mins", rating: 4.7 },
      { id: "ww-3", title: "Honey Wax - Half Legs", description: "Classic honey waxing for half legs.", price: "249", duration: "30 Mins", rating: 4.6 },
      { id: "ww-4", title: "Honey Wax - Full Legs", description: "Classic honey waxing for full legs.", price: "499", duration: "40 Mins", rating: 4.7 },
      { id: "ww-5", title: "Honey Wax - Full Body", description: "Complete, full body honey waxing.", price: "1599", duration: "75 Mins", rating: 4.8 },
      { id: "ww-6", title: "Chocolate Wax - Full Body", description: "Nourishing, sensory anti-inflammatory chocolate full body wax.", price: "2850", duration: "75 Mins", rating: 4.9, tag: "Soothing" },
      { id: "ww-7", title: "Rica Wax - Full Body", description: "Lipo-soluble Italian Rica wax, completely painless and anti-tan.", price: "3799", duration: "75 Mins", rating: 5.0, tag: "Premium Standard" },
      { id: "ww-8", title: "Face - Upper Lip Wax", description: "Clean waxing for upper lip.", price: "40", duration: "8 Mins", rating: 4.6 },
      { id: "ww-9", title: "Face - Chin Wax", description: "Clean waxing for chin.", price: "60", duration: "8 Mins", rating: 4.7 },
      { id: "ww-10", title: "Face - Chin & Sides Wax", description: "Clean waxing for chin and jaw sides.", price: "150", duration: "15 Mins", rating: 4.7 }
    ]
  },
  {
    category: "Pedicure/Manicure",
    description: "Relaxing marine salt soak, organic scrub, clay wraps, and gel polish.",
    items: [
      { id: "wpm-1", title: "Basic Pedicure", description: "Shaping, cuticle grooming, foot scrub, and light massage.", price: "799", duration: "45 Mins", rating: 4.7 },
      { id: "wpm-2", title: "Spa Pedicure", description: "Warm botanical foot soak, sea-salts scrub, mud mask wrap, and deep massage.", price: "1499", duration: "60 Mins", rating: 4.9, tag: "Spa Signature" },
      { id: "wpm-3", title: "Korean Pedicure", description: "Advanced pedicure focusing on skin polishing and gel glaze.", price: "2499", duration: "70 Mins", rating: 4.9 },
      { id: "wpm-4", title: "Glycolic Pedicure", description: "Calluses chemical peel pedicure for baby-soft heels.", price: "3499", duration: "80 Mins", rating: 5.0, tag: "Peel Therapy" },
      { id: "wpm-5", title: "Basic Manicure", description: "Nail shaping, cuticle oil, cream massage, and polish.", price: "750", duration: "40 Mins", rating: 4.7 },
      { id: "wpm-6", title: "De-Tan Manicure", description: "Tan-lifting scrub and mask to restore skin clarity around hands.", price: "1499", duration: "50 Mins", rating: 4.8 },
      { id: "wpm-7", title: "Spa Manicure", description: "Exfoliating marine salts, rich mask wrap, and hand reflexology massage.", price: "1999", duration: "60 Mins", rating: 4.9 },
      { id: "wpm-8", title: "O3 Manicure", description: "Deeply oxygenating O3 system manicure for bright, hydrated hands.", price: "2850", duration: "65 Mins", rating: 5.0 }
    ]
  },
  {
    category: "Peels",
    description: "Clinical-grade AHA/BHA chemical peels targeting scarring, spot correction, and anti-aging.",
    items: [
      { id: "wp-1", title: "Salisilic Peel", description: "Clarifying BHA peel designed to clear acne, comedones, and control sebum.", price: "850", duration: "30 Mins", rating: 4.8, tag: "Acne Control" },
      { id: "wp-2", title: "Glycolic Peel", description: "AHA sugar-cane extract peel designed to dissolve dry cells and revive glow.", price: "1199", duration: "30 Mins", rating: 4.8 },
      { id: "wp-3", title: "Kojic Peel", description: "Fights hyper-pigmentation and dark shadows around neck or face.", price: "1499", duration: "30 Mins", rating: 4.9 },
      { id: "wp-4", title: "Black Peel", description: "Deep clarifying acetic acid peel to flush skin congestion.", price: "2499", duration: "30 Mins", rating: 4.9 },
      { id: "wp-5", title: "Meso Peel", description: "High-dose peptide peel designed to quickly smooth fine lines.", price: "1199", duration: "35 Mins", rating: 4.8 },
      { id: "wp-6", title: "Anti Aging Peel", description: "Ultimate resurfacing peel for dramatic skin rebuilding.", price: "9999", duration: "45 Mins", rating: 5.0, tag: "Advanced Treatment" },
      { id: "wp-7", title: "Medical Guide Note", description: "IMPORTANT: Diabetic patients should inform our certified practitioners before hand. We suggest diabetic patients to avoid this procedure.", price: "Consult Free", duration: "10 Mins", rating: 5.0, tag: "Safety First" }
    ]
  },
  {
    category: "Hair Spa",
    description: "Nutritive scalp massages and hair spas to repair broken fibers and dryness.",
    items: [
      { id: "whs-1", title: "Olive Oil Massage", description: "Nutritive, deeply moisturizing scalp massage with warm olive oil.", price: "450", duration: "25 Mins", rating: 4.8 },
      { id: "whs-2", title: "Nilgiri Ayurvedic Oil", description: "Ayurvedic warm herbal oil massage to relieve headache and stress.", price: "599", duration: "30 Mins", rating: 4.9 },
      { id: "whs-3", title: "Massage With Steam", description: "Scalp oil massage followed by steam conditioning (includes free wash).", price: "699", duration: "40 Mins", rating: 4.9, tag: "Recommended" },
      { id: "whs-4", title: "Deep Moisture Spa", description: "Intense hydration cream spa (depends on length).", price: "1199 - 1999", duration: "50 Mins", rating: 4.8 },
      { id: "whs-5", title: "Repair & Rejuvenating Spa", description: "Fiber repairing cream spa for colored/damaged hair (depends on length).", price: "1799 - 2499", duration: "60 Mins", rating: 4.9 },
      { id: "whs-6", title: "Anti Dandruff Spa", description: "Scaling salicylic scaling and cooling tea tree oil spa (depends on length).", price: "1499 - 2999", duration: "60 Mins", rating: 4.9 },
      { id: "whs-7", title: "Keratin Hair Spa", description: "Intense protein replenishment spa for silkier locks.", price: "1800", duration: "55 Mins", rating: 4.8 },
      { id: "whs-8", title: "Ola Plex Spa", description: "Professional bond-multiplying therapy for chemically processed locks.", price: "3499 - 5499", duration: "60 Mins", rating: 5.0, tag: "Olaplex Original" }
    ]
  },
  {
    category: "Bridal Packages",
    description: "Curated multi-ritual bridal and aesthetic packages.",
    items: [
      {
        id: "wbp-1",
        title: "Detan Facial Package",
        description: "Includes: Detan Facial + Waxing Hands & U.A + Threading + Pedicure + Hands D-Tan.",
        price: "2500",
        duration: "150 Mins",
        rating: 4.9,
        tag: "Classic Value",
        image: bridalMakeover
      },
      {
        id: "wbp-2",
        title: "Vitamin C Facial Package",
        description: "Includes: Vitamin C Glow Facial + Waxing Hands & U.A + Threading + Haircut Advanced + Pedicure.",
        price: "4000",
        duration: "180 Mins",
        rating: 5.0,
        tag: "Best Seller",
        image: bridalMakeover
      },
      {
        id: "wbp-3",
        title: "Skin Rejuvenation Package",
        description: "Includes: Skin Rejuvenation Facial + Rica Waxing (Hands, U.A, Half Legs) + Threading + Haircut + Pedicure + Manicure + Face De-tan Pack.",
        price: "5500",
        duration: "240 Mins",
        rating: 5.0,
        tag: "Absolute Luxury",
        image: bridalMakeover
      }
    ]
  }
];

// ==================== MEN SERVICES DATA ====================
export const menServices = [
  {
    category: "Hair & Grooming",
    description: "Precision tailoring, classic scissor shapes, and professional gentlemen's hair styling.",
    items: [
      { id: "mhg-1", title: "Haircut", description: "Custom precision cut by our senior barber styled with premium hair clay.", price: "250", duration: "30 Mins", rating: 4.8 },
      { id: "mhg-2", title: "Shaving / Trimming", description: "Clean classic wet shave or neat beard length trimming with hot towel refresh.", price: "100", duration: "20 Mins", rating: 4.7 },
      { id: "mhg-3", title: "Beard Shape", description: "Sharp razor contouring, detailed neckline shaping, and premium beard oil application.", price: "150", duration: "25 Mins", rating: 4.9, tag: "Bestseller" },
      { id: "mhg-4", title: "Fusion Hair Cut", description: "Includes: 2 streaks blonde highlights and front temporal temporary hair straightening.", price: "350", duration: "50 Mins", rating: 4.9, tag: "Trending" },
      { id: "mhg-5", title: "Kids Hair Cut", description: "Gentle styling haircut adapted for young boys.", price: "200 - 250", duration: "25 Mins", rating: 4.7 },
      { id: "mhg-6", title: "Hair Styling / Setting", description: "Premium blow dry styling with luxury pomade, wax, or volume spray.", price: "200", duration: "20 Mins", rating: 4.8 },
      { id: "mhg-7", title: "Shampooing", description: "Refreshing deep hair wash with structural nourishing shampoo.", price: "100", duration: "15 Mins", rating: 4.7 },
      { id: "mhg-8", title: "Conditioning", description: "Scalp conditioning therapy to soften textures and lock in shine.", price: "200", duration: "15 Mins", rating: 4.8 }
    ]
  },
  {
    category: "Hair Colour",
    description: "Sleek grey coverage, rapid Ammonia-free formulations, and fashion highlights.",
    items: [
      { id: "mhc-1", title: "Hair Colour (Root Touch-Up)", description: "Professional coverage for root grey hairs to restore natural depth.", price: "449", duration: "35 Mins", rating: 4.7 },
      { id: "mhc-2", title: "Premium Hair Colour", description: "Global premium hair colour for absolute texture shine and deep tone lock.", price: "599", duration: "45 Mins", rating: 4.8 },
      { id: "mhc-3", title: "Pro Rapid Hair Colour (10 mins)", description: "Ultra-fast, high-efficiency rapid color treatment ready in just 10 minutes.", price: "649", duration: "20 Mins", rating: 4.9, tag: "Quick Service" },
      { id: "mhc-4", title: "Ammonia Free Colour (Schwarzkopf)", description: "Scalp-gentle global premium Schwarzkopf ammonia-free colour protection.", price: "799", duration: "45 Mins", rating: 4.9, tag: "Gentle Care" },
      { id: "mhc-5", title: "Beard Colour", description: "Precise matching dye application for beard and moustache outlines.", price: "249", duration: "25 Mins", rating: 4.8 },
      { id: "mhc-6", title: "Hair Highlights (Per Streak)", description: "Sleek, individual pre-lightened fashion highlights per streak.", price: "199", duration: "15 Mins", rating: 4.9 }
    ]
  },
  {
    category: "Hair Treatments",
    description: "Long-lasting deep texturizing straighteners, bouncy perming, and keratin smoothing.",
    items: [
      { id: "mht-1", title: "Permanent Hair Straightening", description: "Advanced chemical structural bonding therapy for highly sleek, straight hair.", price: "3499 onwards", duration: "150 Mins", rating: 4.9 },
      { id: "mht-2", title: "Permanent Hair Perming", description: "Creates rich structural volume, beachy waves, or tight bouncy curls.", price: "5499 onwards", duration: "120 Mins", rating: 4.8 },
      { id: "mht-3", title: "Keratin / Botox / Rebonding / Nano Plastia", description: "High-end deep repair therapies to eliminate frizz, restore amino acids, and straighten hair.", price: "3499 onwards", duration: "150 Mins", rating: 5.0, tag: "Premium Therapy" },
      { id: "mht-4", title: "Temporary Hair Straightening", description: "Clean thermal alignment flat iron styling for daily/event wear.", price: "799 onwards", duration: "40 Mins", rating: 4.7 }
    ]
  },
  {
    category: "Hair Spa",
    description: "Relaxing steam treatments, moisturizing pH scalp balancers, and anti-hairfall therapies.",
    items: [
      { id: "mhs-1", title: "Head Massage With Steam", description: "Relaxing oil pressure points massage followed by warm steam treatment.", price: "250", duration: "30 Mins", rating: 4.9, tag: "Recommended" },
      { id: "mhs-2", title: "Hair Spa (Moisturizing PH Balance)", description: "Nourishing scalp hair spa to restore standard natural moisture level and elasticity.", price: "550", duration: "45 Mins", rating: 4.8 },
      { id: "mhs-3", title: "Anti Dandruff Treatment", description: "Scalp scaling wash and cooling lotion treatment to eliminate active dandruff flakes.", price: "700", duration: "50 Mins", rating: 4.8 },
      { id: "mhs-4", title: "Hair Spa for Chemically Treated Hair", description: "Intense moisture-lock cream therapy designed to repair color-treated or bleached fibers.", price: "900", duration: "50 Mins", rating: 4.9 },
      { id: "mhs-5", title: "Anti Hair Fall Treatment", description: "Follicle stimulation spa with mineral concentrates to reduce thinning.", price: "800", duration: "50 Mins", rating: 4.9 },
      { id: "mhs-6", title: "Anti Dandruff & Hair Fall Treatment", description: "Double action intensive scalp wellness spa fighting both shedding and dandruff.", price: "1000", duration: "60 Mins", rating: 5.0, tag: "Best Value" }
    ]
  },
  {
    category: "Bleach & De-Tan",
    description: "Fast sun tan clearing melanin extraction packs and gold skin glow therapies.",
    items: [
      { id: "mbd-1", title: "Tan Pack For Face", description: "Melanin-clearing soothing cream pack designed to lift skin dullness.", price: "350", duration: "20 Mins", rating: 4.7 },
      { id: "mbd-2", title: "Tan Pack For Face & Neck + Scrub", description: "Deep exfoliating face scrub followed by rich neck & face anti-tan pack.", price: "450", duration: "30 Mins", rating: 4.8, tag: "Popular" },
      { id: "mbd-3", title: "Classic Tan Bleach", description: "Quick classic bleach to restore standard skin brightness.", price: "350", duration: "25 Mins", rating: 4.7 },
      { id: "mbd-4", title: "Gold Bleach", description: "Luxury active gold dust bleach to give a premium radiant sheen.", price: "500", duration: "30 Mins", rating: 4.9 },
      { id: "mbd-5", title: "Bleach For Hands (Elbow)", description: "Brightening tan removal bleach for full hands up to the elbow.", price: "600", duration: "35 Mins", rating: 4.8 },
      { id: "mbd-6", title: "Bleach For Foot (Ankle)", description: "Tan removal bleach for feet up to the ankles.", price: "350", duration: "25 Mins", rating: 4.7 }
    ]
  },
  {
    category: "Facials",
    description: "Clinical face glow treatments, ultrasonic pore cleansing, and anti-aging cell repair.",
    items: [
      { id: "mfa-1", title: "D-Tan Facial", description: "Helps reduce darkness around eyes with moisture hydrate therapy.", price: "999", duration: "50 Mins", rating: 4.8 },
      { id: "mfa-2", title: "Skin Rejuvenating Facial", description: "Improves skin texture and elasticity using peptide-rich creams.", price: "1700", duration: "60 Mins", rating: 4.8 },
      { id: "mfa-3", title: "Vita Lift", description: "Anti-aging facial that lifts facial muscles and visibly reduces fine wrinkles.", price: "2299", duration: "70 Mins", rating: 4.9, tag: "Premium Lift" },
      { id: "mfa-4", title: "Dipigment Treatment", description: "Specialized clinical facial for active skin lightening and stubborn pigmentation reduction.", price: "1999", duration: "60 Mins", rating: 4.9 },
      { id: "mfa-5", title: "Gold Sheen Facial", description: "Luminous gold foil extract facial to improve glow and natural collagen production.", price: "2499", duration: "70 Mins", rating: 5.0, tag: "Special Glow" },
      { id: "mfa-6", title: "Korean Facial", description: "Deep Korean glass skin facial for ultimate firming, deep nourishment, pore cleansing, and gloss.", price: "3999", duration: "80 Mins", rating: 5.0, tag: "Trending Korean" },
      { id: "mfa-7", title: "Hydra Facial", description: "Hydra-vacuum extraction facial that radically improves skin texture and brightens skin tone.", price: "3499", duration: "75 Mins", rating: 5.0, tag: "Top Choice" },
      { id: "mfa-8", title: "O3 Groom Facial", description: "O3 active oxygen cellular therapy to purify dermis layers and give extreme brightness.", price: "4499", duration: "80 Mins", rating: 5.0 }
    ]
  },
  {
    category: "Pedicure & Menicure",
    description: "Deep refreshing mint soaks, skin polishing, and relaxing cuticle grooming.",
    items: [
      { id: "mpm-1", title: "Cool-Mint Pedicure", description: "Refreshing peppermint soak, scrubbing, foot file, and shaping.", price: "799", duration: "45 Mins", rating: 4.7 },
      { id: "mpm-2", title: "De-Tan Pedicure", description: "Melanin clearing de-tan mask, shaping, and foot polishing pedicure.", price: "1599", duration: "55 Mins", rating: 4.8 },
      { id: "mpm-3", title: "Amrutha’s Signature Pedicure", description: "Ultra-luxury pedicure with herbal wrap, marine hot salt scrub, and long reflexology massage.", price: "1999", duration: "65 Mins", rating: 5.0, tag: "Signature Luxe" },
      { id: "mpm-4", title: "Korean Pedicure", description: "Korean aesthetic foot care focusing on deep skin whitening and soft tissue hydration.", price: "2499", duration: "70 Mins", rating: 4.9 },
      { id: "mpm-5", title: "Cool-Mint Manicure", description: "Refreshing mint-infused hand soak, nail cleaning, cuticle oils, and skin massage.", price: "799", duration: "40 Mins", rating: 4.7 },
      { id: "mpm-6", title: "De-Tan Manicure", description: "Removes sun spots, tanned lines, and dryness from wrists and fingers.", price: "1299", duration: "50 Mins", rating: 4.8 },
      { id: "mpm-7", title: "Amrutha’s Signature Manicure", description: "Nail sculpting, deluxe mask, warm oil soak, and relaxing arm massage.", price: "1699", duration: "55 Mins", rating: 4.9 },
      { id: "mpm-8", title: "Korean Manicure", description: "Deep hands polishing and glaze treatment for perfectly smooth palms.", price: "2299", duration: "60 Mins", rating: 4.9 }
    ]
  },
  {
    category: "Peels",
    description: "Clinical acid resurfacing, wart/skin tag removals, and premium laser therapies.",
    items: [
      { id: "mpe-1", title: "Anti Acne Peel", description: "Targeted Salicylic acid peel to flush out active acne-causing bacteria.", price: "1499", duration: "30 Mins", rating: 4.8 },
      { id: "mpe-2", title: "Skin Lightening Peel", description: "AHA-infused chemical peel to clear light shadows and sun damage.", price: "1799", duration: "30 Mins", rating: 4.8 },
      { id: "mpe-3", title: "Anti Pigmentation Peel", description: "Fades uneven melanin layers and skin darkening.", price: "1999", duration: "30 Mins", rating: 4.9 },
      { id: "mpe-4", title: "Combination Peel", description: "Custom multi-acid solution peel mapped for T-zone congestion.", price: "2500", duration: "35 Mins", rating: 4.9, tag: "Specialist Choice" },
      { id: "mpe-5", title: "Inno Peel", description: "High-performance medical skin-resurfacing peel for deep scars and texture rebuilding.", price: "7999", duration: "45 Mins", rating: 5.0 },
      { id: "mpe-6", title: "Warts Removal / Skin Tags", description: "Safe clinical cauterization or removal. Note: Diabetic patients should inform beforehand.", price: "400 onwards", duration: "20 Mins", rating: 4.9, tag: "Safety Check" },
      { id: "mpe-7", title: "Laser Hair Removal", description: "Advanced clinical permanent hair reduction per sitting.", price: "3000 per sitting", duration: "45 Mins", rating: 5.0, tag: "Clinical Grade" },
      { id: "mpe-8", title: "Laser Skin Tightening & Rejuvenation", description: "Advanced clinical laser skin tightening and tone rejuvenation per session.", price: "2500 per session", duration: "40 Mins", rating: 4.9, tag: "Premium Clinical" }
    ]
  },
  {
    category: "Groom Packages",
    description: "Ultimate luxury grooming experiences, make-up, and hair transformations for bridegrooms.",
    items: [
      {
        id: "mgp-1",
        title: "Bridegroom Premium Package",
        description: "Includes: Hair Dressing, Shaving/Trimming, Hair Colour or Tan Pack for Foot, Scalp Massage, Hair Spa, Gold Sheen / O3 Facial, Crystal Pedicure, Crystal Manicure, Bleach for Hands, Bleach for Neck, Full Hands Scrub + Neck Scrub.",
        price: "6499",
        duration: "240 Mins",
        rating: 5.0,
        tag: "Ultimate Luxe",
        image: counterAmrutha
      },
      {
        id: "mgp-2",
        title: "Bridegroom Package",
        description: "Includes: Hair Dressing, Shaving/Trimming, Hair Spa, Premium Gold Facial, Pedicure, Manicure, Bleach for Neck, Hair Colour or Tan Pack for Hands.",
        price: "4599",
        duration: "180 Mins",
        rating: 5.0,
        tag: "Best Seller",
        image: counter2
      },
      {
        id: "mgp-3",
        title: "Party Make-Up",
        description: "Sleek professional makeover. Includes: Face Makeup, Pro Bases, Hair Styling.",
        price: "3499",
        duration: "90 Mins",
        rating: 4.9,
        image: salonOverview
      },
      {
        id: "mgp-4",
        title: "Wedding Make-Up",
        description: "Luxury high-definition bridegroom makeover. Includes: Face Makeup, Pro Bases, Hair Styling.",
        price: "4999",
        duration: "120 Mins",
        rating: 5.0,
        tag: "Highly Requested",
        image: salonOverview
      },
      {
        id: "mgp-5",
        title: "Corrective Make-Up",
        description: "Blemish, acne scars, and complexion correction. Includes: Face Makeup, Pro Bases, Hair Styling.",
        price: "5500",
        duration: "120 Mins",
        rating: 4.9,
        image: counter2
      }
    ]
  }
];

// ==================== COMMON TESTIMONIALS ====================
export const testimonials = [
  {
    quote: "The Hydra Facial at Amrutha is simply out of this world. My skin feels incredibly smooth and hydrated. The luxury spa feel is absolutely genuine!",
    author: "Amala Raju",
    role: "Regular Client",
    rating: 5
  },
  {
    quote: "I got a set of custom chrome gel extensions done. The precision of their nail technicians is top tier, and my nails look incredibly premium. Worth every rupee!",
    author: "Pranitha Reddy",
    role: "Beauty Blogger",
    rating: 5
  },
  {
    quote: "Vanasthalipuram has long needed a high-end salon like this. The ivory, lilac and teal design feels so relaxing, and the service is incredibly professional.",
    author: "Vikram Sen",
    role: "Business Owner",
    rating: 5
  },
  {
    quote: "Their Chrome Nail Art is spectacular! The detailing is done with extreme patience. The WhatsApp booking was smooth and I didn't have to wait a minute.",
    author: "Divya Teja",
    role: "Designer",
    rating: 5
  }
];

// ==================== WORK GALLERY ====================
export const galleryItems = [
  // 1. HAIR
  { id: 1, title: "Bridal Couture Styling & Hair Makeover", category: "Hair", image: bridalMakeover },
  { id: 2, title: "Artisan Hair Highlights & Balayage", category: "Hair", image: hairHighlights },

  // 2. NAIL ART
  { id: 3, title: "Signature French Gel Polish", category: "Nail Art", image: gelFrenchPolishImg },
  { id: 4, title: "Aurora Glazed Chrome & Cat Eye Art", category: "Nail Art", image: catEyeNailsImg },
  { id: 5, title: "Luxury 3D Sculpted Nail Art", category: "Nail Art", image: threeDNailArt2Img },
  { id: 6, title: "Velvet French Dream Set", category: "Nail Art", image: nailArtttImg },
  { id: 7, title: "Elite Bridal Lace Custom Nails", category: "Nail Art", image: bridalNailsImg },
  { id: 8, title: "Hand-Painted Floral Botanical Gel Art", category: "Nail Art", image: gelNailartImg },
  { id: 9, title: "Artisan Fruit Themed Summer Nailart", category: "Nail Art", image: fruitNailart },
  { id: 10, title: "High-Durability Sculpted Acrylics", category: "Nail Art", image: acrylicNailsImg },
  { id: 11, title: "Clean Elegant Nude Gel Manicure", category: "Nail Art", image: simpleGelNailsImg },
  { id: 12, title: "Sparkling Swarovski Stone Accent Art", category: "Nail Art", image: stoneArtImg },
  { id: 13, title: "Sunset Blend Gel Ombre", category: "Nail Art", image: gelOmbreImg },
  { id: 14, title: "Rich Glossy Classic Gel Coating", category: "Nail Art", image: gelPolishImg },

  // 3. SALON INTERIORS
  { id: 15, title: "Amrutha Welcoming Lounge & Reception", category: "Salon Interiors", image: counterAmrutha },
  { id: 16, title: "Plush Velvet Pedicure Spa Thrones", category: "Salon Interiors", image: pedicureSeats },
  { id: 17, title: "Backlit LED Sleek Styling Mirrors", category: "Salon Interiors", image: salonMirrors },
  { id: 18, title: "Premium Grand Interior Overview", category: "Salon Interiors", image: salonOverview },
  { id: 19, title: "Consultation Counter & Product Display", category: "Salon Interiors", image: counter2 },
  { id: 20, title: "Elite Interior Styling Stations", category: "Salon Interiors", image: salonInterior },
  { id: 21, title: "Elite Nail Studio Styling Desk & Team", category: "Salon Interiors", image: nailstudioStaffImg },

  // 4. TREATMENTS
  { id: 25, title: "Permanent Eyebrows Microblading", category: "Treatments", image: brows },
  { id: 26, title: "Ultra-Fine 3D Micro-shading Eyebrows", category: "Treatments", image: permanentBrows }
];
