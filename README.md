# Aldea – Living Blueprint for a Regenerative Settlement

**Aldea** to otwarty projekt samowystarczalnej osady / miasteczka, zbudowany na:
- współpracy zamiast rywalizacji,
- regeneracji zamiast eksploatacji,
- technologii w służbie ludziom i naturze.

To repozytorium zawiera **statyczną stronę www** (GitHub Pages) z dokumentacją projektu:
manifestem, konstytucją, planem działania i zarysem technologii – w kilku językach.

---

## 🌍 Dostępne języki

Strona działa w 4 wersjach językowych:

- 🇵🇱 **Polski** – `/pl/`
- 🇬🇧 **English** – `/en/`
- 🇮🇹 **Italiano** – `/it/`
- 🇪🇸 **Español** – `/es/`

Strona główna (`/`) zawiera **landing** z wyborem języka.

---

## 🧱 Struktura projektu

```text
/ (root)
├── index.html              # Landing page – wybór języka i opis projektu
├── pl/
│   └── index.html          # Polska wersja strony
├── en/
│   └── index.html          # Angielska wersja strony
├── it/
│   └── index.html          # Włoska wersja strony
├── es/
│   └── index.html          # Hiszpańska wersja strony
│
├── assets/
│   ├── css/
│   │   └── style.css       # Wspólny styl (ciemny motyw, „eko”/regeneracyjny klimat)
│   └── js/
│       └── main.js         # Obsługa menu mobilnego i nawigacji między językami
│
└── README.md
