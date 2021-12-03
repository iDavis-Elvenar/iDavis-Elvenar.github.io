function questTranslate(text) {
    if (localStorage.getItem("lang") === "cz") {
        return text;
    } else {
        return "Only CZ language supported for now, more languages are coming soon! / Zvoľte si český jazyk z glóbusu v hornej lište pre zobrazenie úloh.";
    }
}
