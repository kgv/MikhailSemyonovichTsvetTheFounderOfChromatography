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
```

```sh
msginit -i po/messages.pot -l en -o po/en.po
```

kgv@users.noreply.github.com

## Updating an Existing Translation

```
msgmerge --update po/en.po po/messages.pot
```

```
msgcat --no-wrap po/en.po -o po/en.po
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
echo "Building ru translation (root)"
MDBOOK_BOOK__LANGUAGE=ru mdbook build -d book
echo "Building en translation (/en/)"
MDBOOK_BOOK__LANGUAGE=en mdbook build -d book/en
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
