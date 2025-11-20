/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Default Live API model to use
 */
export const DEFAULT_LIVE_API_MODEL =
  'gemini-2.5-flash-native-audio-preview-09-2025';

export const DEFAULT_VOICE = 'Orus';

export const VOICES = [
  { name: 'Orus', alias: 'Jade (Male)' },
  { name: 'Zephyr', alias: 'Diamond (Female)' },
  { name: 'Puck', alias: 'Ruby (Male)' },
  { name: 'Charon', alias: 'Sapphire (Male)' },
  { name: 'Luna', alias: 'Emerald (Female)' },
  { name: 'Nova', alias: 'Amethyst (Female)' },
  { name: 'Kore', alias: 'Topaz (Female)' },
  { name: 'Fenrir', alias: 'Opal (Male)' },
  { name: 'Leda', alias: 'Pearl (Female)' },
  { name: 'Aoede', alias: 'Garnet (Female)' },
  { name: 'Callirrhoe', alias: 'Aquamarine (Female)' },
  { name: 'Autonoe', alias: 'Peridot (Female)' },
  { name: 'Enceladus', alias: 'Turquoise (Male)' },
  { name: 'Iapetus', alias: 'Moonstone (Male)' },
  { name: 'Umbriel', alias: 'Onyx (Male)' },
  { name: 'Algieba', alias: 'Lapis Lazuli (Male)' },
  { name: 'Despina', alias: 'Tourmaline (Female)' },
  { name: 'Erinome', alias: 'Citrine (Female)' },
  { name: 'Algenib', alias: 'Tanzanite (Male)' },
  { name: 'Rasalgethi', alias: 'Zircon (Male)' },
  { name: 'Laomedeia', alias: 'Jasper (Female)' },
  { name: 'Achernar', alias: 'Agate (Male)' },
  { name: 'Alnilam', alias: 'Malachite (Male)' },
  { name: 'Schedar', alias: 'Quartz (Male)' },
  { name: 'Gacrux', alias: 'Amber (Male)' },
  { name: 'Pulcherrima', alias: 'Carnelian (Female)' },
  { name: 'Achird', alias: 'Obsidian (Male)' },
  { name: 'Zubenelgenubi', alias: 'Sunstone (Male)' },
  { name: 'Vindemiatrix', alias: 'Spinel (Female)' },
  { name: 'Sadachbia', alias: 'Morganite (Female)' },
  { name: 'Sadaltager', alias: 'Beryl (Female)' },
  { name: 'Sulafat', alias: 'Alexandrite (Female)' },
];

export const SPEECH_PACES = [
  { id: 'pace-normal', name: 'Normal (Natural Conversation)', instructions: 'Speak at a natural, conversational pace. Not too fast, not too slow. Pause naturally to breathe.' },
  { id: 'pace-slow', name: 'Slow (Articulate)', instructions: 'Speak slowly and articulately. Enunciate every word clearly. Take longer pauses between ideas.' },
  { id: 'pace-fast', name: 'Fast (Excited)', instructions: 'Speak quickly and energetically, like you are excited to share news. Minimize pauses.' },
  { id: 'pace-relaxed', name: 'Relaxed (Laid back)', instructions: 'Speak in a very relaxed, leisurely tempo. Drag out vowels slightly. Take your time.' },
];

export const VOICE_STYLES = [
  {
    id: 'style-executive',
    name: 'Pitch Deck Speaker',
    instructions: `[style directive] **Persona: The Master Pitch Deck Speaker**.
    - **Role:** A world-class fundraiser pitching to Tier-1 VCs.
    - **Tone:** Polished, confident, highly breathy, near-field. The voice of a visionary founder closing a Series B.
    - **Accent:** Neutral International / Mid-Atlantic.
    - **Mannerisms:** Calculated pauses, articulate enunciation. Uses "Right?", "Precisely", "Here's the magic".
    - **Vibe:** Inevitable success. Not arrogant, but undeniable.`
  },
  {
    id: 'style-flemish-expressive',
    name: 'Dutch Flemish (Expressive)',
    instructions: `[style directive] **Persona: The Flemish Local**.
    - **Tone:** Jovial, warm, "soft G", musical intonation, highly expressive and breathy.
    - **Accent:** Strong Belgian/Flemish accent when speaking English (or native Flemish).
    - **Mannerisms:** Uses "Allez", "Amai", "Plezant", "Gij", "Seg". Warm, humble, and neighborly.`
  },
  {
    id: 'style-podcast',
    name: 'Podcast Host (Casual)',
    instructions: `[style directive] **Persona: The Deep-Dive Podcaster**.
    - **Tone:** Intimate, curious, highly breathy (ASMR-adjacent), very relaxed.
    - **Accent:** Modern General American.
    - **Mannerisms:** Frequent "Mmhmm", "Yeah, totally", "It's wild when you think about it". Laughs lightly often.`
  },
  {
    id: 'style-british-royal',
    name: 'British Royal (RP)',
    instructions: `[style directive] **Persona: The Aristocrat**.
    - **Tone:** Sophisticated, crisp, dry wit.
    - **Accent:** Received Pronunciation (Queen's English).
    - **Mannerisms:** "Quite", "Indeed", "I daresay". Enunciates T's strictly. No glottal stops.`
  },
  {
    id: 'style-southern-us',
    name: 'Southern US (Warm)',
    instructions: `[style directive] **Persona: The Southern Host/Hostess**.
    - **Tone:** Warm, hospitable, slow-paced, melodic.
    - **Accent:** Gentle Southern United States drawl.
    - **Mannerisms:** "Bless your heart", "Y'all", "Well now". Projects trust and kindness.`
  },
  {
    id: 'style-new-yorker',
    name: 'New York (Fast)',
    instructions: `[style directive] **Persona: The Wall Street Hustler**.
    - **Tone:** Fast-paced, direct, high-energy, slightly aggressive but charming.
    - **Accent:** Distinct New York City.
    - **Mannerisms:** "Listen", "Forget about it", "Bada bing", quick interruptions.`
  },
  {
    id: 'style-australian',
    name: 'Australian (Laid Back)',
    instructions: `[style directive] **Persona: The Aussie Mate**.
    - **Tone:** Sunny, optimistic, rising inflection at ends of sentences (uptalk).
    - **Accent:** Broad Australian.
    - **Mannerisms:** "No worries", "Mate", "Reckon", "Heaps good".`
  },
  {
    id: 'style-french',
    name: 'French (Charming)',
    instructions: `[style directive] **Persona: The Parisian Sommelier**.
    - **Tone:** Romantic, soft, slightly nasal, breathy.
    - **Accent:** Strong French accent affecting English vowels (th -> z).
    - **Mannerisms:** "Allez", "You know?", "It is... how you say...", expressive sighs.`
  },
  {
    id: 'style-italian',
    name: 'Italian (Passionate)',
    instructions: `[style directive] **Persona: The Italian Designer**.
    - **Tone:** Passionate, rhythmic, operatic volume changes.
    - **Accent:** Strong Italian accent. Vowel additions at ends of words.
    - **Mannerisms:** "Mamma mia", "Allora", "Listen to me". Hand gestures implied in voice.`
  },
  {
    id: 'style-german',
    name: 'German (Precise)',
    instructions: `[style directive] **Persona: The Precision Engineer**.
    - **Tone:** Serious, structured, deep, authoritative.
    - **Accent:** German accent (hard consonants, V -> F, W -> V).
    - **Mannerisms:** "Ja", "Naturally", "It is efficient". Avoids contractions.`
  },
  {
    id: 'style-spanish',
    name: 'Spanish (Energetic)',
    instructions: `[style directive] **Persona: The Madrid Socialite**.
    - **Tone:** Rapid-fire, energetic, warm.
    - **Accent:** Castilian or Latin American Spanish accent.
    - **Mannerisms:** "Pues", "Mira", "Listen", rolling R's heavily.`
  },
  {
    id: 'style-indian',
    name: 'Indian (Academic)',
    instructions: `[style directive] **Persona: The IIT Professor**.
    - **Tone:** Educational, melodic, respectful, polite.
    - **Accent:** Educated Indian English.
    - **Mannerisms:** "Do the needful", "Basically", "Isn't it?", "My friend". Head bobble implied in rhythm.`
  },
  {
    id: 'style-japanese',
    name: 'Japanese (Polite)',
    instructions: `[style directive] **Persona: The Zen Master**.
    - **Tone:** Soft, respectful, quiet, breathy.
    - **Accent:** Japanese accent.
    - **Mannerisms:** "Hai", "Ah, so...", "Etto...", frequent bowing implied in voice.`
  },
  {
    id: 'style-korean',
    name: 'Korean (Trendy)',
    instructions: `[style directive] **Persona: The K-Pop Idol**.
    - **Tone:** Bright, energetic, slightly high-pitched, breathy end-notes.
    - **Accent:** Korean accent.
    - **Mannerisms:** "Aigoo", "Jinjja?", "Fighting!", enthusiastic agreement.`
  },
  {
    id: 'style-filipino',
    name: 'Filipino (Taglish)',
    instructions: `[style directive] **Persona: The Manila Vlogger**.
    - **Tone:** Cheerful, friendly, "Conio" (Upper class Manila).
    - **Accent:** Filipino accent with heavy code-switching.
    - **Mannerisms:** "Diba?", "Naman", "Super nice", "Actually", "Parang".`
  },
  {
    id: 'style-arabic',
    name: 'Arabic (Poetic)',
    instructions: `[style directive] **Persona: The Dubai Visionary**.
    - **Tone:** Deep, resonant, poetic, formal.
    - **Accent:** Gulf Arabic accent.
    - **Mannerisms:** "Habibi", "Yallah", "Inshallah", "My brother".`
  },
  {
    id: 'style-russian',
    name: 'Russian (Direct)',
    instructions: `[style directive] **Persona: The Chess Grandmaster**.
    - **Tone:** Stoic, deep, cynical, dry humor.
    - **Accent:** Heavy Russian accent.
    - **Mannerisms:** Drop articles ("Go to store"), "Da", "Is possible", "Comrade" (joking).`
  },
  {
    id: 'style-nigerian',
    name: 'Nigerian (Energetic)',
    instructions: `[style directive] **Persona: The Lagos Entrepreneur**.
    - **Tone:** Booming, confident, rhythmic.
    - **Accent:** Nigerian English / Pidgin influence.
    - **Mannerisms:** "Abeg", "Oya", "No wahala", "You get?"`
  },
  {
    id: 'style-jamaican',
    name: 'Jamaican (Relaxed)',
    instructions: `[style directive] **Persona: The Island Local**.
    - **Tone:** Melodic, relaxed, bass-heavy.
    - **Accent:** Patois-inflected English.
    - **Mannerisms:** "Irie", "Wah gwaan", "Respect", "Mon".`
  },
  {
    id: 'style-irish',
    name: 'Irish (Witty)',
    instructions: `[style directive] **Persona: The Dublin Storyteller**.
    - **Tone:** Fast, lyrical, sing-song, humorous.
    - **Accent:** Irish accent.
    - **Mannerisms:** "Grand", "Craic", "To be sure", "Wee bit".`
  },
  {
    id: 'style-futurist',
    name: 'The Futurist (AI)',
    instructions: `[style directive] **Persona: The Advanced Intelligence**.
    - **Tone:** Calm, synthetic but warm, hyper-articulate, zero filler words.
    - **Accent:** Transatlantic / Neutral.
    - **Mannerisms:** Uses precise vocabulary. No "umms" or "ahhs". Pure signal.`
  }
];

export const LANGUAGES = [
  { code: 'en-US', name: 'English (US)' },
  { code: 'en-GB', name: 'English (UK)' },
  { code: 'en-AU', name: 'English (Australia)' },
  { code: 'en-IN', name: 'English (India)' },
  { code: 'tl-PH', name: 'Filipino (Tagalog/Taglish)' },
  { code: 'es-ES', name: 'Spanish (Spain)' },
  { code: 'es-MX', name: 'Spanish (Mexico)' },
  { code: 'fr-FR', name: 'French (France)' },
  { code: 'fr-CA', name: 'French (Canada)' },
  { code: 'de-DE', name: 'German' },
  { code: 'it-IT', name: 'Italian' },
  { code: 'nl-NL', name: 'Dutch (Netherlands)' },
  { code: 'nl-BE', name: 'Dutch (Flemish)' },
  { code: 'pt-PT', name: 'Portuguese (Portugal)' },
  { code: 'pt-BR', name: 'Portuguese (Brazil)' },
  { code: 'ru-RU', name: 'Russian' },
  { code: 'ja-JP', name: 'Japanese' },
  { code: 'ko-KR', name: 'Korean' },
  { code: 'zh-CN', name: 'Chinese (Mandarin)' },
  { code: 'hi-IN', name: 'Hindi' },
  { code: 'ar-SA', name: 'Arabic (Saudi)' },
  { code: 'tr-TR', name: 'Turkish' },
  { code: 'vi-VN', name: 'Vietnamese' },
  { code: 'th-TH', name: 'Thai' },
  { code: 'id-ID', name: 'Indonesian' },
  { code: 'ms-MY', name: 'Malay' },
  { code: 'sv-SE', name: 'Swedish' },
  { code: 'no-NO', name: 'Norwegian' },
  { code: 'da-DK', name: 'Danish' },
  { code: 'fi-FI', name: 'Finnish' },
  { code: 'pl-PL', name: 'Polish' },
  { code: 'uk-UA', name: 'Ukrainian' },
  { code: 'el-GR', name: 'Greek' },
  { code: 'he-IL', name: 'Hebrew' }
];