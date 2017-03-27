# META NAV

## Dependencies

- fontawesome.io
- jQuery 1.8.2

## Application structure

```
├── .gitignore              # Ignore files and directories
├── README.md               # Project installation and configuration
├── assets                  # (CSS, JS, +)
├── index.html              # Template de démonstration
```

## Installation du dossier `assets`

### Dans la balise `<head></head>`

```
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="assets/css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
<link href="assets/css/reset.css" rel="stylesheet">
<link href="assets/css/meta_nav_full.css" rel="stylesheet">
```

### Dans la balise `<body></body>` en bas de page

```
<script src="assets/js/jquery.js?ver=1.8.2"></script>
<script src="assets/js/meta_nav.js"></script>
```

## Configuration de la `meta nav`

### Base de la `meta nav`
```
<nav class="nav_bar">
	<!-- Bouton ouvrir/fermer menu en version mobile -->
   <input type="checkbox" id="menu-mobile-icone"></input>
   <label for="menu-mobile-icone" class="action-menu-mobile"></label>
   <!-- Bouton ouvrir/fermer menu en version mobile -->

   <ul class="menu-principal">
   		<!-- le contenu de votre menu -->
   </ul>
</nav>
```

* Les éléments vont être dans `li.menu-princiapl`.
* un élément peut-être positionné à gauche ou à droite avec la référence de class `left` pour gauche ou `right` pour droite dans `li.menu-princiapl`.
* Si un élément comprend un sous-menu il faut ajouter à l'intérieur `li.menu-princiapl ul.lmp-sous-menu`

* Pour que un sous-menu puisse être accésible en version mobile il faut lui inclure un bouton ouvrir/fermer qui est à placer après la fermeture du `li.menu-princiapl a.lmp-a`
* Pour que le bouton soit rélié au sous menu il faut lui attribuer un nom unique.
* dans l'`id` du `input` et le `for` du `label`. Ici ce sera `mon_sous_menu-1`

```
<!-- bouton (+/-) pour ouvrir/fermer le sous menu en version mobile -->
<input type="checkbox" id="mon_sous_menu-1" class="mm-action-sous-menu"></input>
<label for="mon_sous_menu-1" class="action-mm-sous-menu"></label>
```

### Exemples

* Elément simple positionné à gauche.

```
<li class="lien-menu-principal left">
	<a class="lmp-a" href="#">menu lien 1</a>
</li>
```

* Elément simple positionné à droite.

```
<li class="lien-menu-principal left">
	<a class="lmp-a" href="#">menu lien 1</a>
</li>
```

* Elément avec sous menu positionné à gauche.

```
<li class="lien-menu-principal right">

	<!-- nom du menu -->
	<a class="lmp-a" href="#">item 1</a>

	<!-- bouton (+/-) pour ouvrir/fermer le sous menu en version mobile -->
   <input type="checkbox" id="nouvellesecritures" class="mm-action-sous-menu"></input>
   <label for="nouvellesecritures" class="action-mm-sous-menu"></label>

   <!-- sous menu -->
   <ul class="lmp-sous-menu">
   		<li class="sous-menu-li"><a class="sous-menu-a" href="#">sub item 1</a></li>
   </ul>
</li>
```
