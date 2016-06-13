# Forms with Jasmine Tests

## Features

We use the [range slider](http://ionden.com/a/plugins/ion.rangeSlider/demo_advanced.html) with the dragging interval implementation.

We use ng-messages for validation messages.


## Unit Testing
With the help of [Unit Testing Your Ionic Framework App](http://mcgivery.com/unit-testing-ionic-app/) by Andrew McGivery, we are given a head start when there are few docs that help out with setting things up.  Almost as if no one out there is actually testing their Ionic apps at all.


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

Since the purpose of this repo is to practice making tests for all things Angular and Ionic, failing test due to setup are a big concern!
```
PhantomJS 2.1.1 (Mac OS X 0.0.0) Dash Controller should have a scope variable defined FAILED
	TypeError: undefined is not a constructor (evaluating 'controller') in /Users/tim/repos/ionic-forms/tests/Controllers/dash.tests.js (line 4)
	createController@/Users/tim/repos/ionic-forms/tests/Controllers/dash.tests.js:4:30
	/Users/tim/repos/ionic-forms/tests/Controllers/dash.tests.js:29:38
PhantomJS 2.1.1 (Mac OS X 0.0.0) Dash Controller should have a user name FAILED
	TypeError: undefined is not a constructor (evaluating 'controller') in /Users/tim/repos/ionic-forms/tests/Controllers/dash.tests.js (line 4)
	createController@/Users/tim/repos/ionic-forms/tests/Controllers/dash.tests.js:4:30
	/Users/tim/repos/ionic-forms/tests/Controllers/dash.tests.js:36:38

PhantomJS 2.1.1 (Mac OS X 0.0.0): Executed 11 of 11 (7 FAILED) (0.009 secs / 0.034 secs)
```

Other test set up failuers other than the Dash and login controller tests were due to the fact that we were importing the main module, but the dependencies were not configured in the karma config file.

The Dash controller is using a popup library now, so that too needs to be imported:
Dash Controller should have a scope variable defined FAILED
	Error: [$injector:unpr] Unknown provider: $ionicPopupProvider <- $ionicPopup

Trying this in the test also fails:
```
beforeEach(module('ionic'));
PhantomJS 2.1.1 (Mac OS X 0.0.0) Dash Controller should have a scope variable defined FAILED
	TypeError: undefined is not a constructor (evaluating 'controller') in /Users/tim/repos/ionic-forms/tests/Controllers/dash.tests.js (line 4)
	createController@/Users/tim/repos/ionic-forms/tests/Controllers/dash.tests.js:4:30
	/Users/tim/repos/ionic-forms/tests/Controllers/dash.tests.js:30:38
```

The function to create the constructor is causing this issue:
```
    createController = function() {
            return controller('DashCtrl', {
                $scope: scope,
                $ionicPopup: $ionicPopup,
                $state: $state
            });
        // TypeError: undefined is not a constructor (evaluating 'controller') in /Users/tim/angular/ionic/forms-testing/tests/Controllers/dash.tests.js (line 4)
    };
```

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

As it is now, we are still getting this error in the dash.tests.js:
```
Expected undefined to be defined.
```

Also, the mocks are not working in the login.controller.tests.js, so these have been commented out until attention can be paid to them.

### Slider configuration

values: [0,50000,100000,150000,200000,250000,300000,350000,400000,450000,500000,550000,600000,650000,700000,750000,800000,850000,900000,950000,1000000,1050000,1100000,1150000,1200000,1250000,1300000,1350000,1400000,1450000,1500000,1550000,1600000,1650000,1700000,1750000,1800000,1850000,1900000,1950000,2000000,2050000,2100000,2150000,2200000,2250000,2300000,2350000,2400000,2450000,2500000,2550000,2600000,2650000,2700000,2750000,2800000,2850000,2900000,2950000,3000000,3050000,3100000,3150000,3200000,3250000,3300000,3350000,3400000,3450000,3500000,3550000,3600000,3650000,3700000,3750000,3800000,3850000,3900000,3950000,4000000,4050000,4100000,4150000,4200000,4250000,4300000,4350000,4400000,4450000,4500000,4550000,4600000,4650000,4700000,4750000,4800000,4850000,4900000,4950000,5000000,5050000,5100000,5150000,5200000,5250000,5300000,5350000,5400000,5450000,5500000,5550000,5600000,5650000,5700000,5750000,5800000,5850000,5900000,5950000,6000000,6050000,6100000,6150000,6200000,6250000,6300000,6350000,6400000,6450000,6500000,6550000,6600000,6650000,6700000,6750000,6800000,6850000,6900000,6950000,7000000,7050000,7100000,7150000,7200000,7250000,7300000,7350000,7400000,7450000,7500000,7550000,7600000,7650000,7700000,7750000,7800000,7850000,7900000,7950000,8000000,8050000,8100000,8150000,8200000,8250000,8300000,8350000,8400000,8450000,8500000,8550000,8600000,8650000,8700000,8750000,8800000,8850000,8900000,8950000,9000000,9050000,9100000,9150000,9200000,9250000,9300000,9350000,9400000,9450000,9500000,9550000,9600000,9650000,9700000,9750000,9800000,9850000,9900000,9950000],
    
Tried an array like this to get the number of grid lines to increase, but it didn't work - the range was the entire bar.

Setting this caused the app to crash:

    grid_num: 50000,

That's because the grid_num is the number of numbers in the list, no the spacing between them.

