# Feladatsorok alkalmazás

## Demo

- A weboldal elérhető a _https://nbotond.netlify.app/_ címen. ![Netlify Status](https://api.netlify.com/api/v1/badges/153c5a82-e670-418b-bc83-5e509e770d9c/deploy-status)
- A szerver a https://nbotond-task-manager-api.herokuapp.com/ címen érhető el.

Mind a frontendhez és a backendhez CD (Continous Deployment) be van állítva ami ehhez a github oldalhoz van kötve.

## Telepítés

Kényelmes telepítéshez az _`init.bat`_ filet kell futtatni (el is indítja az alkalmazást) VAGY: 

### A kliens

A kliens forráskódja a `client` mappában található. Telepíteni és indítani kell lokálisan:

```
cd client
npm install
```

### A szerver

A szerver forráskódja a `rest-api` mappában található. Telepíteni és indítani kell lokálisan:

```
cd rest-api
npm install
```

## Indítás

Ha már telepítve van a szerver és a kliens is akkor a _scripts_ mappában lévő _`start.bat`_ fájlal lehet kényelmesen elindítani az alkalmazást Vagy az _`init.bat`_ fájlal. VAGY:

### A kliens

A kliens forráskódja a `client` mappában található. Telepíteni és indítani kell lokálisan:

```
cd client
npm start
```

### A szerver

A szerver forráskódja a `rest-api` mappában található. Telepíteni és indítani kell lokálisan:

```
cd rest-api
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

- Keresés a feladatok között cím és leírás alapján
- Ha a felhasználó be van jelentkezve,
  - és a feladat még nincs kiválasztva,
    - akkor megjelenik egy "Kiválaszt" gomb, amire kattintva
      - ha nincs aktív feladatsor szerkesztés,
        - akkor egy új feladatsor szerkesztése kezdődik, és
      - a feladatot a feladatsorhoz adjuk;
    - megjelenik egy "Törlés" gomb amire kattintva töröljük a feladatot
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
  - feladatsor törlése

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
  - "Törlés" gomb megjelenik amire kattintva eltávolítjuk az adott feladatot a feladatsorból
- funkciók
  - "Mentés": a feladatsor mentése (új vagy módosítás)
  - "Szerkesztés lezárása": szerkesztés lezárása, visszatérés a _Feladatsoraim_ oldalra
  - "Mégse": a szerkesztés lezárása mentés nélkül, visszatérés a _Feladatsoraim_ oldalra

### Profil (Profile)

Csak bejelentkezve érhető el.
A bejelentkezett felhasználó adatai jelennek meg.

- Név
- Email
- Feladatsorok száma
- Kijelentkezés gomb

## Szerver

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

A mentett adatok egy lokális SQLite táblában jelennek meg: `feladatsor_restapi.sqlite`. Ezt pl. a [DB Browser for SQLite](https://sqlitebrowser.org/) programmal tudjuk megnézni, módosítani.

## Egyébb parancsok

Az összes file formázása:
```
npm i
npm run pretty
```

## Fejlesztési lehetőségek

- [ ] Reszponzivitás
- [ ] Lehetőség új feladatok létrehozására
- [ ] _`init`_ és _`start`_ fájlok létrehozása linux rendszerhez (.sh fájlok)
- [ ] Áttérés typescript-re