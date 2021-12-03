function questTranslate(text) {
    if (localStorage.getItem("lang") === "cz") {
        return text;
    } else {
        return "EN Required";
    }
}