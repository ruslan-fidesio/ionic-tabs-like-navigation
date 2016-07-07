var BetterTabsModule = angular.module('ionicFooterNavigation', []);

/**
 * Main footer navigation container
 *
 * @attr tab-bg : specify tab background color
 * @attr tab-color : specify tab font color
 */
BetterTabsModule.directive(
    'footerNavigation',
    function () {
        return {
            restrict : 'E',
            compile : function (elem, attrs) {
                var footer = angular.element('<ion-footer-bar></ion-footer-bar>');
                var betterTabs = angular.element('<div class="footer-navigation"></div>');
                var tabs = elem.find('navigation-item');
                elem.append(footer);
                footer.append(betterTabs);
                betterTabs.append(tabs);

                if (attrs.tabBg) {
                    betterTabs.addClass('footer-navigation-background-' + attrs.tabBg);
                }
                if (attrs.tabColor) {
                    betterTabs.addClass('footer-navigation-color-' + attrs.tabColor);
                }
            }
        };
    }
);

/**
 * Navigation item (tab)
 *
 * @attr state : state to go to when clicked
 * @attr root-state : if nested views, define the root state here (ex: tabs.themes.list => tabs.themes)
 * @attr title : text title
 * @attr icon : ion icon code
 * @attr show-title-on-click : if icon and title are used, allows to show only the icon in deactivated state
 */
BetterTabsModule.directive(
    'navigationItem',
    ['$state', function ($state) {
        return {
            scope : {
                state : '@',
                rootState : '@',
                title : '@',
                icon : '@',
                showTitleOnClick : '@'
            },
            restrict : 'E',
            required : ['^footerNavigation'],
            compile : function (elem, attrs) {
                return {
                    post : function (scope) {
                        scope.$state = $state;
                    }
                }
            },
            template : function () {
                var ngClass = "{" +
                    "'active': $state.includes('{{ rootState ? rootState : state }}')," +
                    "'has-icon': icon," +
                    "'has-icon-and-title': icon && title," +
                    "'show-title-on-click': showTitleOnClick == 'true'" +
                    "}";
                return '' +
                    '<a ' +
                    'ui-sref="{{ state }}" ' +
                    'ng-class="' + ngClass + '"' +
                    '>' +
                    '<i ng-show="icon" class="navigation-icon icon {{ icon }}"></i>' +
                    '<span class="navigation-title">{{ title }}</span>' +
                    '</a>';
            }
        };
    }]
);