# ionic-tabs-like-navigation

Ionic footer navigation alternative to ionTabs with a single ion-nav-view and a fully navigable application

## Install

```
bower install ionic-tabs-like-navigation --save
```

## Attributes

```
tabs-like-navigation
    - tab-bg : background color for buttons (use ionic default color names)
    - tab-color : text color for buttons (use ionic default color names)
    - encapsulation : set outer encapsulation element (ex: ion-footer-bar)


navigation-item
    - state : state to navigate to
    - rootState : root state to compare to (used in nested states)
    - title : text title
    - icon : ion icon (http://ionicons.com/)
    - show-title-on-click : (boolean) if title and icon is set, show title only when item is activated
```

## Use title and icons

Use text only buttons.

```html
<ion-nav-view></ion-nav-view>
<tabs-like-navigation tab-bg="positive">
    <navigation-item state="app.profile" title="Profile"></navigation-item>
    <navigation-item state="app.themes.list" rootState="app.themes" title="Themes"></navigation-item>
</tabs-like-navigation>
```

Use icons only buttons.

```html
<ion-nav-view></ion-nav-view>
<tabs-like-navigation tab-bg="positive">
    <navigation-item state="app.profile" icon="ion-person"></navigation-item>
    <navigation-item state="app.themes.list" rootState="app.themes" icon="ion-compose"></navigation-item>
</tabs-like-navigation>
```

Use icons and text buttons.

```html
<ion-nav-view></ion-nav-view>
<tabs-like-navigation tab-bg="positive">
    <navigation-item state="app.profile" icon="ion-person" title="Profile"></navigation-item>
    <navigation-item state="app.themes.list" rootState="app.themes" icon="ion-compose" title="Themes"></navigation-item>
</tabs-like-navigation>
```

Use icons and text buttons but show the text only when clicked.

```html
<ion-nav-view></ion-nav-view>
<tabs-like-navigation tab-bg="positive">
    <navigation-item state="app.profile" icon="ion-person" title="Profile" show-title-on-click="true"></navigation-item>
    <navigation-item state="app.themes.list" rootState="app.themes" icon="ion-compose" title="Themes" show-title-on-click="true"></navigation-item>
</tabs-like-navigation>
```