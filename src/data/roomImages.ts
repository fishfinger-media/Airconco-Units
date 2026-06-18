interface RoomImage {
  filename: string;
  room_type: string;
  unit_type: string;
  url: string;
}

const images: RoomImage[] = [
  { filename: "FISHFINGER_3 - Office Wall Mounted - LS - Final 001.jpg", room_type: "office", unit_type: "wall_mounted", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc97755b31cc01c592b0_FISHFINGER_3%20-%20Office%20Wall%20Mounted%20-%20LS%20-%20Final%20001.jpg" },
  { filename: "FISHFINGER_4 - Retail - LS - Final 001.jpg", room_type: "retail", unit_type: "wall_mounted", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc973b99fca6b68a8668_FISHFINGER_4%20-%20Retail%20-%20LS%20-%20Final%20001.jpg" },
  { filename: "FISHFINGER_5 - Server Room Wall Mounted - LS - Final 001.jpg", room_type: "server_room", unit_type: "wall_mounted", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc972536b90c9b6c12ab_FISHFINGER_5%20-%20Server%20Room%20Wall%20Mounted%20-%20LS%20-%20Final%20001.jpg" },
  { filename: "FISHFINGER_6 - Healthcare - Ceiling Cassette - LS - Final 001.jpg", room_type: "healthcare", unit_type: "ceiling_cassette", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc970adfcb091199d47c_FISHFINGER_6%20-%20Healthcare%20-%20Ceiling%20Cassette%20-%20LS%20-%20Final%20001.jpg" },
  { filename: "FISHFINGER_7 - Restaurant - LS - Final 001.jpg", room_type: "restaurant", unit_type: "wall_mounted", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc97cbfa285f3578fbb2_FISHFINGER_7%20-%20Restaurant%20-%20LS%20-%20Final%20001.jpg" },
  { filename: "FISHFINGER_8 - Classroom - Wall Mounted - LS - Final 001.jpg", room_type: "classroom", unit_type: "wall_mounted", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc9797dec47d4db20828_FISHFINGER_8%20-%20Classroom%20-%20Wall%20Mounted%20-%20LS%20-%20Final%20001.jpg" },
  { filename: "FISHFINGER_11 - Office Ceiling Cassette - LS - Final 001.jpg", room_type: "office", unit_type: "ceiling_cassette", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc979b714eadb4eb1f2e_FISHFINGER_11%20-%20Office%20Ceiling%20Cassette%20-%20LS%20-%20Final%20001.jpg" },
  { filename: "FISHFINGER_12 - Retail - LS - Final 001.jpg", room_type: "retail", unit_type: "ceiling_cassette", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc9798ed11857ddf3171_FISHFINGER_12%20-%20Retail%20-%20LS%20-%20Final%20001.jpg" },
  { filename: "FISHFINGER_14 - Restaurant Floor Standing - LS - Final 001.jpg", room_type: "restaurant", unit_type: "floor_standing", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc97e5be2385cb52035b_FISHFINGER_14%20-%20Restaurant%20Floor%20Standing%20-%20LS%20-%20Final%20001.jpg" },
  { filename: "FISHFINGER_17 - Conservatory Wall Mounted - LS - Final 001.jpg", room_type: "conservatory", unit_type: "wall_mounted", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc973b8e58549c083ad1_FISHFINGER_17%20-%20Conservatory%20Wall%20Mounted%20-%20LS%20-%20Final%20001.jpg" },
  { filename: "FISHFINGER_18 - Bedroom Wall Mounted - LS - Final 001.jpg", room_type: "bedroom", unit_type: "wall_mounted", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc977f4d8b366ba817b6_FISHFINGER_18%20-%20Bedroom%20Wall%20Mounted%20-%20LS%20-%20Final%20001.jpg" },
  { filename: "FISHFINGER_19 - Living Room Wall Mounted - LS - Final 001.jpg", room_type: "living_room", unit_type: "wall_mounted", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc97755b31cc01c592c6_FISHFINGER_19%20-%20Living%20Room%20Wall%20Mounted%20-%20LS%20-%20Final%20001.jpg" },
  { filename: "FISHFINGER_20 - Living Room Wall Mounted - LS - Final 001.jpg", room_type: "living_room", unit_type: "wall_mounted", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc979b714eadb4eb1f29_FISHFINGER_20%20-%20Living%20Room%20Wall%20Mounted%20-%20LS%20-%20Final%20001.jpg" },
  { filename: "FISHFINGER_21 - Living Room Wall Mounted - LS - Final 001.jpg", room_type: "living_room", unit_type: "wall_mounted", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc974b268a037f0cf83b_FISHFINGER_21%20-%20Living%20Room%20Wall%20Mounted%20-%20LS%20-%20Final%20001.jpg" },
  { filename: "FISHFINGER_22 - Bedroom Wall Mounted - LS - Final 001.jpg", room_type: "bedroom", unit_type: "wall_mounted", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc98755b31cc01c59367_FISHFINGER_22%20-%20Bedroom%20Wall%20Mounted%20-%20LS%20-%20Final%20001.jpg" },
  { filename: "FISHFINGER_23 - Bedroom Wall Mounted - LS - Final 001.jpg", room_type: "bedroom", unit_type: "wall_mounted", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc97106a5e64d0844ece_FISHFINGER_23%20-%20Bedroom%20Wall%20Mounted%20-%20LS%20-%20Final%20001.jpg" },
  { filename: "FISHFINGER_24 - Conservatory Wall Mounted - LS - Final 001.jpg", room_type: "conservatory", unit_type: "wall_mounted", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc979a1d77735dbbcb54_FISHFINGER_24%20-%20Conservatory%20Wall%20Mounted%20-%20LS%20-%20Final%20001.jpg" },
  { filename: "FISHFINGER_25 - Bedroom Low Wall Mounted - LS - Final 001.jpg", room_type: "bedroom", unit_type: "low_wall_mounted", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc970297a6f0224a424b_FISHFINGER_25%20-%20Bedroom%20Low%20Wall%20Mounted%20-%20LS%20-%20Final%20001.jpg" },
  { filename: "FISHFINGER_26 - Office Ceiling Mounted - LS - Final 001.jpg", room_type: "office", unit_type: "ceiling_mounted", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc9700fe287707c99f23_FISHFINGER_26%20-%20Office%20Ceiling%20Mounted%20-%20LS%20-%20Final%20001.jpg" },
  { filename: "FISHFINGER_27 - Office Reception Ceiling Mounted - LS - Final 001.jpg", room_type: "office_reception", unit_type: "ceiling_mounted", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc97066010d343b61c0e_FISHFINGER_27%20-%20Office%20Reception%20Ceiling%20Mounted%20-%20LS%20-%20Final%20001.jpg" },
  { filename: "FISHFINGER_28 - Server Room Wall Mounted - LS - Final 001.jpg", room_type: "server_room", unit_type: "wall_mounted", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc97f2de96a1b86af1e6_FISHFINGER_28%20-%20Server%20Room%20Wall%20Mounted%20-%20LS%20-%20Final%20001.jpg" },
  { filename: "FISHFINGER_29 - Retail Ceiling Mounted - LS - Final 001.jpg", room_type: "retail", unit_type: "ceiling_mounted", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc97759c6c758a0aa274_FISHFINGER_29%20-%20Retail%20Ceiling%20Mounted%20-%20LS%20-%20Final%20001.jpg" },
  { filename: "FISHFINGER_30 - Restaurant Wall Mounted - LS - Final 001.jpg", room_type: "restaurant", unit_type: "wall_mounted", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc977f4d8b366ba817e4_FISHFINGER_30%20-%20Restaurant%20-Wall%20Mounted%20-%20LS%20-%20Final%20001.jpg" },
  { filename: "FISHFINGER_31 - Healthcare Wall Mounted - LS - Final 001.jpg", room_type: "healthcare", unit_type: "wall_mounted", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc97e5be2385cb520388_FISHFINGER_31%20-%20Healthcare%20-Wall%20Mounted%20-%20LS%20-%20Final%20001.jpg" },
  { filename: "FISHFINGER_32 - Education Ceiling Cassette - LS - Final 001.jpg", room_type: "education", unit_type: "ceiling_cassette", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc970297a6f0224a4257_FISHFINGER_32%20-%20Education%20-%20Ceiling%20Cassette%20-%20LS%20-%20Final%20001.jpg" },
  { filename: "FISHFINGER_AirCon_Roomsets001_Roomset9_Final 001_LS.jpg", room_type: "living_room", unit_type: "wall_mounted", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc97066010d343b61c24_FISHFINGER_AirCon_Roomsets001_Roomset9_Final%20001_LS.jpg" },
  { filename: "FISHFINGER_AirCon_Roomsets001_Roomset10_Final 001_LS.jpg", room_type: "living_room", unit_type: "wall_mounted", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc97c3f238a76d2f8437_FISHFINGER_AirCon_Roomsets001_Roomset10_Final%20001_LS.jpg" },
  { filename: "FISHFINGER_AirCon_Roomsets001_Roomset13_Final 001_LS.jpg", room_type: "bedroom", unit_type: "low_wall_mounted", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc9790734f3580068994_FISHFINGER_AirCon_Roomsets001_Roomset13_Final%20001_LS.jpg" },
  { filename: "FISHFINGER_AirCon_Roomsets001_Roomset15_Final 001_LS.jpg", room_type: "bedroom", unit_type: "wall_mounted", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc9737fbabf9da8f4b06_FISHFINGER_AirCon_Roomsets001_Roomset15_Final%20001_LS.jpg" },
  { filename: "FISHFINGER_AirCon_Roomsets001_Roomset16_Final 001_LS.jpg", room_type: "living_room", unit_type: "wall_mounted", url: "https://cdn.prod.website-files.com/68791e956444d53d9ef94535/6a33dc988befca4810e2c07e_FISHFINGER_AirCon_Roomsets001_Roomset16_Final%20001_LS.jpg" },
];

// Fitted System Type → image unit_type key
const typeToImageType: Record<string, string> = {
  'Wall Mounted': 'wall_mounted',
  'Low Wall Mounted': 'low_wall_mounted',
  'Ceiling Cassette': 'ceiling_cassette',
  'Ceiling Suspended': 'ceiling_mounted',
  'Ceiling Mounted': 'ceiling_mounted',
  'Floor Standing': 'floor_standing',
  'Under Ceiling': 'ceiling_mounted',
  'Ducted Up to 1 - 2m': 'wall_mounted',
  'Ducted Up to 3 - 8m': 'wall_mounted',
  'Ducted Up to 9 - 12m': 'wall_mounted',
};

// Room preference order per image unit_type (residential-first)
const roomPreference: Record<string, string[]> = {
  wall_mounted: ['living_room', 'bedroom', 'conservatory', 'office', 'restaurant', 'retail', 'classroom', 'healthcare', 'server_room'],
  low_wall_mounted: ['bedroom', 'living_room', 'conservatory'],
  ceiling_cassette: ['living_room', 'office', 'retail', 'healthcare', 'education'],
  ceiling_mounted: ['office_reception', 'office', 'retail'],
  floor_standing: ['restaurant', 'living_room', 'office'],
};

export function pickHeroImage(fittedType: string): string {
  const imgType = typeToImageType[fittedType] ?? 'wall_mounted';
  const prefs = roomPreference[imgType] ?? roomPreference['wall_mounted'];
  const pool = images.filter((i) => i.unit_type === imgType);
  if (pool.length === 0) return '';
  for (const room of prefs) {
    const match = pool.find((i) => i.room_type === room);
    if (match) return match.url;
  }
  return pool[0].url;
}

export function allImagesForType(fittedType: string): RoomImage[] {
  const imgType = typeToImageType[fittedType] ?? 'wall_mounted';
  return images.filter((i) => i.unit_type === imgType);
}
