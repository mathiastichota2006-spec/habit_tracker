# habit_tracker
Jednoduchý zápisník koníčků.

Prototyp webové aplikace pro sledování návyků (studium, spánek, cvičení) v češtině.

## Spuštění

Aplikace je statická – stačí otevřít `index.html` v prohlížeči, případně spustit lokální server:

```bash
python3 -m http.server 8000
```

a otevřít <http://localhost:8000>.

## Funkce

- Záložky **Studium**, **Spánek** a **Cvičení** rovnoměrně rozdělené v horní liště.
- Teplotní mapa posledních 30 dní; po najetí myší se zobrazí datum, hodiny pro všechny tři kategorie a popis dne.
- Volitelné barevné schéma mapy: zelená, červená, modrá, žlutá. Více hodin = tmavší čtverec, dny bez záznamu jsou tmavě šedé.
- Formulář pro přidání záznamu (datum, hodiny, popis) pod teplotní mapou.
- Průměrný čas od prvního dne používání v pravém panelu.
- Světlý motiv jako výchozí, přepínač světlý/tmavý.

Data se ukládají lokálně v prohlížeči (`localStorage`).
