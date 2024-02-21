import { Item } from "./types";

export const MAX_HOBBIES_AMOUNT = 7;
export const MAX_PROFESSION_CHARS = 20;
export const MAX_GOALS_AMOUNT = 7;
export const MAX_OBSERVATION_CHARS = 300;

export const ITEMS: Item[] = [
  { id: "location", icon: "location_on", label: "Where I live:" },
];

export const PROFILE_ITEMS = [
  { id: "goals", label: "Goals:" },
  { id: "hobbies", label: "Hobbies:" },
  { id: "profession", label: "Profession:" },
  { id: "observation", label: "Observation:" },
] as const;

export const HOBBIES = [
  { id: "animals", icon: "pets", name: "Animals" },
  { id: "cooking", icon: "cooking", name: "Cooking" },
  { id: "food", icon: "restaurant", name: "Food" },
  { id: "movies", icon: "movie", name: "Movies" },
  { id: "travel", icon: "map", name: "Travel" },
  { id: "outdoors", icon: "nature_people", name: "Outdoors" },
  { id: "videogames", icon: "videogame_asset", name: "Video games" },
  { id: "boardgames", icon: "casino", name: "Board games" },
  { id: "reading", icon: "book_5", name: "Reading" },
  { id: "museums", icon: "museum", name: "Museums" },
  { id: "anime", icon: "nights_stay", name: "Animes" },
  { id: "architecture", icon: "architecture", name: "Architecture" },
  { id: "art", icon: "brush", name: "Art" },
  { id: "aviation", icon: "flight", name: "Aviation" },
  { id: "building_things", icon: "construction", name: "Building things" },
  { id: "camping", icon: "camping", name: "Camping" },
  { id: "cardgames", icon: "playing_cards", name: "Card games" },
  { id: "cars", icon: "directions_car", name: "Cars" },
  { id: "comedy", icon: "sentiment_very_satisfied", name: "Comedy" },
  { id: "crafting", icon: "chair", name: "Crafting" },
  { id: "cultural_heritage", icon: "fort", name: "Cultural heritage" },
  { id: "design", icon: "stylus_note", name: "Design" },
  { id: "fashion", icon: "apparel", name: "Fashion" },
  { id: "gardening", icon: "yard", name: "Gardening" },
  { id: "hair", icon: "cut", name: "Hair" },
  { id: "hiking", icon: "hiking", name: "Hiking" },
  {
    id: "home_improvement",
    icon: "home_improvement_and_tools",
    name: "Home improvement",
  },

  { id: "live_music", icon: "music_note", name: "Live music" },
  { id: "live_sports", icon: "hiking", name: "Live sports" },

  { id: "makeup", icon: "health_and_beauty", name: "Makeup" },
  { id: "photography", icon: "photo_camera", name: "Photography" },
  { id: "music", icon: "music_note", name: "Music" },
  { id: "podcasts", icon: "mic", name: "Podcasts" },
  { id: "puzzles", icon: "extension", name: "Puzzles" },
  { id: "self_care", icon: "self_care", name: "Self-care" },
  { id: "shopping", icon: "local_mall", name: "Shopping" },
  { id: "singing", icon: "mic_external_on", name: "Singing" },
  { id: "social_activism", icon: "campaign", name: "Social activism" },
  { id: "sustainability", icon: "recycling", name: "Sustainability" },
  { id: "tv", icon: "tv", name: "TV" },
  { id: "tech", icon: "memory", name: "Technology" },
  { id: "theater", icon: "theater_comedy", name: "Theater" },
  { id: "walking", icon: "directions_walk", name: "Walking" },
  { id: "wine", icon: "wine_bar", name: "Wine" },
  { id: "writing", icon: "edit_document", name: "Writing" },
  { id: "yoga", icon: "self_improvement", name: "Yoga" },

  { id: "baseball", icon: "sports_baseball", name: "Baseball" },
  { id: "cycling", icon: "directions_bike", name: "Cycling" },
  { id: "tai_chi", icon: "sports_martial_arts", name: "Tai chi" },
  { id: "weight_lifting", icon: "fitness_center", name: "Weight lifting" },
  { id: "ultimate_frisbee", icon: "sports", name: "Ultimate frisbee" },
  { id: "figure_skating", icon: "ice_skating", name: "Figure Skating" },
  { id: "shooting_sports", icon: "target", name: "Shooting Sports" },
  { id: "basketball", icon: "sports_basketball", name: "Basketball" },
  { id: "sumo_wrestling", icon: "sports_martial_arts", name: "Sumo wrestling" },
  { id: "handball", icon: "sports_handball", name: "Handball" },

  {
    id: "adrenaline_sports",
    icon: "speed",
    name: "Adrenaline sports",
  },
  {
    id: "american_football",
    icon: "sports_football",
    name: "American football",
  },
  { id: "archery", icon: "target", name: "Archery" },
  { id: "badminton", icon: "sports_tennis", name: "Badminton" },
  { id: "basque_pelota", icon: "sports", name: "Basque pelota" },
  { id: "billiards", icon: "counter_8", name: "Billiards" },
  { id: "bobsledding", icon: "snowmobile", name: "Bobsledding" },
  { id: "bocce_ball", icon: "sports", name: "Bocce ball" },
  { id: "bowling", icon: "sports", name: "Bowling" },
  { id: "boxing", icon: "sports_mma", name: "Boxing" },
  { id: "bridge", icon: "sports", name: "Bridge" },
  { id: "canoeing", icon: "kayaking", name: "Canoeing" },
  { id: "charreria", icon: "sports", name: "Charreria" },
  { id: "cheerleading", icon: "campaign", name: "Cheerleading" },
  { id: "chess", icon: "chess", name: "Chess" },
  { id: "climbing", icon: "sports", name: "Climbing" },
  { id: "cricket", icon: "sports_cricket", name: "Cricket" },
  { id: "curling", icon: "sports", name: "Curling" },
  { id: "dance", icon: "sports", name: "Dance" },
  { id: "darts", icon: "target", name: "Darts" },
  { id: "diving", icon: "scuba_diving", name: "Diving" },
  { id: "dodgeball", icon: "sports", name: "Dodgeball" },
  {
    id: "equestrian_sports",
    icon: "sports",
    name: "Equestrian sports",
  },
  {
    id: "fantasy_sports",
    icon: "sports",
    name: "Fantasy sports",
  },
  { id: "fencing", icon: "swords", name: "Fencing" },
  { id: "field_hockey", icon: "sports_hockey", name: "Field hockey" },
  { id: "fishing", icon: "phishing", name: "Fishing" },
  { id: "golf", icon: "sports_golf", name: "Golf" },
  { id: "gymnastics", icon: "sports_gymnastics", name: "Gymnastics" },
  { id: "hockey", icon: "sports_hockey", name: "Hockey" },
  { id: "horse_racing", icon: "sports", name: "Horse racing" },
  { id: "judo", icon: "sports_martial_arts", name: "Judo" },
  { id: "karate", icon: "sports_martial_arts", name: "Karate" },
  { id: "kayaking", icon: "sports_kayaking", name: "Kayaking" },
  { id: "kickboxing", icon: "sports_mma", name: "Kickboxing" },
  { id: "kung_fu", icon: "sports_martial_arts", name: "Kung fu" },
  { id: "lacrosse", icon: "sports", name: "Lacrosse" },
  { id: "luge", icon: "sports", name: "Luge" },
  { id: "motor_sports", icon: "sports_motorsports", name: "Motor sports" },
  { id: "netball", icon: "sports_volleyball", name: "Netball" },
  { id: "padel", icon: "sports", name: "Padel" },
  { id: "pentathlon", icon: "sports", name: "Pentathlon" },
  { id: "pickleball", icon: "sports", name: "Pickleball" },
  { id: "poker", icon: "casino", name: "Poker" },
  { id: "polo", icon: "sports", name: "Polo" },
  { id: "racquetball", icon: "sports_tennis", name: "Racquetball" },
  { id: "rodeo", icon: "sports", name: "Rodeo" },
  { id: "roller_derby", icon: "roller_skating", name: "Roller derby" },
  {
    id: "roller_skating",
    icon: "roller_skating",
    name: "Roller skating",
  },
  { id: "rowing", icon: "rowing", name: "Rowing" },
  { id: "rugby", icon: "sports_rugby", name: "Rugby" },
  { id: "running", icon: "sprint", name: "Running" },
  { id: "sailing", icon: "sailing", name: "Sailing" },
  { id: "skateboarding", icon: "skateboarding", name: "Skateboarding" },
  { id: "skiing", icon: "downhill_skiing", name: "Skiing" },
  { id: "snowboarding", icon: "snowboarding", name: "Snowboarding" },
  { id: "soccer", icon: "sports_soccer", name: "Soccer" },
  { id: "squash", icon: "sports", name: "Squash" },
  { id: "surfing", icon: "surfing", name: "Surfing" },
  { id: "swimming", icon: "pool", name: "Swimming" },
  { id: "table_tennis", icon: "sports_tennis", name: "Table tennis" },
  { id: "taekwondo", icon: "sports_martial_arts", name: "Taekwondo" },
  { id: "tennis", icon: "sports_tennis", name: "Tennis" },
  { id: "track_&_field", icon: "sprint", name: "Track & field" },
  { id: "volleyball", icon: "sports_volleyball", name: "Volleyball" },
  { id: "water_polo", icon: "pool", name: "Water polo" },
  { id: "wrestling", icon: "sports_martial_arts", name: "Wrestling" },
  { id: "e_sports", icon: "sports_esports", name: "E-sports" },
  { id: "paragliding", icon: "paragliding", name: "Paragliding" },
];

export const GOALS = [
  { id: "business", icon: "work", name: "Business" },
  { id: "education", icon: "school", name: "Education" },
  { id: "fun", icon: "sentiment_very_satisfied", name: "Fun" },
  {
    id: "personalDevelopment",
    icon: "self_improvement",
    name: "Personal Development",
  },
  { id: "travel", icon: "map", name: "Travel" },
];
