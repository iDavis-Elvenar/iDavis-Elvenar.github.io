var quests = {
    /*"easter_xxii_": [
        "Získaj nejaké množstvo mincí",
        "Vyrob 8x nápoje",
        "Utrať 18 VB",
        "Vyrob 2x produkt základnej manufaktury (3-hodinový)",
        "Vyrob 7x obyčajné nástroje",
        "Použi 4x ľubovoľné kúzlo",
        "Vyrieš 4 strety na mape ALEBO vyrieš 4 turnajové strety ALEBO vyrieš 4 strety vo veži + vyrob 3x košík jedla",
        "Vyrob 2x pokročilé nástroje + získaj 400x úlomky kouzel ALEBO preskúmaj 1 provinciu",
        "Získaj 8 relikvií + vyrieš 4 strety na mape ALEBO získaj 23x opar vidění",
        "Získaj nejaké množstvo mincí + vyrob 3x chlieb",
        "Vyrieš 2 strety na mape ALEBO vyrieš 2 turnajové strety ALEBO vyrieš 2 strety vo veži + získaj 12x opar vidění ALEBO preskúmaj 1 provinciu",
        "Kúp 18 VB + vyrob 7x obyčajné nástroje ALEBO vylepši 1 budovu na level 5 alebo vyšší",
        "Získaj 4 relikvie + vyrob nejaké množstvo základného zboží",
        "Vyrob 2x produkt základnej manufaktury (3-hodinový) + obchoduj 1x u obchodníka",
        "Utrať 18 VB + vyrob 6x chlieb",
        "Utrať 12 VB + trénuj nejaké množstvo jednotiek ALEBO vyrob 1x produkt základnej manufaktury (9-hodinový)",
        "Vyrieš 4 strety na mape ALEBO vyrieš 4 turnajové strety ALEBO vyrieš 4 strety vo veži + vyrob 3x chlieb",
        "Vytvor 2x ponuku na trhu + získaj 1x spojovací činidlo ALEBO získaj 8 relikvií",
        "Vyrob 2x pokročilé nástroje + vyrieš 4 strety na mape ALEBO vyrieš 4 turnajové strety ALEBO použi 1x krmení",
        "Utrať 18 VB + vyrob 2x produkt základnej manufaktury (3-hodinový)",
        "Kúp 18 VB + preskúmaj 1 provinciu ALEBO vylepši 1 budovu na level 5 alebo vyšší",
        "Vyrieš 4 strety na mape ALEBO vyrieš 4 turnajové strety ALEBO vyrieš 4 strety vo veži + vyrob 6x chlieb",
        "Vyrob 3x produkt základnej manufaktury (9-hodinový) + získaj 1x spojovací činidlo ALEBO získaj 4 relikvie",
        "Použi 8x ľubovoľné kúzlo + vyrob 6x pokročilé nástroje",
        "Utrať 18 VB + vyrob 4x produkt základnej manufaktury (3-hodinový)",
        "Vyrieš 2 strety na mape ALEBO vyrieš 2 turnajové strety ALEBO vyrieš 2 strety vo veži + vyrob nejaké množstvo zásob",
        "Vlož 15 VB do ľubovoľného prastarého divu + trénuj nejaké množstvo jednotiek ALEBO získaj nejaké množstvo mincí",
        "Vyrieš 6 stretov na mape ALEBO vyrieš 6 turnajových stretov ALEBO vyrieš 6 stretov vo veži + získaj 600x úlomky kouzel",
        "Kúp 18 VB + vykonaj 7x susedskú výpomoc",
        "Vyrob nejaké množstvo zásob + získaj 2x spojovací činidlo ALEBO získaj 46x opar vidění",
        "Vyrob nejaké množstvo základného zboží + získaj 1x ľubovoľné kúzlo ALEBO získaj 600x úlomky kouzel",
        "Získaj 600x úlomky kouzel + obchoduj 3x u obchodníka",
        "Vyrob nejaké množstvo základného zboží + získaj 1x spojovací činidlo",
        "Vyrob nejaké množstvo zásob + získaj 800x úlomky kouzel ALEBO trénuj nejaké množstvo jednotiek",
        "Vyrob nejaké množstvo štandardného zboží ALEBO vyskúmaj 1 technológiu + získaj 35x opar vidění ALEBO získaj 12 relikvií",
        "Vyrieš 4 strety na mape ALEBO vyrieš 4 turnajové strety ALEBO vyrieš 4 strety vo veži + získaj 23x opar vidění ALEBO preskúmaj 1 provinciu",
        "Vyrieš 8 stretov na mape ALEBO vyrieš 8 turnajových stretov ALEBO vyrieš 8 stretov vo veži + vyrob nejaké množstvo zásob",
        "Získaj 2x spojovací činidlo ALEBO získaj 16 relikvií + vylepši 1 budovu na level 5 alebo vyšší ALEBO použi 3x dešť mincí",
        "Použi 8x ľubovoľné kúzlo + vyrob nejaké množstvo zásob",
        "Vlož 15 VB do ľubovoľného prastarého divu + vyrob nejaké množstvo základného zboží",
        "Vyrob nejaké množstvo zásob + vyrieš 1 provinciu ALEBO vyrieš 6 turnajových stretov",
        "Získaj nejaké množstvo mincí + vyrob nejaké množstvo zásob",
        "Získaj 12 relikvií + vyrob nejaké množstvo základného zboží",
        "Vyrob nejaké množstvo zásob + získaj 600x úlomky kouzel ALEBO trénuj nejaké množstvo jednotiek",
        "Vyrieš 8 stretov na mape ALEBO vyrieš 8 turnajových stretov ALEBO vyrieš 8 stretov vo veži + získaj 2x spojovací činidlo",
        "Vyrob nejaké množstvo základného zboží + utrať 46 VB",
        "Vlož 15 VB do ľubovoľného prastarého divu + trénuj nejaké množstvo jednotiek ALEBO získaj nejaké množstvo mincí",
        "Vyrieš 6 stretov na mape ALEBO vyrieš 6 turnajových stretov ALEBO vyrieš 6 stretov vo veži + získaj 600x úlomky kouzel",
        "Kúp 18 VB + vykonaj 7x susedskú výpomoc",
        "Vyrob nejaké množstvo zásob + získaj 2x spojovací činidlo ALEBO získaj 46x opar vidění",
        "Vyrob nejaké množstvo základného zboží + získaj 1x ľubovoľné kúzlo ALEBO získaj 600x úlomky kouzel",
        "Získaj 8x ľubovoľné kúzlo + vyrob nejaké množstvo zásob",
        "Získaj 1x spojovací činidlo ALEBO získaj 12 relikvií + vylepši 1 budovu na level 5 alebo vyšší ALEBO použi 3x příděl zásob",
        "Získaj 600x úlomky kouzel + obchoduj 3x u obchodníka",
        "Vyrob nejaké množstvo zásob + vyrieš 1 provinciu ALEBO vyrieš 6 turnajových stretov",
        "Kúp 37 VB + preskúmaj 1 provinciu ALEBO vylepši 1 budovu na level 5 alebo vyšší",
        "Získaj nejaké množstvo mincí + vyrob nejaké množstvo základného zboží",
        "Vyrieš 10 stretov na mape ALEBO vyrieš 10 turnajových stretov ALEBO vyrieš 10 stretov vo veži + použi 8x ľubovoľné kúzlo",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ],*/
    "february_xxii_": [
        "Získaj nejaké množstvo mincí",
        "Vyrob 4x nápoje",
        "Utrať 8 VB",
        "Vykonaj 4x susedskú výpomoc",
        "Vyrob 4x produkt základnej manufaktury (3-hodinový)",
        "Vyrieš 4 strety na mape ALEBO vyrieš 4 turnajové strety + vyrob 2x košík jedla",
        "Získaj 4 relikvie + vyrob 4x produkt základnej manufaktury (3-hodinový)",
        "Utrať 4 VB + obchoduj 3x u obchodníka",
        "Vyrob 4x produkt základnej manufaktury (3-hodinový) + použi 2x ľubovoľný zesilovač ALEBO vyrieš 2 strety na mape vyjednávaním",
        "Utrať 10 VB + vyrob 4x košík jedla ALEBO vyrob 4x produkt základnej manufaktury (9-hodinový)",
        "Vyrieš 4 strety na mape ALEBO vyrieš 4 strety vo veži + vyrob 2x košík jedla",
        "Vyrieš 4 strety na mape ALEBO vyrieš 4 turnajové strety + vyrob 6x chlieb",
        "Vytvor 3x ponuku na trhu + získaj 1x spojovací činidlo ALEBO získaj 4 relikvie",
        "Použi 2x ľubovoľné kúzlo + vyrob 6x pokročilé nástroje",
        "Utrať 8 VB + vyrob 4x produkt základnej manufaktury (3-hodinový)",
        "Vyrieš 2 strety na mape ALEBO vyrieš 2 turnajové strety + vyrob nejaké množstvo zásob",
        "Získaj 200x úlomky kouzel ALEBO trénuj nejaké množstvo jednotiek + získaj 1x spojovací činidlo ALEBO vyrieš 2 strety na mape bojom",
        "Utrať 8 VB ALEBO vyrob 6x produkt základnej manufaktury (3-hodinový) + získaj 10x opar vidění ALEBO získaj 4 relikvie",
        "Získaj nejaké množstvo mincí + utrať 4 VB",
        "Vyrieš 4 strety na mape ALEBO vyrieš 4 turnajové strety + preskúmaj 1 provinciu ALEBO vyrob 3x košík jedla",
        "Získaj 3x ľubovoľné kúzlo + získaj 5x opar vidění ALEBO vyrieš 3 strety na mape vyjednávaním",
        "Kúp 8 VB + vyrieš 4 strety na mape ALEBO získaj 10x opar vidění",
        "Utrať 12 VB + preskúmaj 1 provinciu ALEBO vylepši 2 budovy na level 5 alebo vyšší",
        "Získaj 4 relikvie + vyrob 2x produkt základnej manufaktury (9-hodinový)",
        "Vyrieš 6 stretov na mape ALEBO vyrieš 6 stretov vo veži + vyrob nejaké množstvo zásob",
        "Získaj 800x úlomky kouzel + vyskúmaj 1 technológiu ALEBO získaj 20x opar vidění",
        "Vyrieš 6 stretov na mape ALEBO vyrieš 6 turnajových stretov + vyrob 3x košík jedla",
        "Získaj 12 relikvií + vyrob 6x produkt základnej manufaktury (3-hodinový)",
        "Utrať 8 VB + obchoduj 4x u obchodníka",
        "Vyrob 6x produkt základnej manufaktury (3-hodinový) + použi 3x ľubovoľný zesilovač ALEBO vyrieš 3 strety na mape vyjednávaním",
        "Utrať 15 VB + vyrob 6x košík jedla ALEBO vyrob 6x produkt základnej manufaktury (9-hodinový)",
        "Vyrieš 6 stretov na mape ALEBO vyrieš 6 stretov vo veži + vyrob 3x košík jedla",
        "Vyrob nejaké množstvo základného zboží + získaj 2x ľubovoľné kúzlo",
        "Získaj 12 relikvií + vyrob 4x produkt základnej manufaktury (9-hodinový)",
        "Vyrob nejaké množstvo zásob + získaj 400x úlomky kouzel ALEBO trénuj nejaké množstvo jednotiek",
        "Vyrieš 6 stretov na mape ALEBO vyrieš 6 turnajových stretov + získaj 2x spojovací činidlo",
        "Vyrob nejaké množstvo štandardného zboží + utrať 12 VB",
        "Kúp 8 VB + vyrieš 4 strety na mape ALEBO získaj 10x opar vidění",
        "Utrať 12 VB + preskúmaj 1 provinciu ALEBO vylepši 2 budovy na level 5 alebo vyšší",
        "Získaj 4 relikvie + vyrob 2x produkt základnej manufaktury (9-hodinový)",
        "Vyrieš 6 stretov na mape ALEBO vyrieš 6 stretov vo veži + vyrob nejaké množstvo zásob",
        "Získaj 800x úlomky kouzel + vyskúmaj 1 technológiu ALEBO získaj 20x opar vidění",
        "Získaj nejaké množstvo mincí + vyrob nejaké množstvo zásob",
        "Získaj 12 relikvií + získaj nejaké množstvo štandardného zboží",
        "Vyrob nejaké množstvo zásob + získaj 600x úlomky kouzel ALEBO trénuj nejaké množstvo jednotiek",
        "Vyrieš 8 stretov na mape ALEBO vyrieš 8 turnajových stretov + získaj 2x spojovací činidlo",
        "Vyrob nejaké množstvo štandardného zboží + utrať 20 VB",
        "Vytvor 4x ponuku na trhu + vykonaj 7x susedskú výpomoc",
        "Vyrob nejaké množstvo zásob + trénuj nejaké množstvo jednotiek ALEBO získaj 10x opar vidění",
        "Získaj 3x ľubovoľné kúzlo + vyrob nejaké množstvo zásob",
        "Vyrob nejaké množstvo štandardného zboží + získaj 12 relikvií",
        "Utrať 8 VB + preskúmaj 1 provinciu ALEBO vylepši 2 budovy na level 5 alebo vyšší",
        "Vyrob nejaké množstvo štandardného zboží + získaj nejaké množstvo mincí",
        "Získaj 15x opar vidění + preskúmaj 1 provinciu ALEBO vylepši 1 budovu na level 5 alebo vyšší",
        "Vyrob nejaké množstvo štandardného zboží + získaj 2x spojovací činidlo ALEBO získaj 15x opar vidění",
        "Vyrob nejaké množstvo zásob + utrať 16 VB",
        "Získaj 8 relikvií + získaj 1x spojovací činidlo",
        "Použi 1x ľubovoľné kúzlo + preskúmaj 1 provinciu ALEBO vylepši 1 budovu na level 5 alebo vyšší",
        "Vyrieš 8 stretov na mape ALEBO vyrieš 8 turnajových stretov + získaj 20x opar vidění ALEBO preskúmaj 1 provinciu",
        "Získaj nejaké množstvo mincí + použi 2x ľubovoľné kúzlo",
        "Vyrob nejaké množstvo štandardného zboží + vyrob nejaké množstvo zásob ALEBO trénuj nejaké množstvo jednotiek",
        "Vyrieš 10 stretov na mape ALEBO vyrieš 10 stretov vo veži + vyrob nejaké množstvo zásob",
        "Utrať 16 VB + vyrob nejaké množstvo štandardného zboží",
        "Získaj nejaké množstvo mincí + vyrob nejaké množstvo štandardného zboží",
        "Vyrieš 10 stretov na mape ALEBO vyrieš 10 stretov vo veži + získaj 4x ľubovoľné kúzlo",
        "Získaj 800x úlomky kouzel + použi 2x krmení ALEBO získaj 5x ľubovoľné kúzlo",
        "Získaj 20 relikvií + získaj 2x spojovací činidlo",
        "Utrať 16 VB + vyrob nejaké množstvo štandardného zboží",
        "Získaj nejaké množstvo mincí + použi 2x ľubovoľné kúzlo",
        "Získaj 16 relikvií + vyskúmaj 1 technológiu ALEBO získaj 25x opar vidění",
        "Vyrieš 10 stretov na mape ALEBO vyrieš 10 stretov vo veži + vyrob nejaké množstvo zásob",
        "Utrať 20 VB + vyrob nejaké množstvo štandardného zboží",
        "Získaj nejaké množstvo mincí + vyrob nejaké množstvo štandardného zboží",
        "Vyrieš 10 stretov na mape ALEBO vyrieš 10 stretov vo veži + získaj 4x ľubovoľné kúzlo",
        "Vyrieš 8 stretov na mape ALEBO vyrieš 8 stretov vo veži + vyskúmaj 1 technológiu ALEBO získaj 15x opar vidění",
        "Získaj 2x spojovací činidlo + vyrob nejaké množstvo zásob ALEBO trénuj nejaké množstvo jednotiek",
        "Vytvor 4x ponuku na trhu + získaj nejaké množstvo mincí",
        "Získaj 16 relikvií + získaj 20x opar vidění ALEBO vylepši 2 budovy na level 5 alebo vyšší",
        "Vyrob nejaké množstvo štandardného zboží + preskúmaj 1 provinciu ALEBO získaj 3x ľubovoľné kúzlo",
    ],
    "january_xxii_": [
        "Získaj nejaké množstvo mincí",
        "Vyrob 8x nápoje",
        "Utrať 8 VB",
        "Vyrob 2x produkt základnej manufaktury (3-hodinový)",
        "Vyrob 7x obyčajné nástroje",
        "Použi 1x ľubovoľné kúzlo",
        "Vyrieš 4 strety na mape ALEBO vyrieš 4 turnajové strety + vyrob 3x chlieb",
        "Vytvor 2x ponuku na trhu + získaj 1x spojovací činidlo ALEBO získaj 8 relikvií",
        "Vyrob 2x pokročilé nástroje + vyrieš 3 strety na mape bojom ALEBO použi 1x krmení",
        "Utrať 8 VB + vyrob 2x produkt základnej manufaktury (3-hodinový)",
        "Kúp 8 VB + preskúmaj 1 provinciu ALEBO vylepši 1 budovu na level 5 alebo vyšší",
        "Získaj 200x úlomky kouzel ALEBO trénuj nejaké množstvo jednotiek + získaj 1x spojovací činidlo ALEBO vyrieš 2 strety na mape bojom",
        "Utrať 8 VB ALEBO vyrob 6x produkt základnej manufaktury (3-hodinový) + získaj 10x opar vidění ALEBO získaj 4 relikvie",
        "Získaj nejaké množstvo mincí + utrať 4 VB",
        "Vyrieš 4 strety na mape ALEBO vyrieš 4 turnajové strety + preskúmaj 1 provinciu ALEBO vyrob 3x košík jedla",
        "Získaj 3x ľubovoľné kúzlo + získaj 5x opar vidění ALEBO vyrieš 3 strety na mape vyjednávaním",
        "Vyrieš 4 strety na mape ALEBO vyrieš 4 turnajové strety + vyrob 2x košík jedla",
        "Získaj 4 relikvie + vyrob 4x produkt základnej manufaktury (3-hodinový)",
        "Utrať 4 VB + obchoduj 3x u obchodníka",
        "Vyrob 4x produkt základnej manufaktury (3-hodinový) + použi 2x požehnání na jednotky ALEBO vyrieš 2 strety na mape vyjednávaním",
        "Utrať 10 VB + vyrob 4x košík jedla ALEBO vyrob 4x produkt základnej manufaktury (9-hodinový)",
        "Vyrieš 4 strety na mape ALEBO vyrieš 4 strety vo veži + vyrob 2x košík jedla",
        "Kúp 12 VB + vyrob 10x obyčajné nástroje ALEBO vylepši 2 budovy na level 5 alebo vyšší",
        "Získaj 8 relikvií + vyrob nejaké množstvo štandardného zboží",
        "Vyrob 6x produkt základnej manufaktury (3-hodinový) + obchoduj 3x u obchodníka",
        "Utrať 8 VB + vyrob 4x produkt základnej manufaktury (3-hodinový)",
        "Utrať 15 VB + trénuj nejaké množstvo jednotiek ALEBO vyrob 4x produkt základnej manufaktury (9-hodinový)",
        "Kúp 8 VB + vyrieš 4 strety na mape ALEBO získaj 10x opar vidění",
        "Utrať 12 VB + preskúmaj 1 provinciu ALEBO vylepši 2 budovy na level 5 alebo vyšší",
        "Získaj 4 relikvie + vyrob 2x produkt základnej manufaktury (9-hodinový)",
        "Vyrieš 6 stretov na mape ALEBO vyrieš 6 stretov vo veži + vyrob nejaké množstvo zásob",
        "Získaj 800x úlomky kouzel + vyskúmaj 1 technológiu ALEBO získaj 20x opar vidění",
        "Použi 2x ľubovoľné kúzlo + vyrob nejaké množstvo zásob",
        "Utrať 8 VB + vyrob nejaké množstvo základného zboží",
        "Vyrieš 6 stretov na mape ALEBO vyrieš 6 turnajových stretov + vyrob nejaké množstvo zásob",
        "Kúp 8 VB + preskúmaj 1 provinciu ALEBO vylepši 1 budovu na level 5 alebo vyšší",
        "Získaj 12 relikvií + vyrob nejaké množstvo základného zboží",
        "Vyrob 3x košík jedla + získaj 400x úlomky kouzel ALEBO trénuj nejaké množstvo jednotiek",
        "Vyrieš 6 stretov na mape ALEBO vyrieš 6 turnajových stretov + získaj 2x spojovací činidlo",
        "Vyrob nejaké množstvo zásob + vyrob nejaké množstvo základného zboží", //vyrob nejaké množstvo zásob určite????
        "Získaj 8 relikvií + vyskúmaj 1 technológiu ALEBO získaj 15x opar vidění",
        "Utrať 8 VB + preskúmaj 1 provinciu ALEBO vylepši 2 budovy na level 5 alebo vyšší",
        "Získaj nejaké množstvo mincí + vyrob nejaké množstvo zásob",
        "Získaj 12 relikvií + vyrob nejaké množstvo základného zboží",
        "Vyrob nejaké množstvo zásob + získaj 600x úlomky kouzel ALEBO trénuj nejaké množstvo jednotiek",
        "Vyrieš 8 stretov na mape ALEBO vyrieš 8 turnajových stretov + získaj 2x spojovací činidlo",
        "Vyrob nejaké množstvo základného zboží + utrať 20 VB",
        "Získaj nejaké množstvo mincí + použi 2x ľubovoľné kúzlo",
        "Vyrieš 8 stretov na mape ALEBO vyrieš 8 stretov vo veži + vyrob nejaké množstvo zásob",
        "Získaj 12 relikvií + vyskúmaj 1 technológiu ALEBO získaj 15x opar vidění",
        "Utrať 15 VB + trénuj nejaké množstvo jednotiek ALEBO obchoduj 4x u obchodníka",
        "Vyrieš 6 stretov na mape ALEBO vyrieš 6 turnajových stretov + vyrob nejaké množstvo základného zboží",
        "Získaj nejaké množstvo mincí + použi 2x ľubovoľné kúzlo",
        "Získaj 12 relikvií + vyskúmaj 1 technológiu ALEBO získaj 20x opar vidění",
        "Vyrieš 8 stretov na mape ALEBO vyrieš 8 stretov vo veži + vyrob nejaké množstvo zásob",
        "Utrať 20 VB + vyrob nejaké množstvo základného zboží",
        "Získaj nejaké množstvo mincí + vyrob nejaké množstvo základného zboží",
        "Vyrieš 8 stretov na mape ALEBO vyrieš 8 stretov vo veži + získaj 2x ľubovoľné kúzlo",
        "Vyrieš 8 stretov na mape ALEBO vyrieš 8 stretov vo veži + vyskúmaj 1 technológiu ALEBO získaj 15x opar vidění",
        "Získaj 2x spojovací činidlo + vyrob nejaké množstvo zásob ALEBO trénuj nejaké množstvo jednotiek",
        "Vytvor 4x ponuku na trhu + získaj nejaké množstvo mincí",
        "Získaj 16 relikvií + získaj 20x opar vidění ALEBO vylepši 2 budovy na level 5 alebo vyšší",
        "Vyrob nejaké množstvo základného zboží + preskúmaj 1 provinciu ALEBO získaj 3x ľubovoľné kúzlo",
        "Získaj 20x opar vidění + preskúmaj 1 provinciu ALEBO vylepši 2 budovy na level 5 alebo vyšší",
        "Vyrob nejaké množstvo základného zboží + získaj 2x spojovací činidlo ALEBO získaj 20x opar vidění",
        "Vyrob nejaké množstvo zásob + utrať 20 VB",
        "Získaj 16 relikvií + získaj 2x spojovací činidlo",
        "Použi 2x ľubovoľné kúzlo + preskúmaj 1 provinciu ALEBO vylepši 2 budovy na level 5 alebo vyšší",
        "Získaj nejaké množstvo mincí + vyrob nejaké množstvo základného zboží",
        "Vyrieš 10 stretov na mape ALEBO vyrieš 10 stretov vo veži + získaj 4x ľubovoľné kúzlo",
        "Získaj 800x úlomky kouzel + použi 2x krmení ALEBO získaj 5x ľubovoľné kúzlo",
        "Získaj 20 relikvií + získaj 2x spojovací činidlo",
        "Utrať 16 VB + vyrob nejaké množstvo základného zboží",
        "Vyrob nejaké množstvo štandardného zboží + trénuj nejaké množstvo jednotiek ALEBO získaj 15x opar vidění",
        "Preskúmaj 1 provinciu ALEBO vylepši 2 budovy na level 5 alebo vyšší + vyrob nejaké množstvo základného zboží ALEBO získaj 20x opar vidění",
        "Vyrob nejaké množstvo zásob + utrať 16 VB",
        "Získaj 20 relikvií + získaj 2x spojovací činidlo",
        "Vyrieš 10 stretov na mape + preskúmaj 1 provinciu ALEBO vylepši 2 budovy na level 5 alebo vyšší",
    ],
    "december_xxi_": [
        "Získaj nejaké množstvo mincí",
        "Vyrob 8x nápoje",
        "Utrať 8 VB",
        "Vyrob 2x produkt základnej manufaktury (3-hodinový)",
        "Vyrob 7x obyčajné nástroje",
        "Použi 1x ľubovoľné kúzlo",
        "Vyrieš 4 strety na mape ALEBO vyrieš 4 turnajové strety + vyrob 6x chlieb",
        "Vytvor 3x ponuku na trhu + získaj 1x spojovací činidlo ALEBO získaj 4 relikvie",
        "Použi 2x ľubovoľné kúzlo + vyrob 6x pokročilé nástroje",
        "Utrať 8 VB + vyrob 2x produkt základnej manufaktury (3-hodinový)",
        "Vyrieš 2 strety na mape ALEBO vyrieš 2 turnajové strety + vyrob nejaké množstvo zásob",
        "Získaj 200x úlomky kouzel ALEBO trénuj nejaké množstvo jednotiek + získaj 1x spojovací činidlo ALEBO vyrieš 2 strety na mape bojom",
        "Utrať 8 VB ALEBO vyrob 6x produkt základnej manufaktury (3-hodinový) + získaj 10x opar vidění ALEBO získaj 4 relikvie",
        "Získaj nejaké množstvo mincí + utrať 4 VB",
        "Vyrieš 4 strety na mape ALEBO vyrieš 4 turnajové strety + preskúmaj 1 provinciu ALEBO vyrob 3x košík jedla",
        "Získaj 3x ľubovoľné kúzlo + získaj 5x opar vidění ALEBO vyrieš 3 strety na mape vyjednávaním",
        "Vyrieš 4 strety na mape ALEBO vyrieš 4 turnajové strety + vyrob 2x košík jedla",
        "Získaj 4 relikvie + vyrob 4x produkt základnej manufaktury (3-hodinový)",
        "Utrať 4 VB + obchoduj 3x u obchodníka",
        "Vyrob 4x produkt základnej manufaktury (3-hodinový) + použi 2x požehnání na jednotky ALEBO vyrieš 2 strety na mape vyjednávaním",
        "Utrať 10 VB + vyrob 4x košík jedla ALEBO vyrob 3x produkt základnej manufaktury (9-hodinový)",
        "Vyrieš 4 strety na mape ALEBO vyrieš 4 strety vo veži + vyrob 2x košík jedla",
        "Kúp 8 VB + vyrob 7x obyčajné nástroje ALEBO vylepši 1 budovu na level 5 alebo vyšší",
        "Získaj 4 relikvie + vyrob nejaké množstvo štandardného zboží",
        "Vyrob 2x produkt základnej manufaktury (3-hodinový) + obchoduj 1 u obchodníka",
        "Utrať 8 VB + vyrob 4x produkt základnej manufaktury (3-hodinový)",
        "Utrať 5 VB + trénuj nejaké množstvo jednotiek ALEBO vyrob 1x produkt základnej manufaktury (9-hodinový)",
        "Vyrieš 4 strety na mape ALEBO vyrieš 4 strety vo veži + vyrob 3x košík jedla",
        "Vyrob 2x košík jedla + získaj 400x úlomky kouzel ALEBO preskúmaj 1 provinciu",
        "Získaj 8 relikvií + vyrieš 4 strety na mape ALEBO získaj 10x opar vidění",
        "Získaj nejaké množstvo mincí + vyrob 3x chlieb",
        "Vyrieš 2 strety na mape ALEBO vyrieš 2 turnajové strety + získaj 5x opar vidění ALEBO preskúmaj 1 provinciu",
        "Vlož 15 VB do ľubovoľného prastarého divu + trénuj nejaké množstvo jednotiek ALEBO získaj nejaké množstvo mincí",
        "Vyrieš 6 stretov na mape ALEBO vyrieš 6 turnajových stretov + získaj 600x úlomky kouzel",
        "Kúp 8 VB + vykonaj 7x susedskú výpomoc",
        "Vyrob nejaké množstvo zásob + získaj 2x spojovací činidlo ALEBO získaj 20x opar vidění",
        "Získaj 2x ľubovoľné kúzlo + vyrob nejaké množstvo štandardného zboží",
        "Kúp 8 VB + vyrieš 4 strety na mape ALEBO získaj 10x opar vidění",
        "Utrať 12 VB + preskúmaj 1 provinciu ALEBO vylepši 2 budovy na level 5 alebo vyšší",
        "Získaj 4 relikvie + vyrob 2x produkt základnej manufaktury (9-hodinový)",
        "Vyrieš 6 stretov na mape ALEBO vyrieš 6 stretov vo veži + vyrob nejaké množstvo zásob",
        "Získaj 800x úlomky kouzel + vyskúmaj 1 technológiu ALEBO získaj 20x opar vidění",
        "Získaj nejaké množstvo mincí + vyrob nejaké množstvo zásob",
        "Získaj 12 relikvií + vyrob nejaké množstvo štandardného zboží",
        "Vyrob nejaké množstvo zásob + získaj 600x úlomky kouzel ALEBO trénuj nejaké množstvo jednotiek",
        "Vyrieš 8 stretov na mape ALEBO vyrieš 8 turnajových stretov + získaj 2x spojovací činidlo",
        "Vyrob nejaké množstvo štandardného zboží + utrať 20 VB",
        "Vytvor 4x ponuku na trhu + vykonaj 7x susedskú výpomoc",
        "Vyrob nejaké množstvo zásob + trénuj nejaké množstvo jednotiek ALEBO získaj 10x opar vidění",
        "Získaj 3x ľubovoľné kúzlo + vyrob nejaké množstvo zásob",
        "Vyrob nejaké množstvo štandardného zboží + získaj 12 relikvií",
        "Utrať 8 VB + preskúmaj 1 provinciu ALEBO vylepši 2 budovy na level 5 alebo vyšší",
        "Vyrob nejaké množstvo štandardného zboží + získaj nejaké množstvo mincí",
        "Vyrob nejaké množstvo štandardného zboží + získaj 4x ľubovoľné kúzlo",
        "Vyrob nejaké množstvo zásob + vyrieš 6 stretov vo veži ALEBO vyrieš 4 strety na mape bojom",
        "Získaj 16 relikvií + vyskúmaj 1 technológiu ALEBO získaj 15x opar vidění",
        "Vyrieš 6 stretov na mape ALEBO vyrieš 6 turnajových stretov + získaj 20x opar vidění ALEBO preskúmaj 1 provinciu",
        "Získaj nejaké množstvo mincí + vykonaj 10x susedskú výpomoc",
        "Vyrob nejaké množstvo základného zboží + získaj 2x ľubovoľné kúzlo",
        "Získaj 12 relikvií + vyrob 4x produkt základnej manufaktury (9-hodinový)",
        "Vyrob nejaké množstvo zásob + získaj 400x úlomky kouzel ALEBO trénuj nejaké množstvo jednotiek",
        "Vyrieš 6 stretov na mape ALEBO vyrieš 6 turnajových stretov + získaj 2x spojovací činidlo",
        "Vyrob nejaké množstvo štandardného zboží + utrať 12 VB",
        "Získaj 15x opar vidění + preskúmaj 1 provinciu ALEBO vylepši 1 budovu na level 5 alebo vyšší",
        "Vyrob nejaké množstvo štandardného zboží + získaj 2x spojovací činidlo ALEBO získaj 15x opar vidění",
        "Vyrob nejaké množstvo zásob + utrať 16 VB",
        "Získaj 8 relikvií + získaj 1x spojovací činidlo",
        "Použi 1x ľubovoľné kúzlo + preskúmaj 1 provinciu ALEBO vylepši 1 budovu na level 5 alebo vyšší",
        "Získaj nejaké množstvo mincí + vyrob nejaké množstvo štandardného zboží",
        "Vyrieš 10 stretov na mape ALEBO vyrieš 10 stretov vo veži + získaj 4x ľubovoľné kúzlo",
        "Získaj 800x úlomky kouzel + použi 2x krmení ALEBO získaj 5x ľubovoľné kúzlo",
        "Získaj 20 relikvií + získaj 2x spojovací činidlo",
        "Utrať 16 VB + vyrob nejaké množstvo štandardného zboží",
        "Vyrob nejaké množstvo štandardného zboží + trénuj nejaké množstvo jednotiek ALEBO získaj 15x opar vidění",
        "Preskúmaj 1 provinciu ALEBO vylepši 2 budovy na level 5 alebo vyšší + vyrob nejaké množstvo základného zboží ALEBO získaj 20x opar vidění",
        "Vyrob nejaké množstvo zásob + utrať 16 VB",
        "Získaj 20 relikvií + získaj 2x spojovací činidlo",
        "Vyrieš 10 stretov na mape + preskúmaj 1 provinciu ALEBO vylepši 2 budovy na level 5 alebo vyšší",
        "Vyrieš 10 stretov na mape ALEBO vyrieš 10 turnajových stretov + vyrob nejaké množstvo zásob",
        "Vyrob nejaké množstvo štandardného zboží + získaj 2x spojovací činidlo ALEBO získaj 16 relikvií",
        "Vyrob nejaké množstvo zásob + vyskúmaj 1 technológiu ALEBO získaj 20x opar vidění",
        "Utrať 20 VB + získaj 1000x úlomky kouzel",
        "Vyrieš 8 stretov na mape ALEBO vyrieš 8 stretov vo veži + získaj 4x ľubovoľné kúzlo",
        "Získaj nejaké množstvo mincí + použi 2x ľubovoľné kúzlo",
        "Získaj 16 relikvií + vyskúmaj 1 technológiu ALEBO získaj 25x opar vidění",
        "Vyrieš 10 stretov na mape ALEBO vyrieš 10 stretov vo veži + vyrob nejaké množstvo zásob",
        "Utrať 20 VB + vyrob nejaké množstvo štandardného zboží",
        "Získaj nejaké množstvo mincí + vyrob nejaké množstvo štandardného zboží",
        "Vyrieš 10 stretov na mape ALEBO vyrieš 10 stretov vo veži + získaj 4x ľubovoľné kúzlo",
        "Vyrieš 8 stretov na mape ALEBO vyrieš 8 turnajových stretov + získaj 20x opar vidění ALEBO preskúmaj 1 provinciu",
        "Získaj nejaké množstvo mincí + získaj 2x ľubovoľné kúzlo",
        "Vyrob nejaké množstvo štandardného zboží + vyrob nejaké množstvo zásob ALEBO trénuj nejaké množstvo jednotiek",
        "Vyrieš 10 stretov na mape ALEBO vyrieš 10 stretov vo veži + vyrob nejaké množstvo zásob",
        "Utrať 16 VB + vyrob nejaké množstvo štandardného zboží",
        "Vyrieš 10 stretov na mape ALEBO vyrieš 10 turnajových stretov + vyrob nejaké množstvo zásob",
        "Utrať 16 VB + vykonaj 13x susedskú výpomoc",
        "Vyrob nejaké množstvo štandardného zboží + získaj 2x spojovací činidlo ALEBO získaj 20 relikvií",
        "Vyrob nejaké množstvo zásob + získaj 20x opar vidění ALEBO získaj 3x ľubovoľné kúzlo",
        "Vyrieš 10 stretov na mape ALEBO vyrieš 10 stretov vo veži + získaj 4x ľubovoľné kúzlo",
    ],
    "PLACEHOLDER": [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ]
}
