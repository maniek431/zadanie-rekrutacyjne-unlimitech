# zadanie-rekrutacyjne

## Opis
Zadanie rekrutacyjne, strona główna sklepu internetowego

## Wymagania wstępne

Przed rozpoczęciem upewnij się, że masz zainstalowane następujące oprogramowanie:

*   **Node.js:** [https://nodejs.org/](https://nodejs.org/) (Wymagany do uruchamiania poleceń `npm`)
*   **npm:** 
*   **lessc:** (Zainstaluj globalnie za pomocą `npm install -g less`)
*   **less-watch-compiler:** (Zainstaluj globalnie za pomocą `npm install -g less-watch-compiler`)
*   **Make:** 
## Instalacja

1.  **Sklonuj repozytorium:**

    ```bash
    git clone 
    cd zadanie-rekrutacyjne
    ```

2.  **Zainstaluj zależności:**

    ```bash
    make install  
    ```

## Użycie

1.  **Skompiluj CSS:**

    ```bash
    make css
    ```

2.  **Obserwuj zmiany (w trakcie developmentu):**

    ```bash
    make watch
    ```

    To polecenie uruchamia obserwatora, który automatycznie rekompiluje pliki LESS po każdej zmianie.


