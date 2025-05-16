import type { Category, Dua } from "@/types"

// Mock data for frontend development
const mockCategories: Category[] = [
  {
    id: "1",
    name: "Dua's Importance",
    subcategories: 7,
    duaCount: 50,
  },
  {
    id: "2",
    name: "The most important thing to ask Allah for",
    subcategories: 5,
    duaCount: 30,
  },
  {
    id: "3",
    name: "Allah's guidance",
    subcategories: 4,
    duaCount: 25,
  },
  {
    id: "4",
    name: "Ask for paradise & protection from fire",
    subcategories: 3,
    duaCount: 20,
  },
]

const mockDuas: Record<string, Dua[]> = {
  "1": [
    {
      id: "1",
      number: "1",
      title: "The servant is dependent on his Lord #1",
      arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
      transliteration: "Iyyaka na'budu wa iyyaka nasta'een",
      translation:
        "All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.",
      reference: "Surah Al-Fatir 35:15",
    },
    {
      id: "2",
      number: "2",
      title: "The servant is dependent on his Lord #1",
      arabic:
        "لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
      transliteration:
        "Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadir. Allaahumma laa maani'a limaa a'taita wa laa mu'tia limaa mana'ta wa laa yanfa'u dhal-jaddi minkal-jadd",
      translation:
        "There is none worthy of worship except Allah alone with no partner or associate. He is the Dominion and to Him be all praise, and He is able to do all things. O Allah, one can withhold what You have given and none can give what You have withheld, and no wealth or fortune can benefit anyone for from You comes all wealth and fortune.",
      reference: "Surah Al-Fatir 35:15",
    },
    {
      id: "3",
      number: "3",
      title: "The servant is dependent on his Lord #1",
      arabic: "لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
      transliteration:
        "Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadir",
      translation:
        "None has the right to be worshipped but Allah alone, Who has no partner. His is the dominion and His is the praise, and He is Able to do all things.",
      reference: "Surah Al-Fatir 35:15",
    },
  ],
}

// Simulated API calls
export async function fetchCategories(): Promise<Category[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return mockCategories
}

export async function fetchDuas(categoryId: string): Promise<Dua[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return mockDuas[categoryId] || []
}
