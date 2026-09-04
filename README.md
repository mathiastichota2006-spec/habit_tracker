# 📈 Sledovač Návyků (Habit Tracker)

Jednoduché a přehledné webové řešení pro sledování vašich denních návyků, jako je studium, spánek nebo cvičení. Aplikace vám pomáhá udržet si dlouhodobou disciplínu a konzistenci s intuitivním rozhraním a vizuálními statistikami.

## ✨ Co můžete dělat v aplikaci

### 🎯 Správa Návyků a Záznamů
- **Zaznamenávání aktivit** – Snadno zapisujte denní hodnoty s datem, počtem hodin a doplňující poznámkou
- **Sledované kategorie** – Přehledně oddělené sledování pro klíčové oblasti (Studium, Spánek, Cvičení)
- **Rychlé přepínání** – Pohodlné karty pro jednotlivé návyky v horní části stránky
- **Úpravy a historie** – Možnost kdykoliv zpětně upravit nebo doplnit záznamy pro konkrétní dny

### 🗺️ Teplotní Mapa (Heatmap)
- **Vizuální přehled konzistence** – Interaktivní teplotní mapa zobrazující posledních 30 dní
- **Barevná intenzita** – Automatické stínování políček podle množství zadaných hodin (čím více času, tím sytější barva)
- **Detailní náhled po najetí** – Po najetí myší na konkrétní den se zobrazí přesné datum, hodnoty za jednotlivé kategorie a vaše poznámka
- **Volba barevného schématu** – Možnost přizpůsobit si vizuál mapy (zelená, modrá, červená nebo žlutá paleta)

### 📊 Statistiky a Průměry
- **Dlouhodobý průměr** – Přehledný postranní panel počítající průměrný denní čas od prvního dne používání
- **Okamžitá zpětná vazba** – Sledujte v reálném čase, zda plníte své cíle a jak se vyvíjí vaše pravidelnost

### 🌓 Tmavý režim
- **Světlý/Tmavý režim** – Přepínání mezi barevnými schématy dle preferencí a času dne
- **Paměť preferencí** – Zvolený motiv se pamatuje, i když zavřete aplikaci

### 💾 Práce s Daty
- **Export dat** – Stáhněte si všechna vaše data ve formátu JSON pro zálohování nebo přesun na jiné zařízení
- **Import dat** – Načtěte dříve exportovaná data a plynule pokračujte v měření
- **Automatické ukládání** – Veškerá data se automaticky ukládají v prohlížeči (Local Storage) bez nutnosti manuálního ukládání

## 🚀 Začínáme

1. Navštivte: https://mathiastichota2006-spec.github.io/habit-tracker/
2. Vyberte kategorii, kterou chcete zaznamenat (Studium, Spánek, Cvičení)
3. Zadejte datum, počet odpracovaných/odspaných hodin a volitelnou poznámku
4. Klikněte na tlačítko pro uložení záznamu
5. Sledujte, jak se vaše teplotní mapa plní a barvy sytí

## 📝 Jak Používat

### Přidání Nového Záznamu
1. V horní části zvolte příslušnou kartu návyku.
2. V sekci pro zadávání vyplňte:
   - **Datum** – Den, ke kterému se aktivita vztahuje
   - **Čas / Hodnotu** – Počet hodin věnovaných návyku
   - **Poznámku** – Krátký popis průběhu (např. „Hluboké soustředění – matematika“, „Kvalitní spánek bez probuzení“)
3. Klikněte na **Uložit**.

### Práce s Teplotní Mapou
- Mapa zobrazuje aktivitu za posledních 30 dní.
- Najetím myší na jakýkoliv den získáte okamžitý přehled o všech splněných cílech daného dne.
- V nastavení si můžete zvolit preferovanou barvu zvýraznění (např. zelená pro růst, modrá pro soustředění).

### Export a Import
- Pro stažení kompletní historie klikněte na tlačítko **💾 Export**.
- Pro obnovení dat vyberte dříve uložený JSON soubor přes **📂 Import**.

## 📋 Podporované Kategorie

- 📚 **Studium** – Sledování času věnovaného samostudiu, škole nebo jazykům
- 😴 **Spánek** – Záznam délky a kvality spánkové regenerace
- 🏋️ **Cvičení** – Měření délky tréninku a fyzické aktivity

## 📜 Licence – AGPLv3

Tato aplikace je licencována pod **GNU Affero General Public License v3.0 (AGPLv3)**.

### Co to znamená pro vás?

Jednoduše řečeno – aplikace je zcela **svobodná a otevřená**:

- ✅ **Můžete ji používat zdarma** – Bez nutnosti objednávky, registrace nebo jakýchkoli poplatků
- ✅ **Můžete si ji stáhnout** – Máte přístup k celému zdrojovému kódu
- ✅ **Můžete ji modifikovat** – Pokud chcete upravit její chování, kód je plně k dispozici
- ✅ **Můžete ji šířit** – Můžete ji sdílet s přáteli, na internetu nebo kdekoliv jinde

### Omezení (pro vývojáře)

Pokud chcete kód upravit a provozovat jej jako online službu pro ostatní:
- Musíte zdrojový kód zachovat otevřený a zveřejnit jej
- Musíte ponechat stejnou licenci (AGPLv3)
- Vaši uživatelé musí mít přístup ke kompletnímu zdrojovému kódu úprav

**Pro běžné uživatele** to znamená jediné: aplikace je stoprocentně transparentní, vaše data jsou výhradně vaše a aplikace vás nijak nesleduje.

## 🛠️ Technologie

- **HTML5** – Sémantická struktura aplikace
- **CSS3** – Moderní responzivní design a stylování teplotních map
- **JavaScript** – Výpočetní logika statistik, správa polí a rendering mapy
- **Local Storage API** – Ukládání veškerých dat přímo v klientském prohlížeči

## 💡 Tipy na Použití

- Zapisujte hodnoty každý den ve stejný čas (např. večer před spaním), aby se ze zápisu samotného stal návyk.
- Používejte poznámky pro kontext – časem uvidíte, co ovlivňuje kvalitu vašeho spánku nebo výkon při cvičení.
- Zvolte si kontrastní barvu mapy, která vás vizuálně nejvíce motivuje k nepřerušování řady.
- Provádějte pravidelný export jednou za měsíc jako prevenci ztráty dat při čištění prohlížeče.

## 📱 Kompatibilita

Aplikace je plně funkční na:
- ✅ Desktop prohlížečích (Chrome, Firefox, Safari, Edge)
- ✅ Mobilních zařízeních a tabletech
- ✅ Offline režim (po stažení souborů funguje lokálně bez internetu)

## ⚠️ Důležité Poznámky

- **Data se ukládají lokálně** – Vše zůstává výhradně v Local Storage vašeho zařízení. Žádné údaje se nikam nepřenášejí.
- **Bezpečnost a soukromí** – Aplikace neobsahuje analytiku ani sledovací skripty.
- **Promazání mezipaměti** – Vymazání cookies a úložiště prohlížeče vymaže i data v aplikaci; pravidelně využívejte zálohování přes export.
- **Záloha** – Pro jistotu si ukládejte exportovaný JSON soubor na bezpečné místo.

## 📞 Podpora a Zpětná Vazba

Máte nápad na vylepšení? Narazili jste na chybu? Vytvořte issue v repozitáři projektu.
