# Feladatsorok alkalmazás

## Telepítés

### A kliens

A kliens forráskódja a `client` mappában található. Telepíteni és indítani kell lokálisan:

```
cd client
npm install
npm start
```

### A szerver

A szerver forráskódja a `rest-api` mappában található. Telepíteni és indítani kell lokálisan:

```
cd rest-api
npm install
npm start
```

## Leírás

Ez egy olyan webes alkalmazás, amelyben egy tanárnak lehetősége van egy feladatsort összeállítani, pl. óra vagy dolgozat céljából. A tanár létrehoz egy új feladatsort, majd a feladatbankban a feladatok között böngészve egy-egy feladatot hozzáad a szerkesztésre jelölt feladatsorhoz. A feladatok és a feladatsorok listázhatók, részleteik megtekinthetők, a feladatsorok szerkeszthetők.

## Oldalak

### Navigáció

Minden oldal tetején megjelenik egy navigációs sáv, ahol az alkalmazás neve, és az elérhető funkciók vannak menüpontokban megjelenítve:

- Alkalmazás neve: főoldalra visz
- Feladatbank
- Ha nincs bejelentkezve
  - Regisztráció
  - Bejelentkezés
- Bejelentkezve
  - Feladatsoraim
  - Ha van szerkesztés alatt álló feladatsor, akkor
    - Szerkesztett feladatsor
  - Profil
  - Kijelentkezés

### Főoldal (Home)

Statikus információkat tartalmazó oldal, az alkalmazás címével és egy rövid leírással.

### Feladatbank (Tasks)

A háttérrendszerben felvett adatok böngészése lehetséges itt. Az oldal 10 feladatot jelenít meg egyszerre, a feladatlistában előre-hátra lehet lapozni. Egy feladatnál a feladat címe, és a leírás egy rövid szelete jelenik meg. A feladatra kattintva ugyanezen az oldalon megjelenik a feladat teljes leírása.

- Ha a felhasználó be van jelentkezve,
  - és a feladat még nincs kiválasztva,
    - akkor megjelenik egy "Kiválaszt" gomb, amire kattintva
      - ha nincs aktív feladatsor szerkesztés,
        - akkor egy új feladatsor szerkesztése kezdődik, és
      - a feladatot a feladatsorhoz adjuk;
  - ha a feladat már ki van választva
    - akkor csak jelezzük, hogy már "Kiválasztva"

### Regisztráció (Register)

Az alábbi adatok megadása szükséges:

- teljes név (kötelező)
- email cím (email, kötelező)
- jelszó (kötelező)

### Bejelentkezés (Login)

Az alábbi kötelező adatokkal történik:

- email (email. kötelező)
- jelszó (kötelező)

Validáció elegendő HTML5 attribútumokkal!

### Feladatsoraim (Tasklists)

Csak bejelentkezve érhető el.
A bejelentkezett felhasználóhoz tartozó feladatsorok jelennek itt meg, minden feladatsornál az alábbiak:

- feladatsor címe
- státusz (draft, published)
- leírás
- feladatok száma
- létrehozás és az utolsó módosítás dátuma

Egy feladatsorra kattintva ugyanezen az oldalon megjelenik a feladatsor:

- feladatsor címe
- státusz (draft, published)
- leírás
- létrehozás és az utolsó módosítás dátuma
- összpontszám (számított érték)
- feladatok
  - feladat címe
  - feladat leírása
  - megjegyzés a feladathoz
  - pontszám
- funkciók
  - ha nincs szerkesztés alatt álló feladatsor,
    - akkor "Szerkeszt" gombra kattintva az adott feladat szerkesztésre jelölődik, és a _Szerkesztett feladatsor_ oldalra kerülünk.
  - szűrés _státusz, létrehozás dátuma, módosítás dátuma_ és _feladatok száma_ alapján

Ezen az oldalon lehetőség van új feladatsor összeállítását kezdeményezni ("Új feladatsor" gomb), ekkor a _Szerkesztett feladatsor_ oldalra kerülünk.

### Szerkesztett feladatsor (Editing)

Csak bejelentkezve érhető el, és ha van új vagy meglévő feladatsor szerkesztésre jelölve.

- feladatsor címe (szerkeszthető, kötelező)
- státusz (szerkeszthető, kötelező, értékei: draft, published)
- leírás (szerkeszthető)
- létrehozás és az utolsó módosítás dátuma
- összpontszám (számított érték)
- feladatok
  - feladat címe
  - feladat leírása
  - megjegyzés a feladathoz (szerkeszthető)
  - pontszám (szerkeszthető)
- funkciók
  - "Mentés": a feladatsor mentése (új vagy módosítás)
  - "Szerkesztés lezárása": szerkesztés lezárása, visszatérés a _Feladatsoraim_ oldalra

### Profil (Profile)

Csak bejelentkezve érhető el.
A bejelentkezett felhasználó adatai jelennek meg.

- Név
- Email
- Feladatsorok száma
- Kijelentkezés gomb

## A kliens

A kliens forráskódja a `client` mappában található. Telepíteni és indítani kell lokálisan:

```
cd client
npm install
npm start
```

## A szerver

A szerver forráskódja a `rest-api` mappában található. Telepíteni és indítani kell lokálisan:

```
cd rest-api
npm install
npm start
```

Három szolgáltatás van kivezetve:

- `users`
- `tasks`
- `tasklists`

A végpontok leírását és kipróbálását úgy lehet megtenni legegyszerűbben, ha az alábbi Postman gyűjteményeket importáljuk a Postman REST API kliensbe. Új Workspace-t kell létrehozni, és fent megnyomni az "Import" gombot, és egyesével linkként beilleszteni őket:

- [auth gyűjtemény](https://www.postman.com/collections/71406ec35bdc64e61081)
- [tasks gyűjtemény](https://www.postman.com/collections/f494799129c38052c21e)
- [tasklists gyűjtemény](https://www.postman.com/collections/c2b1e7c90aaf8c36f415)

Az authentikációhoz tartozó JWT token a `tasklists` gyűjtemény `Authorization` fülén van elmentve, ott igény szerint cserélhető.

## Adatbázis

A mentett adatok egy lokális SQLite táblában jelennek meg: `feladatsor_restapi.sqlite`. Ezt pl. a [DB Browser for SQLite](https://sqlitebrowser.org/) programmal tudunk megnézni, módosítani.
