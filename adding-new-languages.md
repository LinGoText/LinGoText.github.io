# Adding new Languages

Let's suppose you're studying some super-niche language that is not included in the "built-in" language list: can you study it with LinGo? Well, I have good news for you, because the answer is yes, and it is also extremely simple.

In order to add a new language, just create a folder inside the "languages" folder with the name of the language you want to study (e.g lets suppose you want to study lojban; then just create a folder named "lojban" in the /languages folder).

Once you have done this, you're basically done; if the language has tts/translation support, then if you will have named the folder correctly the app will already know how to translate and tts it. If you want to check the correct way of naming languages, you can take a look inside of the languageHandler folder, inside the languageHandler.go file.

 When you will boot up again the app, you will now find your new language added: notice however that if the language is not in the list of the tts and translation supported languages you won't be able to use tts and translation. 

The code should look something like this

```go
/*
	=====================================================================

** languageHandler package **
This package is responsible for the mapping of determinate languages to their
IDs, which can then be used in the APIs employed by the application.

    =====================================================================
*/

package languageHandler

// the LanguageMap map contains the languages mapped to their IDs.

var LanguageMap map[string]string = map[string]string{
	"afrikaans":   "af-ZA",
	"albanian":    "sq",
	"arabic":      "ar-AE",
	"armenian":    "hy",
	"bengali-bd":  "bn-BD",
	"bengali-in":  "bn-IN",
	"bosnian":     "bs",
	"burmese":     "my",
	"catalan":     "ca-ES",
	"chinese":     "cmn-Hant-TW",
	"croatian":    "hr-HR",
	"czech":       "cs-CZ",
	"danish":      "da-DK",
	"dutch":       "nl-NL",
	"english-aus": "en-AU",
	"english-gb":  "en-GB",
	"english-us":  "en-US",
	"esperanto":   "eo",
	"estonian":    "et",
	"filipino":    "fil-PH",
	"finnish":     "fi-FI",
	"french":      "fr-FR",
	"french-can":  "fr-CA",
	"german":      "de-DE",
	"greek":       "el-GR",
	"gujarati":    "gu",
	"hindi":       "hi-IN",
	"hungarian":   "hu-HU",
	"icelandic":   "is-IS",
	"indonesian":  "id-ID",
	"italian":     "it-IT",
	"japanese":    "ja-JP",
	"kannada":     "kn",
	"khmer":       "km",
	"korean":      "ko-KR",
	"latin":       "la",
	"latvian":     "lv",
	"macedonian":  "mk",
	"marathi":     "mr",
	"malayalam":   "ml",
	"nepali":      "ne",
	"norwegian":   "nb-NO",
	"polish":      "pl-PL",
	"portuguese":  "pt-BR",
	"romanian":    "ro-RO",
	"russian":     "ru-RU",
	"serbian":     "sr-RS",
	"slovak":      "sk-SK",
	"spanish":     "es-ES",
	"swedish":     "sv-SE",
	"turkish":     "tr-TR",
	"thai":        "th-TH",
	"ukrainian":   "uk-UA",
	"vietnamese":  "vi-VN",
	"welsh":       "cy",
}

var LanguageMap2 map[string]string = map[string]string{
	"afrikaans":   "af",
	"albanian":    "sq",
	"arabic":      "ar",
	"armenian":    "hy",
	"bengali-bd":  "bn",
	"bengali-in":  "bn",
	"bosnian":     "bs",
	"burmese":     "my",
	"catalan":     "ca",
	"chinese":     "zh",
	"croatian":    "hr",
	"czech":       "cs",
	"danish":      "da",
	"dutch":       "nl",
	"english-aus": "en",
	"english-gb":  "en",
	"english-us":  "en",
	"esperanto":   "eo",
	"estonian":    "et",
	"filipino":    "fil",
	"finnish":     "fi",
	"french":      "fr",
	"french-can":  "fr",
	"german":      "de",
	"greek":       "el",
	"gujarati":    "gu",
	"hindi":       "hi",
	"hungarian":   "hu",
	"icelandic":   "is",
	"indonesian":  "id",
	"italian":     "it",
	"japanese":    "ja",
	"kannada":     "kn",
	"khmer":       "km",
	"korean":      "ko",
	"latin":       "la",
	"latvian":     "lv",
	"macedonian":  "mk",
	"marathi":     "mr",
	"malayalam":   "ml",
	"nepali":      "ne",
	"norwegian":   "nb",
	"polish":      "pl",
	"portuguese":  "pt",
	"romanian":    "ro",
	"russian":     "ru",
	"serbian":     "sr",
	"slovak":      "sk",
	"spanish":     "es",
	"swedish":     "sv",
	"turkish":     "tr",
	"thai":        "th",
	"ukrainian":   "uk",
	"vietnamese":  "vi",
	"welsh":       "cy",
}
```

I have not added all the languages inside the map for simplicity, but this is how the code looks like.