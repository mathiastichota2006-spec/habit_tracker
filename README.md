# habit_tracker

Jednoduchá webová aplikace pro sledování návyků, jako je studium, spánek nebo cvičení. Slouží k rychlému přehledu o tom, jak se vám daří dlouhodobě plnit cíle a udržovat pravidelnost.

## Co web umí

- Umožňuje zapisovat denní záznamy pro více návyků.
- Zobrazuje přehled posledních 30 dnů v podobě teplotní mapy.
- Při najetí myší na konkrétní den ukáže datum, hodnoty za jednotlivé kategorie a poznámku.
- Nabízí přepínání mezi světlým a tmavým motivem.
- Ukládá data lokálně v prohlížeči, takže je možné je používat bez serveru.

## Funkce

- Karty pro **Studium**, **Spánek** a **Cvičení** v horní části stránky.
- Teplotní mapa s barevným zvýrazněním podle množství zadaných hodin.
- Volba barevného schématu mapy: zelená, červená, modrá nebo žlutá.
- Formulář pro přidání nového záznamu s datem, počtem hodin a popisem.
- Přehled průměrného času od prvního dne používání v pravém panelu.
- Výchozí světlý motiv s možností přepnutí na tmavý.

## Licence: AGPLv3

Tento projekt je licencován pod **AGPLv3** (GNU Affero General Public License verze 3).

### Co to znamená pro uživatele

- Můžete aplikaci používat, upravovat i dále šířit.
- Pokud dostanete upravenou verzi, máte stejná práva ji používat a sdílet.
- Pokud je aplikace nasazená jako webová služba a byla upravena, uživatelé mají mít možnost získat zdrojový kód těchto úprav.

### Co to znamená pro programátora

- Když upravíte a zveřejníte odvozenou verzi, musíte zachovat stejnou licenci AGPLv3.
- Musíte ponechat informace o autorství a licenci.
- Pokud aplikaci provozujete jako síťovou službu s úpravami, musíte nabídnout zdrojový kód upravené verze uživatelům služby.

## Spuštění

Aplikace je statická – stačí otevřít `index.html` v prohlížeči, případně spustit lokální server:

```bash
python3 -m http.server 8000
```

a otevřít <http://localhost:8000>.

## Ukládání dat

Data se ukládají lokálně v prohlížeči pomocí `localStorage`.
