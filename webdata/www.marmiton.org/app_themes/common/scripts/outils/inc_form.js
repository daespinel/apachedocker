function TexteDefaut(tb, texte) {
    if (tb.value == texte) {
        tb.value = '';
    }
    else if (tb.value == '') {
        tb.value = texte;
    }
}