# ionic-tabs-like-navigation

Ionic footer navigation alternative to ionTabs with a single ion-nav-view and a fully navigable application.

## Install

```
bower install ionic-tabs-like-navigation --save
```

Add `ionicTabsLikeNavigation` to your application modules.

Include `ionic-tabs-like-navigation.js` and `ionic-tabs-like-navigation.scss`.

## Attributes

```
tabs-like-navigation
    - tab-bg : background color for buttons (use ionic default color names)
    - tab-color : text color for buttons (use ionic default color names)
    - encapsulation : set outer encapsulation element (ex: ion-footer-bar)


navigation-item
    - state : state to navigate to (ui-sref)
    - root-state : root state to compare to (used in nested states)
    - href : if state is not defined, href is generated from this attribute
    - target : link target is generated from this attribute
    - title : text title
    - icon : ion icon (http://ionicons.com/)
    - show-title-on-click : (boolean) if title and icon is set, show title only when item is activated
```

## Use root state activation

When you have nested states, you can use `root-state` attribute to compare the current state route to the root state.

```html
<tabs-like-navigation>
    <navigation-item state="app.profile" title="Profile"></navigation-item>
    <navigation-item state="app.themes.list" root-state="app.themes" title="Themes"></navigation-item>
</tabs-like-navigation>
```

## Use title and icons

Use text only buttons.

```html
<tabs-like-navigation>
    <navigation-item state="app.profile" title="Profile"></navigation-item>
    <navigation-item state="app.themes.list" root-state="app.themes" title="Themes"></navigation-item>
</tabs-like-navigation>
```

Use icons only buttons.

```html
<tabs-like-navigation>
    <navigation-item state="app.profile" icon="ion-person"></navigation-item>
    <navigation-item state="app.themes.list" root-state="app.themes" icon="ion-compose"></navigation-item>
</tabs-like-navigation>
```

Use icons and text buttons.

```html
<tabs-like-navigation>
    <navigation-item state="app.profile" icon="ion-person" title="Profile"></navigation-item>
    <navigation-item state="app.themes.list" root-state="app.themes" icon="ion-compose" title="Themes"></navigation-item>
</tabs-like-navigation>
```

Use icons and text buttons but show the text only when clicked.

```html
<tabs-like-navigation>
    <navigation-item state="app.profile" icon="ion-person" title="Profile" show-title-on-click="true"></navigation-item>
    <navigation-item state="app.themes.list" root-state="app.themes" icon="ion-compose" title="Themes" show-title-on-click="true"></navigation-item>
</tabs-like-navigation>
```

## Use encapsulation

Encapsulate to the footer bar (ionTabs-like).

```html
<tabs-like-navigation encapsulation="ion-footer-bar">
    <navigation-item state="app.profile" title="Profile"></navigation-item>
    <navigation-item state="app.themes.list" root-state="app.themes" title="Themes"></navigation-item>
</tabs-like-navigation>
```