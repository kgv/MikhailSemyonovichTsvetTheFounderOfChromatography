# Mikhail Semyonovich Tsvet the founder of chromatography

# Translate

## Generating the PO Template

```sh
MDBOOK_OUTPUT='{"xgettext": {}}' \
  mdbook build -d po
```

```sh
MDBOOK_OUTPUT='{"xgettext": {"depth": 3}}' \
  mdbook build -d po
```

## Initialize a New Translation

```sh
msginit -i po/messages.pot -l en -o po/en.po --no-translator
msginit -i po/messages.pot -l es -o po/es.po --no-translator
msginit -i po/messages.pot -l ja -o po/ja.po --no-translator
msginit -i po/messages.pot -l ko -o po/ko.po --no-translator
msginit -i po/messages.pot -l zh -o po/zh.po --no-translator
```

```sh
msginit -i po/messages.pot -l en -o po/en.po
```

kgv@users.noreply.github.com

## Updating an Existing Translation

```
msgmerge --update po/en.po po/messages.pot
msgmerge --update po/es.po po/messages.pot
msgmerge --update po/ja.po po/messages.pot
msgmerge --update po/ko.po po/messages.pot
msgmerge --update po/zh.po po/messages.pot
```

```
msgcat --no-wrap po/en.po -o po/en.po
msgcat --no-wrap po/es.po -o po/es.po
msgcat --no-wrap po/ja.po -o po/ja.po
msgcat --no-wrap po/ko.po -o po/ko.po
msgcat --no-wrap po/zh.po -o po/zh.po
```

```
msgcat po/en.po -o po/en.po
```

```
msgfmt --statistics po/en.po
```

## Build and postprocess all translations

`[output.markdown]`

```
MDBOOK_BOOK__LANGUAGE=ru mdbook build -d book
MDBOOK_BOOK__LANGUAGE=en mdbook build -d book/en
MDBOOK_BOOK__LANGUAGE=es mdbook build -d book/es
MDBOOK_BOOK__LANGUAGE=ja mdbook build -d book/ja
MDBOOK_BOOK__LANGUAGE=ko mdbook build -d book/ko
MDBOOK_BOOK__LANGUAGE=zh mdbook build -d book/zh
```

```sh
for language in en ru; do
    echo "Start building $language translation"
    MDBOOK_BOOK__LANGUAGE=$language \
    mdbook build -d book/$language
    echo "End building"
done
```

```
MDBOOK_BOOK__LANGUAGE=en mdbook serve
```

Теперь Для "Нижний Новгород—Юрьев—Воронеж. Трудные годы"
Все изображения (названия изображений - номер страницы книги (именно который в книге написан), номер по счету изображения на странице)

```
![Памятная доска о работе М.С.Цвета в Санк-Петербургской биологической лаборатории П.Ф.Лесгафта, установленная в юбилейном 1972 году](3.Одесса—Петербург—Казань.%20Напряженный%20научный%20поиск/92.1.png)  
**Памятная доска о работе М.С.Цвета в Санк-Петербургской биологической лаборатории П.Ф.Лесгафта, установленная в юбилейном 1972 году**
```

Преобразовать сноски (страница книги, номер изображения на странице)
Пример: [^91.1]

Проверь чтобы текст полностью дословно соответствовал оригиналу.
Поправь переносы слов, разрывы где нужно.

`[^!]\[[^^\]]+\]`

`{{#include Родословная.md}}`


### pandoc latex

```wsl
sudo apt install texlive-xetex texlive-fonts-recommended texlive-latex-extra texlive-lang-cyrillic
```

```
tlmgr texlive-lang-cyrillic texlive-lang-russian
tlmgr install babel-russian hyphen-russian cyrillic
```

### Latex

`\section*{Сноски}`
`\usepackage{endnotes}`
`\footnote{` => `\endnote{`

`\S+[₀-₉]+\S*`

Преобразуй в markdown как у меня теперь
"Оценки первых шагов хроматографии: Дискуссия с Л.Махлевским. М.С.Цвет и Р.Вилыптеттер о хлорофилле и хроматографии"
с 289 по 325

Преобразуй в markdown как у меня теперь
"Современники М.С.Цвета о хроматографии при изучении хлорофилла"
с 326 по 338

Преобразуй в markdown как у меня теперь
"Проблемы каротиноидов в трудах М.С.Цвета и определение ее перспектив"
с 339 по 356

Преобразуй в markdown как у меня теперь
"Причины недооценки «метода Цвета» в 20-е годы"
с 357 по 374

Преобразуй в markdown как у меня теперь
"Наш современник—М. С. Цвету"
с 375 по 
