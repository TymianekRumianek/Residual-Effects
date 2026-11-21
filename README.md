# Residual Effects — wersja 0.2

Druga wersja witryny Residual Effects, ze stylistyką starego internetu i w pełni diegetycznymi tekstami na stronie. Wszystkie projekty, wpisy i opisy są **roboczymi treściami fabularnymi**, nie ustalonym kanonem.

## Uruchomienie

1. Wgraj zawartość tego folderu do repozytorium GitHub, zachowując pliki `index.html`, `styles.css`, `script.js`, `config.js` oraz katalog `assets`.
2. W repozytorium przejdź do **Settings → Pages → Build and deployment → Deploy from a branch**. Wybierz `main` i `/ (root)`.
3. Po opublikowaniu otwórz adres podany przez GitHub Pages. Nie jest potrzebna płatna domena.
4. Lokalnie można też po prostu otworzyć `index.html` w przeglądarce.

## Jak włączyć wysyłanie zgłoszeń na e-mail bez własnego serwera

1. Utwórz konto w serwisie Formspree (https://formspree.io/) i nowy formularz. Wybierz adres e-mail, na który mają trafiać wiadomości. Potwierdź adres, jeśli serwis o to poprosi.
2. Skopiuj adres końcowy formularza w postaci `https://formspree.io/f/XXXXXXXX`.
3. W pliku `config.js` zastąp pusty `formEndpoint` tym adresem.
4. Wgraj zaktualizowany plik i **przetestuj formularz na własnym zgłoszeniu**.

Formspree ma ograniczenia zależne od bieżącego planu; sprawdź aktualny limit przed otwarciem naboru. Sam statyczny GitHub Pages nie przyjmuje wiadomości na skrzynkę. Publiczny kod strony nie może chronić tajnego hasła ani przechowywać danych wrażliwych. Informuj graczy, gdzie trafią ich zgłoszenia. Nie zbieraj prawdziwych danych medycznych.

## Dostęp do archiwum

Terminal jest na razie **elementem fabularnym**, bez aktywnego prawidłowego hasła. Wszystkie kody są odrzucane. Nie wpisuj prawdziwych danych ani sekretów. Prawdziwy mechanizm udostępniania treści w odpowiednich momentach larpa zaprojektujemy osobno: repozytorium GitHub Pages jest publiczne, więc ukrycie treści w kodzie JS nie zabezpiecza ich przed wcześniejszym odkryciem.

## Dźwięki, logo i pliki graficzne

- `assets/logo.svg` — obecne czarno-białe logo instytutu.
- Dźwięk przycisków generowany jest w przeglądarce dopiero po włączeniu opcji „DŹWIĘK”. Na razie nie wymaga plików audio.
- Ilustracja monitora jest wykonana w CSS, bez plików PNG.
- W późniejszym etapie możesz wgrać swoje wideo, nagrania głosowe, animację logo i zdjęcia placówki. Nie są wymagane do działania tej wersji.

## Co łatwo edytować

- `index.html` — wszystkie teksty i zakładki.
- `styles.css` — kolory, proporcje, animacje.
- `script.js` — przejścia między zakładkami, obsługa formularza, terminal, dźwięki.
- `config.js` — adres odbierający zgłoszenia.

## Uwagi

Wszystkie dane na monitorze, licznik odwiedzin i status modułów są demonstracyjne, a nie połączone z rzeczywistymi systemami. Strona jest responsywna, z opcją wyłączenia ruchu dla systemowych ustawień ograniczania animacji. Zewnętrzne czcionki korzystają z Google Fonts; bez sieci strona korzysta z zamienników.

## Zmiany w wersji 0.2

- Ciemniejsza, celowo nierówna estetyka starego internetu: ramki 3D, linki, gęste panele, pasy i elementy o różnych stylach.
- Księga odwiedzin, dodatkowy biuletyn boczny i ozdobny pierścień odsyłaczy.
- Formularz używa pól „Imię i nazwisko” oraz „Adres do korespondencji”.
- Usunięto z widocznej strony teksty ujawniające konwencję gry oraz określenia „wartość pokazowa”.
- Licznik odwiedzin i monitor nie pobierają realnych odczytów: obecnie są elementami oprawy graficznej. Zmieniaj ich wskazania świadomie, żeby nie sugerować nieistniejących pomiarów.
- Księga odwiedzin ma na razie wpisy statyczne; formularz wysyła dane dopiero po skonfigurowaniu Formspree.

### Ważne dla organizatorów

W publicznym formularzu nie zbieraj wrażliwych danych rzeczywistych osób. Jeśli uczestnicy mogą wpisać realne dane, przekaż poza fabułą zwięzłą informację, kto i gdzie je otrzymuje, oraz jak długo są przechowywane.
