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


