# Forms with Jasmine Tests

## Using the [range slider with Dragging interval](http://ionden.com/a/plugins/ion.rangeSlider/demo_advanced.html)

I'm trying to use the drgaggin interval which is shown in the last sample of the [advanced documentation page](http://ionden.com/a/plugins/ion.rangeSlider/demo_advanced.html)
Here, the slider is working fine.  I can also implement this sample in a (vanilla AngularJS)[] project, and all is good.

However, when using the same code in an Ionic app, the slider and styles are missing.

Here are the steps taken.
Install the package with Bower since it's a front end dependency:
```
$ bower i 
```

We put this in templates/tab-dash.html:
```
<input type="text" id="example_id" name="example_name" value="" />
```

Then we put this function in the controllers.js:
```
$("#example_id").ionRangeSlider({
    type: "double",
    min: 0,
    max: 10000000,
    from: 100000,
    to: 110000,
    drag_interval: true
});
```

Then include there:
```
	<link href="lib/ion.rangeSlider/css/ion.rangeSlider.css" rel="stylesheet">
    <link href="lib/ion.rangeSlider/css/ion.rangeSlider.skinFlat.css" el="stylesheet"/>
```

Then we have to take care of this error:
```
ReferenceError: $ is not defined
```

by including these:
```
	<script type="text/javascript" src="lib/jquery/dist/jquery.min.js"></script>
    <script src="lib/ionic/js/ionic.bundle.js"></script>
    <script src="lib/ion.RangeSlider/js/ion.RangeSlider.js"></script>
```

However, the actual slider won’t show up in Ionic.
The same code works in a vanilla angular app, but not here.
This is the tag that is created to show the sliders.
```
<span class="irs-bar" style="cursor: ew-resize;left: 10%;width: 10%;"></span>

```
that part does not show anything.  Trying it without Ionic to see if that is the problem.

I have asked [a question on the website](http://ionden.com/a/plugins/ion.rangeSlider/en.html) but there has been no solution ye, so will post an issue on their Github page.


## Unit Testing
http://mcgivery.com/unit-testing-ionic-app/


### Testing Set Up
$ npm install karma karma-jasmine karma-phantomjs-launcher --save-dev
$ npm install -g karma-cli
$ npm install
$ bower install angular-mocks --save-dev
$ mkdir tests
$ cd tests
$ karma init my.conf.js
$ npm install karma-jasmine -g



#### Failing Tests

Dash Controller should have a user name FAILED
	Expected true to equal false.
	/Users/tim/angular/ionic/forms-testing/tests/Controllers/dash.tests.js:17:29
	TypeError: undefined is not an object (evaluating 'scope.authorization') in /Users/tim/angular/ionic/forms-testing/tests/Controllers/dash.tests.js (line 18)
	/Users/tim/angular/ionic/forms-testing/tests/Controllers/dash.tests.js:18:21
The DashCtrl has these dependencies injected:
$scope, $state, $rootScope, $ionicPopup


LoginController #doLogin should call login on dinnerService FAILED
	TypeError: undefined is not an object (evaluating 'dinnerServiceMock.login') in /Users/tim/angular/ionic/forms-testing/tests/Controllers/login.controller.tests.js (line 12)
	/Users/tim/angular/ionic/forms-testing/tests/Controllers/login.controller.tests.js:12:37

LoginController #doLogin when the login is executed, if successful, should change state to my-dinners FAILED
	TypeError: undefined is not an object (evaluating 'stateMock.go') in /Users/tim/angular/ionic/forms-testing/tests/Controllers/login.controller.tests.js (line 17)
	/Users/tim/angular/ionic/forms-testing/tests/Controllers/login.controller.tests.js:17:33

LoginController #doLogin when the login is executed, if unsuccessful, should show a popup FAILED
	TypeError: undefined is not an object (evaluating 'ionicPopupMock.alert') in /Users/tim/angular/ionic/forms-testing/tests/Controllers/login.controller.tests.js (line 21)
	/Users/tim/angular/ionic/forms-testing/tests/Controllers/login.controller.tests.js:21:38

PhantomJS 2.1.1 (Mac OS X 0.0.0): Executed 8 of 8 (4 FAILED) (0.009 secs / 0.028 secs)


#### Failing Tests (all tests)
11 06 2016 19:03:31.502:INFO [PhantomJS 2.1.1]
PhantomJS 2.1.1 (Mac OS X 0.0.0) ChatDetail should have a $scope variable FAILED
	/Users/tim/repos/ionic-forms/tests/Controllers/chatDetail.tests.js:9:15
	Expected undefined to be defined.
	/Users/tim/repos/ionic-forms/tests/Controllers/chatDetail.tests.js:21:35
PhantomJS 2.1.1 (Mac OS X 0.0.0) ChatsCtrl should have a $scope variable FAILED
	/Users/tim/repos/ionic-forms/tests/Controllers/chats.tests.js:6:15
	Expected undefined to be defined.
	/Users/tim/repos/ionic-forms/tests/Controllers/chats.tests.js:16:35

PhantomJS 2.1.1 (Mac OS X 0.0.0) LoginController #doLogin should call login on dinnerService FAILED
	TypeError: undefined is not an object (evaluating 'dinnerServiceMock.login') in /Users/tim/repos/ionic-forms/tests/Controllers/login.controller.tests.js (line 12)
	/Users/tim/repos/ionic-forms/tests/Controllers/login.controller.tests.js:12:37
PhantomJS 2.1.1 (Mac OS X 0.0.0) LoginController #doLogin when the login is executed, if successful, should change state to my-dinners FAILED
	TypeError: undefined is not an object (evaluating 'stateMock.go') in /Users/tim/repos/ionic-forms/tests/Controllers/login.controller.tests.js (line 17)
	/Users/tim/repos/ionic-forms/tests/Controllers/login.controller.tests.js:17:33
PhantomJS 2.1.1 (Mac OS X 0.0.0) LoginController #doLogin when the login is executed, if unsuccessful, should show a popup FAILED
	TypeError: undefined is not an object (evaluating 'ionicPopupMock.alert') in /Users/tim/repos/ionic-forms/tests/Controllers/login.controller.tests.js (line 21)
	/Users/tim/repos/ionic-forms/tests/Controllers/login.controller.tests.js:21:38

PhantomJS 2.1.1 (Mac OS X 0.0.0) Dash Controller should have a scope variable defined FAILED
	TypeError: undefined is not a constructor (evaluating 'controller') in /Users/tim/repos/ionic-forms/tests/Controllers/dash.tests.js (line 4)
	createController@/Users/tim/repos/ionic-forms/tests/Controllers/dash.tests.js:4:30
	/Users/tim/repos/ionic-forms/tests/Controllers/dash.tests.js:29:38
PhantomJS 2.1.1 (Mac OS X 0.0.0) Dash Controller should have a user name FAILED
	TypeError: undefined is not a constructor (evaluating 'controller') in /Users/tim/repos/ionic-forms/tests/Controllers/dash.tests.js (line 4)
	createController@/Users/tim/repos/ionic-forms/tests/Controllers/dash.tests.js:4:30
	/Users/tim/repos/ionic-forms/tests/Controllers/dash.tests.js:36:38

PhantomJS 2.1.1 (Mac OS X 0.0.0): Executed 11 of 11 (7 FAILED) (0.009 secs / 0.034 secs)

All the failures above except the Dash controller tests, were due to the fact that we were importing the main module, but the dependencies were not configured in the karma config file.

The Dash controller is using a popup library now, so that too needs to be imported:
Dash Controller should have a scope variable defined FAILED
	Error: [$injector:unpr] Unknown provider: $ionicPopupProvider <- $ionicPopup

Trying this in the test also fails:
beforeEach(module('ionic'));
PhantomJS 2.1.1 (Mac OS X 0.0.0) Dash Controller should have a scope variable defined FAILED
	TypeError: undefined is not a constructor (evaluating 'controller') in /Users/tim/repos/ionic-forms/tests/Controllers/dash.tests.js (line 4)
	createController@/Users/tim/repos/ionic-forms/tests/Controllers/dash.tests.js:4:30
	/Users/tim/repos/ionic-forms/tests/Controllers/dash.tests.js:30:38

The function to create the constructor is causing this issue:
    createController = function() {
            return controller('DashCtrl', {
                $scope: scope,
                $ionicPopup: $ionicPopup,
                $state: $state
            });
        // TypeError: undefined is not a constructor (evaluating 'controller') in /Users/tim/angular/ionic/forms-testing/tests/Controllers/dash.tests.js (line 4)
    };

Without that, we are back to the error where scope is not defined.  This usually means that something is not being included in the conf file.  I heard this can help:

logLevel LOG_DEBUG in Karma

Now that's helpful!  We can see things like this now:

11 06 2016 21:41:44.717:WARN [watcher]: 
Pattern "/Users/tim/repos/ionic-forms/www/lib/angular-messages/angularmessages.js" 
does not match any file.
11 06 2016 21:41:44.723:WARN [watcher]: 
Pattern "/Users/tim/repos/ionic-forms/www/lib/angular-ui-router/angular-ui-router.js" 
does not match any file.

The first one was already being imported later, and the second one the path was wrong.
Maybe the warn level is more appropriate. Too many debug messages.
But after that, there are no more warn messages, but still the error:

Expected undefined to be defined.
	/Users/tim/repos/ionic-forms/tests/Controllers/dash.tests.js:39:34

and 

TypeError: undefined is not an object (evaluating 'scope.authorization') in /Users/tim/repos/ionic-forms/tests/Controllers/dash.tests.js (line 46)








